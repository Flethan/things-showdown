// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
// Things

	{
		section: "Strategic Things",
		column: 3,
	},
	{
		name: "[Things] Random Strategic Singles",
		desc: `Randomized teams of level-balanced Things`,

		mod: 'gen8',
		team: 'randomGThing',
		ruleset: ['Obtainable Abilities', 'Obtainable Formes', 'Obtainable Misc', 'Things Only', 'One Infinity Only', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', 'No Nickname Clause', 'Dynamax Clause'],
	},
	{
		section: "Visible Things",
		column: 3,
	},
	{
		name: "[Things] Random Visible Singles",
		desc: `Randomized teams of level-balanced Things`,

		mod: 'gen8',
		team: 'randomThing',
		ruleset: ['Obtainable Abilities', 'Obtainable Formes', 'Obtainable Misc', 'Things Only', 'Visible Only', 'One Infinity Only', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', 'No Nickname Clause', 'Dynamax Clause'],
	},
	{
		name: "[Things] Random Visible Doubles",
		desc: `Randomized teams of level-balanced Things`,

		gameType: 'doubles',
		mod: 'gen8',
		team: 'randomThing',
		ruleset: ['Obtainable Abilities', 'Obtainable Formes', 'Obtainable Misc', 'Things Only', 'Visible Only', 'One Infinity Only', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', 'No Nickname Clause', 'Dynamax Clause'],
	},
	{
		name: "[Things] Random Visible Triples",
		desc: `Randomized teams of level-balanced Things`,

		gameType: 'triples',
		mod: 'gen8',
		team: 'randomThing',
		ruleset: ['Obtainable Abilities', 'Obtainable Formes', 'Obtainable Misc', 'Things Only', 'Visible Only', 'One Infinity Only', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', 'No Nickname Clause', 'Dynamax Clause'],
	},
	{
		name: "[Things] Visible Free-For-All Random Battle",

		mod: 'gen8',
		team: 'randomThing',
		gameType: 'freeforall',
		tournamentShow: false,
		rated: false,
		ruleset: ['Things Only', 'Species Clause', 'Visible Only', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Dynamax Clause'],
	},
	{
		name: "[Things] Visible Multi Random Battle",

		mod: 'gen8',
		team: 'randomThing',
		gameType: 'multi',
		searchShow: false,
		tournamentShow: false,
		rated: false,
		ruleset: [
			'Max Team Size = 3',
			'Things Only', 'Species Clause', 'Visible Only', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Dynamax Clause',
		],
	},


	{
		section: "Things",
		column: 1,
	},
	{
		name: "[Things] Singles",

		mod: 'gen8',
		ruleset: ['Obtainable Abilities', 'Obtainable Formes', 'Obtainable Misc', 'Things Only', 'One Infinity Only', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', 'Team Preview', 'Dynamax Clause'],
	},
	{
		name: "[Things] Doubles",

		gameType: 'doubles',
		mod: 'gen8',
		ruleset: ['Obtainable Abilities', 'Obtainable Formes', 'Obtainable Misc', 'Things Only', 'One Infinity Only', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', 'Team Preview', 'Dynamax Clause'],
	},
	{
		name: "[Things] Triples",

		gameType: 'triples',
		mod: 'gen8',
		ruleset: ['Obtainable Abilities', 'Obtainable Formes', 'Obtainable Misc', 'Things Only', 'One Infinity Only', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', 'Team Preview', 'Dynamax Clause'],
	},
	{
		name: "[Things] Random Singles",
		desc: `Randomized teams of level-balanced Things`,

		mod: 'gen8',
		team: 'randomThing',
		ruleset: ['Obtainable Formes', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause'],
	},
	{
		name: "[Things] Random Doubles",
		desc: `Randomized teams of level-balanced Things`,

		gameType: 'doubles',
		mod: 'gen8',
		team: 'randomThing',
		ruleset: ['Obtainable Formes', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause'],
	},
	{
		name: "[Things] Random Triples",
		desc: `Randomized teams of level-balanced Things`,

		gameType: 'triples',
		mod: 'gen8',
		team: 'randomThing',
		ruleset: ['Obtainable Formes', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause'],
	},
	{
		section: "Things Monotype",
	},
	{
		name: "[Things] Random Monotype Singles",
		desc: `Randomized teams of level-balanced Things`,

		mod: 'gen8',
		team: 'randomThing',
		ruleset: ['Obtainable Formes', 'Same Type Clause', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause'],
	},
	{
		name: "[Things] Random Monotype Doubles",
		desc: `Randomized teams of level-balanced Things`,

		gameType: 'doubles',
		mod: 'gen8',
		team: 'randomThing',
		ruleset: ['Obtainable Formes', 'Same Type Clause', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause'],
	},
	{
		name: "[Things] Random Monotype Triples",
		desc: `Randomized teams of level-balanced Things`,

		gameType: 'triples',
		mod: 'gen8',
		team: 'randomThing',
		ruleset: ['Obtainable Formes', 'Same Type Clause', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause'],
	},
	{
		section: "Things 4-Player",
		column: 1,
	},
	{
		name: "[Things] Free-For-All Battle",

		mod: 'gen8',
		gameType: 'freeforall',
		tournamentShow: false,
		rated: false,
		ruleset: ['Things Only', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Dynamax Clause'],
	},
	{
		name: "[Things] Multi Battle",

		mod: 'gen8',
		gameType: 'multi',
		searchShow: false,
		tournamentShow: false,
		rated: false,
		ruleset: [
			'Max Team Size = 3',
			'Things Only', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Dynamax Clause',
		],
	},
	{
		section: "Things 4-Player Random",
		column: 1,
	},
	{
		name: "[Things] Free-For-All Random Battle",

		mod: 'gen8',
		team: 'randomThing',
		gameType: 'freeforall',
		tournamentShow: false,
		rated: false,
		ruleset: ['Things Only', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Dynamax Clause'],
	},
	{
		name: "[Things] Multi Random Battle",

		mod: 'gen8',
		team: 'randomThing',
		gameType: 'multi',
		searchShow: false,
		tournamentShow: false,
		rated: false,
		ruleset: [
			'Max Team Size = 3',
			'Things Only', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Dynamax Clause',
		],
	},
	{
		name: "[Things] Monotype Free-For-All Random Battle",

		mod: 'gen8',
		team: 'randomThing',
		gameType: 'freeforall',
		tournamentShow: false,
		rated: false,
		ruleset: ['Things Only', 'Same Type Clause', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Dynamax Clause'],
	},
	{
		name: "[Things] Monotype Multi Random Battle",

		mod: 'gen8',
		team: 'randomThing',
		gameType: 'multi',
		searchShow: false,
		tournamentShow: false,
		rated: false,
		ruleset: [
			'Max Team Size = 3',
			'Things Only', 'Same Type Clause', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Dynamax Clause',
		],
	},
	{
		section: "Hackthings",
	},
	{
		name: "[Things] Hackthings",
		desc: `Randomized teams of level-balanced Things with any non-infinity Thing ability, and 1:1 odds for Thing or Pok&eacute;mon moves and item.`,

		mod: 'gen8',
		team: 'randomHThing',
		ruleset: ['Obtainable Formes', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause'],
	},
	{
		name: "[Things] Doubles Hackthings",
		desc: `Randomized teams of level-balanced Things with any non-infinity Thing ability, and 1:1 odds for Thing or Pok&eacute;mon moves and item.`,

		gameType: 'doubles',
		mod: 'gen8',
		team: 'randomHThing',
		ruleset: ['Obtainable Formes', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause'],
	},
	{
		name: "[Things] Triples Hackthings",
		desc: `Randomized teams of level-balanced Things with any non-infinity Thing ability, and 1:1 odds for Thing or Pok&eacute;mon moves and item.`,

		gameType: 'triples',
		mod: 'gen8',
		team: 'randomHThing',
		ruleset: ['Obtainable Formes', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause'],
	},
	{
		name: "[Things] Random Hackthings Free-For-All",

		mod: 'gen8',
		team: 'randomHThing',
		gameType: 'freeforall',
		tournamentShow: false,
		rated: false,
		ruleset: ['Things Only', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Dynamax Clause'],
	},
	{
		name: "[Things] Random Hackthings Multi",

		mod: 'gen8',
		team: 'randomHThing',
		gameType: 'multi',
		searchShow: false,
		tournamentShow: false,
		rated: false,
		ruleset: [
			'Max Team Size = 3',
			'Things Only', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Dynamax Clause',
		],
	},

	{
		section: "National Dex",
		column: 2,
	},
	{
		name: "[Gen 8] National Dex Doubles",

		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
		banlist: [
			'Alakazam-Mega', 'Arceus', 'Blastoise-Mega', 'Blaziken', 'Calyrex-Ice', 'Calyrex-Shadow', 'Cinderace', 'Darkrai', 'Darmanitan-Galar',
			'Deoxys-Attack', 'Deoxys-Base', 'Deoxys-Speed', 'Dialga', 'Dracovish', 'Dragapult', 'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina',
			'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lucario-Mega',
			'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane',
			'Necrozma-Ultra', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Spectrier', 'Tornadus-Therian',
			'Urshifu-Base', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base', 'Zygarde-Complete',
			'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass',
		],
	},
	{
		name: "[Gen 8] National Dex Triples",

		mod: 'gen8',
		gameType: 'triples',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
		banlist: [
			'Alakazam-Mega', 'Arceus', 'Blastoise-Mega', 'Blaziken', 'Calyrex-Ice', 'Calyrex-Shadow', 'Cinderace', 'Darkrai', 'Darmanitan-Galar',
			'Deoxys-Attack', 'Deoxys-Base', 'Deoxys-Speed', 'Dialga', 'Dracovish', 'Dragapult', 'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina',
			'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lucario-Mega',
			'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Metagross-Mega', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane',
			'Necrozma-Ultra', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo', 'Spectrier', 'Tornadus-Therian',
			'Urshifu-Base', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base', 'Zygarde-Complete',
			'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass',
		],
	},
	{
		name: "[Gen 8] Random National Dex",

		mod: 'gen8',
		team: 'random',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 8] Random National Dex Doubles",

		mod: 'gen8',
		team: 'random',
		gameType: 'doubles',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 8] Random National Dex Triples",

		mod: 'gen8',
		team: 'random',
		gameType: 'triples',
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 8] National Dex Monotype Doubles",

		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Standard NatDex', 'Same Type Clause', 'Species Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
		banlist: [
			'Arceus', 'Blastoise-Mega', 'Blaziken', 'Calyrex-Ice', 'Calyrex-Shadow', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Dracovish', 'Dragapult',
			'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Kangaskhan-Mega', 'Kartana', 'Kyogre',
			'Kyurem-Black', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Mawile-Mega', 'Medicham-Mega', 'Metagross-Mega', 'Mewtwo',
			'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo',
			'Spectrier', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base',
			'Battle Bond', 'Moody', 'Power Construct', 'Shadow Tag', 'Damp Rock', 'Smooth Rock', 'Terrain Extender', 'Baton Pass',
		],
	},
	{
		name: "[Gen 8] National Dex Monotype Triples",

		mod: 'gen8',
		gameType: 'triples',
		ruleset: ['Standard NatDex', 'Same Type Clause', 'Species Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
		banlist: [
			'Arceus', 'Blastoise-Mega', 'Blaziken', 'Calyrex-Ice', 'Calyrex-Shadow', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Dracovish', 'Dragapult',
			'Eternatus', 'Genesect', 'Gengar-Mega', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Hoopa-Unbound', 'Kangaskhan-Mega', 'Kartana', 'Kyogre',
			'Kyurem-Black', 'Kyurem-White', 'Lucario-Mega', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Mawile-Mega', 'Medicham-Mega', 'Metagross-Mega', 'Mewtwo',
			'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky', 'Solgaleo',
			'Spectrier', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base',
			'Battle Bond', 'Moody', 'Power Construct', 'Shadow Tag', 'Damp Rock', 'Smooth Rock', 'Terrain Extender', 'Baton Pass',
		],
	},
	{
		name: "[Gen 8] Random National Dex Monotype",

		mod: 'gen8',
		team: 'random',
		ruleset: ['Standard NatDex', 'Same Type Clause', 'Species Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 8] Random National Dex Monotype Doubles",

		mod: 'gen8',
		team: 'random',
		gameType: 'doubles',
		ruleset: ['Standard NatDex', 'Same Type Clause', 'Species Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 8] Random National Dex Monotype Triples",

		mod: 'gen8',
		team: 'random',
		gameType: 'triples',
		ruleset: ['Standard NatDex', 'Same Type Clause', 'Species Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Dynamax Clause', 'Sleep Clause Mod'],
	},

	{
		section: "Randomized Metas",
		column: 2,
	},
	{
		name: "[Gen 8] Doubles Monotype Random Battle",

		mod: 'gen8',
		team: 'random',
		gameType: 'doubles',
		ruleset: ['Obtainable', 'Same Type Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 8] Triples Monotype Random Battle",

		mod: 'gen8',
		team: 'random',
		gameType: 'triples',
		ruleset: ['Obtainable', 'Same Type Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
];

