const fs = require('fs');

const crcTable = [];
let c;
for (let n = 0; n < 256; n++) {
	c = n;
	for (let k = 0; k < 8; k++) {
		c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
	}
	crcTable[n] = c;
}

function crc32(buf) {
	let crc = 0xFFFFFFFF;

	for (let i = 0; i < buf.length; i++) {
		crc = crcTable[(crc ^ buf[i]) & 0xFF] ^ (crc >>> 8);
	}

	return (crc ^ 0xFFFFFFFF) >>> 0;
};

function B64ToIA(string) {
	return Uint8Array.from(Buffer.from(string, 'base64'));
};

function IAToB64(intArray) {
	return Buffer.from(intArray).toString('base64');
};

function parseColor(string) {
	if (!/^#?([0-9a-fA-F]{2}){3,4}$/.test(string)) return false;
	string = string.replace("#", "");
	return [
		parseInt(string.substr(0, 2), 16),
		parseInt(string.substr(2, 2), 16),
		parseInt(string.substr(4, 2), 16),
	];
};

function RGBToHSL(r, g, b) {
	r /= 255;
	g /= 255;
	b /= 255;

	let cmin = Math.min(r, g, b),
		cmax = Math.max(r, g, b),
		delta = cmax - cmin,
		h = 0,
		s = 0,
		l = 0;

	if (delta == 0) h = 0;
	else if (cmax == r) h = ((g - b) / delta) % 6;
	else if (cmax == g) h = (b - r) / delta + 2;
	else h = (r - g) / delta + 4;

	h = Math.round(h * 60);
	if (h < 0) h += 360;

	l = (cmax + cmin) / 2;

	s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

	return [h, s, l];
};

function HSLtoRGB(h, s, l) {
	let c = (1 - Math.abs(2 * l - 1)) * s,
		x = c * (1 - Math.abs((h / 60) % 2 - 1)),
		m = l - c / 2,
		r = 0,
		g = 0,
		b = 0;

	if (0 <= h && h < 60) {
		r = c; g = x; b = 0;
	} else if (60 <= h && h < 120) {
		r = x; g = c; b = 0;
	} else if (120 <= h && h < 180) {
		r = 0; g = c; b = x;
	} else if (180 <= h && h < 240) {
		r = 0; g = x; b = c;
	} else if (240 <= h && h < 300) {
		r = x; g = 0; b = c;
	} else if (300 <= h && h < 360) {
		r = c; g = 0; b = x;
	}
	r = Math.round((r + m) * 255);
	g = Math.round((g + m) * 255);
	b = Math.round((b + m) * 255);

	return [r, g, b];

}

function HSLdelta(hsl1, hsl2) {
	const dh = (hsl2[0] - hsl1[0]) % 360;

	let ds = 0;
	if (hsl2[1] > hsl1[1]) {
		ds = (hsl2[1] - hsl1[1]) / (1 - hsl1[1]) || 0;
	} else {
		ds = -(hsl1[1] - hsl2[1]) / hsl1[1] || 0;
	}

	let dl = 0;
	if (hsl2[2] > hsl1[2]) {
		dl = (hsl2[2] - hsl1[2]) / (1 - hsl1[2]) || 0;
	} else {
		dl = -(hsl1[2] - hsl2[2]) / hsl1[2] || 0;
	}

	return [dh, ds, dl];
};

function applyDelta(hsl, delta) {
	const dh = (hsl[0] + delta[0]) % 360;

	let ds = hsl[1];
	if (delta[1] > 0) {
		ds = hsl[1] + ((1 - hsl[1]) * delta[1]);
	} else {
		ds = hsl[1] + (hsl[1] * delta[1]);
	}

	let dl = hsl[2];
	if (delta[2] > 0) {
		dl = hsl[2] + ((1 - hsl[2]) * delta[2]);
	} else {
		dl = hsl[2] + (hsl[2] * delta[2]);
	}

	return [dh, ds, dl];
};

function constructReplaceObj(calibration, palette) {
	const replaceObj = {};
	for (let [index, group] of calibration.entries()) {
		if (!(index < palette.length)) break;

		let color = parseColor(palette[index]);
		if (!color) break;
		color = RGBToHSL(...color);

		let groupLead = parseColor(group[0]);
		if (!groupLead) continue;
		groupLead = RGBToHSL(...groupLead);

		const delta = HSLdelta(groupLead, color);

		for (let unit of group) {
			const unitColor = parseColor(unit);
			if (!unitColor) continue;
			const unitNew = HSLtoRGB(...applyDelta(RGBToHSL(...unitColor), delta));

			replaceObj[unitColor.reduce((a, b) => b + (a << 8))] = unitNew;
		}
	}
	return replaceObj;
}

function replaceB64(imgB64, replaceObj) {
	const imgIA = B64ToIA(imgB64);
	let plteIndex = 0;
	let plteLength = 0;
	for (let i = 0; i < imgIA.length; i++) {
		if (imgIA[i] === 0x50 && imgIA[i + 1] === 0x4C && imgIA[i + 2] === 0x54 && imgIA[i + 3] === 0x45) {
			plteIndex = i;
			plteLength = (
				(imgIA[i - 4] << 24) +
				(imgIA[i - 3] << 16) +
				(imgIA[i - 2] << 8) +
				imgIA[i - 1]
			);
		}
	}

	for (let i = 0; i < ((plteLength) / 3); i++) {
		const slice = imgIA.slice(plteIndex + 4 + (i * 3), plteIndex + 4 + (i * 3) + 3)
			.reduce((a, b) => b + (a << 8));
		const replace = replaceObj[slice];
		if (!replace) continue;

		imgIA[plteIndex + 4 + (i * 3)] = replace[0];
		imgIA[plteIndex + 4 + (i * 3) + 1] = replace[1];
		imgIA[plteIndex + 4 + (i * 3) + 2] = replace[2];
	}

	const newCrc = crc32(imgIA.slice(plteIndex, plteIndex + plteLength + 4));
	imgIA[plteIndex + 4 + plteLength] = (newCrc & 0xFF000000) >> 24;
	imgIA[plteIndex + 4 + plteLength + 1] = (newCrc & 0x00FF0000) >> 16;
	imgIA[plteIndex + 4 + plteLength + 2] = (newCrc & 0x0000FF00) >> 8;
	imgIA[plteIndex + 4 + plteLength + 3] = newCrc & 0x000000FF;

	return IAToB64(imgIA);
}


const pathImg = process.argv[2];
if (!fs.existsSync(`palette.json`)) {
	console.log("Created palette.json with defaults.");
	const write = {
		"palette": [
			"#DC5A50",
			"#333634",
			"#b4b4f6",
			"#FF3838",
			"#200f0f"
		]
	}
	fs.writeFileSync(`palette.json`, JSON.stringify(write));
} else if (!(pathImg && fs.existsSync(`./gen5/${pathImg}.png`))) {
	console.log("E.g. usage: `node swap undulux`");
	process.exit(1);
}

const imgB64 = fs.readFileSync(`${pathImg}.png`, { encoding: 'base64' });
const paletteFile = JSON.parse(fs.readFileSync(`palette.json`, 'utf8'));
const palette = paletteFile["palette"];
const palettes = JSON.parse(fs.readFileSync('palettes.json', 'utf8'));
const calibration = palettes[pathImg];

const replaceObj = constructReplaceObj(calibration, palette);
const newB64 = replaceB64(imgB64, replaceObj);

fs.writeFileSync(`./swapped.png`, newB64, { encoding: 'base64' });