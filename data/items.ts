export const Items: {[itemid: string]: ItemData} = {
// NEW STUFF

	jellytreat: {
		name: "Jelly Treat",
		spritenum: 770,
		fling: {
			basePower: 10,
		},
		consume: {
			healPercent: 50,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Arthropod') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: -220,
		gen: 8,
		isNonstandard: "Thing",
	},
	extradirtydirt: {
		name: "Extra Dirty Dirt",
		spritenum: 771,
		fling: {
			basePower: 10,
		},
		consume: {
			healPercent: 15,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Dirt') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: -221,
		gen: 8,
		isNonstandard: "Thing",
	},
	toofarjuice: {
		name: "Too Far Juice",
		spritenum: 772,
		fling: {
			basePower: 40,
		},
		consume: {
			healPercent: 50,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Far') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: -222,
		gen: 8,
		isNonstandard: "Thing",
	},
	fishscale: {
		name: "Fish Scale",
		spritenum: 773,
		fling: {
			basePower: 20,
		},
		consume: {
			healPercent: 20,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Fish') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: -223,
		gen: 8,
		isNonstandard: "Thing",
	},
	greens: {
		name: "Greens",
		spritenum: 774,
		fling: {
			basePower: 10,
		},
		consume: {
			healPercent: 20,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Green') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: -224,
		gen: 8,
		isNonstandard: "Thing",
	},
	hdictionary: {
		name: "H Dictionary",
		spritenum: 775,
		fling: {
			basePower: 40,
		},
		consume: {
			healPercent: 15,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'H') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: -225,
		gen: 8,
		isNonstandard: "Thing",
	},
	hairbrush: {
		name: "Hairbrush",
		spritenum: 776,
		fling: {
			basePower: 20,
		},
		consume: {
			healPercent: 15,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Hair') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: -226,
		gen: 8,
		isNonstandard: "Thing",
	},
	machineoil: {
		name: "Machine Oil",
		spritenum: 777,
		fling: {
			basePower: 30,
		},
		consume: {
			healPercent: 20,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Industrial') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: -227,
		gen: 8,
		isNonstandard: "Thing",
	},
	spraybottle: {
		name: "Spray Bottle",
		spritenum: 778,
		fling: {
			basePower: 20,
		},
		consume: {
			healPercent: 15,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Liquid') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: -228,
		gen: 8,
		isNonstandard: "Thing",
	},
	tuningfork: {
		name: "Tuning Fork",
		spritenum: 779,
		fling: {
			basePower: 30,
		},
		consume: {
			healPercent: 15,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Music') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: -229,
		gen: 8,
		isNonstandard: "Thing",
	},
	littleshadow: {
		name: "Little Shadow",
		spritenum: 780,
		fling: {
			basePower: 10,
		},
		consume: {
			healPercent: 20,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Night') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: -230,
		gen: 8,
		isNonstandard: "Thing",
	},
	nothing: {
		name: "Nothing",
		spritenum: 781,
		fling: {
			basePower: 0,
		},
		consume: {

		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'No') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: -231,
		gen: 8,
		isNonstandard: "Thing",
	},
	beaker: {
		name: "Beaker",
		spritenum: 782,
		fling: {
			basePower: 20,
		},
		consume: {
			healPercent: 15,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Science') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: -232,
		gen: 8,
		isNonstandard: "Thing",
	},
	rubberball: {
		name: "Rubber Ball",
		spritenum: 783,
		fling: {
			basePower: 30,
		},
		consume: {
			healPercent: 15,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Sport') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: -233,
		gen: 8,
		isNonstandard: "Thing",
	},
	whetstone: {
		name: "Whetstone",
		spritenum: 784,
		fling: {
			basePower: 50,
		},
		consume: {
			healPercent: 15,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Sword') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: -234,
		gen: 8,
		isNonstandard: "Thing",
	},
	thermometer: {
		name: "Thermometer",
		spritenum: 785,
		fling: {
			basePower: 20,
		},
		consume: {
			healPercent: 20,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Temperature') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: -235,
		gen: 8,
		isNonstandard: "Thing",
	},
	pocketwatch: {
		name: "Pocket Watch",
		spritenum: 786,
		fling: {
			basePower: 20,
		},
		consume: {
			healPercent: 33,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Time') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: -236,
		gen: 8,
		isNonstandard: "Thing",
	},
	barometer: {
		name: "Barometer",
		spritenum: 787,
		fling: {
			basePower: 20,
		},
		consume: {
			healPercent: 25,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Weather') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: -237,
		gen: 8,
		isNonstandard: "Thing",
	},
	yellowstuff: {
		name: "Yellow Stuff",
		spritenum: 788,
		fling: {
			basePower: 20,
		},
		consume: {
			healPercent: 50,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Yellow') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: -238,
		gen: 8,
		isNonstandard: "Thing",
	},
	everything: {
		name: "Everything",
		spritenum: 789,
		fling: {
			basePower: 20,
		},
		consume: {
			healPercent: 100,
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move && move.type === 'Infinity') {
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		num: -239,
		gen: 8,
		isNonstandard: "Thing",
	},

	environmentalaccord: {
		name: "Environmental Accord",
		spritenum: 790,
		fling: {
			basePower: 10,
		},
		consume: {
			healPercent: 20,
		},
		num: -240,
		gen: 8,
		isNonstandard: "Thing",
	},
	landscapingpermit: {
		name: "Landscaping Permit",
		spritenum: 791,
		fling: {
			basePower: 20,
		},
		consume: {
			healPercent: 20,
		},
		num: -241,
		gen: 8,
		isNonstandard: "Thing",
	},
	yellowsafetyvest: {
		name: "Yellow Safety Vest",
		spritenum: 792,
		fling: {
			basePower: 20,
		},
		consume: {
			healPercent: 15,
		},
		num: -242,
		gen: 8,
		// Hazard Immunity implemented in each hazard
		isNonstandard: "Thing",
	},

	nonslipshoes: {
		name: "Non-Slip Shoes",
		spritenum: 793,
		fling: {
			basePower: 10,
		},
		consume: {
			healPercent: 15,
		},
		onUpdate(pokemon) {
			if (pokemon.status === 'prone') {
				pokemon.cureStatus();
				pokemon.useItem();
			}
		},
		num: -243,
		gen: 8,
		isNonstandard: "Thing",
	},
	blindfold: {
		name: "Blindfold",
		spritenum: 794,
		fling: {
			basePower: 10,
		},
		consume: {
			healPercent: 15,
		},
		onStart(pokemon) {
			pokemon.trySetStatus('blinded', pokemon);
		},
		num: -244,
		gen: 8,
		isNonstandard: "Thing",
	},
	dimensionaltether: {
		name: "Dimensional Tether",
		spritenum: 795,
		fling: {
			basePower: 80,
		},
		consume: {
			healPercent: 40,
		},
		onUpdate(pokemon) {
			if (pokemon.status === 'banished') {
				pokemon.cureStatus();
				pokemon.useItem();
			}
		},
		num: -245,
		gen: 8,
		isNonstandard: "Thing",
	},
	pressurecapsule: {
		name: "Pressure Capsule",
		spritenum: 796,
		fling: {
			basePower: 100,
		},
		consume: {
			healPercent: 20,
		},
		// Pressurized immunity implemented in hazard
		num: -246,
		gen: 8,
		isNonstandard: "Thing",
	},
	prngmachine: {
		name: "pRNG Machine",
		spritenum: 797,
		fling: {
			basePower: 90,
		},
		consume: {
			healPercent: 33,
		},
		num: -247,
		gen: 8,
		isNonstandard: "Thing",
	},
	knife: {
		name: "Knife",
		spritenum: 798,
		fling: {
			basePower: 120,
			volatileStatus: 'wounded',
		},
		consume: {
			healPercent: 15,
		},
		onModifyMovePriority: -1,
		onModifyMove(move) {
			if (move.category !== "Status") {
				if (!move || !move.flags['contact'] || move.target === 'self') return;
				if (!move.secondaries) {
					move.secondaries = [];
				}
				move.secondaries.push({
					chance: 10,
					status: 'wounded',
				});
			}
		},
		num: -248,
		gen: 8,
		isNonstandard: "Thing",
	},

	rechargeableshoes: {
		onStart(pokemon) {
			pokemon.removeVolatile('rechargeableshoes');
			if (pokemon.activeTurns && (pokemon.moveThisTurnResult !== undefined || !this.queue.willMove(pokemon))) {
				pokemon.addVolatile('rechargeableshoes');
			}
		},
		onBeforeMovePriority: 9,
		onBeforeMove(pokemon) {
			if (pokemon.removeVolatile('rechargeableshoes')) {
				this.add('cant', pokemon, 'item: Rechargeable Shoes');
				return false;
			}
			pokemon.addVolatile('rechargeableshoes');
		},
		onFractionalPriorityPriority: -2,
		onFractionalPriority(priority, pokemon) {
			this.add('-activate', pokemon, 'item: Rechargeable Shoes');
			return 0.1;
		},
		name: "Rechargeable Shoes",
		spritenum: 799,
		fling: {
			basePower: 60,
		},
		consume: {
			healPercent: 20,
		},
		num: -249,
		gen: 8,
		isNonstandard: "Thing",
	},
	fishbait: {
		onFoeRedirectTargetPriority: 1,
		onFoeRedirectTarget(target, source, source2, move) {
			if (source.hasType('Fish') && !this.effectState.target.isSkyDropped() && this.validTarget(this.effectState.target, source, move.target)) {
				this.add('-activate', this.effectState.target, 'item: Fish Bait');
				if (move.smartTarget) move.smartTarget = false;
				this.debug("Fish Bait redirected target of move");
				return this.effectState.target;
			}
		},
		name: "Fish Bait",
		spritenum: 800,
		fling: {
			basePower: 40,
		},
		consume: {
			healPercent: 25,
		},
		num: -250,
		gen: 8,
		isNonstandard: "Thing",
	},
	bugbomb: {
		name: "Bug Bomb",
		spritenum: 801,
		fling: {
			basePower: 40,
		},
		consume: {
			healPercent: 33,
		},
		onDamagingHit(damage, target, source, move) {
			if (!move.damage && !move.damageCallback) {
				target.useItem();
				this.field.setWeather('locustswarm');
			}
		},
		num: -251,
		gen: 8,
		isNonstandard: "Thing",
	},
	gun: {
		name: "Gun",
		spritenum: 802,
		fling: {
			basePower: 40,
		},
		consume: {
			healPercent: 75,
		},
		onStart(pokemon) {
			this.actions.useMove('shoot', pokemon);
			pokemon.useItem();
		},
		num: -252,
		gen: 8,
		isNonstandard: "Thing",
	},
	pocketradar: {
		name: "Pocket Radar",
		spritenum: 803,
		fling: {
			basePower: 40,
		},
		consume: {
			healPercent: 25,
		},
		onAnyModifyBoost(boosts, pokemon) {
			const user = this.effectState.target;
			if (user === pokemon) return;
			if (user === this.activePokemon && pokemon === this.activeTarget) {
				if (boosts['evasion'] && boosts['evasion'] > 0) boosts['evasion'] = 0;
			}
		},
		num: -253,
		gen: 8,
		isNonstandard: "Thing",
	},
	genergy: {
		name: "G Energy",
		spritenum: 804,
		fling: {
			basePower: 100,
		},
		consume: {
			healPercent: 100,
		},
		onStart(pokemon) {
			pokemon.setAbility('colossal');
			pokemon.useItem();
		},
		num: -254,
		gen: 8,
		isNonstandard: "Thing",
	},
	eyeball: {
		name: "Eyeball",
		spritenum: 805,
		fling: {
			basePower: 20,
		},
		consume: {
			healPercent: 60,
		},
		// handled in conditions.ts
		num: -255,
		gen: 8,
		isNonstandard: "Thing",
	},
	greenshirt: {
		name: "Green Shirt",
		spritenum: 806,
		fling: {
			basePower: 10,
		},
		consume: {
			healPercent: 15,
		},
		onStart(pokemon) {
			pokemon.addType('Green');
			this.add('-start', pokemon, 'typeadd', 'Green', '[from] item: Green Shirt');
		},
		onResidual(pokemon) {
			if (pokemon.addedType !== 'Green') {
				pokemon.useItem();
			}
		},
		num: -256,
		gen: 8,
		isNonstandard: "Thing",
	},
	yellowshirt: {
		name: "Yellow Shirt",
		spritenum: 807,
		fling: {
			basePower: 10,
		},
		consume: {
			healPercent: 15,
		},
		onStart(pokemon) {
			pokemon.addType('Yellow');
			this.add('-start', pokemon, 'typeadd', 'Yellow', '[from] item: Yellow Shirt');
		},
		onResidual(pokemon) {
			if (pokemon.addedType !== 'Yellow') {
				pokemon.useItem();
			}
		},
		num: -257,
		gen: 8,
		isNonstandard: "Thing",
	},
	antimatter: {
		name: "Antimatter",
		spritenum: 808,
		fling: {
			basePower: 60,
		},
		consume: {
			damagePercent: 25,
		},
		onNegateImmunity: false,
		onEffectivenessPriority: 1,
		onEffectiveness(typeMod, target, type, move) {
			if (move && !this.dex.getImmunity(move, type)) return 1;
			return -typeMod;
		},
		onModifyMovePriority: -5,
		onModifyMove(move) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				for (const type in this.dex.data.TypeChart) {
					move.ignoreImmunity[type] = true;
				}
			}
		},
		num: -258,
		gen: 8,
		isNonstandard: "Thing",
	},
	manacrystals: {
		name: "Mana Crystals",
		spritenum: 812,
		consume: {
			healPercent: 100,
		},
		onUpdate(pokemon) {
			if (!pokemon.hp) return;
			if (pokemon.moveSlots.some(move => move.pp === 0)) {
				const moveSlot = pokemon.moveSlots.find(move => move.pp === 0) ||
				pokemon.moveSlots.find(move => move.pp < move.maxpp);
				if (!moveSlot) return;
				moveSlot.pp = moveSlot.maxpp;
				this.add('-activate', pokemon, 'item: Mana Crystals', moveSlot.move, '[consumed]');

				pokemon.useItem();
			}
		},
		num: -259,
		gen: 8,
		isNonstandard: "Thing",
	},
	expresspass: {
		name: "Express Pass",
		spritenum: 810,
		consume: {
			healPercent: 15,
		},
		// functionality added in battle.ts
		num: -260,
		gen: 8,
		isNonstandard: "Thing",
	},
	bioweapon: {
		name: "Bioweapon",
		spritenum: 811,
		consume: {
			healPercent: 40,
		},
		onSourceAfterHit(source, target, move) {
			console.log('bioweapon');
			if (target.trySetStatus('infected')) {
				console.log('infecting');
				// reroll virulence values, with odds of being stronger
				target.statusState.infection.damageChance = this.random(50, 100);
				target.statusState.infection.damageFraction = this.random(2, 8);
				source.useItem();
			}
		},
		num: -261,
		gen: 8,
		isNonstandard: "Thing",
	},
	cowboyhat: {
		name: "Cowboy Hat",
		spritenum: 814,
		consume: {
			healPercent: 50,
		},
		// Implemented elsewhere
		num: -262,
		gen: 8,
		isNonstandard: "Thing",
	},
	emptycapsule: {
		name: "Empty Capsule",
		spritenum: 813,
		consume: {

		},
		// Implemented elsewhere
		num: -263,
		gen: 8,
		isNonstandard: "Thing",
	},
	funnyjuice: {
		name: "Funny Juice",
		spritenum: 815,
		consume: {
			randomPercent: true,
		},
		onTryHit(target, source, move) {
			this.effectState.targeted = true;
		},
		onResidual(pokemon) {
			if (!this.effectState.targeted) {
				this.boost({evasion: 1});
			}
			this.effectState.targeted = false;
		},
		num: -264,
		gen: 8,
		isNonstandard: "Thing",
	},
	enchantedmirror: {
		name: "Enchanted Mirror",
		spritenum: 816,
		consume: {
			healPercent: 25,
		},
		onAfterSetStatus(status, target, source, effect) {
			for (const foe of target.foes()) {
				if (!foe?.isActive || foe === target) continue;
				this.add('-activate', target, 'item: Enchanted Mirror');
				// Hack to make status-prevention abilities think Synchronize is a status move
				// and show messages when activating against it.
				foe.trySetStatus(status, target, {status: status.id, id: 'enchantedmirror'} as Effect);
			}
			for (const ally of target.allies()) {
				if (!ally?.isActive || ally === target) continue;
				this.add('-activate', target, 'item: Enchanted Mirror');
				// Hack to make status-prevention abilities think Synchronize is a status move
				// and show messages when activating against it.
				ally.trySetStatus(status, target, {status: status.id, id: 'enchantedmirror'} as Effect);
			}
		},
		num: -265,
		gen: 8,
		isNonstandard: "Thing",
	},
	trackingdevice: {
		name: "Tracking Device",
		spritenum: 817,
		consume: {
			healPercent: 20,
		},
		onAnyInvulnerabilityPriority: 1,
		onAnyInvulnerability(target, source, move) {
			if (move && (target === this.effectState.target)) return 0;
		},
		onAnyAccuracy(accuracy, target, source, move) {
			if (move && (target === this.effectState.target)) {
				return true;
			}
			return accuracy;
		},
		num: -266,
		gen: 8,
		isNonstandard: "Thing",
	},
	slowsuit: {
		name: "Slow Suit",
		spritenum: 818,
		consume: {
			healPercent: 40,
		},
		onFractionalPriority: -0.1,
		num: -267,
		gen: 8,
		isNonstandard: "Thing",
	},
	glue: {
		name: "Glue",
		spritenum: 819,
		consume: {
			healPercent: 20,
		},
		onDragOut(pokemon) {
			this.add('-activate', pokemon, 'item: Glue');
			return null;
		},
		num: -268,
		gen: 8,
		isNonstandard: "Thing",
	},
	stuffedanimal: {
		name: "Stuffed Animal",
		spritenum: 820,
		consume: {
			healPercent: 33,
		},
		onTryAddVolatile(status, pokemon) {
			if (status.id === 'flinch') {
				this.add('-activate', pokemon, 'item: Stuffed Animal');
				return null;
			}
		},
		num: -269,
		gen: 8,
		isNonstandard: "Thing",
	},
	magicglasses: {
		name: "Magic Glasses",
		spritenum: 821,
		consume: {
			healPercent: 75,
		},
		onAfterBoost(boost, target, source, effect) {
			if (!boost.accuracy) {
				this.boost({accuracy: 1}, target, target, null, true);
			}
		},
		num: -270,
		gen: 8,
		isNonstandard: "Thing",
	},
	bandage: {
		name: "Bandage",
		spritenum: 822,
		consume: {
			healPercent: 50,
		},
		onUpdate(pokemon) {
			if (pokemon.status === 'wounded') {
				pokemon.cureStatus();
				pokemon.useItem();
			}
		},
		num: -271,
		gen: 8,
		isNonstandard: "Thing",
	},
	eyedrops: {
		name: "Eye Drops",
		spritenum: 823,
		consume: {
			healPercent: 50,
		},
		onUpdate(pokemon) {
			if (pokemon.status === 'blinded') {
				pokemon.cureStatus();
				pokemon.useItem();
			}
		},
		num: -272,
		gen: 8,
		isNonstandard: "Thing",
	},
	infinitycrystal: {
		name: "Infinity Crystal",
		spritenum: 824,
		consume: {
			healPercent: 25,
		},
		onAfterMega(pokemon) {
			const symbolType = this.dex.species.get(pokemon.species.id).symbolForme;
			if (symbolType === 'Infinity') {
				let statName = 'atk';
				let bestStat = 0;
				let s: StatIDExceptHP;
				for (s in pokemon.storedStats) {
					if (pokemon.storedStats[s] > bestStat) {
						statName = s;
						bestStat = pokemon.storedStats[s];
					}
				}
				this.boost({[statName]: 1}, pokemon);
			}
		},
		num: -273,
		gen: 8,
		isNonstandard: "Thing",
	},
	elementcrystal: {
		name: "Element Crystal",
		spritenum: 825,
		consume: {
			healPercent: 25,
		},
		onAfterMega(pokemon) {
			const pokeData = this.dex.species.get(pokemon.species.id);
			const symbolType = pokeData.symbolForme;
			const eleTypes = pokeData.elementTypes;
			if (symbolType === 'Element' && eleTypes) {
				if (!pokemon.addType(eleTypes[0])) return false;
				this.add('-start', pokemon, 'typeadd', eleTypes[0], '[from] item: Element Crystal');
			}
		},
		num: -274,
		gen: 8,
		isNonstandard: "Thing",
	},
	mucrystal: {
		name: "Mu Crystal",
		spritenum: 826,
		consume: {
			healPercent: 25,
		},
		onAfterMega(pokemon) {
			const pokeData = this.dex.species.get(pokemon.species.id);
			const symbolType = pokeData.symbolForme;
			if (symbolType === 'Mu' && pokemon.moveSlots[4]) {
				const muMove = pokemon.moveSlots[4].id;
				this.actions.useMove(muMove, pokemon);
			}
		},
		num: -275,
		gen: 8,
		isNonstandard: "Thing",
	},
	nullcrystal: {
		name: "Null Crystal",
		spritenum: 827,
		consume: {
			healPercent: 25,
		},
		onAfterMega(pokemon) {
			const pokeData = this.dex.species.get(pokemon.species.id);
			const symbolType = pokeData.symbolForme;
			if (symbolType === 'Null') {
				pokemon.heal(pokemon.maxhp);
			}
		},
		num: -276,
		gen: 8,
		isNonstandard: "Thing",
	},
	plainstick: {
		name: "Plain Stick",
		spritenum: 828,
		consume: {
			healPercent: 10,
		},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
			return pokemon.getStat('atk', false, false) + 10;
		},
		num: -277,
		gen: 8,
		isNonstandard: "Thing",
	},
	planestick: {
		name: "Plane Stick",
		spritenum: 829,
		consume: {
			healPercent: 33,
		},
		onBeforeMovePriority: 1,
		onBeforeMove(source, target, move) {
			 if (['normal', 'randomNormal', 'any'].includes(move.target)) {
				move.target = 'allAdjacentFoes';
			 }
		},
		onBasePowerPriority: 15,
		onBasePower(basePower, user, target, move) {
			if (move) {
				return this.chainModify(0.75);
			}
		},
		num: -278,
		gen: 8,
		isNonstandard: "Thing",
	},
	potionofupdog: {
		name: "Potion of Updog",
		spritenum: 830,
		fling: {
			basePower: 40,
		},
		consume: {
			healPercent: 100,
		},
		onStart(pokemon) {
			pokemon.addVolatile('updog');
			pokemon.useItem();
		},
		num: -279,
		gen: 8,
		isNonstandard: "Thing",
	},
	heftyshield: {
		name: "Hefty Shield",
		spritenum: 831,
		consume: {
			healPercent: 25,
		},
		onModifyDefPriority: 1,
		onModifyDef(def, pokemon) {
			console.log(pokemon.moveThisTurn);
			if (pokemon.moveThisTurn) return this.chainModify(1.5);
		},
		num: -280,
		gen: 8,
		isNonstandard: "Thing",
	},
	heftycloak: {
		name: "Hefty Cloak",
		spritenum: 832,
		consume: {
			healPercent: 25,
		},
		onModifySpDPriority: 1,
		onModifySpD(spd, pokemon) {
			if (pokemon.moveThisTurn) return this.chainModify(1.5);
		},
		num: -281,
		gen: 8,
		isNonstandard: "Thing",
	},
	heftygloves: {
		name: "Hefty Gloves",
		spritenum: 833,
		consume: {
			healPercent: 25,
		},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
			for (const foe of pokemon.foes()) {
				if (foe !== pokemon && !foe.moveThisTurn) return;
			}
			for (const ally of pokemon.allies()) {
				if (ally !== pokemon && !ally.moveThisTurn) return;
			}
			return this.chainModify(1.5);
		},
		num: -282,
		gen: 8,
		isNonstandard: "Thing",
	},
	heftygoggles: {
		name: "Hefty Goggles",
		spritenum: 834,
		consume: {
			healPercent: 25,
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, pokemon) {
			for (const foe of pokemon.foes()) {
				if (foe !== pokemon && !foe.moveThisTurn) return;
			}
			for (const ally of pokemon.allies()) {
				if (ally !== pokemon && !ally.moveThisTurn) return;
			}
			return this.chainModify(1.5);
		},
		num: -283,
		gen: 8,
		isNonstandard: "Thing",
	},
	psychoticsandals: {
		name: "Psychotic Sandals",
		spritenum: 835,
		consume: {
			healPercent: 50,
		},
		onBeforeTurn(pokemon) {
			const action = this.queue.willMove(pokemon);
			if (action) {
				const moves = pokemon.moveSlots;
				const newMove = this.sample(moves);

				action.move = this.dex.moves.get(newMove.move);
				action.moveid = newMove.id;
				this.queue.changeAction(pokemon, action);
			}
		},
		onModifySpe(spe, pokemon) {
			return this.chainModify(2);
		},
		num: -284,
		gen: 8,
		isNonstandard: "Thing",
	},
	slipshoes: {
		name: "Slip Shoes",
		spritenum: 836,
		consume: {
			healPercent: 25,
		},
		onStart(pokemon) {
			pokemon.setStatus('prone');
		},
		num: -285,
		gen: 8,
		isNonstandard: "Thing",
	},
	bottle: {
		name: "Bottle",
		spritenum: 837,
		consume: {
			healPercent: 10,
		},
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Liquid') {
				this.add('-activate', target, 'item: Bottle');
				const old_item = target.getItem();
				target.setItem('filledbottle');
				target.lastItem = old_item.id;
				target.usedItemThisTurn = true;
				return null;
			}
		},
		num: -286,
		gen: 8,
		isNonstandard: "Thing",
	},
	filledbottle: {
		name: "Filled Bottle",
		spritenum: 838,
		consume: {
			healPercent: 100,
		},
		num: -287,
		gen: 8,
		isNonstandard: "Thing",
	},
	teleportationdevice: {
		name: "Teleportation Device",
		spritenum: 839,
		fling: {
			basePower: 10,
		},
		consume: {
			healPercent: 25,
		},
		onUpdate(pokemon) {
			if (pokemon.status === 'distanced') {
				pokemon.cureStatus();
				pokemon.useItem();
			}
		},
		num: -288,
		gen: 8,
		isNonstandard: "Thing",
	},
	parka: {
		name: "Parka",
		spritenum: 840,
		consume: {
			healPercent: 40,
		},
		// implemented in condition
		num: -289,
		gen: 8,
		isNonstandard: "Thing",
	},

	arthropodiumz: {
		name: "Arthropodium Z",
		spritenum: 750,
		onPlate: 'Water',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Arthropod",
		forcedForme: "Arceus-Water",
		num: -200,
		gen: 7,
		isNonstandard: "Past",
	},
	dirtiumz: {
		name: "Dirtium Z",
		spritenum: 751,
		onPlate: 'Water',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Dirt",
		forcedForme: "Arceus-Water",
		num: -201,
		gen: 7,
		isNonstandard: "Past",
	},
	fariumz: {
		name: "Farium Z",
		spritenum: 752,
		onPlate: 'Water',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Far",
		forcedForme: "Arceus-Water",
		num: -202,
		gen: 7,
		isNonstandard: "Past",
	},
	fishiumz: {
		name: "Fishium Z",
		spritenum: 753,
		onPlate: 'Water',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Fish",
		forcedForme: "Arceus-Water",
		num: -203,
		gen: 7,
		isNonstandard: "Past",
	},
	greeniumz: {
		name: "Greenium Z",
		spritenum: 754,
		onPlate: 'Water',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Green",
		forcedForme: "Arceus-Water",
		num: -204,
		gen: 7,
		isNonstandard: "Past",
	},
	hiumz: {
		name: "Hium Z",
		spritenum: 755,
		onPlate: 'Water',
		onTakeItem: false,
		zMove: true,
		zMoveType: "H",
		forcedForme: "Arceus-Water",
		num: -205,
		gen: 7,
		isNonstandard: "Past",
	},
	hairiumz: {
		name: "Hairium Z",
		spritenum: 756,
		onPlate: 'Water',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Hair",
		forcedForme: "Arceus-Water",
		num: -206,
		gen: 7,
		isNonstandard: "Past",
	},
	industrialiumz: {
		name: "Industrialium Z",
		spritenum: 757,
		onPlate: 'Water',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Industrial",
		forcedForme: "Arceus-Water",
		num: -207,
		gen: 7,
		isNonstandard: "Past",
	},
	liquidiumz: {
		name: "Liquidium Z",
		spritenum: 758,
		onPlate: 'Water',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Liquid",
		forcedForme: "Arceus-Water",
		num: -208,
		gen: 7,
		isNonstandard: "Past",
	},
	musiciumz: {
		name: "Musicium Z",
		spritenum: 759,
		onPlate: 'Water',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Music",
		forcedForme: "Arceus-Water",
		num: -209,
		gen: 7,
		isNonstandard: "Past",
	},
	nightiumz: {
		name: "Nightium Z",
		spritenum: 760,
		onPlate: 'Water',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Night",
		forcedForme: "Arceus-Water",
		num: -210,
		gen: 7,
		isNonstandard: "Past",
	},
	noiumz: {
		name: "Noium Z",
		spritenum: 761,
		onPlate: 'Water',
		onTakeItem: false,
		zMove: true,
		zMoveType: "No",
		forcedForme: "Arceus-Water",
		num: -211,
		gen: 7,
		isNonstandard: "Past",
	},
	scienceiumz: {
		name: "Scienceium Z",
		spritenum: 762,
		onPlate: 'Water',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Science",
		forcedForme: "Arceus-Water",
		num: -212,
		gen: 7,
		isNonstandard: "Past",
	},
	sportiumz: {
		name: "Sportium Z",
		spritenum: 763,
		onPlate: 'Water',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Sport",
		forcedForme: "Arceus-Water",
		num: -213,
		gen: 7,
		isNonstandard: "Past",
	},
	swordiumz: {
		name: "Swordium Z",
		spritenum: 764,
		onPlate: 'Water',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Sword",
		forcedForme: "Arceus-Water",
		num: -214,
		gen: 7,
		isNonstandard: "Past",
	},
	temperatureiumz: {
		name: "Temperatureium Z",
		spritenum: 765,
		onPlate: 'Water',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Temperature",
		forcedForme: "Arceus-Water",
		num: -215,
		gen: 7,
		isNonstandard: "Past",
	},
	timeiumz: {
		name: "Timeium Z",
		spritenum: 766,
		onPlate: 'Water',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Time",
		forcedForme: "Arceus-Water",
		num: -216,
		gen: 7,
		isNonstandard: "Past",
	},
	weatheriumz: {
		name: "Weatherium Z",
		spritenum: 767,
		onPlate: 'Water',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Weather",
		forcedForme: "Arceus-Water",
		num: -217,
		gen: 7,
		isNonstandard: "Past",
	},
	yellowiumz: {
		name: "yellowium Z",
		spritenum: 768,
		onPlate: 'Water',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Yellow",
		forcedForme: "Arceus-Water",
		num: -218,
		gen: 7,
		isNonstandard: "Past",
	},
	infinityiumz: {
		name: "Infinityium Z",
		spritenum: 769,
		onPlate: 'Water',
		onTakeItem: false,
		zMove: true,
		zMoveType: "Infinity",
		forcedForme: "Arceus-Water",
		num: -219,
		gen: 7,
		isNonstandard: "Past",
	},

	// BASE GAME
};
