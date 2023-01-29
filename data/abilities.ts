/*

Ratings and how they work:

-1: Detrimental
	  An ability that severely harms the user.
	ex. Defeatist, Slow Start

 0: Useless
	  An ability with no overall benefit in a singles battle.
	ex. Color Change, Plus

 1: Ineffective
	  An ability that has minimal effect or is only useful in niche situations.
	ex. Light Metal, Suction Cups

 2: Useful
	  An ability that can be generally useful.
	ex. Flame Body, Overcoat

 3: Effective
	  An ability with a strong effect on the user or foe.
	ex. Chlorophyll, Sturdy

 4: Very useful
	  One of the more popular abilities. It requires minimal support to be effective.
	ex. Adaptability, Magic Bounce

 5: Essential
	  The sort of ability that defines metagames.
	ex. Imposter, Shadow Tag

*/

export const Abilities: {[abilityid: string]: AbilityData} = {
// NEW STUFF
	sunsailor: {
		isNonstandard: "Thing",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, pokemon) {
			if (['yellowish'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(1.3);
			}
		},
		onModifyDefPriority: 5,
		onModifyDef(def, pokemon) {
			if (['yellowish'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(1.3);
			}
		},
		onModifySpAPriority: 6,
		onModifySpA(spa, pokemon) {
			if (['yellowish'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(1.3);
			}
		},
		onModifySpDPriority: 6,
		onModifySpD(spd, pokemon) {
			if (['yellowish'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(1.3);
			}
		},
		onModifySpe(spe, pokemon) {
			if (['yellowish'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(1.3);
			}
		},
		name: "Sun Sailor",
		rating: 0.1,
		num: 500,
	},
	servantofthesun: {
		isNonstandard: "ThingInf",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, pokemon) {
			if (['yellowish'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(1.5);
			}
		},
		onModifyDefPriority: 5,
		onModifyDef(def, pokemon) {
			if (['yellowish'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 6,
		onModifySpA(spa, pokemon) {
			if (['yellowish'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(1.5);
			}
		},
		onModifySpDPriority: 6,
		onModifySpD(spd, pokemon) {
			if (['yellowish'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(1.5);
			}
		},
		onModifySpe(spe, pokemon) {
			if (['yellowish'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(1.5);
			}
		},
		name: "Servant of the Sun",
		rating: 0.1,
		num: 500,
	},
	bigsword: {
		isNonstandard: "Thing",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move?.type === 'Sword') {
				this.debug('Big Sword boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move?.type === 'Sword') {
				this.debug('Big Sword boost');
				return this.chainModify(1.5);
			}
		},
		name: "Big Sword",
		rating: 3,
		num: 501,
	},
	reallybigsword: {
		isNonstandard: "ThingInf",
		onDisableMove(pokemon) {
			for (const moveSlot of pokemon.moveSlots) {
				const move = this.dex.moves.get(moveSlot.id);
				if ((move.id === 'deposition' || move.id === 'emanation') && pokemon.types[0] === 'Sword') continue;
				if (!move.isZ && !move.isMax && move.type !== 'Sword' && move.id !== 'struggle') {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
		onBeforeMovePriority: 5,
		onBeforeMove(attacker, defender, move) {
			if (!move.isZ && !move.isMax && move.type !== 'Sword' && move.id !== 'struggle' && !((move.id === 'deposition' || move.id === 'emanation') && attacker.types[0] === 'Sword')) {
				this.add('cant', attacker, 'ability: Really Big Sword', move);
				return false;
			}
		},
		onModifyCritRatio(critRatio) {
			this.debug('Really Big Sword boost');
			return critRatio + 1;
		},
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Sword') {
				this.debug('Really Big Sword boost');
				return this.chainModify(2.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Sword') {
				this.debug('Really Big Sword boost');
				return this.chainModify(2.5);
			}
		},
		isPermanent: true,
		name: "Really Big Sword",
		rating: 3,
		num: 1501,
	},
	perseverant: {
		isNonstandard: "Thing",
		onDamagePriority: -30,
		onDamage(damage, target, source, effect) {
			if (this.randomChance(1, 2) && damage >= target.hp && effect && effect.effectType === 'Move') {
				this.add("-ability", target, 'Perseverant');
				return target.hp - 1;
			}
		},
		name: "Perseverant",
		rating: 3,
		num: 502,
	},
	shakethebees: {
		isNonstandard: "Thing",
		onDamagingHit(damage, target, source, effect) {
			this.boost({atk: 1});
		},
		name: "Shake the Bees",
		rating: 3.5,
		num: 503,
	},
	sticky: {
		isNonstandard: "Thing",
		onDamagingHit(damage, target, source, move) {
			if (move.flags['contact']) {
				this.add('-ability', target, 'Sticky');
				this.boost({spe: -1}, source, target, null, true);
			}
		},
		name: "Sticky",
		rating: 2,
		num: 504,
	},
	three: {
		isNonstandard: "Thing",
		onStart(pokemon) {
			pokemon.addVolatile('3count1');
			this.add('-start', pokemon, 'ability: Three');
		},
		onResidual(pokemon)	{
			// Three does not count up on turns you switch in on.
			if (pokemon.activeTurns) {
				if (pokemon.volatiles['3count1']) {
					delete pokemon.volatiles['3count1'];
					pokemon.addVolatile('3count2');
				} else if (pokemon.volatiles['3count2']) {
					delete pokemon.volatiles['3count2'];
					pokemon.addVolatile('3count3');
					this.add('-activate', pokemon, 'ability: Three');
				} else if (pokemon.volatiles['3count3']) {
					delete pokemon.volatiles['3count3'];
					pokemon.addVolatile('3count1');
				}
			}
		},
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (attacker.volatiles['3count3']) {
				this.debug('3 boost');
				return this.chainModify(3);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (attacker.volatiles['3count3']) {
				this.debug('3 boost');
				return this.chainModify(3);
			}
		},
		name: "Three",
		rating: 3,
		num: 505,
	},
	omega: {
		isNonstandard: "ThingInf",
		onStart(pokemon) {
			pokemon.addVolatile('ocount1');
			this.add('-start', pokemon, 'ability: Omega');
		},
		onResidual(pokemon)	{
			// Omega does not count up on turns you switch in on.
			if (pokemon.activeTurns) {
				if (pokemon.volatiles['ocount1']) {
					delete pokemon.volatiles['ocount1'];
					pokemon.addVolatile('ocount2');
				} else if (pokemon.volatiles['ocount2']) {
					delete pokemon.volatiles['ocount2'];
					pokemon.addVolatile('ocount3');
					this.add('-activate', pokemon, 'ability: Omega');
				} else if (pokemon.volatiles['ocount3']) {
					delete pokemon.volatiles['ocount3'];
					pokemon.addVolatile('ocount1');
				}
			}
		},
		onModifyMove(move, attacker, defender) {
			if (attacker.volatiles['ocount3'] && move.category !== 'Status') {
				this.debug('Omega boost');
				move.ohko = true;
				move.accuracy = true;
			}
		},
		isPermanent: true,
		name: "Omega",
		rating: 3,
		num: 505,
	},
	black: {
		isNonstandard: "Thing",
		onDamagingHit(damage, target, source, move) {
			if (move.flags['contact']) {
				if (source.getTypes().join() === 'Dirt' || !source.setType('Dirt')) {
					return false;
				}
				this.add('-ability', target, 'Black');
				this.add('-start', source, 'typechange', 'Dirt');
			}
		},
		name: "Black",
		rating: 0.1,
		num: -506,
	},
	white: {
		isNonstandard: "Thing",
		onAfterMoveSecondary(target, source, move) {
			if (!target.hp || !target.isActive || move.effectType !== 'Move' || move.category === 'Status' || move.type === 'Infinity' || move.type === '???') return;
			if (target.runEffectiveness(move) > 0) {
				const possibleTypes = [];
				const skippedTypes = ['Bug', 'Dark', 'Dragon', 'Electric', 'Fairy', 'Fighting', 'Fire', 'Flying', 'Ghost', 'Grass', 'Ground', 'Ice', 'Normal', 'Poison', 'Psychic', 'Rock', 'Steel', 'Water', 'Infinity'];
				for (const type of this.dex.types.names()) {
					if (skippedTypes.includes(type)) continue;
					const typeCheck = this.dex.types.get(type).damageTaken[move.type];
					if (typeCheck === 0 || typeCheck === 2 || typeCheck === 3) possibleTypes.push(type);
				}
				if (!possibleTypes.length) return false;
				while (possibleTypes.length > 2) {
					possibleTypes.splice(Math.floor(Math.random() * possibleTypes.length), 1);
				}
				this.add('-start', target, 'typechange', possibleTypes.join('/'), '[from] ability: White');
				target.setType(possibleTypes);
			}
		},
		name: "White",
		rating: 0.1,
		num: -507,
	},
	gold: {
		isNonstandard: "Thing",
		onTryHit(target, source, move) {
			if (target === source || move.category === 'Status' || move.type === '???' || move.id === 'struggle') return;
			if (move.id === 'skydrop' && !source.volatiles['skydrop']) return;
			this.debug('Gold immunity: ' + move.id);
			if (target.runEffectiveness(move) > 0) {
				if (move.smartTarget) {
					move.smartTarget = false;
				} else {
					this.add('-immune', target, '[from] ability: Gold');
				}
				return null;
			}
		},
		name: "Gold",
		rating: 5,
		num: -508,
	},
	red: {
		isNonstandard: "ThingInf",
		onResidualOrder: 4,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			if (!pokemon.fainted && (pokemon.hp < pokemon.maxhp || pokemon.status)) {
				pokemon.heal(pokemon.maxhp);
				pokemon.cureStatus();
				this.add('-heal', pokemon, pokemon.getHealth, '[from] ability: Red');
			}
		},
		isPermanent: true,
		name: "Red",
		rating: 5,
		num: -509,
	},
	greetings: {
		isNonstandard: "Thing",
		onSwitchIn() {
			if (!this.field.battle.turn) return;
			this.effectState.switchingIn = true;
		},
		onStart(pokemon) {
			// Greetings does not activate when Skill Swapped or when Neutralizing Gas leaves the field
			if (!this.effectState.switchingIn) return;
			this.effectState.switchingIn = false;
			this.effectState.greetingsMove = true;
			const bannedMoves = ['openturn'];
			const moves = [];
			for (const moveSlot of pokemon.moveSlots) {
				const moveid = moveSlot.id;
				if (!moveid) continue;
				const move = this.dex.moves.get(moveid);
				if (bannedMoves.includes(moveid) || move.category === 'Status' || move.flags['charge'] || move.flags['recharge'] || (move.isZ && move.basePower !== 1)) {
					continue;
				}
				moves.push(moveid);
			}
			let randomMove = '';
			if (moves.length) randomMove = this.sample(moves);
			if (!randomMove) {
				this.effectState.greetingsMove = false;
				return false;
			}
			this.actions.useMove(randomMove, pokemon);
			this.effectState.greetingsMove = false;
		},
		onBasePower(basePower, pokemon, target) {
			if (this.effectState.greetingsMove) return this.chainModify(0.5);
		},
		name: "Greetings",
		rating: 5,
		num: -100,
	},
	falsestart: {
		isNonstandard: "Thing",
		onFoeTryMove(target, source, move) {
			const targetAllExceptions = ['perishsong', 'flowershield', 'rototiller'];
			if (move.target === 'foeSide' || target.volatiles['fastforwarding'] || (move.target === 'all' && !targetAllExceptions.includes(move.id))) {
				return;
			}
			if (['windy'].includes(target.effectiveWeather()) && move.type === 'Weather' && move.priority <= 1.5) return;
			const dazzlingHolder = this.effectState.target;
			if ((source.side === dazzlingHolder.side || move.target === 'all') && move.priority > 0.5) {
				this.attrLastMove('[still]');
				this.add('cant', target, 'ability: False Start', move, '[of] ' + dazzlingHolder);
				return false;
			}
		},
		name: "False Start",
		rating: 5,
		num: -104,
	},
	robust: {
		isNonstandard: "Thing",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, pokemon) {
			if (pokemon.hp >= pokemon.maxhp * 0.75) {
				return this.chainModify(1.6);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, pokemon) {
			if (pokemon.hp >= pokemon.maxhp * 0.75) {
				return this.chainModify(1.6);
			}
		},
		name: "Robust",
		rating: -1,
		num: -105,
	},
	highpressure: {
		isNonstandard: "Thing",
		// done in conditions.js > pressurizer
		name: "High Pressure",
		rating: 4,
		num: -106,
	},
	pelagic: {
		isNonstandard: "Thing",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fish' || move.type === 'Liquid') {
				this.debug('pelagic boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Fish' || move.type === 'Liquid') {
				this.debug('pelagic boost');
				return this.chainModify(1.5);
			}
		},
		name: "Pelagic",
		rating: 5,
		num: -106,
	},
	telomerase: {
		isNonstandard: "Thing",
		onTryHit(target, source, move) {
			if (target === source || move.category === 'Status') return;
			if (target !== source && move.type === 'Time') {
				this.add('-immune', target, '[from] ability: Telomerase');
				return null;
			}
		},
		name: "Telomerase",
		rating: 2,
		num: -107,
	},
	ultrasense: {
		isNonstandard: "Thing",
		onAnyInvulnerabilityPriority: 1,
		onAnyInvulnerability(target, source, move) {
			if (move && source === this.effectState.target && !this.queue.willMove(target)) return 0;
		},
		onSourceAccuracy(accuracy, target, source, move) {
			this.debug('ultrasense guarenteeing hit');
			if (move && !this.queue.willMove(target)) return true;
			return accuracy;
		},
		onFractionalPriority: -0.3,
		name: "Ultrasense",
		rating: 3,
		num: -108,
	},
	slippery: {
		isNonstandard: "Thing",
		name: "Slippery",
		rating: 5,
		num: -101,
	},
	plaguebringer: {
		isNonstandard: "Thing",
		onStart(source) {
			this.field.setWeather('locustswarm');
		},
		name: "Plague Bringer",
		rating: 2,
		num: -102,
	},
	pronebody: {
		isNonstandard: "Thing",
		onDamagingHit(damage, target, source, move) {
			if (move.flags['contact']) {
				if (this.randomChance(3, 10)) {
					source.trySetStatus('prone', target);
				}
			}
		},
		name: "Prone Body",
		rating: 0.1,
		num: -103,
	},
	primitive: {
		isNonstandard: "Thing",
		onTryHit(target, source, move) {
			if (target === source || move.category === 'Status') return;
			if (target !== source && move.type === 'Industrial') {
				this.add('-immune', target, '[from] ability: Primitive');
				return null;
			}
		},
		name: "Primitive",
		rating: 2,
		num: -109,
	},
	competitivemirror: {
		isNonstandard: "Thing",
		// Implemented in battle.js (change battle.ts too).
		name: "Competitive Mirror",
		rating: 2,
		num: -110,
	},
	moonrise: {
		isNonstandard: "Thing",
		onStart(source) {
			this.field.setWeather('nighttime');
		},
		onResidual(pokemon) {
			if (!pokemon.isActive || pokemon.baseSpecies.baseSpecies !== 'Chronoise' || pokemon.transformed) return;
			if (!pokemon.hp) return;
			if (pokemon.species.id === 'chronoisenight') {
				pokemon.formeChange('Chronoise', this.effect, false, '[msg]');
				this.add('-ability', pokemon, 'bright', '[from] ability: Moonrise');
				pokemon.setAbility('bright');
			}
		},
		name: "Moonrise",
		rating: 2,
		num: -111,
	},
	bright: {
		isNonstandard: "Thing",
		onStart(source) {
			if (this.field.getWeather().id === 'nighttime') {
				this.field.clearWeather();
			}
		},
		onAnySetWeather(target, source, weather) {
			if (weather.id === 'nighttime') return false;
		},
		onResidual(pokemon) {
			if (!pokemon.isActive || pokemon.baseSpecies.baseSpecies !== 'Chronoise' || pokemon.transformed) return;
			if (pokemon.species.id !== 'chronoisenight') {
				pokemon.formeChange('Chronoise-Night', this.effect, false, '[msg]');
				this.add('-ability', pokemon, 'moonrise', '[from] ability: Bright');
				pokemon.setAbility('moonrise');
			}
		},
		name: "Bright",
		rating: 2,
		num: -112,
	},
	lemon: {
		isNonstandard: "Thing",
		onStart(pokemon) {
			if (pokemon.species.name !== 'Lemon') {
				pokemon.formeChange('Lemon', this.effect);
			}
		},
		onEnd(pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Lemon' && pokemon.hp && !(pokemon.beingCalledBack || pokemon.switchFlag || pokemon.forceSwitchFlag)) {
				this.actions.runSymbolEvo(pokemon, '<empty>');
			}
		},
		name: "Lemon",
		rating: 3,
		num: -1000,
	},
	oven: {
		isNonstandard: "ThingInf",
		onModifyCritRatio(critRatio, source, target) {
			if (target.getHeight() <= 7 && target.getAbility().id !== 'colossal') {
				this.debug('ovenable');
				return 5;
			}
		},
		name: "Oven",
		rating: 2.5,
		num: -116,
	},
	microwave: {
		isNonstandard: "Thing",
		onModifyCritRatio(critRatio, source, target) {
			if (target.getHeight() <= 4 && target.getAbility().id !== 'colossal') {
				this.debug('microwaveable');
				return 5;
			}
		},
		name: "Microwave",
		rating: 1.5,
		num: -196,
	},
	toaster: {
		isNonstandard: "Thing",
		onModifyCritRatio(critRatio, source, target) {
			if (target.getHeight() <= 1 && target.getAbility().id !== 'colossal') {
				this.debug('toastable');
				return 5;
			}
		},
		name: "Toaster",
		rating: 0.5,
		num: -196,
	},
	lowlying: {
		isNonstandard: "Thing",
		onUpdate(pokemon) {
			if (pokemon.status === 'prone') {
				this.add('-activate', pokemon, 'ability: Low-Lying');
				pokemon.cureStatus();
			}
		},
		onSetStatus(status, target, source, effect) {
			if (status.id !== 'prone') return;
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: Low-Lying');
			}
			return false;
		},
		name: "Low-Lying",
		rating: 2,
		num: -215,
	},
	omnipresent: {
		isNonstandard: "Thing",
		onUpdate(pokemon) {
			if (pokemon.status === 'banished') {
				this.add('-activate', pokemon, 'ability: Omnipresent');
				pokemon.cureStatus();
			}
		},
		onSetStatus(status, target, source, effect) {
			if (status.id !== 'banished') return;
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: Omnipresent');
			}
			return false;
		},
		name: "Omnipresent",
		rating: 2,
		num: -216,
	},
	cleareyes: {
		isNonstandard: "Thing",
		onUpdate(pokemon) {
			if (pokemon.status === 'blinded') {
				this.add('-activate', pokemon, 'ability: Clear Eyes');
				pokemon.cureStatus();
			}
		},
		onSetStatus(status, target, source, effect) {
			if (status.id !== 'blinded') return;
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: Clear Eyes');
			}
			return false;
		},
		name: "Clear Eyes",
		rating: 2,
		num: -217,
	},
	betafunction: {
		isNonstandard: "Thing",
		onTryHit(target, source, move) {
			if (target === source || move.category === 'Status' || move.type === '???' || move.id === 'struggle') return;
			if (move.id === 'skydrop' && !source.volatiles['skydrop']) return;
			this.debug('Beta Function immunity: ' + move.id);
			if (target.runEffectiveness(move) <= 0) {
				if (move.smartTarget) {
					move.smartTarget = false;
				} else {
					this.add('-immune', target, '[from] ability: Beta Function');
				}
				return null;
			}
		},
		name: "Beta Function",
		rating: 5,
		num: -225,
	},
	blind: {
		isNonstandard: "Thing",
		onStart(pokemon) {
			pokemon.trySetStatus('blinded', pokemon);
		},
		onSetStatus(status, target, source, effect) {
			if (status.id !== 'blinded') {
				this.add('-immune', target, '[from] ability: Blind');
				return false;
			}
		},
		onSourceModifyAtkPriority: 6,
		onSourceModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Yellow' || move.type === 'Green' || move.type === 'Night') {
				this.debug('Blind weaken');
				return this.chainModify(0.25);
			}
		},
		onSourceModifySpAPriority: 5,
		onSourceModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Yellow' || move.type === 'Green' || move.type === 'Night') {
				this.debug('Blind weaken');
				return this.chainModify(0.25);
			}
		},
		name: "Blind",
		rating: 2,
		num: -120,
	},
	farewell: {
		isNonstandard: "Thing",
		onSwitchIn(pokemon) {
			if (!this.field.battle.turn) return;
			this.add('-ability', pokemon, 'Farewell');
			this.hint("Farewell will switch everyone else out at the end of the next turn!");
			this.effectState.switchingIn = true;
		},
		onResidualOrder: 99,
		onResidual(pokemon) {
			// Farewell activates at the end of the turn after switching in.
			if (!this.effectState.switchingIn || !pokemon.activeTurns) return;
			this.effectState.switchingIn = false;
			const bannedAbilities = ['farewell', 'greetings', 'eleventhhour'];
			let announced = false;
			for (const foe of pokemon.foes()) {
				if (!foe?.isActive || foe === pokemon || bannedAbilities.includes(foe.ability) ||
					!this.canSwitch(foe.side) || foe.forceSwitchFlag) continue;
				if (this.runEvent('DragOut', pokemon, foe)) {
					if (!announced) {
						this.add('-ability', pokemon, 'Farewell');
						announced = true;
					}
					foe.forceSwitchFlag = true;
				}
			}
			for (const ally of pokemon.allies()) {
				if (!ally?.isActive || ally === pokemon || bannedAbilities.includes(ally.ability) ||
					!this.canSwitch(ally.side) || ally.forceSwitchFlag) continue;
				if (this.runEvent('DragOut', pokemon, ally)) {
					if (!announced) {
						this.add('-ability', pokemon, 'Farewell');
						announced = true;
					}
					ally.forceSwitchFlag = true;
				}
			}
		},
		name: "Farewell",
		rating: 3.5,
		num: 22,
	},
	perishjaws: {
		isNonstandard: "Thing",
		onSourceHit(target, source, move) {
			if (!move || !target) return;
			if (!move.flags['bite']) return;
			if (target !== source && move.category !== 'Status') {
				let announced = false;
				for (const pokemon of [target, source]) {
					if (pokemon.volatiles['perishsong']) continue;
					if (!announced) {
						this.add('-ability', source, 'Perish Jaws');
						announced = true;
					}
					pokemon.addVolatile('perishsong');
				}
			}
		},
		name: "Perish Jaws",
		rating: 3,
		num: -121,
	},
	nebulous: {
		isNonstandard: "Thing",
		onDamagingHit(damage, target, source, move) {
			if (source.isActive) source.addVolatile('trapped', source, move, 'trapper');
		},
		name: "Nebulous",
		rating: 5,
		num: -122,
	},
	gravitywell: {
		isNonstandard: "Thing",
		onFoeTrapPokemon(pokemon) {
			pokemon.tryTrap(true);
		},
		onFoeMaybeTrapPokemon(pokemon, source) {
			if (!source) source = this.effectState.target;
			if (!source) return;
			pokemon.maybeTrapped = true;
		},
		name: "Gravity Well",
		rating: 5,
		num: -123,
	},
	distantsystem: {
		isNonstandard: "Thing",
		onAnyDragOut(pokemon, target) {
			if (pokemon.side === this.effectState.target.side) {
				this.add('-activate', this.effectState.target, 'ability: Distant System');
				return null;
			}
		},
		name: "Distant System",
		rating: 1,
		num: -124,
	},
	windsurfer: {
		isNonstandard: "Thing",
		// Checked in conditions.js: windy.onAnyModifyBoost
		name: "Wind Surfer",
		rating: 3,
		num: -125,
	},
	scavenger: {
		isNonstandard: "Thing",
		onBasePower(basePower, pokemon, target) {
			if (target.hp * 2 <= target.maxhp) {
				return this.chainModify(2);
			}
		},
		name: "Scavenger",
		rating: 3,
		num: -126,
	},
	lookbothways: {
		isNonstandard: "Thing",
		onModifyAccuracyPriority: -1,
		onModifyAccuracy(accuracy, target) {
			if (this.queue.willMove(target)) {
				return this.chainModify(0.8);
			}
		},
		name: "Look Both Ways",
		rating: 3,
		num: -127,
	},
	momentum: {
		isNonstandard: "Thing",
		onAfterEachBoost(boost, target, source, effect) {
			if (boost.spe) {
				this.boost({atk: boost.spe}, target, target, null, true);
			}
		},
		name: "Momentum",
		rating: 3,
		num: -128,
	},
	camouflage: {
		isNonstandard: "Thing",
		onModifyAccuracyPriority: -2,
		onModifyAccuracy(accuracy) {
			if (typeof accuracy !== 'number') return;
			this.debug('camouflage - decreasing accuracy');
			return this.chainModify(0.9);
		},
		name: "Camouflage",
		rating: 3,
		num: -128,
	},
	paintityellow: {
		isNonstandard: "Thing",
		onSourceHit(target, source, move) {
			if (move.type !== 'Liquid' || target === source) return;
			if (target.addedType === 'Yellow') return false;
			if (!target.addType('Yellow')) return false;
			this.add('-start', target, 'typeadd', 'Yellow', '[from] ability: Paint it Yellow');
		},
		name: "Paint it Yellow",
		rating: 4,
		num: -129,
	},
	paintitgreen: {
		isNonstandard: "Thing",
		onSourceHit(target, source, move) {
			if (move.type !== 'Liquid' || target === source) return;
			if (target.addedType === 'Green') return false;
			if (!target.addType('Green')) return false;
			this.add('-start', target, 'typeadd', 'Green', '[from] ability: Paint it Green');
		},
		name: "Paint it Green",
		rating: 4,
		num: -130,
	},
	nutrientrich: {
		isNonstandard: "Thing",
		onAllyBasePowerPriority: 22,
		onAllyBasePower(basePower, attacker, defender, move) {
			if (move.type === 'Green') {
				this.debug('Nutrient Rich boost');
				return this.chainModify(1.5);
			}
		},
		name: "Nutrient Rich",
		rating: 3.5,
		num: -131,
	},
	shiningattitude: {
		isNonstandard: "Thing",
		onAllyModifyPriority(priority, pokemon, target, move) {
			if (move?.category === 'Status' && move.type === 'Yellow') {
				return priority + 1;
			}
		},
		name: "Shining Attitude",
		rating: 4,
		num: -132,
	},
	fickle: {
		isNonstandard: "Thing",
		onResidualPriority: 99,
		onResidual(pokemon) {
			const environmentalfactors = ['locustswarm', 'nighttime', 'windy', 'yellowish', 'hot', 'cold', 'timedilation', 'underwater'];
			const tempfactors = ['hot', 'cold'];
			if (environmentalfactors.includes(pokemon.effectiveWeather())) {
				if (!tempfactors.includes(pokemon.effectiveWeather())) {
					const hotorcold = environmentalfactors.indexOf(this.sample(tempfactors));
					environmentalfactors.splice(hotorcold, 1);
				}
				const index = environmentalfactors.indexOf(pokemon.effectiveWeather());
				environmentalfactors.splice(index, 1);
				this.field.setWeather(this.sample(environmentalfactors));
			}
		},
		name: "Fickle",
		rating: 4,
		num: -133,
	},
	shedhair: {
		isNonstandard: "Thing",
		onResidualOrder: 5,
		onResidualSubOrder: 4,
		onResidual(pokemon) {
			if (pokemon.hp && pokemon.status && this.randomChance(1, 3)) {
				this.debug('shed hair');
				this.add('-activate', pokemon, 'ability: Shed Hair');
				pokemon.cureStatus();
			}
		},
		name: "Shed Hair",
		rating: 3,
		num: -134,
	},
	assimilate: {
		isNonstandard: "Thing",
		onAnyFaintPriority: 1,
		onAnyFaint(target) {
			let statName = 'atk';
			let bestStat = 0;
			let s: StatIDExceptHP;
			for (s in target.storedStats) {
				if (target.storedStats[s] > bestStat) {
					statName = s;
					bestStat = target.storedStats[s];
				}
			}
			this.boost({[statName]: 1}, this.effectState.target);
		},
		name: "Assimilate",
		rating: 3.5,
		num: -135,
	},
	connection: {
		isNonstandard: "Thing",
		onAllyBasePowerPriority: 22,
		onAllyBasePower(basePower, attacker, defender, move) {
			if (attacker !== this.effectState.target) {
				this.debug('Connection boost');
				return this.chainModify(1.2);
			}
		},
		name: "Connection",
		rating: 2,
		num: -136,
	},
	refill: {
		isNonstandard: "Thing",
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Liquid') {
				if (!this.heal(target.baseMaxhp / 4)) {
					this.add('-immune', target, '[from] ability: Refill');
				}
				return null;
			}
		},
		name: "Refill",
		rating: 3.5,
		num: 11,
	},
	cleanup: {
		isNonstandard: "Thing",
		onSwitchIn(pokemon) {
			this.effectState.switchingIn = true;
		},
		onStart(source) {
			// Cleanup does not activate when Skill Swapped or when Neutralizing Gas leaves the field
			if (!this.effectState.switchingIn) return;
			this.effectState.switchingIn = false;
			let success = 0;
			const removeAll = [
				'reflect', 'lightscreen', 'auroraveil', 'safeguard', 'mist', 'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'gmaxsteelsurge',
				'stormcell', 'dustcloud', 'wetfloor', 'beamfield', 'hotcoals', 'permafrost', 'autoturret', 'voidtrap', 'caltrops'
			];
			for (const targetCondition of removeAll) {
				if (source.side.foe.removeSideCondition(targetCondition)) {
					this.add('-sideend', source.side.foe, this.dex.conditions.get(targetCondition).name, '[from] move: Nuisance Pest', '[of] ' + source);
					success++;
				}
			}
			for (const sideCondition of removeAll) {
				if (source.side.removeSideCondition(sideCondition)) {
					this.add('-sideend', source.side, this.dex.conditions.get(sideCondition).name, '[from] move: Nuisance Pest', '[of] ' + source);
					success++;
				}
			}
			if (success) {
				if (success > 4) success = 4;
				this.heal(success * source.baseMaxhp / 4);
				return true;
			} else { return false; }
		},
		name: "Cleanup",
		rating: 3.5,
		num: 1111,
	},
	ahotone: {
		isNonstandard: "Thing",
		onStart(source) {
			if (this.field.getWeather().id === 'hot' && this.field.weatherState.duration !== 0) {
				this.field.weatherState.duration = 0;
				this.field.weatherState.source = source;
				this.field.weatherState.permanent = true;
			} else { 
				this.field.setWeather('hot', null, null, true); 
				this.field.weatherState.duration = 0;
			}
			// Infinite duration done in conditions.js#hot
		},
		/* onAnySetWeather(target, source, weather) {
			const strongMusics = ['hot', 'timedilation', 'windy', 'friendlyatmosphere'];
			const musicAbilities = ['ahotone', 'sinningunapuro', 'lassihnfliegen', 'partyrockis'];
			if (this.field.getWeather().id === 'hot' && !(strongMusics.includes(weather.id) && musicAbilities.includes(source.ability))) return false;
		}, */
		onEnd(pokemon) {
			if (this.field.weatherState.source !== pokemon) return;
			for (const target of this.getAllActive()) {
				if (target === pokemon) continue;
				if (target.hasAbility('ahotone')) {
					this.field.weatherState.source = target;
					return;
				}
			}
			this.field.clearWeather();
		},
		name: "A Hot One",
		rating: 4.5,
		num: 190,
	},
	superconductor: {
		isNonstandard: "Thing",
		onUpdate(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Undulux' || pokemon.transformed) return;
			let forme = '';
			switch (pokemon.effectiveWeather()) {
			case 'hot':
				if (pokemon.species.id !== 'unduluxoverheated') forme = 'Undulux-Overheated';
				break;
			case 'cold':
				if (pokemon.species.id !== 'undulux') forme = 'Undulux';
				break;
			}
			if (pokemon.isActive && forme) pokemon.formeChange(forme, this.effect, false, '[msg]');
		},
		onDamagingHit(damage, target, source, move) {
			if (
				target.baseSpecies.baseSpecies !== 'Undulux' ||
				target.transformed ||
				['hot', 'cold'].includes(target.effectiveWeather())
			) return;
			let forme = '';
			if (move.category === 'Special' && target.species.id !== 'unduluxoverheated') forme = 'Undulux-Overheated';
			if (target.isActive && forme) target.formeChange(forme, this.effect, false, '[msg]');
		},
		isPermanent: true,
		name: "Superconductor",
		rating: 2,
		num: 59,
	},
	dusty: {
		isNonstandard: "Thing",
		onDamagingHit(damage, target, source, move) {
			if (move.flags['contact']) {
				if (this.randomChance(3, 10)) {
					source.trySetStatus('blinded', target);
				}
			}
		},
		name: "Dusty",
		rating: 2,
		num: 49,
	},
	sinningunapuro: {
		isNonstandard: "Thing",
		onStart(source) {
			if (this.field.getWeather().id === 'timedilation' && this.field.weatherState.duration !== 0) {
				this.field.weatherState.duration = 0;
				this.field.weatherState.source = source;
				this.field.weatherState.permanent = true;
			} else { 
				this.field.setWeather('timedilation', null, null, true); 
				this.field.weatherState.duration = 0;
			}
			// Infinite duration done in conditions.js#hot
		},
		/* onAnySetWeather(target, source, weather) {
			const strongMusics = ['hot', 'timedilation', 'windy', 'friendlyatmosphere'];
			const musicAbilities = ['ahotone', 'sinningunapuro', 'lassihnfliegen', 'partyrockis'];
			if (this.field.getWeather().id === 'timedilation' && !(strongMusics.includes(weather.id) && musicAbilities.includes(source.ability))) return false;
		}, */
		onEnd(pokemon) {
			if (this.field.weatherState.source !== pokemon) return;
			for (const target of this.getAllActive()) {
				if (target === pokemon) continue;
				if (target.hasAbility('sinningunapuro')) {
					this.field.weatherState.source = target;
					return;
				}
			}
			this.field.clearWeather();
		},
		name: "Sin Ningu\u0301n Apuro",
		rating: 4.5,
		num: 190,
	},
	nocturnal: {
		isNonstandard: "Thing",
		onModifyCritRatio(critRatio, source, target) {
			if (this.field.isWeather('nighttime')) return critRatio + 2;
		},
		onSourceModifyAccuracyPriority: -1,
		onSourceModifyAccuracy(accuracy) {
			if (typeof accuracy !== 'number') return;
			if (this.field.isWeather('nighttime')) {
				this.debug('nocturnal - enhancing accuracy');
				return this.chainModify(1.3);
			}
		},
		name: "Nocturnal",
		rating: 2,
		num: 1159,
	},
	lucky: {
		isNonstandard: "Thing",
		onModifyMovePriority: -2,
		onModifyMove(move) {
			if (move.secondaries) {
				this.debug('doubling secondary chance');
				for (const secondary of move.secondaries) {
					if (secondary.chance) secondary.chance *= 2;
				}
			}
			if (move.self?.chance) move.self.chance *= 2;
		},
		onModifyCritRatio(critRatio) {
			return critRatio + 1;
		},
		name: "Lucky",
		rating: 4,
		num: 3112,
	},
	biggamble: {
		isNonstandard: "Thing",
		onResidual(pokemon) {
			this.add('-activate', pokemon, 'ability: Big Gamble');
			const weightedEffects: [weight: number, effect: (this: Battle) => void][] = [
				[49, () => {
					// Boost a random stat
					const stats: BoostID[] = [];
					const boost: SparseBoostsTable = {};
					let statPlus: BoostID;
					for (statPlus in pokemon.boosts) {
						if (pokemon.boosts[statPlus] < 6) {
							stats.push(statPlus);
						}
					}
					if (!stats.length) return;
					const randomStat: BoostID = this.sample(stats);
					if (this.random() < 0.2) {
						if (randomStat) boost[randomStat] = 2;
					} else {
						if (randomStat) boost[randomStat] = 1;
					}
					this.boost(boost);
				}],
				[25, () => {
					// Lower a random stat
					const stats: BoostID[] = [];
					const boost: SparseBoostsTable = {};
					let statPlus: BoostID;
					for (statPlus in pokemon.boosts) {
						if (pokemon.boosts[statPlus] < 6) {
							stats.push(statPlus);
						}
					}
					if (!stats.length) return;
					const randomStat: BoostID = this.sample(stats);
					if (this.random() < 0.2) {
						if (randomStat) boost[randomStat] = -2;
					} else {
						if (randomStat) boost[randomStat] = -1;
					}
					this.boost(boost);
				}],
				[15, () => {
					// Heal, cure status
					this.heal(pokemon.baseMaxhp / 8);
					if (pokemon.hp && pokemon.status) {
						pokemon.cureStatus();
					}
				}],
				[9, () => {
					// Take damage, gain a status
					this.damage(pokemon.baseMaxhp / 8);
					const stati = ['prone', 'banished', 'blinded', 'pressurized', 'fluctuant', 'wounded', 'distanced', 'infected'];
					const result = this.sample(stati);
					pokemon.trySetStatus(result);
				}],
				[1, () => {
					// Max all stats
					const boost: SparseBoostsTable = {};
					let statPlus: BoostID;
					for (statPlus in pokemon.boosts) {
						if (statPlus === 'accuracy' || statPlus === 'evasion') continue;
						boost[statPlus] = 6 - pokemon.boosts[statPlus];
					}
					this.boost(boost);
				}],
				[1, () => {
					// Perish
					this.damage(pokemon.baseMaxhp);
				}],
			];
			const effect = this.weightedSample(weightedEffects);
			effect.call(this);
		},

		name: "Big Gamble",
		rating: 4,
		num: 1132,
	},
	lungs: {
		isNonstandard: "Thing",
		onResidualOrder: 5,
		onResidualSubOrder: 5,
		onResidual(pokemon) {
			this.heal(pokemon.baseMaxhp / 16);
		},
		name: "Lungs",
		rating: 3,
		num: 1133,
	},
	depthcharge: {
		isNonstandard: "Thing",
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			if (!target.hp) {
				this.add('-activate', target, 'ability: Depth Charge');
				for (const thing of this.getAllActive()) {
					if (thing.fainted || !thing.hp) continue;
					thing.trySetStatus('pressurized', target);
				}
			}
		},
		name: "Depth Charge",
		rating: 2,
		num: 1134,
	},
	cleansing: {
		isNonstandard: "Thing",
		onSourceHit(target, source, move) {
			if (move.type !== 'Liquid') return;
			target.cureStatus();
			source.cureStatus();
		},
		name: "Cleansing",
		rating: 4,
		num: -1291,
	},
	sudslide: {
		isNonstandard: "Thing",
		onStart(source) {
			this.field.setTerrain('sudscape');
		},
		name: "Sudslide",
		rating: 4,
		num: 1229,
	},
	bubblearmor: {
		isNonstandard: "Thing",
		onSourceModifyAtkPriority: 6,
		onSourceModifyAtk(atk, attacker, defender, move) {
			if (this.field.isTerrain('sudscape')) {
				this.debug('Bubble Armor weaken');
				return this.chainModify(0.5);
			}
		},
		onSourceModifySpAPriority: 5,
		onSourceModifySpA(atk, attacker, defender, move) {
			if (this.field.isTerrain('sudscape')) {
				this.debug('Bubble Armor weaken');
				return this.chainModify(0.5);
			}
		},
		name: "Bubble Armor",
		rating: 3,
		num: 1175,
	},
	shielded: {
		isNonstandard: "Thing",
		onCriticalHit: false,
		name: "Shielded",
		rating: 1,
		num: 7115,
	},
	eleventhhour: {
		isNonstandard: "Thing",
		onSwitchIn(pokemon) {
			this.effectState.switchingIn = true;
		},
		onStart(pokemon) {
			// Eleventh Hour does not activate when Skill Swapped or when Neutralizing Gas leaves the field
			if (!this.effectState.switchingIn) return;
			this.effectState.switchingIn = false;
			if (pokemon.hp >= (pokemon.maxhp / 2) || pokemon.maxhp === 1) return;
			pokemon.addVolatile('eleventhhour');
		},
		onEnd(pokemon) {
			pokemon.removeVolatile('eleventhhour');
		},
		condition: {
			onStart(target) {
				this.add('-start', target, 'ability: Eleventh Hour');
			},
			onDamagePriority: -10,
			onDamage(damage, target, source, effect) {
				if (effect?.effectType === 'Move' && damage >= target.hp) {
					this.add('-end', target, 'ability: Eleventh Hour');
					target.removeVolatile('eleventhhour');
					return target.hp - 1;
				}
			},
		},
		name: "Eleventh Hour",
		rating: 5,
		num: 150,
	},
	reactive: {
		isNonstandard: "Thing",
		onModifyDamage(damage, source, target, move) {
			if (move && target.getMoveHitData(move).typeMod > 0) {
				return this.chainModify(1.5);
			}
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).typeMod > 0) {
				this.debug('Reactive boost');
				return this.chainModify(1.5);
			}
		},
		name: "Reactive",
		rating: 1,
		num: 7185,
	},
	inert: {
		isNonstandard: "Thing",
		onModifyDamage(damage, source, target, move) {
			if (move && target.getMoveHitData(move).typeMod > 0) {
				return this.chainModify(0.66);
			}
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).typeMod > 0) {
				this.debug('Inert weaken');
				return this.chainModify(0.66);
			}
		},
		name: "Inert",
		rating: 3,
		num: 7186,
	},
	unstable: {
		name: "Unstable",
		isNonstandard: "Thing",
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			if (this.randomChance(1, 4)) {
				for (const foe of target.adjacentFoes()) {
					if (foe.hasType('No')) continue;
					const typeMod = this.clampIntRange(source.runEffectiveness(this.dex.getActiveMove('temperaturephysical')), -6, 6);
					this.damage(foe.baseMaxhp * Math.pow(2, typeMod) / 4, foe, target);
				}
				for (const ally of target.adjacentAllies()) {
					if (ally.hasType('No')) continue;
					const typeMod = this.clampIntRange(source.runEffectiveness(this.dex.getActiveMove('temperaturephysical')), -6, 6);
					this.damage(ally.baseMaxhp * Math.pow(2, typeMod) / 4, ally, target);
				}
				if (target.hp) {
					this.damage(target.baseMaxhp, target, target);
				}
			}
		},
		rating: 3,
		num: 106,
	},
	soulsong: {
		isNonstandard: "Thing",
		onStart(pokemon) {
			const type = this.dex.moves.get(pokemon.moveSlots[0].id).type;
			if (pokemon.hasType(type) || type === '???') return false;
			if (!pokemon.addType(type)) return false;
			this.add('-start', pokemon, 'typeadd', type, '[from] ability: Soul Song');
		},
		name: "Soul Song",
		rating: 3.5,
		num: 2112,
	},
	greenhero: {
		isNonstandard: "Thing",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Green') {
				this.debug('Green Hero boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Green') {
				this.debug('Green Hero boost');
				return this.chainModify(1.5);
			}
		},
		name: "Green Hero",
		rating: 3.5,
		num: 2100,
	},
	brutalize: {
		isNonstandard: "Thing",
		// upokecenter says this is implemented as an added secondary effect
		onModifyMove(move) {
			if (!move || !move.flags['contact'] || move.target === 'self') return;
			if (!move.secondaries) {
				move.secondaries = [];
			}
			move.secondaries.push({
				chance: 50,
				status: 'wounded',
				ability: this.dex.abilities.get('brutalize'),
			});
		},
		name: "Brutalize",
		rating: 3,
		num: 143,
	},
	aquatic: {
		isNonstandard: "Thing",
		onWeather(target, source, effect) {
			if (effect.id === 'underwater') {
				this.heal(target.baseMaxhp / 16);
			}
		},
		onImmunity(type, pokemon) {
			if (type === 'underwater') return false;
		},
		name: "Aquatic",
		rating: 1,
		num: 1151,
	},
	lassihnfliegen: {
		isNonstandard: "Thing",
		onStart(source) {
			if (this.field.getWeather().id === 'windy' && this.field.weatherState.duration !== 0) {
				this.field.weatherState.duration = 0;
				this.field.weatherState.source = source;
				this.field.weatherState.permanent = true;
			} else { 
				this.field.setWeather('windy', null, null, true); 
				this.field.weatherState.duration = 0;
			}
			// Infinite duration done in conditions.js#hot
		},
		/* onAnySetWeather(target, source, weather) {
			const strongMusics = ['hot', 'timedilation', 'windy', 'friendlyatmosphere'];
			const musicAbilities = ['ahotone', 'sinningunapuro', 'lassihnfliegen', 'partyrockis'];
			if (this.field.getWeather().id === 'windy' && !(strongMusics.includes(weather.id) && musicAbilities.includes(source.ability))) return false;
		}, */
		onEnd(pokemon) {
			if (this.field.weatherState.source !== pokemon) return;
			for (const target of this.getAllActive()) {
				if (target === pokemon) continue;
				if (target.hasAbility('lassihnfliegen')) {
					this.field.weatherState.source = target;
					return;
				}
			}
			this.field.clearWeather();
		},
		name: "Lass' ihn Fliegen",
		rating: 4.5,
		num: 190,
	},
	poisonous: {
		isNonstandard: "Thing",
		onDamagingHit(damage, target, source, move) {
			if (move.flags['bite'] && !source.status) {
				const r = this.random(3);
				if (r === 0) {
					source.setStatus('blinded', target);
				} else if (r === 1) {
					source.setStatus('fluctuant', target);
				} else {
					source.setStatus('wounded', target);
				}
			}
		},
		name: "Poisonous",
		rating: 2,
		num: 27,
	},
	pestresistant: {
		isNonstandard: "Thing",
		onSourceModifyAtkPriority: 6,
		onSourceModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Arthropod') {
				this.debug('Pest Resistant weaken');
				return this.chainModify(0.5);
			}
		},
		onSourceModifySpAPriority: 5,
		onSourceModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Arthropod') {
				this.debug('Pest Resistant weaken');
				return this.chainModify(0.5);
			}
		},
		name: "Pest Resistant",
		rating: 3,
		num: 1147,
	},
	gallant: {
		isNonstandard: "Thing",
		onBoost(boost, target, source, effect) {
			if (source && target === source) return;
			if (boost.spe && boost.spe < 0) {
				delete boost.spe;
				if (!(effect as ActiveMove).secondaries && effect.id !== 'octolock') {
					this.add("-fail", target, "unboost", "Speed", "[from] ability: Gallant", "[of] " + target);
				}
			}
		},
		name: "Gallant",
		rating: 0.5,
		num: 145,
	},
	itshoney: {
		isNonstandard: "Thing",
		name: "It's Honey",
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			if (!target.hp) {
				this.heal(target.baseMaxhp, source, target);
			} else if (move.flags['bite']) {
				this.heal(target.baseMaxhp / 8, source, target);
			}
		},
		rating: 1,
		num: 1106,
	},
	a81117y: {
		isNonstandard: "Thing",
		onStart(target) {
			const abilities: AbilityData[] = [];
			for (const id in Abilities) {
				const ability = Abilities[id];
				if ((ability.isNonstandard !== 'Thing' && ability.isNonstandard !== 'ThingInf') || ability.name === 'a81117y') continue;
				abilities.push(ability);
			}
			let randomAbility = '';
			if (abilities.length) {
				abilities.sort((a, b) => a.num! - b.num!);
				randomAbility = this.sample(abilities).name;
			}
			if (!randomAbility) {
				return false;
			}
			this.add('A81117y', this.effectState.target, randomAbility, '[from] ability: A81117y', '[of] ' + target);
			target.setAbility(randomAbility);
		},
		name: "A81117y",
		rating: 0,
		num: 1223,
	},
	b92228z: {
		isNonstandard: "ThingInf",
		onAfterMega(target) {
			const abilities: AbilityData[] = [];
			for (const id in Abilities) {
				const ability = Abilities[id];
				if (ability.isNonstandard !== 'ThingInf' || ability.name === 'B92228z') continue;
				abilities.push(ability);
			}
			let randomAbility = '';
			if (abilities.length) {
				abilities.sort((a, b) => a.num! - b.num!);
				randomAbility = this.sample(abilities).name;
			}
			if (!randomAbility) {
				console.log("no valid abilities?");
				return false;
			}
			this.add('B92228z', this.effectState.target, randomAbility, '[from] ability: B92228z', '[of] ' + target);
			target.setAbility(randomAbility);
		},
		// lookup effect implemented in the move
		name: "B92228z",
		rating: 0,
		num: 1223,
	},
	noteofintroduction: {
		isNonstandard: "Thing",
		onStart(pokemon) {
			if (this.field.isTerrain('mysticalsong')) {
				const sflags = ['nopriority', 'nostatus', 'noprone', 'nobanished', 'noblinded', 'nopressurized', 'nofluctuant', 'nowounded', 'nodistanced', 'noinfected', 'novolatiles',
					'atkup', 'atkdown', 'defup', 'defdown', 'spaup', 'spadown', 'speup', 'spedown',
					'atkboost', 'atkreduce', 'defboost', 'defreduce', 'spaboost', 'spareduce', 'spdboost', 'spdreduce', 'speboost', 'spereduce',
					'hurt', 'heal'];
				const randomFlag = this.sample(sflags);
				if (this.field.activeFlags.length && this.field.activeFlags.includes(randomFlag)) return;
				this.field.activeFlags.push(randomFlag);
				this.hint("Note of Introduction: " + randomFlag);
				if (this.blessedLand) {
					const randomFlag2 = this.sample(sflags);
					if (this.field.activeFlags.length && this.field.activeFlags.includes(randomFlag2)) return;
					this.field.activeFlags.push(randomFlag2);
					this.hint("Note of Introduction: " + randomFlag2);
				}
			}
		},
		onAnyTerrainStart() {
			if (this.field.isTerrain('mysticalsong')) {
				const sflags = ['nopriority', 'nostatus', 'noprone', 'nobanished', 'noblinded', 'nopressurized', 'nofluctuant', 'nowounded', 'nodistanced', 'noinfected', 'novolatiles',
					'atkup', 'atkdown', 'defup', 'defdown', 'spaup', 'spadown', 'speup', 'spedown',
					'atkboost', 'atkreduce', 'defboost', 'defreduce', 'spaboost', 'spareduce', 'spdboost', 'spdreduce', 'speboost', 'spereduce',
					'hurt', 'heal'];
				const randomFlag = this.sample(sflags);
				if (this.field.activeFlags.length && this.field.activeFlags.includes(randomFlag)) return;
				this.field.activeFlags.push(randomFlag);
				this.hint("Note of Introduction: " + randomFlag);
				if (this.blessedLand) {
					const randomFlag2 = this.sample(sflags);
					if (this.field.activeFlags.length && this.field.activeFlags.includes(randomFlag2)) return;
					this.field.activeFlags.push(randomFlag2);
					this.hint("Note of Introduction: " + randomFlag2);
				}
			}
		},
		name: "Note of Introduction",
		rating: 2,
		num: 2150,
	},
	communal: {
		isNonstandard: "Thing",
		onModifyAtkPriority: 5,
		onModifyAtk(spa, pokemon) {
			if (pokemon.side.active.length === 1) {
				return;
			}
			for (const allyActive of pokemon.side.active) {
				if (
					allyActive && allyActive.position !== pokemon.position &&
					!allyActive.fainted && allyActive.hasAbility(['communal'])
				) {
					return this.chainModify(1.5);
				}
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(spa, pokemon) {
			if (pokemon.side.active.length === 1) {
				return;
			}
			for (const allyActive of pokemon.side.active) {
				if (
					allyActive && allyActive.position !== pokemon.position &&
					!allyActive.fainted && allyActive.hasAbility(['communal'])
				) {
					return this.chainModify(1.5);
				}
			}
		},
		name: "Communal",
		rating: 1,
		num: 1158,
	},
	conductor: {
		isNonstandard: "Thing",
		onResidual() {
			if (this.field.isTerrain('mysticalsong')) {
				const sflags = ['nopriority', 'nostatus', 'noprone', 'nobanished', 'noblinded', 'nopressurized', 'nofluctuant', 'nowounded', 'nodistanced', 'noinfected', 'novolatiles',
					'atkup', 'atkdown', 'defup', 'defdown', 'spaup', 'spadown', 'speup', 'spedown',
					'atkboost', 'atkreduce', 'defboost', 'defreduce', 'spaboost', 'spareduce', 'spdboost', 'spdreduce', 'speboost', 'spereduce',
					'hurt', 'heal'];
				const randomFlag = this.sample(sflags);
				if (this.field.activeFlags.length && this.field.activeFlags.includes(randomFlag)) return;
				this.field.activeFlags.push(randomFlag);
				this.hint("Conductor: " + randomFlag);
				if (this.blessedLand) {
					const randomFlag2 = this.sample(sflags);
					if (this.field.activeFlags.length && this.field.activeFlags.includes(randomFlag2)) return;
					this.field.activeFlags.push(randomFlag2);
					this.hint("Conductor: " + randomFlag2);
				}
			}
		},
		name: "Conductor",
		rating: 4,
		num: 2150,
	},
	hazardous: {
		isNonstandard: "Thing",
		onModifyMovePriority: -5,
		onModifyMove(move) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Liquid'] = true;
			}
		},
		name: "Hazardous",
		rating: 3,
		num: 113,
	},
	fiery: {
		isNonstandard: "Thing",
		onDamagingHit(damage, target, source, move) {
			if (move.flags['contact']) {
				if (this.randomChance(3, 10)) {
					source.trySetStatus('fluctuant', target);
				}
			}
		},
		name: "Fiery",
		rating: 3,
		num: -1013,
	},
	repetitivebeat: {
		isNonstandard: "Thing",
		onResidual(source) {
			if (this.field.getPseudoWeather('timeloop')) {
				this.field.pseudoWeather['timeloop'].duration = 5;
			} else {
				this.field.addPseudoWeather('timeloop', source);
			}
		},
		onEnd(pokemon) {
			this.field.removePseudoWeather('timeloop');
		},
		name: "Repetitive Beat",
		rating: 4,
		num: 190,
	},
	chilled: {
		isNonstandard: "Thing",
		onModifySpD(spd, pokemon) {
			if (['cold'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(2);
			}
		},
		name: "Chilled",
		rating: 3,
		num: 134,
	},
	replicator: {
		isNonstandard: "Thing",
		onResidual(pokemon) {
			const additionalBannedAbilities = ['replicator'];
			let multiplier = 0;
			for (const foe of pokemon.foes()) {
				if (!foe?.isActive || foe === pokemon || additionalBannedAbilities.includes(foe.ability) || foe.species !== pokemon.species) continue;
				multiplier++;
			}
			for (const ally of pokemon.allies()) {
				if (!ally?.isActive || ally === pokemon || additionalBannedAbilities.includes(ally.ability) || ally.species !== pokemon.species) continue;
				multiplier++;
			}
			if (multiplier > 0) {
				const boost: SparseBoostsTable = {};
				let statPlus: BoostID;
				for (statPlus in pokemon.boosts) {
					if (statPlus === 'accuracy' || statPlus === 'evasion') continue;
					if (pokemon.boosts[statPlus] < 6) {
						boost[statPlus] = multiplier;
					}
				}
				this.boost(boost);
			}
		},
		name: "Replicator",
		rating: 0,
		num: 58,
	},
	longgame: {
		isNonstandard: "Thing",
		onModifyPriority(priority, pokemon, target, move) {
			for (const foeActive of pokemon.foes()) {
				if (foeActive.hp === foeActive.maxhp) {
					return priority + 1;
				}
			}
		},
		onResidual(pokemon) {
			if (!pokemon.isActive || pokemon.baseSpecies.baseSpecies !== 'Tacilinks' || pokemon.transformed) return;
			if (!pokemon.hp) return;
			for (const foeActive of pokemon.foes()) {
				if (foeActive.hp < foeActive.maxhp * 2 / 10) {
					if (pokemon.species.id !== 'tacilinksputt') {
						pokemon.formeChange('Tacilinks-Putt', this.effect, false, '[msg]');
						this.add('-activate', pokemon, 'ability: Long Game');
						pokemon.setAbility('shortgame');
					}
				}
			}
		},
		name: "Long Game",
		rating: 1,
		num: 528,
	},
	shortgame: {
		isNonstandard: "Thing",
		onSourceModifyDamage(damage, source, target, move) {
			if (source.hp < source.maxhp / 2) {
				this.debug('Short Game weaken');
				return this.chainModify((source.hp * 2) / source.maxhp);
			}
		},
		onResidual(pokemon) {
			if (!pokemon.isActive || pokemon.baseSpecies.baseSpecies !== 'Tacilinks' || pokemon.transformed) return;
			if (!pokemon.hp) return;
			for (const foeActive of pokemon.foes()) {
				if (foeActive.hp < foeActive.maxhp * 5 / 10) {
					return;
				}
			}
			if (pokemon.species.id === 'tacilinksputt') {
				pokemon.formeChange('Tacilinks', this.effect, false, '[msg]');
				this.add('-ability', pokemon, 'longgame', '[from] ability: Short Game');
				pokemon.setAbility('longgame');
			}
		},
		name: "Short Game",
		rating: 1,
		num: 528,
	},
	agilebouncer: {
		isNonstandard: "Thing",
		onModifySpe(spe) {
			if (this.field.isTerrain('springfloor')) {
				return this.chainModify(2);
			}
		},
		name: "Agile Bouncer",
		rating: 3,
		num: 207,
	},
	powerbouncer: {
		isNonstandard: "Thing",
		onModifyAtk(atk) {
			if (this.field.isTerrain('springfloor')) {
				return this.chainModify(2);
			}
		},
		onModifyPriority(priority, pokemon, target, move) {
			if (this.field.isTerrain('springfloor')) {
				return priority - 1;
			}
		},
		name: "Power Bouncer",
		rating: 3,
		num: 207,
	},
	aonetwothree: {
		isNonstandard: "Thing",
		onStart(pokemon) {
			for (const allyActive of pokemon.allies()) {
				if (allyActive.hasAbility(['aonetwothree'])) {
					this.field.setTerrain('mysticalsong');
					const sflags = ['nopriority', 'nostatus', 'noprone', 'nobanished', 'noblinded', 'nopressurized', 'nofluctuant', 'nowounded', 'nodistanced', 'noinfected', 'novolatiles',
						'atkup', 'atkdown', 'defup', 'defdown', 'spaup', 'spadown', 'speup', 'spedown',
						'atkboost', 'atkreduce', 'defboost', 'defreduce', 'spaboost', 'spareduce', 'spdboost', 'spdreduce', 'speboost', 'spereduce',
						'hurt', 'heal'];
					const randomFlag = this.sample(sflags);
					if (this.field.activeFlags.length && this.field.activeFlags.includes(randomFlag)) return;
					this.field.activeFlags.push(randomFlag);
					this.hint("A One, Two, Three...: " + randomFlag);
					if (this.blessedLand) {
						const randomFlag2 = this.sample(sflags);
						if (this.field.activeFlags.length && this.field.activeFlags.includes(randomFlag2)) return;
						this.field.activeFlags.push(randomFlag2);
						this.hint("Note of Introduction: " + randomFlag2);
					}
				}
			}
		},
		name: "A One, Two, Three...",
		rating: 3,
		num: 207,
	},
	toofaraway: {
		isNonstandard: "Thing",
		onTryHit(target, source, move) {
			if (target === source || move.category === 'Status') return;
			if (this.checkMoveMakesContact(move, source, target) && !target.volatiles['toofaraway']) {
				this.add('-ability', target, 'Too Far Away');
				target.addVolatile('toofaraway');
				this.add('-start', target, 'Too Far Away');
				return false;
			}
		},
		name: "Too Far Away",
		rating: 3,
		num: 529,
	},
	legendsoftreasure: {
		isNonstandard: "Thing",
		onStart(target) {
			this.add('-activate', target, 'ability: Legends of Treasure');
			// eslint-disable-next-line max-len
			this.effectState.treasures = ['Ceremonial Scarab Hairpin', 'Lunar Soil', 'Space Telescope', 'Sarcopharyn Skeleton', 'Extraterrestrial Globe', 'Historiography', 'Fiber Optic Cable', 'Discarded Singularity', 'Lava Lamp', 'Bone Flute', 'Bottle of Condensed Nebula Gas', 'empty', 'Trans-warp Space Probe', 'All-sports Ball', 'Jeweled Falchion', 'Sealed Vacuum Flask', 'Really, Really Thick Calendar', 'Cloud Seeder', 'Magnetically-locked Yellow Dwarf Star'];
		},
		onAfterMoveSecondary(target, source) {
			if (target === source || !this.effectState.treasures.length) return;
			const treasure = this.effectState.treasures.splice(Math.floor(Math.random() * this.effectState.treasures.length), 1)[0];
			if (treasure === 'empty') {
				this.hint(`${source.name} found an empty train car...`);
			} else {
				this.hint(`${source.name} found the ${treasure} in one of ${target.name}'s cars!`);
			}
			switch (treasure) {
			case 'Ceremonial Scarab Hairpin':
				this.heal(source.baseMaxhp / 4, source, target, null);
				this.boost({def: 2, spd: 2}, source, target, null, true);
				break;
			case 'Lunar Soil':
				this.boost({accuracy: -1}, target, target, null, true);
				target.side.addSideCondition('dustcloud');
				break;
			case 'Space Telescope':
				source.addVolatile('calibration');
				break;
			case 'Sarcopharyn Skeleton':
				this.boost({evasion: 1}, source, target, null, true);
				source.addVolatile('depthvanish');
				break;
			case 'Extraterrestrial Globe':
				this.boost({def: -1, spd: -1}, target, target, null, true);
				target.addType('Green');
				this.add('-start', target, 'typeadd', 'Green');
				break;
			case 'Historiography':
				break;
			case 'Fiber Optic Cable':
				this.boost({atk: 1, spa: 1}, source, target, null, true);
				target.side.addSideCondition('beamfield');
				break;
			case 'Discarded Singularity':
				this.boost({spa: 2}, source, target, null, true);
				target.addVolatile('study');
				break;
			case 'Lava Lamp':
				this.boost({spe: -2}, target, target, null, true);
				target.side.addSideCondition('wetfloor');
				break;
			case 'Bone Flute':
				this.boost({spa: 2}, source, target, null, true);
				break;
			case 'Bottle of Condensed Nebula Gas':
				this.boost({def: 2}, source, target, null, true);
				target.addVolatile('trapped');
				break;
			case 'Trans-warp Space Probe':
				this.boost({spe: 12}, source, target, null, true);
				break;
			case 'All-sports Ball':
				target.addVolatile('wager', source, this.effect);
				this.boost({atk: 2}, source, target, null, true);
				break;
			case 'Jeweled Falchion':
				this.boost({atk: 2}, source, target, null, true);
				target.trySetStatus('wounded');
				break;
			case 'Sealed Vacuum Flask':
				break;
			case 'Really, Really Thick Calendar':
				break;
			case 'Cloud Seeder':
				source.side.addSideCondition('stormcell', source, this.effect);
				break;
			case 'Magnetically-locked Yellow Dwarf Star':
				source.addVolatile('fireworked');
				break;
			}
			this.boost({atk: 1, spa: 1, spe: -1}, target, target, null, true);
		},
		name: "Legends of Treasure",
		rating: 5,
		num: 529,
	},
	cargofromeverywhen: {
		isNonstandard: "Thing",
		onStart(target) {
			this.add('-activate', target, 'ability: Cargo from Everywhen');
		},
		onAfterMoveSecondary(target, source) {
			if (target === source) return;

			// eslint-disable-next-line max-len
			const adj = [' bright', ' premium', ' spiritual', ' marked', ' draconian', 'n adhesive', ' bitter', ' slippery', ' second-hand', ' splendid', ' barbarous', 'n ancient', 'n infamous', ' freezing', ' magnificent', ' heavy', ' secretive', ' lumpy', ' scattered', 'n acoustic', 'n unkempt', ' functional', ' flat', ' used', ' rustic', ' hollow', ' dark', ' powerful', 'n obtainable', 'n alive', 'n automatic', ' plastic'];
			// eslint-disable-next-line max-len
			const noun = ['dress', 'throne', 'brush', 'basin', 'coil', 'cup', 'potato', 'match', 'cannon', 'milk', 'drawer', 'carriage', 'insect', 'zipper', 'bee', 'pen', 'horse', 'appliance', 'book', 'powder', 'calendar', 'gun', 'patch', 'airplane', 'goose', 'lock', 'hole', 'game', 'station', 'giraffe', 'clam', 'donkey', 'crow', 'iron', 'oil', 'kettle', 'linen', 'orange', 'frog', 'glue', 'finger', 'boat', 'flag', 'mint', 'toy', 'egg', 'basket', 'wood', 'rake'];
			this.hint(`${source.name} found a${adj[Math.floor(Math.random() * adj.length)]} ${noun[Math.floor(Math.random() * noun.length)]} in one of ${target.name}'s cars!`);

			const wTable = [5, 3, 2, 1];
			let r = Math.random() * 11;
			let sum = 0;
			for (const [index, value] of wTable.entries()) {
				sum += value;
				if (r <= sum) {
					r = index;
					break;
				}
			}

			switch (r) {
			case 0:
				const stats: BoostID[] = ["atk", "def", "spa", "spd", "spe", "accuracy", "evasion"];
				const boost: SparseBoostsTable = {};
				for (let i = Math.floor(Math.random() * 3) + 1; i > 0; i--) {
					const rand = Math.floor(Math.random() * stats.length);
					const randomStat: BoostID = stats[rand];
					stats.splice(rand, 1);
					if (randomStat) boost[randomStat] = (7 - Math.floor(Math.sqrt(Math.floor(Math.random() * 36) + 1)));
				}
				this.boost(boost, source, target, null, true);
				break;
			case 1:
				const environmentalfactors = ['locustswarm', 'nighttime', 'windy', 'yellowish', 'hot', 'cold', 'timedilation', 'underwater', 'meteorshower'];
				this.field.setWeather(this.sample(environmentalfactors));
				break;
			case 2:
				const sideconditions = ['duststorm', 'hotcoals', 'permafrost', 'wetfloor', 'beamfield', 'stormcell', 'voidtrap', 'autoturret', 'caltrops'];
				source.side.addSideCondition(this.sample(sideconditions));
				break;
			case 3:
				const typePool = ['Arthropod', 'Dirt', 'Far', 'Fish', 'Green', 'H', 'Hair', 'Industrial', 'Liquid', 'Music', 'Night', 'No', 'Science', 'Sport', 'Sword', 'Temperature', 'Time', 'Weather', 'Yellow'];
				const type = this.sample(typePool);
				source.addType(type);
				this.add('-start', source, 'typeadd', type);
				break;
			}

			this.boost({def: -1, spd: -1, spe: 1}, target, target, null, true);
		},
		isPermanent: true,
		name: "Cargo from Everywhen",
		rating: 5,
		num: 529,
	},
	sodaspreader: {
		isNonstandard: "Thing",
		onAfterMoveSecondarySelf(source, target, move) {
			if (move.flags['soda']) {
				// this.field.setTerrain('stickysituation');
			}
		},
		name: "Soda Spreader",
		rating: 4,
		num: 1191,
	},
	photosynthetic: {
		isNonstandard: "Thing",
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Yellow') {
				if (!this.heal(target.baseMaxhp / 4)) {
					this.add('-immune', target, '[from] ability: Photosynthetic');
				}
				return null;
			}
		},
		isBreakable: true,
		name: "Photosynthetic",
		rating: 3.5,
		num: 10,
	},
	furtheraway: {
		isNonstandard: "Thing",
		onStart(source) {
			source.trySetStatus('distanced', source);
		},
		name: "Further Away",
		rating: 3.5,
		num: 228,
	},
	spaced: {
		isNonstandard: "Thing",
		onStart(source) {
			this.field.setTerrain('spatialexpansion');
		},
		name: "Spaced",
		rating: 3.5,
		num: 228,
	},
	halffull: {
		isNonstandard: "Thing",
		onModifyMovePriority: 1,
		onModifyMove(move, source) {
			if (source.baseSpecies.baseSpecies !== 'Mistimink' || source.transformed) return;
			let forme = null;
			const type = move.type;
			switch (source.species.id) {
			case 'mistimink':
				if (type && type === 'Liquid') {
					forme = 'Mistimink-Optimist';
				} else if (type && type === 'No') {
					forme = 'Mistimink-Pessimist';
				}
				break;
			case 'mistiminkpessimist':
				if (type && type === 'Liquid') {
					forme = 'Mistimink';
				}
				break;
			case 'mistiminkoptimist':
				if (type && type === 'No') {
					forme = 'Mistimink';
				}
				break;
			}
			if (source.isActive && forme) source.formeChange(forme, this.effect, false, '[msg]');
		},
		isPermanent: true,
		name: "Half-Full",
		rating: 2,
		num: 59,
	},
	changeevent: {
		isNonstandard: "Thing",
		onModifyMovePriority: 1,
		onModifyMove(move, source) {
			if (source.baseSpecies.baseSpecies !== 'Triathlide' || source.transformed) return;
			let forme = null;
			switch (move.category) {
			case 'Status':
				forme = 'Triathlide-Cycle';
				break;
			case 'Special':
				forme = 'Triathlide-Swim';
				break;
			case 'Physical':
				forme = 'Triathlide';
				break;
			}
			if (source.species.name !== forme) source.formeChange(forme, this.effect, false, '[msg]');
		},
		isPermanent: true,
		name: "Change Event",
		rating: 4,
		num: 176,
	},
	cumulate: {
		isNonstandard: "Thing",
		onSwitchIn(pokemon) {
			for (const moveSlot of pokemon.moveSlots) {
				if (moveSlot.maxpp === moveSlot.pp) continue;
				if (moveSlot.maxpp - moveSlot.pp > 5) {
					moveSlot.pp += 5;
				} else {
					moveSlot.pp = moveSlot.maxpp;
				}
			}
		},
		name: "Cumulate",
		rating: 4,
		num: 176,
	},
	quickblade: {
		isNonstandard: "Thing",
		name: "Quick Blade",
		rating: 4,
		num: 1191,
	},
	resonance: {
		isNonstandard: "Thing",
		onDamagingHit(damage, target, source, move) {
			if (target.getMoveHitData(move).typeMod > 0) {
				if (move.category === 'Physical') {
					this.boost({atk: 2});
				} else if (move.category === 'Special') {
					this.boost({spa: 2});
				}
			}
		},
		name: "Resonance",
		rating: 2.5,
		num: 154,
	},
	bouncy: {
		isNonstandard: "Thing",
		onDamagingHit(damage, target, source, move) {
			const hitMove = this.dex.getActiveMove('Ball Bounce');
			if (move.name === 'Riposte') return;
			hitMove.category = move.category;
			hitMove.basePower = move.basePower / 2;
			if (source !== null && target !== null && target.hp) {
				this.add('-activate', target, 'ability: Bouncy');
				this.actions.trySpreadMoveHit([source], target, hitMove, true);
			}
		},
		name: "Bouncy",
		rating: 2.5,
		num: 154,
	},
	shininghair: {
		isNonstandard: "Thing",
		/* onSourceEffectiveness(typeMod, target, type, move) {
			if(move.type === 'Hair') {
				return typeMod + this.dex.getEffectiveness('Yellow', type);
			}
		},
		onModifyMovePriority: -5,
		onModifyMove(move) {
			if (move.type !== 'Hair') return;
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Yellow'] = true;
			}
		}, */
		onAfterMoveSecondarySelf(source, target, move) {
			if (move.type === 'Hair') {
				this.field.setWeather('yellowish');
			}
		},
		name: "Shining Hair",
		rating: 3,
		num: 113,
	},
	uhoh: {
		isNonstandard: "Thing",
		name: "Uh oh",
		onDamagingHit(damage, target, source, move) {
			const sourceAbility = source.getAbility();
			if (sourceAbility.isPermanent || sourceAbility.id === 'uhoh') {
				return;
			}
			if (this.checkMoveMakesContact(move, source, target, !source.isAlly(target))) {
				const oldAbility = source.setAbility('uhoh', target);
				if (oldAbility) {
					this.add('-activate', target, 'ability: Uh oh', this.dex.abilities.get(oldAbility).name, '[of] ' + source);
					this.add('-ability', source, source.getAbility().name, '[from] ability: Uh oh');
				}
			}
		},
		onSourceHit(target, source, move) {
			const targetAbility = target.getAbility();
			if (targetAbility.isPermanent || targetAbility.id === 'uhoh') {
				return;
			}
			if (this.checkMoveMakesContact(move, source, target, !source.isAlly(target))) {
				const oldAbility = target.setAbility('uhoh', source);
				if (oldAbility) {
					this.add('-activate', source, 'ability: Uh oh', this.dex.abilities.get(oldAbility).name, '[of] ' + target);
					this.add('-ability', target, target.getAbility().name, '[from] ability: Uh oh');
				}
			}
		},
		rating: 2,
		num: 152,
	},
	colossal: {
		isNonstandard: "Thing",
		onDamagingHit(damage, target, source, move) {
			if (move.category === 'Physical') {
				this.add('-activate', this.effectState.target, 'ability: Colossal');
				this.boost({def: -1}, target, target, this.effect, true);
			} else if (move.category === 'Special') {
				this.add('-activate', this.effectState.target, 'ability: Colossal');
				this.boost({spd: -1}, target, target, this.effect, true);
			}
		},
		onSourceHit(target, source, move) {
			if (move.category === 'Physical') {
				this.add('-activate', this.effectState.target, 'ability: Colossal');
				this.boost({def: -1}, target, source, this.effect, true);
			} else if (move.category === 'Special') {
				this.add('-activate', this.effectState.target, 'ability: Colossal');
				this.boost({spd: -1}, target, source, this.effect, true);
			}
		},
		onSwitchOut(pokemon) {
			pokemon.damage(pokemon.baseMaxhp / 3, pokemon);
		},
		name: "Colossal",
		rating: 3,
		num: 113,
	},
	sedimentary: {
		isNonstandard: "Thing",
		onAnyTerrainStart() {
			const pokemon = this.effectState.target;
			let newType;
			switch (this.field.terrain) {
			case 'richsoil':
				newType = 'Dirt';
				break;
			case 'spatialexpansion':
				newType = 'Far';
				break;
			case 'greenground':
				newType = 'Green';
				break;
			case 'sudscape':
				newType = 'Liquid';
				break;
			case 'mysticalsong':
				newType = 'Music';
				break;
			case 'nullland':
				newType = 'No';
				break;
			case 'springfloor':
				newType = 'Sport';
				break;
			}
			if (!newType) {
				return false;
			}
			if (!pokemon.addType(newType)) return false;
			this.add('-start', pokemon, 'typeadd', newType, '[from] ability: Sedimentary');

			if (pokemon.isActive && pokemon.baseSpecies.baseSpecies === 'Litheath' && !pokemon.transformed) {
				switch (this.field.terrain) {
				case 'richsoil':
					if (pokemon.species.id !== 'litheathsoil') {
						pokemon.formeChange('Litheath-Soil', this.effect, false, '[msg]');
					}
					break;
				case 'spatialexpansion':
					if (pokemon.species.id !== 'litheathexpansion') {
						pokemon.formeChange('Litheath-Expansion', this.effect, false, '[msg]');
					}
					break;
				case 'greenground':
					if (pokemon.species.id !== 'litheathgreen') {
						pokemon.formeChange('Litheath-Green', this.effect, false, '[msg]');
					}
					break;
				case 'sudscape':
					if (pokemon.species.id !== 'litheathsuds') {
						pokemon.formeChange('Litheath-Suds', this.effect, false, '[msg]');
					}
					break;
				case 'mysticalsong':
					if (pokemon.species.id !== 'litheathsong') {
						pokemon.formeChange('Litheath-Song', this.effect, false, '[msg]');
					}
					break;
				case 'nullland':
					if (pokemon.species.id !== 'litheathnull') {
						pokemon.formeChange('Litheath-Null', this.effect, false, '[msg]');
					}
					break;
				case 'springfloor':
					if (pokemon.species.id !== 'litheathspring') {
						pokemon.formeChange('Litheath-Spring', this.effect, false, '[msg]');
					}
					break;
				}
			}
		},
		name: "Sedimentary",
		rating: 1,
		num: 250,
	},
	breezy: {
		isNonstandard: "Thing",
		onStart(source) {
			this.field.setWeather('windy');
		},
		name: "Breezy",
		rating: 4,
		num: 2,
	},
	disaster: {
		isNonstandard: "ThingInf",
		onAfterMega(pokemon) {
			for (const foe of pokemon.foes()) {
				if (!foe?.isActive || foe === pokemon) continue;
				const oldAbility = foe.setAbility('unstable', pokemon);
				if (oldAbility) {
					// this.add('-activate', pokemon, 'ability: Disaster', this.dex.abilities.get(oldAbility).name, '[of] ' + pokemon);
					this.add('-ability', foe, foe.getAbility().name, '[from] ability: Disaster');
				}
			}
			for (const ally of pokemon.allies()) {
				if (!ally?.isActive || ally === pokemon) continue;
				const oldAbility = ally.setAbility('unstable', pokemon);
				if (oldAbility) {
					// this.add('-activate', pokemon, 'ability: Disaster', this.dex.abilities.get(oldAbility).name, '[of] ' + ally);
					this.add('-ability', ally, ally.getAbility().name, '[from] ability: Disaster');
				}
			}
			this.actions.useMove('thermalexplosion', pokemon);
		},
		name: "Disaster",
		rating: 4,
		num: 2111,
	},
	vindictive: {
		isNonstandard: "ThingInf",
		name: "Vindictive",
		onStart(pokemon) {
			if (pokemon.hp === 1) {
				this.boost({atk: 2, spe: 2}, pokemon, pokemon, null, true);
			}
		},
		rating: 2.5,
		num: 139,
	},
	unify: {
		isNonstandard: "ThingInf",
		name: "Unify",
		onAfterMega(source) {
			let count = 0;
			count += source.foes(true).filter(pokemon => pokemon.species.id === 'myomimeo').length;
			if (count > 1) this.heal(source.baseMaxhp);

			count += source.alliesAndSelf(true).filter(pokemon => pokemon.species.id === 'myomimeo').length;
			if (count > 3) {
				for (const foe of source.foes()) {
					if (!foe?.isActive || foe === source) continue;
					foe.addVolatile('study');
				}
			}
			if (count > 5) this.field.setTerrain('nullland');
			if (count > 10) source.addVolatile('calibration');
		},
		onModifyAtk(atk, source) {
			let count = 1;

			count += source.foes(true).filter(pokemon => pokemon.species.id === 'myomimeo').length;
			count += source.alliesAndSelf(true).filter(pokemon => pokemon.species.id === 'myomimeo').length;

			return this.chainModify(count);
		},
		onModifyDef(def, source) {
			let count = 1;

			count += source.foes(true).filter(pokemon => pokemon.species.id === 'myomimeo').length;
			count += source.alliesAndSelf(true).filter(pokemon => pokemon.species.id === 'myomimeo').length;

			return this.chainModify(count);
		},
		onModifySpA(spa, source) {
			let count = 1;

			count += source.foes(true).filter(pokemon => pokemon.species.id === 'myomimeo').length;
			count += source.alliesAndSelf(true).filter(pokemon => pokemon.species.id === 'myomimeo').length;

			return this.chainModify(count);
		},
		onModifySpD(spd, source) {
			let count = 1;

			count += source.foes(true).filter(pokemon => pokemon.species.id === 'myomimeo').length;
			count += source.alliesAndSelf(true).filter(pokemon => pokemon.species.id === 'myomimeo').length;

			return this.chainModify(count);
		},
		onModifySpe(spe, source) {
			let count = 1;

			count += source.foes(true).filter(pokemon => pokemon.species.id === 'myomimeo').length;
			count += source.alliesAndSelf(true).filter(pokemon => pokemon.species.id === 'myomimeo').length;

			return this.chainModify(count);
		},
		rating: 2.5,
		num: 139,
	},
	withgun: {
		isNonstandard: "Thing",
		name: "With Gun",
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			if (this.randomChance(1, 3)) {
				if (pokemon.hp && !pokemon.item) {
					pokemon.setItem('gun');
					pokemon.lastItem = '';
					this.add('-item', pokemon, pokemon.getItem(), '[from] ability: With Gun');
				}
			}
		},
		rating: 2.5,
		num: 139,
	},
	marksman: {
		isNonstandard: "Thing",
		onBasePowerPriority: 30,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['bullet']) {
				this.debug('Marksman boost');
				return this.chainModify(1.5);
			}
		},
		onSourceModifyAccuracyPriority: -1,
		onSourceModifyAccuracy(accuracy) {
			if (typeof accuracy !== 'number') return;
			this.debug('marksman - enhancing accuracy');
			return this.chainModify(1.5);
		},
		name: "Marksman",
		rating: 3,
		num: 171,
	},
	gunaura: {
		isNonstandard: "Thing",
		onAllyBasePowerPriority: 22,
		onAllyBasePower(basePower, attacker, defender, move) {
			if (move.name === 'Shoot') {
				this.debug('Gun Aura boost');
				return this.chainModify(2);
			}
		},
		name: "Gun Aura",
		rating: 3.5,
		num: 252,
	},
	genesis: {
		isNonstandard: "Thing",
		onSwitchInPriority: -10,
		onSwitchIn(pokemon) {
			if (!pokemon.addType('Green')) return false;
			this.add('-start', pokemon, 'typeadd', 'Green', '[from] ability: Genesis');
		},
		name: "Genesis",
		rating: 3.5,
		num: 252,
	},
	allseeing: {
		isNonstandard: "ThingInf",
		onAnyInvulnerabilityPriority: 1,
		onAnyInvulnerability(target, source, move) {
			if (move && (source === this.effectState.target)) return 0;
		},
		onAnyAccuracy(accuracy, target, source, move) {
			if (move && (source === this.effectState.target)) {
				return true;
			}
			return accuracy;
		},
		name: "All-Seeing",
		rating: 5,
		num: 252,
	},
	beeretribution: {
		isNonstandard: "ThingInf",
		onStart(pokemon) {
			const atkBoost = pokemon.boosts.atk;
			if (atkBoost < 1) return;
			for (const foe of pokemon.foes()) {
				if (!foe?.isActive || foe === pokemon) continue;
				this.add('-ability', pokemon, 'Bee Retribution');
				this.boost({atk: -atkBoost}, foe, pokemon, null, true);
			}
		},
		name: "Bee Retribution",
		rating: 5,
		num: 252,
	},
	furthestaway: {
		isNonstandard: "ThingInf",
		onStart(source) {
			this.add('-activate', source, 'ability: Furthest Away');
			for (const thing of this.getAllActive()) {
				if (thing.fainted || !thing.hp) continue;
				thing.trySetStatus('distanced', source);
			}
		},
		name: "Furthest Away",
		rating: 5,
		num: 228,
	},
	zoom: {
		isNonstandard: "Thing",
		onAfterEachBoost(boost, target, source, effect) {
			if (boost.spe) {
				this.boost({evasion: boost.spe}, target, target, null, true);
			}
		},
		name: "Zoom",
		rating: 3,
		num: -128,
	},
	double: {
		isNonstandard: "ThingInf",
		onPrepareHit(source, target, move) {
			if (move.category === 'Status' || move.selfdestruct || move.multihit) return;
			if (['endeavor', 'fling', 'iceball', 'rollout'].includes(move.id)) return;
			if (!move.flags['charge'] && !move.spreadHit && !move.isZ && !move.isMax) {
				move.multihit = 2;
				move.multihitType = 'double';
			}
		},
		name: "Double",
		rating: 4.5,
		num: 185,
	},
	encompassingflow: {
		isNonstandard: "Thing",
		onModifyMovePriority: 1,
		onAnyModifyMove(move) {
			move.forceSTAB = true;
		},
		name: "Encompassing Flow",
		rating: 4.5,
		num: 185,
	},
	omnicide: {
		isNonstandard: "ThingInf",
		onModifyDamage(damage, source, target, move) {
			if (move && target.getMoveHitData(move).typeMod <= 0) {
				return this.chainModify(2);
			}
		},
		isPermanent: true,
		name: "Omnicide",
		rating: 4.5,
		num: 185,
	},
	compartments: {
		isNonstandard: "Thing",
		onAfterMoveSecondarySelf(source, target, move) {
			if (!move || !target) return;
			if (target !== source && move.category !== 'Status') {
				const types = target.getTypes();
				let success = false;
				types.forEach(type => { if (source.addElementType(type)) success = true; });
				if (success) {
					this.add('-ability', source, 'Compartments');
					this.add('-start', source, 'elementtypes', source.elementTypes.join('/'), '[silent]');
				}
			}
		},
		name: "Compartments",
		rating: 4.5,
		num: 185,
	},
	composting: {
		isNonstandard: "ThingInf",
		onResidual(pokemon) {
			pokemon.alliesAndSelf().forEach(
				pkmn => {
					if (pkmn.addElementType('Green')) this.add('-start', pkmn, 'elementtypes', pkmn.elementTypes.join('/'));
				}
			);
			pokemon.foes().forEach(
				pkmn => {
					if (pkmn.addElementType('Green')) this.add('-start', pkmn, 'elementtypes', pkmn.elementTypes.join('/'));
				}
			);
		},
		isPermanent: true,
		name: "Composting",
		rating: 4.5,
		num: 185,
	},
	honing: {
		isNonstandard: "Thing",
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			if (pokemon.activeTurns) {
				this.boost({atk: 1});
			}
		},
		name: "Honing",
		rating: 4.5,
		num: 3,
	},
	magictouch: {
		isNonstandard: "ThingInf",
		onSourceHit(target, source, move) {
			if (!move) return;
			if (!move.flags['contact']) return;

			const stats: BoostID[] = [];
			const boost: SparseBoostsTable = {};
			let statPlus: BoostID;
			for (statPlus in source.boosts) {
				// if (statPlus === 'accuracy' || statPlus === 'evasion') continue;
				if (source.boosts[statPlus] < 6) {
					stats.push(statPlus);
				}
			}
			const randomStat: BoostID | undefined = stats.length ? this.sample(stats) : undefined;
			if (randomStat) boost[randomStat] = 1;
			this.boost(boost, source);
		},
		isPermanent: true,
		name: "Magic Touch",
		rating: 4,
		num: 1132,
	},
	waterbringer: {
		isNonstandard: "ThingInf",
		onAfterMega(source) {
			this.field.setTerrain('sudscape');
			this.field.setWeather('windy');
		},
		isPermanent: true,
		name: "Water Bringer",
		rating: 5,
		num: 1229,
	},
	phaseshift: {
		isNonstandard: "ThingInf",
		onResidual(pokemon) {
			const energy = pokemon.getEnergyValue();

			let forme = '';
			if (energy >= 3) forme = 'Yellomatter-Plasma';
			else if (energy >= 1) forme = 'Yellomatter-Gas';
			else if (energy < -1) forme = 'Yellomatter-Solid';
			else forme = 'Yellomatter';

			if (pokemon.baseSpecies.baseSpecies === 'Yellomatter' && pokemon.species.name !== forme) {
				const boosts: SparseBoostsTable = {};
				let stat1 = 0;
				let stat2 = 0;
				switch (pokemon.species.name) {
				case 'Yellomatter-Solid':
					stat1 = pokemon.boosts.def;
					boosts.def = -pokemon.boosts.def;
					stat2 = pokemon.boosts.atk;
					boosts.atk = -pokemon.boosts.atk;
					break;
				case 'Yellomatter':
					stat1 = pokemon.boosts.atk;
					boosts.atk = -pokemon.boosts.atk;
					stat2 = pokemon.boosts.spd;
					boosts.spd = -pokemon.boosts.spd;
					break;
				case 'Yellomatter-Gas':
					stat1 = pokemon.boosts.spd;
					boosts.spd = -pokemon.boosts.spd;
					stat2 = pokemon.boosts.spa;
					boosts.spa = -pokemon.boosts.spa;
					break;
				case 'Yellomatter-Plasma':
					stat1 = pokemon.boosts.spa;
					boosts.spa = -pokemon.boosts.spa;
					stat2 = pokemon.boosts.spe;
					boosts.spe = -pokemon.boosts.spe;
					break;
				}

				switch (forme) {
				case 'Yellomatter-Solid':
					boosts.def = stat1;
					boosts.atk = stat2;
					break;
				case 'Yellomatter':
					boosts.atk = stat1;
					boosts.spd = stat2;
					break;
				case 'Yellomatter-Gas':
					boosts.spd = stat1;
					boosts.spa = stat2;
					break;
				case 'Yellomatter-Plasma':
					boosts.spa = stat1;
					boosts.spe = stat2;
					break;
				}

				this.boost(boosts, pokemon, pokemon, this.effect, false, true);

				if (pokemon.species.symbolForme === 'Infinity') {
					pokemon.addType('', true);
					this.add('-start', pokemon, 'typeadd', '', '[silent]');
				}
				if (pokemon.species.symbolForme === 'Element') {
					pokemon.removeElementType('Liquid');
					this.add('-start', pokemon, 'elementtypes', pokemon.elementTypes.join('/'), '[silent]');
				}

				this.actions.runSymbolEvo(pokemon, forme);
			}
		},
		isPermanent: true,
		name: "Phase Shift",
		rating: 5,
		num: 1229,
	},
	astralprojection: {
		isNonstandard: "Thing",
		onBeforeMovePriority: 15,
		onBeforeMove(pokemon, target, move) {
			if (!move.banishedUsable) {
				move.banishedUsable = true;
			}
		},
		name: "Astral Projection",
		rating: 5,
		num: 1229,
	},
	unamenable: {
		isNonstandard: "ThingInf",
		onSetStatus(status, target, source, effect) {
			this.debug('interrupting setStatus');
			this.add('-activate', target, 'ability: Unamenable');
			return null;
		},
		onTryAddVolatile(status, target, source, effect) {
			this.add('-activate', target, 'ability: Unamenable');
			return null;
		},
		isPermanent: true,
		name: "Unamenable",
		rating: 5,
		num: 1229,
	},
	adaptable: {
		isNonstandard: "Thing",
		onImmunity(type, pokemon) {
			if (type === 'underwater') return false;
		},
		// done in conditions for rest
		name: "Adaptable",
		rating: 5,
		num: 1229,
	},
	intrepidhat: {
		isNonstandard: "Thing",
		onResidual(pokemon) {
			if (pokemon.volatiles['equipped']) {
				let equip = null;
				for (const ally of pokemon.allies()) {
					if (!ally?.isActive || !ally.volatiles['equip']) continue;
					equip = ally;
				}
				if (!equip) return;
				this.boost({atk: 1, spa: 1}, equip);
			}
		},
		name: "Intrepid Hat",
		rating: 5,
		num: -122,
	},
	protectivehat: {
		isNonstandard: "Thing",
		onResidual(pokemon) {
			if (pokemon.volatiles['equipped']) {
				let equip = null;
				for (const ally of pokemon.allies()) {
					if (!ally?.isActive || !ally.volatiles['equip']) continue;
					equip = ally;
				}
				if (!equip) return;
				this.boost({def: 1, spd: 1}, equip);
			}
		},
		name: "Protective Hat",
		rating: 5,
		num: -122,
	},
	nimblehat: {
		isNonstandard: "Thing",
		onResidual(pokemon) {
			if (pokemon.volatiles['equipped']) {
				let equip = null;
				for (const ally of pokemon.allies()) {
					if (!ally?.isActive || !ally.volatiles['equip']) continue;
					equip = ally;
				}
				if (!equip) return;
				this.boost({spe: 1}, equip);
			}
		},
		name: "Nimble Hat",
		rating: 5,
		num: -122,
	},
	spiritedhat: {
		isNonstandard: "Thing",
		onResidual(pokemon) {
			if (pokemon.volatiles['equipped']) {
				let equip = null;
				for (const ally of pokemon.allies()) {
					if (!ally?.isActive || !ally.volatiles['equip']) continue;
					equip = ally;
				}
				if (!equip) return;

				this.effectState.hatMove = true;
				const bannedMoves = [''];
				const moves = [];
				for (const moveSlot of equip.moveSlots) {
					const moveid = moveSlot.id;
					if (!moveid) continue;
					const move = this.dex.moves.get(moveid);
					if (bannedMoves.includes(moveid) || move.category === 'Status' || move.flags['charge'] || move.flags['recharge'] || (move.isZ && move.basePower !== 1)) {
						continue;
					}
					moves.push(moveid);
				}
				let randomMove = '';
				if (moves.length) randomMove = this.sample(moves);
				if (!randomMove) {
					this.effectState.hatMove = false;
					return false;
				}
				this.actions.useMove(randomMove, equip);
				this.effectState.hatMove = false;
			}
		},
		onAllyBasePower(basePower, pokemon, target) {
			if (this.effectState.hatMove) return this.chainModify(0.5);
		},
		name: "Spirited Hat",
		rating: 5,
		num: -122,
	},
	amorphoushat: {
		isNonstandard: "Thing",
		onAllyModifyType(move, pokemon) {
			if (pokemon.volatiles['equip']) {
				move.type = 'Infinity';
			}
		},
		name: "Amorphous Hat",
		rating: 5,
		num: -122,
	},
	stubborn: {
		isNonstandard: "Thing",
		/*onSetAbility(ability, target, source, effect) {
			return false;
		},*/
		isPermanent: true,
		onBeforeTurn(pokemon) {
			const action = this.queue.willMove(pokemon);
			if (action?.moveid === 'stay') return;

			let helper = null;
			for (const ally of pokemon.allies()) {
				if (!ally?.isActive || ally === pokemon || !ally.isAdjacent(pokemon) ||
					 (pokemon.volatiles['equipped'] && !ally.volatiles['equip']) ||
					 (ally.volatiles['equipped'] && !pokemon.volatiles['equip']) ||
					 ally.hasAbility('stubborn') || ally.hasAbility('partyrockis') ||
					 (helper !== null && this.randomChance(1, 2))) continue;
				helper = ally;
			}
			helper?.addVolatile('helper');
		},
		onAllyModifySpe(spe, pokemon) {
			if (pokemon.volatiles['helper']) {
				return spe / (1 + 200 / pokemon.getStat('atk'));
			}
		},
		onAllyBeforeMove(source) {
			if (source.volatiles['helper']) {
				for (const ally of source.allies()) {
					if (!ally?.isActive || ally === source || !ally.isAdjacent(source) || !ally.hasAbility('stubborn') || !ally.hasAbility('partyrockis')) continue;
					const action = this.queue.willMove(ally);
					if (action) {
						this.queue.prioritizeAction(action);
						this.add('-activate', ally, 'ability: Stubborn');
					}
				}
			}
		},
		name: "Stubborn",
		rating: 5,
		num: -122,
	},
	hygienic: {
		isNonstandard: "Thing",
		onAllySetStatus(status, target, source) {
			if (status.id === 'infected') {
				this.add('-immune', target, '[from] ability: Hygienic');
				return false;
			}
		},
		name: "Hygienic",
		rating: 5,
		num: -122,
	},
	cushionedsoil: {
		isNonstandard: "Thing",
		onAllyDamage(damage, target, source, effect) {
			if (effect.id === 'recoil') {
				if (!this.activeMove) throw new Error("Battle.activeMove is null");
				if (this.activeMove.id !== 'struggle') return null;
			}
		},
		name: "Cushioned Soil",
		rating: 3,
		num: 69,
	},
	escalation: {
		isNonstandard: "ThingInf",
		onAfterMega(pokemon) {
			let i: BoostID;
			for (i in pokemon.boosts) {
				if (pokemon.boosts[i] > 0) { pokemon.boosts[i]! *= 2; }
			}
		},
		name: "Escalation",
		rating: 3,
		num: 69,
	},
	celestial: {
		isNonstandard: "Thing",
		name: "Celestial",
		rating: 5,
		num: -122,
	},
	doomfuldescent: {
		isNonstandard: "ThingInf",
		name: "Doomful Descent",
		onStart(source) {
			for (const foe of source.foes()) {
				if (!foe?.isActive || foe === source || foe.volatiles['pheromonemark']) continue;
				foe.addVolatile('pheromonemark');
			}

			if (this.field.getWeather().id === 'locustswarm' && this.field.weatherState.duration !== 0) {
				this.field.weatherState.duration = 0;
				this.field.weatherState.source = source;
				this.field.weatherState.permanent = true;
			} else { 
				this.field.setWeather('locustswarm', null, null, true); 
				this.field.weatherState.duration = 0;
			}
			// Infinite duration done in conditions.js#hot
		},
		/* onAnySetWeather(target, source, weather) {
			const strongMusics = ['friendlyatmosphere'];
			const musicAbilities = ['partyrockis'];
			if (this.field.getWeather().id === 'locustswarm' && !(strongMusics.includes(weather.id) && musicAbilities.includes(source.ability))) return false;
		}, */
		onEnd(pokemon) {
			if (this.field.weatherState.source !== pokemon) return;
			for (const target of this.getAllActive()) {
				if (target === pokemon) continue;
				if (target.hasAbility('doomfuldescent')) {
					this.field.weatherState.source = target;
					return;
				}
			}
			this.field.clearWeather();
		},
		rating: 5,
		num: -122,
	},
	escapevelocity: {
		isNonstandard: "ThingInf",
		onAfterMega(pokemon) {
			if (pokemon.boosts.spe < 2) { this.actions.useMove('crashlanding', pokemon); } else {
				pokemon.setStatus('distanced');
				pokemon.statusState.duration = 0;
			}
		},
		onResidual(pokemon) {
			if (pokemon.status !== 'distanced') { this.actions.useMove('crashlanding', pokemon); }
		},
		name: "Escape Velocity",
		rating: 4,
		num: 2111,
	},
	playful: {
		isNonstandard: "Thing",
		onSourceHit(target, source, move) {
			if (source && source !== target && move?.flags['contact']) {
				if (target.item && this.randomChance(1, 2)) {
					const item = target.getItem();
					target.setItem('');
					target.lastItem = item.id;
					this.add('-enditem', target, item.name, '[from] ability: Playful');
				}
			}
		},
		name: "Playful",
		rating: 0.5,
		num: -196,
	},
	weaponoflastresort: {
		isNonstandard: "ThingInf",
		onModifyCritRatio(critRatio, source, target, move) {
			if (move.pp === 1) return 5;
		},
		onSourceAfterMove(source, target, move) {
			console.log('used move');
			console.log(move.pp);
			if (move.pp === 1) console.log('one pp left');
			if (move.pp === 0) {
				console.log('last pp');
				const boost: SparseBoostsTable = {};
				let statPlus: BoostID;
				for (statPlus in source.boosts) {
					if (statPlus === 'accuracy' || statPlus === 'evasion') continue;
					if (source.boosts[statPlus] > -6) {
						boost[statPlus] = -2;
					}
				}
				this.boost(boost);
			}
		},
		name: "Weapon of Last Resort",
		rating: 4,
		num: 2111,
	},
	produceturret: {
		isNonstandard: "Thing",
		onStart(pokemon) {
			pokemon.side.addSideCondition('autoturret');
		},
		name: "Produce Turret",
		rating: 0.5,
		num: -196,
	},
	assemblyline: {
		isNonstandard: "Thing",
		// Item suppression implemented in Pokemon.ignoringItem() within sim/pokemon.js
		onResidual(pokemon) {
			if (!pokemon.item) return;
			for (const ally of pokemon.allies()) {
				if (!ally?.isActive || ally === pokemon || ally.item) continue;
				const yourItem = pokemon.getItem();
				if (!yourItem) {
					return;
				}
				if (!ally.setItem(yourItem)) {
					return;
				}
				this.add('-item', ally, yourItem, '[from] ability: Assembly Line', '[of] ' + pokemon);
			}
		},
		name: "Assembly Line",
		rating: 0.5,
		num: -196,
	},
	respite: {
		isNonstandard: "ThingInf",
		onResidual() {
			const env = this.field.weatherState;
			const land = this.field.terrainState;
			const rooms = this.field.pseudoWeather;

			if (env.duration === 1) env.duration++;
			if (land.duration === 1) land.duration++;
			for (const i in rooms) {
				if (rooms[i].duration === 1) rooms[i].duration++;
			}
			for (const side of this.sides) {
				for (const i in side.sideConditions) {
					if (side.sideConditions[i].duration === 1) side.sideConditions[i].duration++;
				}
			}
		},
		name: "Respite",
		rating: 0.5,
		num: -196,
	},
	expertswimmer: {
		isNonstandard: "Thing",
		onModifySpe(spe, pokemon) {
			if (['underwater'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(2);
			}
		},
		name: "Expert Swimmer",
		rating: 3,
		num: 33,
	},
	fasion: {
		isNonstandard: "Thing",
		onStart() {
			delete this.effectState.forme;
		},
		onModifyDef(_def, pokemon) {
			if (Object.entries(pokemon.side.sideConditions).length && pokemon.hasItem('yellowsafetyvest')) {
				return this.chainModify(2);
			}
		},
		onModifySpD(_spd, pokemon) {
			if (Object.entries(pokemon.side.sideConditions).length && pokemon.hasItem('yellowsafetyvest')) {
				return this.chainModify(2);
			}
		},
		onModifySpe(_spe, pokemon) {
			if ((this.field.effectiveWeather() || this.field.effectiveTerrain()) && pokemon.hasItem('cowboyhat')) {
				return this.chainModify(2);
			}
		},
		onUpdate(pokemon) {
			if (!pokemon.isActive || pokemon.baseSpecies.baseSpecies !== 'Be\u0301ttiers' || pokemon.transformed || !pokemon.hp) return;

			if (pokemon.hasItem('cowboyhat') && pokemon.species.id !== 'bettierscowboy') {
				pokemon.formeChange('Be\u0301ttiers-Cowboy', this.effect, false, '[msg]');
			} else if (pokemon.hasItem('yellowsafetyvest') && pokemon.species.id !== 'bettiersconstruction') {
				pokemon.formeChange('Be\u0301ttiers-Construction', this.effect, false, '[msg]');
			} else if (
				(pokemon.species.id === 'bettierscowboy' || pokemon.species.id === 'bettiersconstruction') &&
				!(pokemon.hasItem('cowboyhat') || pokemon.hasItem('yellowsafetyvest'))
			) {
				pokemon.formeChange('Be\u0301ttiers', this.effect, false, '[msg]');
			}
		},
		isBreakable: true,
		name: "Fas'ion",
		rating: 3,
		num: 33,
	},
	greasy: {
		isNonstandard: "Thing",
		name: "Greasy",
		// implemented in battle-actions.ts
		rating: 2,
		num: -420,
	},
	sleeptight: {
		isNonstandard: "Thing",
		name: "Sleep Tight",
		onAnyBeforeMove(source, target, move) {
			if (source.status === 'prone' && move.category !== 'Status') {
				return false;
			}
		},
		rating: 2,
		num: -420,
	},
	eat: {
		isNonstandard: "Thing",
		onDamagingHit(damage, target, source, move) {
			if (move.flags['bite']) {
				source.addVolatile('mustrecharge');
			}
		},
		name: "Eat",
		rating: 2,
		num: 27,
	},
	steep: {
		isNonstandard: "Thing",
		name: "Steep",
		onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target, !source.isAlly(target))) {
				const newType = move.type;
				if (!target.addType(newType)) return false;
				this.add('-start', target, 'typeadd', newType, '[from] ability: Steep');
			}
		},
		onSourceHit(target, source, move) {
			if (this.checkMoveMakesContact(move, source, target, !source.isAlly(target))) {
				const newType = target.types[0];
				if (!source.addType(newType)) return false;
				this.add('-start', source, 'typeadd', newType, '[from] ability: Steep');
			}
		},
		rating: 2,
		num: 152,
	},
	volatilebattery: {
		isNonstandard: "Thing",
		onDamagingHit(damage, target, source, move) {
			if (!target.hp) {
				this.add('-activate', target, 'ability: Volatile Battery');
				this.field.setWeather("hot");
				for (const foe of target.foes()) {
					if (!foe?.isActive || foe === target) continue;
					foe.addVolatile('perishsong');
					foe.volatiles['perishsong'].duration = 6;
				}
				for (const ally of target.allies()) {
					if (!ally?.isActive || ally === target) continue;
					ally.addVolatile('perishsong');
					ally.volatiles['perishsong'].duration = 6;
				}
			}
		},
		name: "Volatile Battery",
		rating: 3,
		num: -121,
	},
	boring: {
		isNonstandard: "Thing",
		name: "Boring",
		// implemented in conditions.ts
		rating: 2,
		num: -420,
	},
	lingeringgas: {
		isNonstandard: "Thing",
		onStart() {
			this.effectState.activated = 0;
		},
		onAfterMoveSecondarySelf(source, target, move) {
			if (source !== null && move.flags['gas'] && !this.effectState.activated) {
				this.field.addPseudoWeather('gascloud', source);
				this.effectState.activated = 1;
			}
		},
		onResidual() {
			this.effectState.activated = 0;
		},
		name: "Lingering Gas",
		rating: 2.5,
		num: 154,
	},
	partyrockis: {
		isNonstandard: "ThingInf",
		onAfterMega(source) {
			this.field.setTerrain('invitingsurroundings', null, null, false, true);
			this.field.setWeather('friendlyatmosphere', null, null, false, true);
		},
		/*onSetAbility(ability, target, source, effect) {
			return false;
		},*/
		onBeforeTurn(pokemon) {
			const action = this.queue.willMove(pokemon);
			if (action?.moveid === 'stay') return;

			let helper = null;
			for (const ally of pokemon.allies()) {
				if (!ally?.isActive || ally === pokemon || !ally.isAdjacent(pokemon) ||
					 (pokemon.volatiles['equipped'] && !ally.volatiles['equip']) ||
					 (ally.volatiles['equipped'] && !pokemon.volatiles['equip']) ||
					 ally.hasAbility('stubborn') || ally.hasAbility('partyrockis') ||
					 (helper !== null && this.randomChance(1, 2))) continue;
				helper = ally;
			}
			helper?.addVolatile('helper');
		},
		onAllyModifySpe(spe, pokemon) {
			if (pokemon.volatiles['helper']) {
				return spe / (1 + 200 / pokemon.getStat('atk'));
			}
		},
		onAllyBeforeMove(source) {
			if (source.volatiles['helper']) {
				for (const ally of source.allies()) {
					if (!ally?.isActive || ally === source || !ally.isAdjacent(source) || !ally.hasAbility('stubborn') || ally.hasAbility('partyrockis')) continue;
					const action = this.queue.willMove(ally);
					if (action) {
						this.queue.prioritizeAction(action);
						this.add('-activate', ally, 'ability: Party Rock is');
					}
				}
			}
		},
		isPermanent: true,
		name: "Party Rock is",
		rating: 2.5,
		num: 154,
	},
	xenoform: {
		isNonstandard: "ThingInf",
		name: "Xenoform",
		onStart(source) {
			// console.log(source.baseSpecies.baseSpecies);
			if (source.baseSpecies.baseSpecies !== 'Corechaete') return;
			let terrainType = '';
			// console.log(source.species.forme);
			switch (source.species.forme) {
			case '':
				terrainType = 'spatialexpansion';
				break;
			case 'Green':
				terrainType = 'greenground';
				break;
			case 'Null':
				terrainType = 'nullland';
				break;
			case 'Soil':
				terrainType = 'richsoil';
				break;
			case 'Song':
				terrainType = 'mysticalsong';
				break;
			case 'Spring':
				terrainType = 'springfloor';
				break;
			case 'Suds':
				terrainType = 'sudscape';
				break;
			}
			this.effectState.terrain = terrainType;
			if (this.field.getTerrain().id === terrainType && this.field.terrainState.duration !== 0) {
				this.field.terrainState.duration = 0;
				this.field.terrainState.source = source;
				this.field.terrainState.permanent = true;
			} else { 
				this.field.setTerrain(terrainType, null, null, true);
				this.field.terrainState.duration = 0;
			}
		},
		/* onAnyTerrainStart(target, source, terrain) {
			const terrainType = this.effectState.terrain;
			if (this.field.getTerrain().id === terrainType && !(source.hasAbility('xenoform') || source.hasAbility('partyrockis'))) return false;
		}, */
		onEnd(pokemon) {
			if (this.field.terrainState.source !== pokemon) return;
			for (const target of this.getAllActive()) {
				if (target === pokemon) continue;
				if (target.hasAbility('xenoform') && target.abilityState.terrain === this.field.getTerrain().id) {
					this.field.terrainState.source = target;
					return;
				}
			}
			this.field.clearTerrain();
		},
		rating: 5,
		num: -122,
	},
	overture: {
		isNonstandard: "ThingInf",
		onStart(pokemon) {
			this.field.setTerrain('mysticalsong');
			const type = this.dex.moves.get(pokemon.moveSlots[0].id).type;
			if (pokemon.hasType(type) || type === '???') return false;
			if (!pokemon.addType(type)) return false;
			this.add('-start', pokemon, 'typeadd', type, '[from] ability: Overture');
		},
		name: "Overture",
		rating: 3.5,
		num: 2112,
	},
	pianississimo: {
		isNonstandard: "Thing",
		name: "Pianississimo",
		onStart(source) {
			this.add('-activate', source, 'ability: Pianississimo');
			this.add('-clearallboost');
			for (const pokemon of source.foes()) {
				pokemon.clearBoosts();
			}
		},
		rating: 2,
		num: -420,
	},
	stronglegs: {
		isNonstandard: "Thing",
		onBasePowerPriority: 19,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['kick']) {
				return this.chainModify(1.5);
			}
		},
		name: "Strong Legs",
		rating: 3,
		num: 178,
	},
	comfyseat: {
		isNonstandard: "Thing",
		name: "Comfy Seat",
		onResidualOrder: 5,
		onResidualSubOrder: 3,
		onResidual(pokemon) {
			for (const allyActive of pokemon.adjacentAllies()) {
				if (allyActive === pokemon) continue;
				this.add('-activate', pokemon, 'ability: Comfy Seat');
				this.heal(allyActive.baseMaxhp / 16, allyActive, pokemon);
			}
		},
		rating: 0,
		num: 131,
	},
	environmentalblessing: {
		isNonstandard: "Thing",
		name: "Environmental Blessing",
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Environmental Blessing');
			this.blessedEnv = true;
		},
		onEnd(pokemon) {
			if (!this.blessedEnv) return;
			for (const target of this.getAllActive()) {
				if (target === pokemon) continue;
				if (target.hasAbility('environmentalblessing')) {
					return;
				}
			}
			// this.add('-end', pokemon, 'Environmental Blessing');
			this.blessedEnv = false;
		},
		onAnyWeatherStart() {
			const pokemon = this.effectState.target;
			let newType;
			switch (this.field.weather) {
			case 'locustswarm':
				newType = 'Arthropod';
				break;
			case 'meteorshower':
				newType = 'Dirt';
				break;
			case 'underwater':
				newType = 'Fish';
				break;
			case 'nighttime':
				newType = 'Night';
				break;
			case 'hot':
				newType = 'Temperature';
				break;
			case 'cold':
				newType = 'Temperature';
				break;
			case 'timedilation':
				newType = 'Time';
				break;
			case 'windy':
				newType = 'Weather';
				break;
			case 'yellowish':
				newType = 'Yellow';
				break;
			}
			if (!newType) {
				return false;
			}
			let success = false;
			if (pokemon.addElementType(newType)) success = true;
			if (success) {
				this.add('-start', pokemon, 'elementtypes', pokemon.elementTypes.join('/'), '[silent]');
			}
		},
		rating: 0,
		num: 131,
	},
	landscapeblessing: {
		isNonstandard: "Thing",
		name: "Landscape Blessing",
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Landscape Blessing');
			this.blessedLand = true;
		},
		onEnd(pokemon) {
			if (!this.blessedLand) return;
			for (const target of this.getAllActive()) {
				if (target === pokemon) continue;
				if (target.hasAbility('landscapeblessing')) {
					return;
				}
			}
			this.blessedLand = false;
		},
		onAnyTerrainStart() {
			const pokemon = this.effectState.target;
			let newType;
			switch (this.field.terrain) {
			case 'richsoil':
				newType = 'Dirt';
				break;
			case 'spatialexpansion':
				newType = 'Far';
				break;
			case 'greenground':
				newType = 'Green';
				break;
			case 'sudscape':
				newType = 'Liquid';
				break;
			case 'mysticalsong':
				newType = 'Music';
				break;
			case 'nullland':
				newType = 'No';
				break;
			case 'springfloor':
				newType = 'Sport';
				break;
			}
			if (!newType) {
				return false;
			}
			let success = false;
			if (pokemon.addElementType(newType)) success = true;
			if (success) {
				this.add('-start', pokemon, 'elementtypes', pokemon.elementTypes.join('/'), '[silent]');
			}
		},
		rating: 0,
		num: 131,
	},
	coldboot: {
		isNonstandard: "Thing",
		onStart(source) {
			this.field.setWeather('cold');
		},
		name: "Cold Boot",
		rating: 2,
		num: -111,
	},
	cataclysm: {
		isNonstandard: "ThingInf",
		name: "Cataclysm",
		onStart(source) {
			if (this.field.getWeather().id === 'meteorshower' && this.field.weatherState.duration !== 0) {
				this.field.weatherState.duration = 0;
				this.field.weatherState.source = source;
			} else { 
				this.field.setWeather('meteorshower', null, null, true); 
				this.field.weatherState.duration = 0;
			}
		},
		onEnd(pokemon) {
			if (this.field.weatherState.source !== pokemon) return;
			for (const target of this.getAllActive()) {
				if (target === pokemon) continue;
				if (target.hasAbility('cataclysm')) {
					this.field.weatherState.source = target;
					return;
				}
			}
			this.field.clearWeather();
		},
		rating: 5,
		num: -122,
	},
	eventhorizon: {
		isNonstandard: "ThingInf",
		onFoeRedirectTargetPriority: 1,
		onFoeRedirectTarget(target, source, source2, move) {
			if (!this.effectState.target.isSkyDropped() && this.validTarget(this.effectState.target, source, move.target)) {
				this.add('-activate', this.effectState.target, 'ability: Event Horizon');
				if (move.smartTarget) move.smartTarget = false;
				this.debug("Event Horizon redirected target of move");
				return this.effectState.target;
			}
		},
		name: "Event Horizon",
		rating: 2,
		num: -111,
	},
	closingtime: {
		isNonstandard: "ThingInf",
		onAnyTryHeal(damage, target, source, effect) {
			if ((effect?.id === 'zpower') || this.effectState.isZ) return damage;
			this.add('-activate', this.effectState.target, 'ability: Closing Time');
			return false;
		},
		name: "Closing Time",
		rating: 2,
		num: -111,
	},
	conservationarea: {
		isNonstandard: "ThingInf",
		onAllyModifyMove(move) {
			move.stab = 2;
		},
		onAllyUpdate(pokemon) {
			let i = 0;
			let changetype = false;
			if (pokemon.types.length !== pokemon.species.types.length) changetype = true;
			for (const type of pokemon.types) {
				if (type !== pokemon.species.types[i]) {
					changetype = true;					
				}
				i++;
			}
			if (changetype) {
				this.add('-activate', this.effectState.target, 'ability: Conservation Area');
				pokemon.setType(pokemon.species.types);
				this.add('-start', pokemon, 'typechange', pokemon.types.join('/'));
			}
			/* if (pokemon.addedType) {
				if (!pokemon.addType('')) {
					this.add('-start', pokemon, 'typeadd', '');
					this.add('-activate', this.effectState.target, 'ability: Conservation Area');
				}
			} */
		},
		name: "Conservation Area",
		rating: 4,
		num: 91,
	},
	clearcut: {
		isNonstandard: "ThingInf",
		onSourceDamagingHit(damage, target, source) {
			if (target.types[0] !== '???') {
				const types = target.types;
				target.setType(['???']);
				this.add('-start', target, 'typechange', '???');
				for (const type of types) {
					switch (type) {
					case 'Arthropod':
					case 'Fish':
					case 'Green':
						source.heal(source.baseMaxhp / 2)
						break;
					case 'Hair':
					case 'Industrial':
					case 'Sword':
						this.boost({atk: 1}, source, source, null, true);
						break;
					case 'Dirt':
					case 'Liquid':
					case 'Weather':
						this.boost({def: 1}, source, source, null, true);
						break;
					case 'H':
					case 'No':
					case 'Science':
						this.boost({spd: 1}, source, source, null, true);
						break;
					case 'Far':
					case 'Sport':
					case 'Time':
						this.boost({spe: 1}, source, source, null, true);
						break;
					case 'Night':
					case 'Temperature':
						this.boost({accuracy: 1}, source, source, null, true);
						break;
					case 'Music':
					case 'Yellow':
						this.boost({evasion: 1}, source, source, null, true);
						break;
					}
				}
			}
		},
		name: "Clear Cut",
		rating: 4,
		num: 91,
	},
	pathogen: {
		isNonstandard: "Thing",
		// upokecenter says this is implemented as an added secondary effect
		onModifyMove(move) {
			if (!move?.flags['contact'] || move.target === 'self') return;
			if (!move.secondaries) {
				move.secondaries = [];
			}
			move.secondaries.push({
				chance: 100,
				status: 'infected',
				ability: this.dex.abilities.get('pathogen'),
			});
		},
		name: "Pathogen",
		rating: 2,
		num: 143,
	},
	donotenter: {
		isNonstandard: "Thing",
		onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target)) {
				const hazards = ['wetfloor', 'dustcloud', 'voidtrap', 'hotcoals', 'permafrost', 'beamfield', 'stormcell', 'autoturret', 'caltrops'];
				const hazard = this.sample(hazards);
				this.add('-activate', target, 'ability: Do Not Enter');
				source.side.addSideCondition(hazard);
			}
		},
		name: "Do Not Enter",
		rating: 2,
		num: 143,
	},
	makeamess: {
		isNonstandard: "ThingInf",
		onAfterMega(pokemon) {
			const hazards = ['wetfloor', 'dustcloud', 'voidtrap', 'hotcoals', 'beamfield', 'caltrops'];
			this.add('-activate', pokemon, 'ability: Make a Mess');
			for (const side of pokemon.side.foeSidesWithConditions()) {
				for (const hazard of hazards) {
					side.addSideCondition(hazard);
				}
			}
		},
		name: "Make a Mess",
		rating: 2,
		num: 143,
	},
	undead: {
		isNonstandard: "Thing",
		onFaint(pokemon) {
			if (!pokemon.undead) {
				console.log('undying');
				pokemon.undead = true;
				pokemon.fainted = false;
				pokemon.faintQueued = false;
				pokemon.subFainted = false;
				pokemon.status = '';
				pokemon.hp = 1;
				pokemon.heal(pokemon.baseMaxhp / 2);
			}
		},
		name: "Undead",
		rating: 2,
		num: 143,
	},

	// BASE GAME
	noability: {
		isNonstandard: "Past",
		name: "No Ability",
		rating: 0.1,
		num: 0,
	},
	adaptability: {
		onModifyMove(move) {
			move.stab = 2;
		},
		name: "Adaptability",
		rating: 4,
		num: 91,
	},
	aerilate: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Flying';
				move.aerilateBoosted = true;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.aerilateBoosted) return this.chainModify([4915, 4096]);
		},
		name: "Aerilate",
		rating: 4,
		num: 184,
	},
	aftermath: {
		name: "Aftermath",
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			if (!target.hp && this.checkMoveMakesContact(move, source, target, true)) {
				this.damage(source.baseMaxhp / 4, source, target);
			}
		},
		rating: 2.5,
		num: 106,
	},
	airlock: {
		onSwitchIn(pokemon) {
			this.effectState.switchingIn = true;
		},
		onStart(pokemon) {
			// Air Lock does not activate when Skill Swapped or when Neutralizing Gas leaves the field
			if (!this.effectState.switchingIn) return;
			this.add('-ability', pokemon, 'Air Lock');
			this.effectState.switchingIn = false;
		},
		suppressWeather: true,
		name: "Air Lock",
		rating: 2,
		num: 76,
	},
	analytic: {
		onBasePowerPriority: 21,
		onBasePower(basePower, pokemon) {
			let boosted = true;
			for (const target of this.getAllActive()) {
				if (target === pokemon) continue;
				if (this.queue.willMove(target)) {
					boosted = false;
					break;
				}
			}
			if (boosted) {
				this.debug('Analytic boost');
				return this.chainModify([5325, 4096]);
			}
		},
		name: "Analytic",
		rating: 2.5,
		num: 148,
	},
	angerpoint: {
		onHit(target, source, move) {
			if (!target.hp) return;
			if (move?.effectType === 'Move' && target.getMoveHitData(move).crit) {
				target.setBoost({atk: 6});
				this.add('-setboost', target, 'atk', 12, '[from] ability: Anger Point');
			}
		},
		name: "Anger Point",
		rating: 1.5,
		num: 83,
	},
	anticipation: {
		onStart(pokemon) {
			for (const target of pokemon.foes()) {
				for (const moveSlot of target.moveSlots) {
					const move = this.dex.moves.get(moveSlot.move);
					if (move.category === 'Status') continue;
					const moveType = move.id === 'hiddenpower' ? target.hpType : move.type;
					if (
						this.dex.getImmunity(moveType, pokemon) && this.dex.getEffectiveness(moveType, pokemon) > 0 ||
						move.ohko
					) {
						this.add('-ability', pokemon, 'Anticipation');
						return;
					}
				}
			}
		},
		name: "Anticipation",
		rating: 0.5,
		num: 107,
	},
	arenatrap: {
		onFoeTrapPokemon(pokemon) {
			if (!pokemon.isAdjacent(this.effectState.target)) return;
			if (pokemon.isGrounded()) {
				pokemon.tryTrap(true);
			}
		},
		onFoeMaybeTrapPokemon(pokemon, source) {
			if (!source) source = this.effectState.target;
			if (!source || !pokemon.isAdjacent(source)) return;
			if (pokemon.isGrounded(!pokemon.knownType)) { // Negate immunity if the type is unknown
				pokemon.maybeTrapped = true;
			}
		},
		name: "Arena Trap",
		rating: 5,
		num: 71,
	},
	aromaveil: {
		onAllyTryAddVolatile(status, target, source, effect) {
			if (['attract', 'disable', 'encore', 'healblock', 'taunt', 'torment'].includes(status.id)) {
				if (effect.effectType === 'Move') {
					const effectHolder = this.effectState.target;
					this.add('-block', target, 'ability: Aroma Veil', '[of] ' + effectHolder);
				}
				return null;
			}
		},
		isBreakable: true,
		name: "Aroma Veil",
		rating: 2,
		num: 165,
	},
	asoneglastrier: {
		onPreStart(pokemon) {
			this.add('-ability', pokemon, 'As One');
			this.add('-ability', pokemon, 'Unnerve');
			this.effectState.unnerved = true;
		},
		onEnd() {
			this.effectState.unnerved = false;
		},
		onFoeTryEatItem() {
			return !this.effectState.unnerved;
		},
		onSourceAfterFaint(length, target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({atk: length}, source, source, this.dex.abilities.get('chillingneigh'));
			}
		},
		isPermanent: true,
		name: "As One (Glastrier)",
		rating: 3.5,
		num: 266,
	},
	asonespectrier: {
		onPreStart(pokemon) {
			this.add('-ability', pokemon, 'As One');
			this.add('-ability', pokemon, 'Unnerve');
			this.effectState.unnerved = true;
		},
		onEnd() {
			this.effectState.unnerved = false;
		},
		onFoeTryEatItem() {
			return !this.effectState.unnerved;
		},
		onSourceAfterFaint(length, target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({spa: length}, source, source, this.dex.abilities.get('grimneigh'));
			}
		},
		isPermanent: true,
		name: "As One (Spectrier)",
		rating: 3.5,
		num: 267,
	},
	aurabreak: {
		onStart(pokemon) {
			if (this.suppressingAbility(pokemon)) return;
			this.add('-ability', pokemon, 'Aura Break');
		},
		onAnyTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status') return;
			move.hasAuraBreak = true;
		},
		isBreakable: true,
		name: "Aura Break",
		rating: 1,
		num: 188,
	},
	baddreams: {
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			if (!pokemon.hp) return;
			for (const target of pokemon.foes()) {
				if (target.status === 'slp' || target.hasAbility('comatose')) {
					this.damage(target.baseMaxhp / 8, target, pokemon);
				}
			}
		},
		name: "Bad Dreams",
		rating: 1.5,
		num: 123,
	},
	ballfetch: {
		name: "Ball Fetch",
		rating: 0,
		num: 237,
	},
	battery: {
		onAllyBasePowerPriority: 22,
		onAllyBasePower(basePower, attacker, defender, move) {
			if (attacker !== this.effectState.target && move.category === 'Special') {
				this.debug('Battery boost');
				return this.chainModify([5325, 4096]);
			}
		},
		name: "Battery",
		rating: 0,
		num: 217,
	},
	battlearmor: {
		onCriticalHit: false,
		isBreakable: true,
		name: "Battle Armor",
		rating: 1,
		num: 4,
	},
	battlebond: {
		onSourceAfterFaint(length, target, source, effect) {
			if (effect?.effectType !== 'Move') {
				return;
			}
			if (source.species.id === 'greninja' && source.hp && !source.transformed && source.side.foePokemonLeft()) {
				this.add('-activate', source, 'ability: Battle Bond');
				source.formeChange('Greninja-Ash', this.effect, true);
			}
		},
		onModifyMovePriority: -1,
		onModifyMove(move, attacker) {
			if (move.id === 'watershuriken' && attacker.species.name === 'Greninja-Ash') {
				move.multihit = 3;
			}
		},
		isPermanent: true,
		name: "Battle Bond",
		rating: 4,
		num: 210,
	},
	beastboost: {
		onSourceAfterFaint(length, target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				let statName = 'atk';
				let bestStat = 0;
				let s: StatIDExceptHP;
				for (s in source.storedStats) {
					if (source.storedStats[s] > bestStat) {
						statName = s;
						bestStat = source.storedStats[s];
					}
				}
				this.boost({[statName]: length}, source);
			}
		},
		name: "Beast Boost",
		rating: 3.5,
		num: 224,
	},
	berserk: {
		onDamage(damage, target, source, effect) {
			if (
				effect.effectType === "Move" &&
				!effect.multihit &&
				(!effect.negateSecondary && !(effect.hasSheerForce && source.hasAbility('sheerforce')))
			) {
				target.abilityState.checkedBerserk = false;
			} else {
				target.abilityState.checkedBerserk = true;
			}
		},
		onTryEatItem(item, pokemon) {
			const healingItems = [
				'aguavberry', 'enigmaberry', 'figyberry', 'iapapaberry', 'magoberry', 'sitrusberry', 'wikiberry', 'oranberry', 'berryjuice',
			];
			if (healingItems.includes(item.id)) {
				return pokemon.abilityState.checkedBerserk;
			}
			return true;
		},
		onAfterMoveSecondary(target, source, move) {
			target.abilityState.checkedBerserk = true;
			if (!source || source === target || !target.hp || !move.totalDamage) return;
			const lastAttackedBy = target.getLastAttackedBy();
			if (!lastAttackedBy) return;
			const damage = move.multihit ? move.totalDamage : lastAttackedBy.damage;
			if (target.hp <= target.maxhp / 2 && target.hp + damage > target.maxhp / 2) {
				this.boost({spa: 1});
			}
		},
		name: "Berserk",
		rating: 2,
		num: 201,
	},
	bigpecks: {
		onBoost(boost, target, source, effect) {
			if (source && target === source) return;
			if (boost.def && boost.def < 0) {
				delete boost.def;
				if (!(effect as ActiveMove).secondaries && effect.id !== 'octolock') {
					this.add("-fail", target, "unboost", "Defense", "[from] ability: Big Pecks", "[of] " + target);
				}
			}
		},
		isBreakable: true,
		name: "Big Pecks",
		rating: 0.5,
		num: 145,
	},
	blaze: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fire' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Blaze boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Fire' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Blaze boost');
				return this.chainModify(1.5);
			}
		},
		name: "Blaze",
		rating: 2,
		num: 66,
	},
	bulletproof: {
		onTryHit(pokemon, target, move) {
			if (move.flags['bullet']) {
				this.add('-immune', pokemon, '[from] ability: Bulletproof');
				return null;
			}
		},
		isBreakable: true,
		name: "Bulletproof",
		rating: 3,
		num: 171,
	},
	cheekpouch: {
		onEatItem(item, pokemon) {
			this.heal(pokemon.baseMaxhp / 3);
		},
		name: "Cheek Pouch",
		rating: 2,
		num: 167,
	},
	chillingneigh: {
		onSourceAfterFaint(length, target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({atk: length}, source);
			}
		},
		name: "Chilling Neigh",
		rating: 3,
		num: 264,
	},
	chlorophyll: {
		onModifySpe(spe, pokemon) {
			if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(2);
			}
		},
		name: "Chlorophyll",
		rating: 3,
		num: 34,
	},
	clearbody: {
		onBoost(boost, target, source, effect) {
			if (source && target === source) return;
			let showMsg = false;
			let i: BoostID;
			for (i in boost) {
				if (boost[i]! < 0) {
					delete boost[i];
					showMsg = true;
				}
			}
			if (showMsg && !(effect as ActiveMove).secondaries && effect.id !== 'octolock') {
				this.add("-fail", target, "unboost", "[from] ability: Clear Body", "[of] " + target);
			}
		},
		isBreakable: true,
		name: "Clear Body",
		rating: 2,
		num: 29,
	},
	cloudnine: {
		onSwitchIn(pokemon) {
			this.effectState.switchingIn = true;
		},
		onStart(pokemon) {
			// Cloud Nine does not activate when Skill Swapped or when Neutralizing Gas leaves the field
			if (!this.effectState.switchingIn) return;
			this.add('-ability', pokemon, 'Cloud Nine');
			this.effectState.switchingIn = false;
		},
		suppressWeather: true,
		name: "Cloud Nine",
		rating: 2,
		num: 13,
	},
	colorchange: {
		onAfterMoveSecondary(target, source, move) {
			if (!target.hp) return;
			const type = move.type;
			if (
				target.isActive && move.effectType === 'Move' && move.category !== 'Status' &&
				type !== '???' && !target.hasType(type)
			) {
				if (!target.setType(type)) return false;
				this.add('-start', target, 'typechange', type, '[from] ability: Color Change');

				if (target.side.active.length === 2 && target.position === 1) {
					// Curse Glitch
					const action = this.queue.willMove(target);
					if (action && action.move.id === 'curse') {
						action.targetLoc = -1;
					}
				}
			}
		},
		name: "Color Change",
		rating: 0,
		num: 16,
	},
	comatose: {
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Comatose');
		},
		onSetStatus(status, target, source, effect) {
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: Comatose');
			}
			return false;
		},
		// Permanent sleep "status" implemented in the relevant sleep-checking effects
		isPermanent: true,
		name: "Comatose",
		rating: 4,
		num: 213,
	},
	competitive: {
		onAfterEachBoost(boost, target, source, effect) {
			if (!source || target.isAlly(source)) {
				if (effect.id === 'stickyweb') {
					this.hint("Court Change Sticky Web counts as lowering your own Speed, and Competitive only affects stats lowered by foes.", true, source.side);
				}
				return;
			}
			let statsLowered = false;
			let i: BoostID;
			for (i in boost) {
				if (boost[i]! < 0) {
					statsLowered = true;
				}
			}
			if (statsLowered) {
				this.add('-ability', target, 'Competitive');
				this.boost({spa: 2}, target, target, null, true);
			}
		},
		name: "Competitive",
		rating: 2.5,
		num: 172,
	},
	compoundeyes: {
		onSourceModifyAccuracyPriority: -1,
		onSourceModifyAccuracy(accuracy) {
			if (typeof accuracy !== 'number') return;
			this.debug('compoundeyes - enhancing accuracy');
			return this.chainModify([5325, 4096]);
		},
		name: "Compound Eyes",
		rating: 3,
		num: 14,
	},
	contrary: {
		onBoost(boost, target, source, effect) {
			if (effect && effect.id === 'zpower') return;
			let i: BoostID;
			for (i in boost) {
				boost[i]! *= -1;
			}
		},
		isBreakable: true,
		name: "Contrary",
		rating: 4.5,
		num: 126,
	},
	corrosion: {
		// Implemented in sim/pokemon.js:Pokemon#setStatus
		name: "Corrosion",
		rating: 2.5,
		num: 212,
	},
	cottondown: {
		onDamagingHit(damage, target, source, move) {
			let activated = false;
			for (const pokemon of this.getAllActive()) {
				if (pokemon === target || pokemon.fainted) continue;
				if (!activated) {
					this.add('-ability', target, 'Cotton Down');
					activated = true;
				}
				this.boost({spe: -1}, pokemon, target, null, true);
			}
		},
		name: "Cotton Down",
		rating: 2,
		num: 238,
	},
	curiousmedicine: {
		onStart(pokemon) {
			for (const ally of pokemon.adjacentAllies()) {
				ally.clearBoosts();
				this.add('-clearboost', ally, '[from] ability: Curious Medicine', '[of] ' + pokemon);
			}
		},
		name: "Curious Medicine",
		rating: 0,
		num: 261,
	},
	cursedbody: {
		onDamagingHit(damage, target, source, move) {
			if (source.volatiles['disable']) return;
			if (!move.isMax && !move.isFutureMove && move.id !== 'struggle') {
				if (this.randomChance(3, 10)) {
					source.addVolatile('disable', this.effectState.target);
				}
			}
		},
		name: "Cursed Body",
		rating: 2,
		num: 130,
	},
	cutecharm: {
		onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target)) {
				if (this.randomChance(3, 10)) {
					source.addVolatile('attract', this.effectState.target);
				}
			}
		},
		name: "Cute Charm",
		rating: 0.5,
		num: 56,
	},
	damp: {
		onAnyTryMove(target, source, effect) {
			if (['explosion', 'mindblown', 'mistyexplosion', 'selfdestruct'].includes(effect.id)) {
				this.attrLastMove('[still]');
				this.add('cant', this.effectState.target, 'ability: Damp', effect, '[of] ' + target);
				return false;
			}
		},
		onAnyDamage(damage, target, source, effect) {
			if (effect && effect.id === 'aftermath') {
				return false;
			}
		},
		isBreakable: true,
		name: "Damp",
		rating: 1,
		num: 6,
	},
	dancer: {
		name: "Dancer",
		// implemented in runMove in scripts.js
		rating: 1.5,
		num: 216,
	},
	darkaura: {
		onStart(pokemon) {
			if (this.suppressingAbility(pokemon)) return;
			this.add('-ability', pokemon, 'Dark Aura');
		},
		onAnyBasePowerPriority: 20,
		onAnyBasePower(basePower, source, target, move) {
			if (target === source || move.category === 'Status' || move.type !== 'Dark') return;
			if (!move.auraBooster) move.auraBooster = this.effectState.target;
			if (move.auraBooster !== this.effectState.target) return;
			return this.chainModify([move.hasAuraBreak ? 3072 : 5448, 4096]);
		},
		isBreakable: true,
		name: "Dark Aura",
		rating: 3,
		num: 186,
	},
	dauntlessshield: {
		onStart(pokemon) {
			this.boost({def: 1}, pokemon);
		},
		name: "Dauntless Shield",
		rating: 3.5,
		num: 235,
	},
	dazzling: {
		onFoeTryMove(target, source, move) {
			const targetAllExceptions = ['perishsong', 'flowershield', 'rototiller'];
			if (move.target === 'foeSide' || (move.target === 'all' && !targetAllExceptions.includes(move.id))) {
				return;
			}

			const dazzlingHolder = this.effectState.target;
			if ((source.isAlly(dazzlingHolder) || move.target === 'all') && move.priority > 0.1) {
				this.attrLastMove('[still]');
				this.add('cant', dazzlingHolder, 'ability: Dazzling', move, '[of] ' + target);
				return false;
			}
		},
		isBreakable: true,
		name: "Dazzling",
		rating: 2.5,
		num: 219,
	},
	defeatist: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				return this.chainModify(0.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				return this.chainModify(0.5);
			}
		},
		name: "Defeatist",
		rating: -1,
		num: 129,
	},
	defiant: {
		onAfterEachBoost(boost, target, source, effect) {
			if (!source || target.isAlly(source)) {
				if (effect.id === 'stickyweb') {
					this.hint("Court Change Sticky Web counts as lowering your own Speed, and Defiant only affects stats lowered by foes.", true, source.side);
				}
				return;
			}
			let statsLowered = false;
			let i: BoostID;
			for (i in boost) {
				if (boost[i]! < 0) {
					statsLowered = true;
				}
			}
			if (statsLowered) {
				this.add('-ability', target, 'Defiant');
				this.boost({atk: 2}, target, target, null, true);
			}
		},
		name: "Defiant",
		rating: 2.5,
		num: 128,
	},
	deltastream: {
		onStart(source) {
			this.field.setWeather('deltastream');
		},
		onAnySetWeather(target, source, weather) {
			const strongWeathers = ['desolateland', 'primordialsea', 'deltastream'];
			if (this.field.getWeather().id === 'deltastream' && !strongWeathers.includes(weather.id)) return false;
		},
		onEnd(pokemon) {
			if (this.field.weatherState.source !== pokemon) return;
			for (const target of this.getAllActive()) {
				if (target === pokemon) continue;
				if (target.hasAbility('deltastream')) {
					this.field.weatherState.source = target;
					return;
				}
			}
			this.field.clearWeather();
		},
		name: "Delta Stream",
		rating: 4,
		num: 191,
	},
	desolateland: {
		onStart(source) {
			this.field.setWeather('desolateland');
		},
		onAnySetWeather(target, source, weather) {
			const strongWeathers = ['desolateland', 'primordialsea', 'deltastream'];
			if (this.field.getWeather().id === 'desolateland' && !strongWeathers.includes(weather.id)) return false;
		},
		onEnd(pokemon) {
			if (this.field.weatherState.source !== pokemon) return;
			for (const target of this.getAllActive()) {
				if (target === pokemon) continue;
				if (target.hasAbility('desolateland')) {
					this.field.weatherState.source = target;
					return;
				}
			}
			this.field.clearWeather();
		},
		name: "Desolate Land",
		rating: 4.5,
		num: 190,
	},
	disguise: {
		onDamagePriority: 1,
		onDamage(damage, target, source, effect) {
			if (
				effect && effect.effectType === 'Move' &&
				['mimikyu', 'mimikyutotem'].includes(target.species.id) && !target.transformed
			) {
				this.add('-activate', target, 'ability: Disguise');
				this.effectState.busted = true;
				return 0;
			}
		},
		onCriticalHit(target, source, move) {
			if (!target) return;
			if (!['mimikyu', 'mimikyutotem'].includes(target.species.id) || target.transformed) {
				return;
			}
			const hitSub = target.volatiles['substitute'] && !move.flags['authentic'] && !(move.infiltrates && this.gen >= 6);
			if (hitSub) return;

			if (!target.runImmunity(move.type)) return;
			return false;
		},
		onEffectiveness(typeMod, target, type, move) {
			if (!target || move.category === 'Status') return;
			if (!['mimikyu', 'mimikyutotem'].includes(target.species.id) || target.transformed) {
				return;
			}

			const hitSub = target.volatiles['substitute'] && !move.flags['authentic'] && !(move.infiltrates && this.gen >= 6);
			if (hitSub) return;

			if (!target.runImmunity(move.type)) return;
			return 0;
		},
		onUpdate(pokemon) {
			if (['mimikyu', 'mimikyutotem'].includes(pokemon.species.id) && this.effectState.busted) {
				const speciesid = pokemon.species.id === 'mimikyutotem' ? 'Mimikyu-Busted-Totem' : 'Mimikyu-Busted';
				pokemon.formeChange(speciesid, this.effect, true);
				this.damage(pokemon.baseMaxhp / 8, pokemon, pokemon, this.dex.species.get(speciesid));
			}
		},
		isBreakable: true,
		isPermanent: true,
		name: "Disguise",
		rating: 3.5,
		num: 209,
	},
	download: {
		onStart(pokemon) {
			let totaldef = 0;
			let totalspd = 0;
			for (const target of pokemon.foes()) {
				totaldef += target.getStat('def', false, true);
				totalspd += target.getStat('spd', false, true);
			}
			if (totaldef && totaldef >= totalspd) {
				this.boost({spa: 1});
			} else if (totalspd) {
				this.boost({atk: 1});
			}
		},
		name: "Download",
		rating: 3.5,
		num: 88,
	},
	dragonsmaw: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Dragon') {
				this.debug('Dragon\'s Maw boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Dragon') {
				this.debug('Dragon\'s Maw boost');
				return this.chainModify(1.5);
			}
		},
		name: "Dragon's Maw",
		rating: 3.5,
		num: 263,
	},
	drizzle: {
		onStart(source) {
			for (const action of this.queue) {
				if (action.choice === 'runPrimal' && action.pokemon === source && source.species.id === 'kyogre') return;
				if (action.choice !== 'runSwitch' && action.choice !== 'runPrimal') break;
			}
			this.field.setWeather('raindance');
		},
		name: "Drizzle",
		rating: 4,
		num: 2,
	},
	drought: {
		onStart(source) {
			for (const action of this.queue) {
				if (action.choice === 'runPrimal' && action.pokemon === source && source.species.id === 'groudon') return;
				if (action.choice !== 'runSwitch' && action.choice !== 'runPrimal') break;
			}
			this.field.setWeather('sunnyday');
		},
		name: "Drought",
		rating: 4,
		num: 70,
	},
	dryskin: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Water') {
				if (!this.heal(target.baseMaxhp / 4)) {
					this.add('-immune', target, '[from] ability: Dry Skin');
				}
				return null;
			}
		},
		onSourceBasePowerPriority: 17,
		onSourceBasePower(basePower, attacker, defender, move) {
			if (move.type === 'Fire') {
				return this.chainModify(1.25);
			}
		},
		onWeather(target, source, effect) {
			if (target.hasItem('utilityumbrella')) return;
			if (effect.id === 'raindance' || effect.id === 'primordialsea') {
				this.heal(target.baseMaxhp / 8);
			} else if (effect.id === 'sunnyday' || effect.id === 'desolateland') {
				this.damage(target.baseMaxhp / 8, target, target);
			}
		},
		isBreakable: true,
		name: "Dry Skin",
		rating: 3,
		num: 87,
	},
	earlybird: {
		name: "Early Bird",
		// Implemented in statuses.js
		rating: 1.5,
		num: 48,
	},
	effectspore: {
		onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target) && !source.status && source.runStatusImmunity('powder')) {
				const r = this.random(100);
				if (r < 11) {
					source.setStatus('slp', target);
				} else if (r < 21) {
					source.setStatus('par', target);
				} else if (r < 30) {
					source.setStatus('psn', target);
				}
			}
		},
		name: "Effect Spore",
		rating: 2,
		num: 27,
	},
	electricsurge: {
		onStart(source) {
			this.field.setTerrain('electricterrain');
		},
		name: "Electric Surge",
		rating: 4,
		num: 226,
	},
	emergencyexit: {
		onEmergencyExit(target) {
			if (!this.canSwitch(target.side) || target.forceSwitchFlag || target.switchFlag) return;
			for (const side of this.sides) {
				for (const active of side.active) {
					active.switchFlag = false;
				}
			}
			target.switchFlag = true;
			this.add('-activate', target, 'ability: Emergency Exit');
		},
		name: "Emergency Exit",
		rating: 1,
		num: 194,
	},
	fairyaura: {
		onStart(pokemon) {
			if (this.suppressingAbility(pokemon)) return;
			this.add('-ability', pokemon, 'Fairy Aura');
		},
		onAnyBasePowerPriority: 20,
		onAnyBasePower(basePower, source, target, move) {
			if (target === source || move.category === 'Status' || move.type !== 'Fairy') return;
			if (!move.auraBooster) move.auraBooster = this.effectState.target;
			if (move.auraBooster !== this.effectState.target) return;
			return this.chainModify([move.hasAuraBreak ? 3072 : 5448, 4096]);
		},
		isBreakable: true,
		name: "Fairy Aura",
		rating: 3,
		num: 187,
	},
	filter: {
		onSourceModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).typeMod > 0) {
				this.debug('Filter neutralize');
				return this.chainModify(0.75);
			}
		},
		isBreakable: true,
		name: "Filter",
		rating: 3,
		num: 111,
	},
	flamebody: {
		onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target)) {
				if (this.randomChance(3, 10)) {
					source.trySetStatus('brn', target);
				}
			}
		},
		name: "Flame Body",
		rating: 2,
		num: 49,
	},
	flareboost: {
		onBasePowerPriority: 19,
		onBasePower(basePower, attacker, defender, move) {
			if (attacker.status === 'brn' && move.category === 'Special') {
				return this.chainModify(1.5);
			}
		},
		name: "Flare Boost",
		rating: 2,
		num: 138,
	},
	flashfire: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Fire') {
				move.accuracy = true;
				if (!target.addVolatile('flashfire')) {
					this.add('-immune', target, '[from] ability: Flash Fire');
				}
				return null;
			}
		},
		onEnd(pokemon) {
			pokemon.removeVolatile('flashfire');
		},
		condition: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart(target) {
				this.add('-start', target, 'ability: Flash Fire');
			},
			onModifyAtkPriority: 5,
			onModifyAtk(atk, attacker, defender, move) {
				if (move.type === 'Fire' && attacker.hasAbility('flashfire')) {
					this.debug('Flash Fire boost');
					return this.chainModify(1.5);
				}
			},
			onModifySpAPriority: 5,
			onModifySpA(atk, attacker, defender, move) {
				if (move.type === 'Fire' && attacker.hasAbility('flashfire')) {
					this.debug('Flash Fire boost');
					return this.chainModify(1.5);
				}
			},
			onEnd(target) {
				this.add('-end', target, 'ability: Flash Fire', '[silent]');
			},
		},
		isBreakable: true,
		name: "Flash Fire",
		rating: 3.5,
		num: 18,
	},
	flowergift: {
		onStart(pokemon) {
			delete this.effectState.forme;
		},
		onUpdate(pokemon) {
			if (!pokemon.isActive || pokemon.baseSpecies.baseSpecies !== 'Cherrim' || pokemon.transformed) return;
			if (!pokemon.hp) return;
			if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
				if (pokemon.species.id !== 'cherrimsunshine') {
					pokemon.formeChange('Cherrim-Sunshine', this.effect, false, '[msg]');
				}
			} else {
				if (pokemon.species.id === 'cherrimsunshine') {
					pokemon.formeChange('Cherrim', this.effect, false, '[msg]');
				}
			}
		},
		onAllyModifyAtkPriority: 3,
		onAllyModifyAtk(atk, pokemon) {
			if (this.effectState.target.baseSpecies.baseSpecies !== 'Cherrim') return;
			if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(1.5);
			}
		},
		onAllyModifySpDPriority: 4,
		onAllyModifySpD(spd, pokemon) {
			if (this.effectState.target.baseSpecies.baseSpecies !== 'Cherrim') return;
			if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(1.5);
			}
		},
		isBreakable: true,
		name: "Flower Gift",
		rating: 1,
		num: 122,
	},
	flowerveil: {
		onAllyBoost(boost, target, source, effect) {
			if ((source && target === source) || !target.hasType('Grass')) return;
			let showMsg = false;
			let i: BoostID;
			for (i in boost) {
				if (boost[i]! < 0) {
					delete boost[i];
					showMsg = true;
				}
			}
			if (showMsg && !(effect as ActiveMove).secondaries) {
				const effectHolder = this.effectState.target;
				this.add('-block', target, 'ability: Flower Veil', '[of] ' + effectHolder);
			}
		},
		onAllySetStatus(status, target, source, effect) {
			if (target.hasType('Grass') && source && target !== source && effect && effect.id !== 'yawn') {
				this.debug('interrupting setStatus with Flower Veil');
				if (effect.id === 'synchronize' || (effect.effectType === 'Move' && !effect.secondaries)) {
					const effectHolder = this.effectState.target;
					this.add('-block', target, 'ability: Flower Veil', '[of] ' + effectHolder);
				}
				return null;
			}
		},
		onAllyTryAddVolatile(status, target) {
			if (target.hasType('Grass') && status.id === 'yawn') {
				this.debug('Flower Veil blocking yawn');
				const effectHolder = this.effectState.target;
				this.add('-block', target, 'ability: Flower Veil', '[of] ' + effectHolder);
				return null;
			}
		},
		isBreakable: true,
		name: "Flower Veil",
		rating: 0,
		num: 166,
	},
	fluffy: {
		onSourceModifyDamage(damage, source, target, move) {
			let mod = 1;
			if (move.type === 'Fire') mod *= 2;
			if (move.flags['contact']) mod /= 2;
			return this.chainModify(mod);
		},
		isBreakable: true,
		name: "Fluffy",
		rating: 3.5,
		num: 218,
	},
	forecast: {
		onUpdate(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Castform' || pokemon.transformed) return;
			let forme = null;
			switch (pokemon.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				if (pokemon.species.id !== 'castformsunny') forme = 'Castform-Sunny';
				break;
			case 'raindance':
			case 'primordialsea':
				if (pokemon.species.id !== 'castformrainy') forme = 'Castform-Rainy';
				break;
			case 'hail':
				if (pokemon.species.id !== 'castformsnowy') forme = 'Castform-Snowy';
				break;
			default:
				if (pokemon.species.id !== 'castform') forme = 'Castform';
				break;
			}
			if (pokemon.isActive && forme) {
				pokemon.formeChange(forme, this.effect, false, '[msg]');
			}
		},
		name: "Forecast",
		rating: 2,
		num: 59,
	},
	forewarn: {
		onStart(pokemon) {
			let warnMoves: (Move | Pokemon)[][] = [];
			let warnBp = 1;
			for (const target of pokemon.foes()) {
				for (const moveSlot of target.moveSlots) {
					const move = this.dex.moves.get(moveSlot.move);
					let bp = move.basePower;
					if (move.ohko) bp = 150;
					if (move.id === 'counter' || move.id === 'metalburst' || move.id === 'mirrorcoat') bp = 120;
					if (bp === 1) bp = 80;
					if (!bp && move.category !== 'Status') bp = 80;
					if (bp > warnBp) {
						warnMoves = [[move, target]];
						warnBp = bp;
					} else if (bp === warnBp) {
						warnMoves.push([move, target]);
					}
				}
			}
			if (!warnMoves.length) return;
			const [warnMoveName, warnTarget] = this.sample(warnMoves);
			this.add('-activate', pokemon, 'ability: Forewarn', warnMoveName, '[of] ' + warnTarget);
		},
		name: "Forewarn",
		rating: 0.5,
		num: 108,
	},
	friendguard: {
		name: "Friend Guard",
		onAnyModifyDamage(damage, source, target, move) {
			if (target !== this.effectState.target && target.isAlly(this.effectState.target)) {
				this.debug('Friend Guard weaken');
				return this.chainModify(0.75);
			}
		},
		isBreakable: true,
		rating: 0,
		num: 132,
	},
	frisk: {
		onStart(pokemon) {
			for (const target of pokemon.foes()) {
				if (target.item) {
					this.add('-item', target, target.getItem().name, '[from] ability: Frisk', '[of] ' + pokemon, '[identify]');
				}
			}
		},
		name: "Frisk",
		rating: 1.5,
		num: 119,
	},
	fullmetalbody: {
		onBoost(boost, target, source, effect) {
			if (source && target === source) return;
			let showMsg = false;
			let i: BoostID;
			for (i in boost) {
				if (boost[i]! < 0) {
					delete boost[i];
					showMsg = true;
				}
			}
			if (showMsg && !(effect as ActiveMove).secondaries && effect.id !== 'octolock') {
				this.add("-fail", target, "unboost", "[from] ability: Full Metal Body", "[of] " + target);
			}
		},
		name: "Full Metal Body",
		rating: 2,
		num: 230,
	},
	furcoat: {
		onModifyDefPriority: 6,
		onModifyDef(def) {
			return this.chainModify(2);
		},
		isBreakable: true,
		name: "Fur Coat",
		rating: 4,
		num: 169,
	},
	galewings: {
		onModifyPriority(priority, pokemon, target, move) {
			if (move?.type === 'Flying' && pokemon.hp === pokemon.maxhp) return priority + 1;
		},
		name: "Gale Wings",
		rating: 3,
		num: 177,
	},
	galvanize: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Electric';
				move.galvanizeBoosted = true;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.galvanizeBoosted) return this.chainModify([4915, 4096]);
		},
		name: "Galvanize",
		rating: 4,
		num: 206,
	},
	gluttony: {
		name: "Gluttony",
		rating: 1.5,
		num: 82,
	},
	gooey: {
		onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target, true)) {
				this.add('-ability', target, 'Gooey');
				this.boost({spe: -1}, source, target, null, true);
			}
		},
		name: "Gooey",
		rating: 2,
		num: 183,
	},
	gorillatactics: {
		onStart(pokemon) {
			pokemon.abilityState.choiceLock = "";
		},
		onBeforeMove(pokemon, target, move) {
			if (move.isZOrMaxPowered || move.id === 'struggle') return;
			if (pokemon.abilityState.choiceLock && pokemon.abilityState.choiceLock !== move.id) {
				// Fails unless ability is being ignored (these events will not run), no PP lost.
				this.addMove('move', pokemon, move.name);
				this.attrLastMove('[still]');
				this.debug("Disabled by Gorilla Tactics");
				this.add('-fail', pokemon);
				return false;
			}
		},
		onModifyMove(move, pokemon) {
			if (pokemon.abilityState.choiceLock || move.isZOrMaxPowered || move.id === 'struggle') return;
			pokemon.abilityState.choiceLock = move.id;
		},
		onModifyAtkPriority: 1,
		onModifyAtk(atk, pokemon) {
			if (pokemon.volatiles['dynamax']) return;
			// PLACEHOLDER
			this.debug('Gorilla Tactics Atk Boost');
			return this.chainModify(1.5);
		},
		onDisableMove(pokemon) {
			if (!pokemon.abilityState.choiceLock) return;
			if (pokemon.volatiles['dynamax']) return;
			for (const moveSlot of pokemon.moveSlots) {
				if (moveSlot.id !== pokemon.abilityState.choiceLock) {
					pokemon.disableMove(moveSlot.id, false, this.effectState.sourceEffect);
				}
			}
		},
		onEnd(pokemon) {
			pokemon.abilityState.choiceLock = "";
		},
		name: "Gorilla Tactics",
		rating: 4.5,
		num: 255,
	},
	grasspelt: {
		onModifyDefPriority: 6,
		onModifyDef(pokemon) {
			if (this.field.isTerrain('grassyterrain')) return this.chainModify(1.5);
		},
		isBreakable: true,
		name: "Grass Pelt",
		rating: 0.5,
		num: 179,
	},
	grassysurge: {
		onStart(source) {
			this.field.setTerrain('grassyterrain');
		},
		name: "Grassy Surge",
		rating: 4,
		num: 229,
	},
	grimneigh: {
		onSourceAfterFaint(length, target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({spa: length}, source);
			}
		},
		name: "Grim Neigh",
		rating: 3,
		num: 265,
	},
	gulpmissile: {
		onDamagingHit(damage, target, source, move) {
			if (!source.hp || !source.isActive || target.transformed || target.isSemiInvulnerable()) return;
			if (['cramorantgulping', 'cramorantgorging'].includes(target.species.id)) {
				this.damage(source.baseMaxhp / 4, source, target);
				if (target.species.id === 'cramorantgulping') {
					this.boost({def: -1}, source, target, null, true);
				} else {
					source.trySetStatus('par', target, move);
				}
				target.formeChange('cramorant', move);
			}
		},
		// The Dive part of this mechanic is implemented in Dive's `onTryMove` in moves.ts
		onSourceTryPrimaryHit(target, source, effect) {
			if (
				effect && effect.id === 'surf' && source.hasAbility('gulpmissile') &&
				source.species.name === 'Cramorant' && !source.transformed
			) {
				const forme = source.hp <= source.maxhp / 2 ? 'cramorantgorging' : 'cramorantgulping';
				source.formeChange(forme, effect);
			}
		},
		isPermanent: true,
		name: "Gulp Missile",
		rating: 2.5,
		num: 241,
	},
	guts: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, pokemon) {
			if (pokemon.status) {
				return this.chainModify(1.5);
			}
		},
		name: "Guts",
		rating: 3,
		num: 62,
	},
	harvest: {
		name: "Harvest",
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			if (this.field.isWeather(['sunnyday', 'desolateland']) || this.randomChance(1, 2)) {
				if (pokemon.hp && !pokemon.item && this.dex.items.get(pokemon.lastItem).isBerry) {
					pokemon.setItem(pokemon.lastItem);
					pokemon.lastItem = '';
					this.add('-item', pokemon, pokemon.getItem(), '[from] ability: Harvest');
				}
			}
		},
		rating: 2.5,
		num: 139,
	},
	healer: {
		name: "Healer",
		onResidualOrder: 5,
		onResidualSubOrder: 3,
		onResidual(pokemon) {
			for (const allyActive of pokemon.adjacentAllies()) {
				if (allyActive.status && this.randomChance(3, 10)) {
					this.add('-activate', pokemon, 'ability: Healer');
					allyActive.cureStatus();
				}
			}
		},
		rating: 0,
		num: 131,
	},
	heatproof: {
		onSourceBasePowerPriority: 18,
		onSourceBasePower(basePower, attacker, defender, move) {
			if (move.type === 'Fire') {
				return this.chainModify(0.5);
			}
		},
		onDamage(damage, target, source, effect) {
			if (effect && effect.id === 'brn') {
				return damage / 2;
			}
		},
		isBreakable: true,
		name: "Heatproof",
		rating: 2,
		num: 85,
	},
	heavymetal: {
		onModifyWeightPriority: 1,
		onModifyWeight(weighthg) {
			return weighthg * 2;
		},
		isBreakable: true,
		name: "Heavy Metal",
		rating: 0,
		num: 134,
	},
	honeygather: {
		name: "Honey Gather",
		rating: 0,
		num: 118,
	},
	hugepower: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk) {
			return this.chainModify(2);
		},
		name: "Huge Power",
		rating: 5,
		num: 37,
	},
	hungerswitch: {
		onResidualOrder: 29,
		onResidual(pokemon) {
			if (pokemon.species.baseSpecies !== 'Morpeko' || pokemon.transformed) return;
			const targetForme = pokemon.species.name === 'Morpeko' ? 'Morpeko-Hangry' : 'Morpeko';
			pokemon.formeChange(targetForme);
		},
		name: "Hunger Switch",
		rating: 1,
		num: 258,
	},
	hustle: {
		// This should be applied directly to the stat as opposed to chaining with the others
		onModifyAtkPriority: 5,
		onModifyAtk(atk) {
			return this.modify(atk, 1.5);
		},
		onSourceModifyAccuracyPriority: -1,
		onSourceModifyAccuracy(accuracy, target, source, move) {
			if (move.category === 'Physical' && typeof accuracy === 'number') {
				return this.chainModify([3277, 4096]);
			}
		},
		name: "Hustle",
		rating: 3.5,
		num: 55,
	},
	hydration: {
		onResidualOrder: 5,
		onResidualSubOrder: 3,
		onResidual(pokemon) {
			if (pokemon.status && ['raindance', 'primordialsea'].includes(pokemon.effectiveWeather())) {
				this.debug('hydration');
				this.add('-activate', pokemon, 'ability: Hydration');
				pokemon.cureStatus();
			}
		},
		name: "Hydration",
		rating: 1.5,
		num: 93,
	},
	hypercutter: {
		onBoost(boost, target, source, effect) {
			if (source && target === source) return;
			if (boost.atk && boost.atk < 0) {
				delete boost.atk;
				if (!(effect as ActiveMove).secondaries) {
					this.add("-fail", target, "unboost", "Attack", "[from] ability: Hyper Cutter", "[of] " + target);
				}
			}
		},
		isBreakable: true,
		name: "Hyper Cutter",
		rating: 1.5,
		num: 52,
	},
	icebody: {
		onWeather(target, source, effect) {
			if (effect.id === 'hail') {
				this.heal(target.baseMaxhp / 16);
			}
		},
		onImmunity(type, pokemon) {
			if (type === 'hail') return false;
		},
		name: "Ice Body",
		rating: 1,
		num: 115,
	},
	iceface: {
		onStart(pokemon) {
			if (this.field.isWeather('hail') && pokemon.species.id === 'eiscuenoice' && !pokemon.transformed) {
				this.add('-activate', pokemon, 'ability: Ice Face');
				this.effectState.busted = false;
				pokemon.formeChange('Eiscue', this.effect, true);
			}
		},
		onDamagePriority: 1,
		onDamage(damage, target, source, effect) {
			if (
				effect && effect.effectType === 'Move' && effect.category === 'Physical' &&
				target.species.id === 'eiscue' && !target.transformed
			) {
				this.add('-activate', target, 'ability: Ice Face');
				this.effectState.busted = true;
				return 0;
			}
		},
		onCriticalHit(target, type, move) {
			if (!target) return;
			if (move.category !== 'Physical' || target.species.id !== 'eiscue' || target.transformed) return;
			if (target.volatiles['substitute'] && !(move.flags['authentic'] || move.infiltrates)) return;
			if (!target.runImmunity(move.type)) return;
			return false;
		},
		onEffectiveness(typeMod, target, type, move) {
			if (!target) return;
			if (move.category !== 'Physical' || target.species.id !== 'eiscue' || target.transformed) return;

			const hitSub = target.volatiles['substitute'] && !move.flags['authentic'] && !(move.infiltrates && this.gen >= 6);
			if (hitSub) return;

			if (!target.runImmunity(move.type)) return;
			return 0;
		},
		onUpdate(pokemon) {
			if (pokemon.species.id === 'eiscue' && this.effectState.busted) {
				pokemon.formeChange('Eiscue-Noice', this.effect, true);
			}
		},
		onAnyWeatherStart() {
			const pokemon = this.effectState.target;
			if (!pokemon.hp) return;
			if (this.field.isWeather('hail') && pokemon.species.id === 'eiscuenoice' && !pokemon.transformed) {
				this.add('-activate', pokemon, 'ability: Ice Face');
				this.effectState.busted = false;
				pokemon.formeChange('Eiscue', this.effect, true);
			}
		},
		isBreakable: true,
		isPermanent: true,
		name: "Ice Face",
		rating: 3,
		num: 248,
	},
	icescales: {
		onSourceModifyDamage(damage, source, target, move) {
			if (move.category === 'Special') {
				return this.chainModify(0.5);
			}
		},
		isBreakable: true,
		name: "Ice Scales",
		rating: 4,
		num: 246,
	},
	illuminate: {
		name: "Illuminate",
		rating: 0,
		num: 35,
	},
	illusion: {
		onBeforeSwitchIn(pokemon) {
			pokemon.illusion = null;
			// yes, you can Illusion an active pokemon but only if it's to your right
			for (let i = pokemon.side.pokemon.length - 1; i > pokemon.position; i--) {
				const possibleTarget = pokemon.side.pokemon[i];
				if (!possibleTarget.fainted) {
					pokemon.illusion = possibleTarget;
					break;
				}
			}
		},
		onDamagingHit(damage, target, source, move) {
			if (target.illusion) {
				this.singleEvent('End', this.dex.abilities.get('Illusion'), target.abilityState, target, source, move);
			}
		},
		onEnd(pokemon) {
			if (pokemon.illusion) {
				this.debug('illusion cleared');
				pokemon.illusion = null;
				const details = pokemon.species.name + (pokemon.level === 100 ? '' : ', L' + pokemon.level) +
					(pokemon.gender === '' ? '' : ', ' + pokemon.gender) + (pokemon.set.shiny ? ', shiny' : '');
				this.add('replace', pokemon, details);
				this.add('-end', pokemon, 'Illusion');
			}
		},
		onFaint(pokemon) {
			pokemon.illusion = null;
		},
		name: "Illusion",
		rating: 4.5,
		num: 149,
	},
	immunity: {
		onUpdate(pokemon) {
			if (pokemon.status === 'psn' || pokemon.status === 'tox') {
				this.add('-activate', pokemon, 'ability: Immunity');
				pokemon.cureStatus();
			}
		},
		onSetStatus(status, target, source, effect) {
			if (status.id !== 'psn' && status.id !== 'tox') return;
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: Immunity');
			}
			return false;
		},
		isBreakable: true,
		name: "Immunity",
		rating: 2,
		num: 17,
	},
	imposter: {
		onSwitchIn(pokemon) {
			this.effectState.switchingIn = true;
		},
		onStart(pokemon) {
			// Imposter does not activate when Skill Swapped or when Neutralizing Gas leaves the field
			if (!this.effectState.switchingIn) return;
			// copies across in doubles/triples
			// (also copies across in multibattle and diagonally in free-for-all,
			// but side.foe already takes care of those)
			const target = pokemon.side.foe.active[pokemon.side.foe.active.length - 1 - pokemon.position];
			if (target) {
				pokemon.transformInto(target, this.dex.abilities.get('imposter'));
			}
			this.effectState.switchingIn = false;
		},
		name: "Imposter",
		rating: 5,
		num: 150,
	},
	infiltrator: {
		onModifyMove(move) {
			move.infiltrates = true;
		},
		name: "Infiltrator",
		rating: 2.5,
		num: 151,
	},
	innardsout: {
		name: "Innards Out",
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			if (!target.hp) {
				this.damage(target.getUndynamaxedHP(damage), source, target);
			}
		},
		rating: 4,
		num: 215,
	},
	innerfocus: {
		onTryAddVolatile(status, pokemon) {
			if (status.id === 'flinch') return null;
		},
		onBoost(boost, target, source, effect) {
			if (effect.id === 'intimidate') {
				delete boost.atk;
				this.add('-fail', target, 'unboost', 'Attack', '[from] ability: Inner Focus', '[of] ' + target);
			}
		},
		isBreakable: true,
		name: "Inner Focus",
		rating: 1.5,
		num: 39,
	},
	insomnia: {
		onUpdate(pokemon) {
			if (pokemon.status === 'slp') {
				this.add('-activate', pokemon, 'ability: Insomnia');
				pokemon.cureStatus();
			}
		},
		onSetStatus(status, target, source, effect) {
			if (status.id !== 'slp') return;
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: Insomnia');
			}
			return false;
		},
		isBreakable: true,
		name: "Insomnia",
		rating: 2,
		num: 15,
	},
	intimidate: {
		onStart(pokemon) {
			let activated = false;
			for (const target of pokemon.adjacentFoes()) {
				if (!activated) {
					this.add('-ability', pokemon, 'Intimidate', 'boost');
					activated = true;
				}
				if (target.volatiles['substitute']) {
					this.add('-immune', target);
				} else {
					this.boost({atk: -1}, target, pokemon, null, true);
				}
			}
		},
		name: "Intimidate",
		rating: 3.5,
		num: 22,
	},
	intrepidsword: {
		onStart(pokemon) {
			this.boost({atk: 1}, pokemon);
		},
		name: "Intrepid Sword",
		rating: 4,
		num: 234,
	},
	ironbarbs: {
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target, true)) {
				this.damage(source.baseMaxhp / 8, source, target);
			}
		},
		name: "Iron Barbs",
		rating: 2.5,
		num: 160,
	},
	ironfist: {
		onBasePowerPriority: 23,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['punch']) {
				this.debug('Iron Fist boost');
				return this.chainModify([4915, 4096]);
			}
		},
		name: "Iron Fist",
		rating: 3,
		num: 89,
	},
	justified: {
		onDamagingHit(damage, target, source, move) {
			if (move.type === 'Dark') {
				this.boost({atk: 1});
			}
		},
		name: "Justified",
		rating: 2.5,
		num: 154,
	},
	keeneye: {
		onBoost(boost, target, source, effect) {
			if (source && target === source) return;
			if (boost.accuracy && boost.accuracy < 0) {
				delete boost.accuracy;
				if (!(effect as ActiveMove).secondaries) {
					this.add("-fail", target, "unboost", "accuracy", "[from] ability: Keen Eye", "[of] " + target);
				}
			}
		},
		onModifyMove(move) {
			move.ignoreEvasion = true;
		},
		isBreakable: true,
		name: "Keen Eye",
		rating: 0.5,
		num: 51,
	},
	klutz: {
		// Item suppression implemented in Pokemon.ignoringItem() within sim/pokemon.js
		name: "Klutz",
		rating: -1,
		num: 103,
	},
	leafguard: {
		onSetStatus(status, target, source, effect) {
			if (['sunnyday', 'desolateland'].includes(target.effectiveWeather())) {
				if ((effect as Move)?.status) {
					this.add('-immune', target, '[from] ability: Leaf Guard');
				}
				return false;
			}
		},
		onTryAddVolatile(status, target) {
			if (status.id === 'yawn' && ['sunnyday', 'desolateland'].includes(target.effectiveWeather())) {
				this.add('-immune', target, '[from] ability: Leaf Guard');
				return null;
			}
		},
		isBreakable: true,
		name: "Leaf Guard",
		rating: 0.5,
		num: 102,
	},
	levitate: {
		// airborneness implemented in sim/pokemon.js:Pokemon#isGrounded
		isBreakable: true,
		name: "Levitate",
		rating: 3.5,
		num: 26,
	},
	libero: {
		onPrepareHit(source, target, move) {
			if (move.hasBounced || move.sourceEffect === 'snatch') return;
			const type = move.type;
			if (type && type !== '???' && source.getTypes().join() !== type) {
				if (!source.setType(type)) return;
				this.add('-start', source, 'typechange', type, '[from] ability: Libero');
			}
		},
		name: "Libero",
		rating: 4.5,
		num: 236,
	},
	lightmetal: {
		onModifyWeight(weighthg) {
			return this.trunc(weighthg / 2);
		},
		isBreakable: true,
		name: "Light Metal",
		rating: 1,
		num: 135,
	},
	lightningrod: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Electric') {
				if (!this.boost({spa: 1})) {
					this.add('-immune', target, '[from] ability: Lightning Rod');
				}
				return null;
			}
		},
		onAnyRedirectTarget(target, source, source2, move) {
			if (move.type !== 'Electric' || ['firepledge', 'grasspledge', 'waterpledge'].includes(move.id)) return;
			const redirectTarget = ['randomNormal', 'adjacentFoe'].includes(move.target) ? 'normal' : move.target;
			if (this.validTarget(this.effectState.target, source, redirectTarget)) {
				if (move.smartTarget) move.smartTarget = false;
				if (this.effectState.target !== target) {
					this.add('-activate', this.effectState.target, 'ability: Lightning Rod');
				}
				return this.effectState.target;
			}
		},
		isBreakable: true,
		name: "Lightning Rod",
		rating: 3,
		num: 31,
	},
	limber: {
		onUpdate(pokemon) {
			if (pokemon.status === 'par') {
				this.add('-activate', pokemon, 'ability: Limber');
				pokemon.cureStatus();
			}
		},
		onSetStatus(status, target, source, effect) {
			if (status.id !== 'par') return;
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: Limber');
			}
			return false;
		},
		isBreakable: true,
		name: "Limber",
		rating: 2,
		num: 7,
	},
	liquidooze: {
		onSourceTryHeal(damage, target, source, effect) {
			this.debug("Heal is occurring: " + target + " <- " + source + " :: " + effect.id);
			const canOoze = ['drain', 'leechseed', 'strengthsap'];
			if (canOoze.includes(effect.id)) {
				this.damage(damage);
				return 0;
			}
		},
		name: "Liquid Ooze",
		rating: 1.5,
		num: 64,
	},
	liquidvoice: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			if (move.flags['sound'] && !pokemon.volatiles['dynamax']) { // hardcode
				move.type = 'Water';
			}
		},
		name: "Liquid Voice",
		rating: 1.5,
		num: 204,
	},
	longreach: {
		onModifyMove(move) {
			delete move.flags['contact'];
		},
		name: "Long Reach",
		rating: 1,
		num: 203,
	},
	magicbounce: {
		name: "Magic Bounce",
		onTryHitPriority: 1,
		onTryHit(target, source, move) {
			if (target === source || move.hasBounced || !move.flags['reflectable']) {
				return;
			}
			const newMove = this.dex.getActiveMove(move.id);
			newMove.hasBounced = true;
			newMove.pranksterBoosted = false;
			this.actions.useMove(newMove, target, source);
			return null;
		},
		onAllyTryHitSide(target, source, move) {
			if (target.isAlly(source) || move.hasBounced || !move.flags['reflectable']) {
				return;
			}
			const newMove = this.dex.getActiveMove(move.id);
			newMove.hasBounced = true;
			newMove.pranksterBoosted = false;
			this.actions.useMove(newMove, this.effectState.target, source);
			return null;
		},
		condition: {
			duration: 1,
		},
		isBreakable: true,
		rating: 4,
		num: 156,
	},
	magicguard: {
		onDamage(damage, target, source, effect) {
			if (effect.effectType !== 'Move') {
				if (effect.effectType === 'Ability') this.add('-activate', source, 'ability: ' + effect.name);
				return false;
			}
		},
		name: "Magic Guard",
		rating: 4,
		num: 98,
	},
	magician: {
		onAfterMoveSecondarySelf(source, target, move) {
			if (!move || !target) return;
			if (target !== source && move.category !== 'Status') {
				if (source.item || source.volatiles['gem'] || move.id === 'fling') return;
				const yourItem = target.takeItem(source);
				if (!yourItem) return;
				if (!source.setItem(yourItem)) {
					target.item = yourItem.id; // bypass setItem so we don't break choicelock or anything
					return;
				}
				this.add('-item', source, yourItem, '[from] ability: Magician', '[of] ' + target);
			}
		},
		name: "Magician",
		rating: 1.5,
		num: 170,
	},
	magmaarmor: {
		onUpdate(pokemon) {
			if (pokemon.status === 'frz') {
				this.add('-activate', pokemon, 'ability: Magma Armor');
				pokemon.cureStatus();
			}
		},
		onImmunity(type, pokemon) {
			if (type === 'frz') return false;
		},
		isBreakable: true,
		name: "Magma Armor",
		rating: 1,
		num: 40,
	},
	magnetpull: {
		onFoeTrapPokemon(pokemon) {
			if (pokemon.hasType('Steel') && pokemon.isAdjacent(this.effectState.target)) {
				pokemon.tryTrap(true);
			}
		},
		onFoeMaybeTrapPokemon(pokemon, source) {
			if (!source) source = this.effectState.target;
			if (!source || !pokemon.isAdjacent(source)) return;
			if (!pokemon.knownType || pokemon.hasType('Steel')) {
				pokemon.maybeTrapped = true;
			}
		},
		name: "Magnet Pull",
		rating: 4,
		num: 42,
	},
	marvelscale: {
		onModifyDefPriority: 6,
		onModifyDef(def, pokemon) {
			if (pokemon.status) {
				return this.chainModify(1.5);
			}
		},
		isBreakable: true,
		name: "Marvel Scale",
		rating: 2.5,
		num: 63,
	},
	megalauncher: {
		onBasePowerPriority: 19,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['pulse']) {
				return this.chainModify(1.5);
			}
		},
		name: "Mega Launcher",
		rating: 3,
		num: 178,
	},
	merciless: {
		onModifyCritRatio(critRatio, source, target) {
			if (target && ['psn', 'tox'].includes(target.status)) return 5;
		},
		name: "Merciless",
		rating: 1.5,
		num: 196,
	},
	mimicry: {
		onStart(pokemon) {
			if (this.field.terrain) {
				pokemon.addVolatile('mimicry');
			} else {
				const types = pokemon.baseSpecies.types;
				if (pokemon.getTypes().join() === types.join() || !pokemon.setType(types)) return;
				this.add('-start', pokemon, 'typechange', types.join('/'), '[from] ability: Mimicry');
				this.hint("Transform Mimicry changes you to your original un-transformed types.");
			}
		},
		onAnyTerrainStart() {
			const pokemon = this.effectState.target;
			delete pokemon.volatiles['mimicry'];
			pokemon.addVolatile('mimicry');
		},
		onEnd(pokemon) {
			delete pokemon.volatiles['mimicry'];
		},
		condition: {
			onStart(pokemon) {
				let newType;
				switch (this.field.terrain) {
				case 'electricterrain':
					newType = 'Electric';
					break;
				case 'grassyterrain':
					newType = 'Grass';
					break;
				case 'mistyterrain':
					newType = 'Fairy';
					break;
				case 'psychicterrain':
					newType = 'Psychic';
					break;
				}
				if (!newType || pokemon.getTypes().join() === newType || !pokemon.setType(newType)) return;
				this.add('-start', pokemon, 'typechange', newType, '[from] ability: Mimicry');
			},
			onUpdate(pokemon) {
				if (!this.field.terrain) {
					const types = pokemon.species.types;
					if (pokemon.getTypes().join() === types.join() || !pokemon.setType(types)) return;
					this.add('-activate', pokemon, 'ability: Mimicry');
					this.add('-end', pokemon, 'typechange', '[silent]');
					pokemon.removeVolatile('mimicry');
				}
			},
		},
		name: "Mimicry",
		rating: 0.5,
		num: 250,
	},
	minus: {
		onModifySpAPriority: 5,
		onModifySpA(spa, pokemon) {
			for (const allyActive of pokemon.allies()) {
				if (allyActive.hasAbility(['minus', 'plus'])) {
					return this.chainModify(1.5);
				}
			}
		},
		name: "Minus",
		rating: 0,
		num: 58,
	},
	mirrorarmor: {
		onBoost(boost, target, source, effect) {
			// Don't bounce self stat changes, or boosts that have already bounced
			if (target === source || !boost || effect.id === 'mirrorarmor') return;
			let b: BoostID;
			for (b in boost) {
				if (boost[b]! < 0) {
					if (target.boosts[b] === -6) continue;
					const negativeBoost: SparseBoostsTable = {};
					negativeBoost[b] = boost[b];
					delete boost[b];
					this.add('-ability', target, 'Mirror Armor');
					this.boost(negativeBoost, source, target, null, true);
				}
			}
		},
		isBreakable: true,
		name: "Mirror Armor",
		rating: 2,
		num: 240,
	},
	mistysurge: {
		onStart(source) {
			this.field.setTerrain('mistyterrain');
		},
		name: "Misty Surge",
		rating: 3.5,
		num: 228,
	},
	moldbreaker: {
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Mold Breaker');
		},
		onModifyMove(move) {
			move.ignoreAbility = true;
		},
		name: "Mold Breaker",
		rating: 3.5,
		num: 104,
	},
	moody: {
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			let stats: BoostID[] = [];
			const boost: SparseBoostsTable = {};
			let statPlus: BoostID;
			for (statPlus in pokemon.boosts) {
				if (statPlus === 'accuracy' || statPlus === 'evasion') continue;
				if (pokemon.boosts[statPlus] < 6) {
					stats.push(statPlus);
				}
			}
			let randomStat: BoostID | undefined = stats.length ? this.sample(stats) : undefined;
			if (randomStat) boost[randomStat] = 2;

			stats = [];
			let statMinus: BoostID;
			for (statMinus in pokemon.boosts) {
				if (statMinus === 'accuracy' || statMinus === 'evasion') continue;
				if (pokemon.boosts[statMinus] > -6 && statMinus !== randomStat) {
					stats.push(statMinus);
				}
			}
			randomStat = stats.length ? this.sample(stats) : undefined;
			if (randomStat) boost[randomStat] = -1;

			this.boost(boost);
		},
		name: "Moody",
		rating: 5,
		num: 141,
	},
	motordrive: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Electric') {
				if (!this.boost({spe: 1})) {
					this.add('-immune', target, '[from] ability: Motor Drive');
				}
				return null;
			}
		},
		isBreakable: true,
		name: "Motor Drive",
		rating: 3,
		num: 78,
	},
	moxie: {
		onSourceAfterFaint(length, target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({atk: length}, source);
			}
		},
		name: "Moxie",
		rating: 3,
		num: 153,
	},
	multiscale: {
		onSourceModifyDamage(damage, source, target, move) {
			if (target.hp >= target.maxhp) {
				this.debug('Multiscale weaken');
				return this.chainModify(0.5);
			}
		},
		isBreakable: true,
		name: "Multiscale",
		rating: 3.5,
		num: 136,
	},
	multitype: {
		// Multitype's type-changing itself is implemented in statuses.js
		isPermanent: true,
		name: "Multitype",
		rating: 4,
		num: 121,
	},
	mummy: {
		name: "Mummy",
		onDamagingHit(damage, target, source, move) {
			const sourceAbility = source.getAbility();
			if (sourceAbility.isPermanent || sourceAbility.id === 'mummy') {
				return;
			}
			if (this.checkMoveMakesContact(move, source, target, !source.isAlly(target))) {
				const oldAbility = source.setAbility('mummy', target);
				if (oldAbility) {
					this.add('-activate', target, 'ability: Mummy', this.dex.abilities.get(oldAbility).name, '[of] ' + source);
				}
			}
		},
		rating: 2,
		num: 152,
	},
	naturalcure: {
		onCheckShow(pokemon) {
			// This is complicated
			// For the most part, in-game, it's obvious whether or not Natural Cure activated,
			// since you can see how many of your opponent's pokemon are statused.
			// The only ambiguous situation happens in Doubles/Triples, where multiple pokemon
			// that could have Natural Cure switch out, but only some of them get cured.
			if (pokemon.side.active.length === 1) return;
			if (pokemon.showCure === true || pokemon.showCure === false) return;

			const cureList = [];
			let noCureCount = 0;
			for (const curPoke of pokemon.side.active) {
				// pokemon not statused
				if (!curPoke?.status) {
					// this.add('-message', "" + curPoke + " skipped: not statused or doesn't exist");
					continue;
				}
				if (curPoke.showCure) {
					// this.add('-message', "" + curPoke + " skipped: Natural Cure already known");
					continue;
				}
				const species = curPoke.species;
				// pokemon can't get Natural Cure
				if (!Object.values(species.abilities).includes('Natural Cure')) {
					// this.add('-message', "" + curPoke + " skipped: no Natural Cure");
					continue;
				}
				// pokemon's ability is known to be Natural Cure
				if (!species.abilities['1'] && !species.abilities['H']) {
					// this.add('-message', "" + curPoke + " skipped: only one ability");
					continue;
				}
				// pokemon isn't switching this turn
				if (curPoke !== pokemon && !this.queue.willSwitch(curPoke)) {
					// this.add('-message', "" + curPoke + " skipped: not switching");
					continue;
				}

				if (curPoke.hasAbility('naturalcure')) {
					// this.add('-message', "" + curPoke + " confirmed: could be Natural Cure (and is)");
					cureList.push(curPoke);
				} else {
					// this.add('-message', "" + curPoke + " confirmed: could be Natural Cure (but isn't)");
					noCureCount++;
				}
			}

			if (!cureList.length || !noCureCount) {
				// It's possible to know what pokemon were cured
				for (const pkmn of cureList) {
					pkmn.showCure = true;
				}
			} else {
				// It's not possible to know what pokemon were cured

				// Unlike a -hint, this is real information that battlers need, so we use a -message
				this.add('-message', "(" + cureList.length + " of " + pokemon.side.name + "'s pokemon " + (cureList.length === 1 ? "was" : "were") + " cured by Natural Cure.)");

				for (const pkmn of cureList) {
					pkmn.showCure = false;
				}
			}
		},
		onSwitchOut(pokemon) {
			if (!pokemon.status) return;

			// if pokemon.showCure is undefined, it was skipped because its ability
			// is known
			if (pokemon.showCure === undefined) pokemon.showCure = true;

			if (pokemon.showCure) this.add('-curestatus', pokemon, pokemon.status, '[from] ability: Natural Cure');
			pokemon.setStatus('');

			// only reset .showCure if it's false
			// (once you know a Pokemon has Natural Cure, its cures are always known)
			if (!pokemon.showCure) pokemon.showCure = undefined;
		},
		name: "Natural Cure",
		rating: 2.5,
		num: 30,
	},
	neuroforce: {
		onModifyDamage(damage, source, target, move) {
			if (move && target.getMoveHitData(move).typeMod > 0) {
				return this.chainModify([5120, 4096]);
			}
		},
		name: "Neuroforce",
		rating: 2.5,
		num: 233,
	},
	neutralizinggas: {
		// Ability suppression implemented in sim/pokemon.ts:Pokemon#ignoringAbility
		onPreStart(pokemon) {
			this.add('-ability', pokemon, 'Neutralizing Gas');
			pokemon.abilityState.ending = false;
			for (const target of this.getAllActive()) {
				if (target.illusion) {
					this.singleEvent('End', this.dex.abilities.get('Illusion'), target.abilityState, target, pokemon, 'neutralizinggas');
				}
				if (target.volatiles['slowstart']) {
					delete target.volatiles['slowstart'];
					this.add('-end', target, 'Slow Start', '[silent]');
				}
			}
		},
		onEnd(source) {
			for (const pokemon of this.getAllActive()) {
				if (pokemon !== source && pokemon.hasAbility('Neutralizing Gas')) {
					return;
				}
			}
			this.add('-end', source, 'ability: Neutralizing Gas');

			// FIXME this happens before the pokemon switches out, should be the opposite order.
			// Not an easy fix since we cant use a supported event. Would need some kind of special event that
			// gathers events to run after the switch and then runs them when the ability is no longer accessible.
			// (If you're tackling this, do note extreme weathers have the same issue)

			// Mark this pokemon's ability as ending so Pokemon#ignoringAbility skips it
			if (source.abilityState.ending) return;
			source.abilityState.ending = true;
			const sortedActive = this.getAllActive();
			this.speedSort(sortedActive);
			for (const pokemon of sortedActive) {
				if (pokemon !== source) {
					// Will be suppressed by Pokemon#ignoringAbility if needed
					this.singleEvent('Start', pokemon.getAbility(), pokemon.abilityState, pokemon);
				}
			}
		},
		name: "Neutralizing Gas",
		rating: 4,
		num: 256,
	},
	noguard: {
		onAnyInvulnerabilityPriority: 1,
		onAnyInvulnerability(target, source, move) {
			if (move && (source === this.effectState.target || target === this.effectState.target)) return 0;
		},
		onAnyAccuracy(accuracy, target, source, move) {
			if (move && (source === this.effectState.target || target === this.effectState.target)) {
				return true;
			}
			return accuracy;
		},
		name: "No Guard",
		rating: 4,
		num: 99,
	},
	normalize: {
		onModifyTypePriority: 1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'hiddenpower', 'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'struggle', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (!(move.isZ && move.category !== 'Status') && !noModifyType.includes(move.id)) {
				move.type = 'Normal';
				move.normalizeBoosted = true;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.normalizeBoosted) return this.chainModify([4915, 4096]);
		},
		name: "Normalize",
		rating: 0,
		num: 96,
	},
	oblivious: {
		onUpdate(pokemon) {
			if (pokemon.volatiles['attract']) {
				this.add('-activate', pokemon, 'ability: Oblivious');
				pokemon.removeVolatile('attract');
				this.add('-end', pokemon, 'move: Attract', '[from] ability: Oblivious');
			}
			if (pokemon.volatiles['taunt']) {
				this.add('-activate', pokemon, 'ability: Oblivious');
				pokemon.removeVolatile('taunt');
				// Taunt's volatile already sends the -end message when removed
			}
		},
		onImmunity(type, pokemon) {
			if (type === 'attract') return false;
		},
		onTryHit(pokemon, target, move) {
			if (move.id === 'attract' || move.id === 'captivate' || move.id === 'taunt') {
				this.add('-immune', pokemon, '[from] ability: Oblivious');
				return null;
			}
		},
		onBoost(boost, target, source, effect) {
			if (effect.id === 'intimidate') {
				delete boost.atk;
				this.add('-fail', target, 'unboost', 'Attack', '[from] ability: Oblivious', '[of] ' + target);
			}
		},
		isBreakable: true,
		name: "Oblivious",
		rating: 1.5,
		num: 12,
	},
	overcoat: {
		onImmunity(type, pokemon) {
			if (type === 'sandstorm' || type === 'hail' || type === 'powder') return false;
		},
		onTryHitPriority: 1,
		onTryHit(target, source, move) {
			if (move.flags['powder'] && target !== source && this.dex.getImmunity('powder', target)) {
				this.add('-immune', target, '[from] ability: Overcoat');
				return null;
			}
		},
		isBreakable: true,
		name: "Overcoat",
		rating: 2,
		num: 142,
	},
	overgrow: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Grass' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Overgrow boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Grass' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Overgrow boost');
				return this.chainModify(1.5);
			}
		},
		name: "Overgrow",
		rating: 2,
		num: 65,
	},
	owntempo: {
		onUpdate(pokemon) {
			if (pokemon.volatiles['confusion']) {
				this.add('-activate', pokemon, 'ability: Own Tempo');
				pokemon.removeVolatile('confusion');
			}
		},
		onTryAddVolatile(status, pokemon) {
			if (status.id === 'confusion') return null;
		},
		onHit(target, source, move) {
			if (move?.volatileStatus === 'confusion') {
				this.add('-immune', target, 'confusion', '[from] ability: Own Tempo');
			}
		},
		onBoost(boost, target, source, effect) {
			if (effect.id === 'intimidate') {
				delete boost.atk;
				this.add('-fail', target, 'unboost', 'Attack', '[from] ability: Own Tempo', '[of] ' + target);
			}
		},
		isBreakable: true,
		name: "Own Tempo",
		rating: 1.5,
		num: 20,
	},
	parentalbond: {
		onPrepareHit(source, target, move) {
			if (move.category === 'Status' || move.selfdestruct || move.multihit) return;
			if (['endeavor', 'fling', 'iceball', 'rollout'].includes(move.id)) return;
			if (!move.flags['charge'] && !move.spreadHit && !move.isZ && !move.isMax) {
				move.multihit = 2;
				move.multihitType = 'parentalbond';
			}
		},
		// Damage modifier implemented in BattleActions#modifyDamage()
		onSourceModifySecondaries(secondaries, target, source, move) {
			if (move.multihitType === 'parentalbond' && move.id === 'secretpower' && move.hit < 2) {
				// hack to prevent accidentally suppressing King's Rock/Razor Fang
				return secondaries.filter(effect => effect.volatileStatus === 'flinch');
			}
		},
		name: "Parental Bond",
		rating: 4.5,
		num: 185,
	},
	pastelveil: {
		onStart(pokemon) {
			for (const ally of pokemon.alliesAndSelf()) {
				if (['psn', 'tox'].includes(ally.status)) {
					this.add('-activate', pokemon, 'ability: Pastel Veil');
					ally.cureStatus();
				}
			}
		},
		onUpdate(pokemon) {
			if (['psn', 'tox'].includes(pokemon.status)) {
				this.add('-activate', pokemon, 'ability: Pastel Veil');
				pokemon.cureStatus();
			}
		},
		onAllySwitchIn(pokemon) {
			if (['psn', 'tox'].includes(pokemon.status)) {
				this.add('-activate', this.effectState.target, 'ability: Pastel Veil');
				pokemon.cureStatus();
			}
		},
		onSetStatus(status, target, source, effect) {
			if (!['psn', 'tox'].includes(status.id)) return;
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: Pastel Veil');
			}
			return false;
		},
		onAllySetStatus(status, target, source, effect) {
			if (!['psn', 'tox'].includes(status.id)) return;
			if ((effect as Move)?.status) {
				const effectHolder = this.effectState.target;
				this.add('-block', target, 'ability: Pastel Veil', '[of] ' + effectHolder);
			}
			return false;
		},
		isBreakable: true,
		name: "Pastel Veil",
		rating: 2,
		num: 257,
	},
	perishbody: {
		onDamagingHit(damage, target, source, move) {
			if (!this.checkMoveMakesContact(move, source, target)) return;

			let announced = false;
			for (const pokemon of [target, source]) {
				if (pokemon.volatiles['perishsong']) continue;
				if (!announced) {
					this.add('-ability', target, 'Perish Body');
					announced = true;
				}
				pokemon.addVolatile('perishsong');
			}
		},
		name: "Perish Body",
		rating: 1,
		num: 253,
	},
	pickpocket: {
		onAfterMoveSecondary(target, source, move) {
			if (source && source !== target && move?.flags['contact']) {
				if (target.item || target.switchFlag || target.forceSwitchFlag || source.switchFlag === true) {
					return;
				}
				const yourItem = source.takeItem(target);
				if (!yourItem) {
					return;
				}
				if (!target.setItem(yourItem)) {
					source.item = yourItem.id;
					return;
				}
				this.add('-enditem', source, yourItem, '[silent]', '[from] ability: Pickpocket', '[of] ' + source);
				this.add('-item', target, yourItem, '[from] ability: Pickpocket', '[of] ' + source);
			}
		},
		name: "Pickpocket",
		rating: 1,
		num: 124,
	},
	pickup: {
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			if (pokemon.item) return;
			const pickupTargets = this.getAllActive().filter(target => (
				target.lastItem && target.usedItemThisTurn && pokemon.isAdjacent(target)
			));
			if (!pickupTargets.length) return;
			const randomTarget = this.sample(pickupTargets);
			const item = randomTarget.lastItem;
			randomTarget.lastItem = '';
			this.add('-item', pokemon, this.dex.items.get(item), '[from] ability: Pickup');
			pokemon.setItem(item);
		},
		name: "Pickup",
		rating: 0.5,
		num: 53,
	},
	pixilate: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Fairy';
				move.pixilateBoosted = true;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.pixilateBoosted) return this.chainModify([4915, 4096]);
		},
		name: "Pixilate",
		rating: 4,
		num: 182,
	},
	plus: {
		onModifySpAPriority: 5,
		onModifySpA(spa, pokemon) {
			for (const allyActive of pokemon.allies()) {
				if (allyActive.hasAbility(['minus', 'plus'])) {
					return this.chainModify(1.5);
				}
			}
		},
		name: "Plus",
		rating: 0,
		num: 57,
	},
	poisonheal: {
		onDamagePriority: 1,
		onDamage(damage, target, source, effect) {
			if (effect.id === 'psn' || effect.id === 'tox') {
				this.heal(target.baseMaxhp / 8);
				return false;
			}
		},
		name: "Poison Heal",
		rating: 4,
		num: 90,
	},
	poisonpoint: {
		onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target)) {
				if (this.randomChance(3, 10)) {
					source.trySetStatus('psn', target);
				}
			}
		},
		name: "Poison Point",
		rating: 1.5,
		num: 38,
	},
	poisontouch: {
		// upokecenter says this is implemented as an added secondary effect
		onModifyMove(move) {
			if (!move?.flags['contact'] || move.target === 'self') return;
			if (!move.secondaries) {
				move.secondaries = [];
			}
			move.secondaries.push({
				chance: 30,
				status: 'psn',
				ability: this.dex.abilities.get('poisontouch'),
			});
		},
		name: "Poison Touch",
		rating: 2,
		num: 143,
	},
	powerconstruct: {
		onResidualOrder: 29,
		onResidual(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Zygarde' || pokemon.transformed || !pokemon.hp) return;
			if (pokemon.species.id === 'zygardecomplete' || pokemon.hp > pokemon.maxhp / 2) return;
			this.add('-activate', pokemon, 'ability: Power Construct');
			pokemon.formeChange('Zygarde-Complete', this.effect, true);
			pokemon.baseMaxhp = Math.floor(Math.floor(
				2 * pokemon.species.baseStats['hp'] + pokemon.set.ivs['hp'] + Math.floor(pokemon.set.evs['hp'] / 4) + 100
			) * pokemon.level / 100 + 10);
			const newMaxHP = pokemon.volatiles['dynamax'] ? (2 * pokemon.baseMaxhp) : pokemon.baseMaxhp;
			pokemon.hp = newMaxHP - (pokemon.maxhp - pokemon.hp);
			pokemon.maxhp = newMaxHP;
			this.add('-heal', pokemon, pokemon.getHealth, '[silent]');
		},
		isPermanent: true,
		name: "Power Construct",
		rating: 5,
		num: 211,
	},
	powerofalchemy: {
		onAllyFaint(target) {
			if (!this.effectState.target.hp) return;
			const ability = target.getAbility();
			const additionalBannedAbilities = [
				'noability', 'flowergift', 'forecast', 'hungerswitch', 'illusion', 'imposter', 'neutralizinggas', 'powerofalchemy', 'receiver', 'trace', 'wonderguard',
			];
			if (target.getAbility().isPermanent || additionalBannedAbilities.includes(target.ability)) return;
			this.add('-ability', this.effectState.target, ability, '[from] ability: Power of Alchemy', '[of] ' + target);
			this.effectState.target.setAbility(ability);
		},
		name: "Power of Alchemy",
		rating: 0,
		num: 223,
	},
	powerspot: {
		onAllyBasePowerPriority: 22,
		onAllyBasePower(basePower, attacker, defender, move) {
			if (attacker !== this.effectState.target) {
				this.debug('Power Spot boost');
				return this.chainModify([5325, 4096]);
			}
		},
		name: "Power Spot",
		rating: 1,
		num: 249,
	},
	prankster: {
		onModifyPriority(priority, pokemon, target, move) {
			if (move?.category === 'Status') {
				move.pranksterBoosted = true;
				return priority + 1;
			}
		},
		name: "Prankster",
		rating: 4,
		num: 158,
	},
	pressure: {
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Pressure');
		},
		onDeductPP(target, source) {
			if (target.isAlly(source)) return;
			return 1;
		},
		name: "Pressure",
		rating: 2.5,
		num: 46,
	},
	primordialsea: {
		onStart(source) {
			this.field.setWeather('primordialsea');
		},
		onAnySetWeather(target, source, weather) {
			const strongWeathers = ['desolateland', 'primordialsea', 'deltastream'];
			if (this.field.getWeather().id === 'primordialsea' && !strongWeathers.includes(weather.id)) return false;
		},
		onEnd(pokemon) {
			if (this.field.weatherState.source !== pokemon) return;
			for (const target of this.getAllActive()) {
				if (target === pokemon) continue;
				if (target.hasAbility('primordialsea')) {
					this.field.weatherState.source = target;
					return;
				}
			}
			this.field.clearWeather();
		},
		name: "Primordial Sea",
		rating: 4.5,
		num: 189,
	},
	prismarmor: {
		onSourceModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).typeMod > 0) {
				this.debug('Prism Armor neutralize');
				return this.chainModify(0.75);
			}
		},
		name: "Prism Armor",
		rating: 3,
		num: 232,
	},
	propellertail: {
		onModifyMovePriority: 1,
		onModifyMove(move) {
			// most of the implementation is in Battle#getTarget
			move.tracksTarget = move.target !== 'scripted';
		},
		name: "Propeller Tail",
		rating: 0,
		num: 239,
	},
	protean: {
		onPrepareHit(source, target, move) {
			if (move.hasBounced || move.sourceEffect === 'snatch') return;
			const type = move.type;
			if (type && type !== '???' && source.getTypes().join() !== type) {
				if (!source.setType(type)) return;
				this.add('-start', source, 'typechange', type, '[from] ability: Protean');
			}
		},
		name: "Protean",
		rating: 4.5,
		num: 168,
	},
	psychicsurge: {
		onStart(source) {
			this.field.setTerrain('psychicterrain');
		},
		name: "Psychic Surge",
		rating: 4,
		num: 227,
	},
	punkrock: {
		onBasePowerPriority: 7,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['sound']) {
				this.debug('Punk Rock boost');
				return this.chainModify([5325, 4096]);
			}
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.flags['sound']) {
				this.debug('Punk Rock weaken');
				return this.chainModify(0.5);
			}
		},
		isBreakable: true,
		name: "Punk Rock",
		rating: 3.5,
		num: 244,
	},
	purepower: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk) {
			return this.chainModify(2);
		},
		name: "Pure Power",
		rating: 5,
		num: 74,
	},
	queenlymajesty: {
		onFoeTryMove(target, source, move) {
			const targetAllExceptions = ['perishsong', 'flowershield', 'rototiller'];
			if (move.target === 'foeSide' || (move.target === 'all' && !targetAllExceptions.includes(move.id))) {
				return;
			}

			const dazzlingHolder = this.effectState.target;
			if ((source.isAlly(dazzlingHolder) || move.target === 'all') && move.priority > 0.1) {
				this.attrLastMove('[still]');
				this.add('cant', dazzlingHolder, 'ability: Queenly Majesty', move, '[of] ' + target);
				return false;
			}
		},
		isBreakable: true,
		name: "Queenly Majesty",
		rating: 2.5,
		num: 214,
	},
	quickdraw: {
		onFractionalPriorityPriority: -1,
		onFractionalPriority(priority, pokemon, target, move) {
			if (move.category !== "Status" && this.randomChance(3, 10)) {
				this.add('-activate', pokemon, 'ability: Quick Draw');
				return 0.1;
			}
		},
		name: "Quick Draw",
		rating: 2.5,
		num: 259,
	},
	quickfeet: {
		onModifySpe(spe, pokemon) {
			if (pokemon.status) {
				return this.chainModify(1.5);
			}
		},
		name: "Quick Feet",
		rating: 2.5,
		num: 95,
	},
	raindish: {
		onWeather(target, source, effect) {
			if (target.hasItem('utilityumbrella')) return;
			if (effect.id === 'raindance' || effect.id === 'primordialsea') {
				this.heal(target.baseMaxhp / 16);
			}
		},
		name: "Rain Dish",
		rating: 1.5,
		num: 44,
	},
	rattled: {
		onDamagingHit(damage, target, source, move) {
			if (['Dark', 'Bug', 'Ghost'].includes(move.type)) {
				this.boost({spe: 1});
			}
		},
		onAfterBoost(boost, target, source, effect) {
			if (effect && effect.id === 'intimidate') {
				this.boost({spe: 1});
			}
		},
		name: "Rattled",
		rating: 1.5,
		num: 155,
	},
	receiver: {
		onAllyFaint(target) {
			if (!this.effectState.target.hp) return;
			const ability = target.getAbility();
			const additionalBannedAbilities = [
				'noability', 'flowergift', 'forecast', 'hungerswitch', 'illusion', 'imposter', 'neutralizinggas', 'powerofalchemy', 'receiver', 'trace', 'wonderguard',
			];
			if (target.getAbility().isPermanent || additionalBannedAbilities.includes(target.ability)) return;
			this.add('-ability', this.effectState.target, ability, '[from] ability: Receiver', '[of] ' + target);
			this.effectState.target.setAbility(ability);
		},
		name: "Receiver",
		rating: 0,
		num: 222,
	},
	reckless: {
		onBasePowerPriority: 23,
		onBasePower(basePower, attacker, defender, move) {
			if (move.recoil || move.hasCrashDamage) {
				this.debug('Reckless boost');
				return this.chainModify([4915, 4096]);
			}
		},
		name: "Reckless",
		rating: 3,
		num: 120,
	},
	refrigerate: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Ice';
				move.refrigerateBoosted = true;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.refrigerateBoosted) return this.chainModify([4915, 4096]);
		},
		name: "Refrigerate",
		rating: 4,
		num: 174,
	},
	regenerator: {
		onSwitchOut(pokemon) {
			pokemon.heal(pokemon.baseMaxhp / 3);
		},
		name: "Regenerator",
		rating: 4.5,
		num: 144,
	},
	ripen: {
		onTryHeal(damage, target, source, effect) {
			if (!effect) return;
			if (effect.id === 'berryjuice' || effect.id === 'leftovers') {
				this.add('-activate', target, 'ability: Ripen');
			}
			if ((effect as Item).isBerry) return this.chainModify(2);
		},
		onBoost(boost, target, source, effect) {
			if (effect && (effect as Item).isBerry) {
				let b: BoostID;
				for (b in boost) {
					boost[b]! *= 2;
				}
			}
		},
		onSourceModifyDamagePriority: -1,
		onSourceModifyDamage(damage, source, target, move) {
			if (target.abilityState.berryWeaken) {
				target.abilityState.berryWeaken = false;
				return this.chainModify(0.5);
			}
		},
		onTryEatItemPriority: -1,
		onTryEatItem(item, pokemon) {
			this.add('-activate', pokemon, 'ability: Ripen');
		},
		onEatItem(item, pokemon) {
			const weakenBerries = [
				'Babiri Berry', 'Charti Berry', 'Chilan Berry', 'Chople Berry', 'Coba Berry', 'Colbur Berry', 'Haban Berry', 'Kasib Berry', 'Kebia Berry', 'Occa Berry', 'Passho Berry', 'Payapa Berry', 'Rindo Berry', 'Roseli Berry', 'Shuca Berry', 'Tanga Berry', 'Wacan Berry', 'Yache Berry',
			];
			// Record if the pokemon ate a berry to resist the attack
			pokemon.abilityState.berryWeaken = weakenBerries.includes(item.name);
		},
		name: "Ripen",
		rating: 2,
		num: 247,
	},
	rivalry: {
		onBasePowerPriority: 24,
		onBasePower(basePower, attacker, defender, move) {
			if (attacker.gender && defender.gender) {
				if (attacker.gender === defender.gender) {
					this.debug('Rivalry boost');
					return this.chainModify(1.25);
				} else {
					this.debug('Rivalry weaken');
					return this.chainModify(0.75);
				}
			}
		},
		name: "Rivalry",
		rating: 0,
		num: 79,
	},
	rkssystem: {
		// RKS System's type-changing itself is implemented in statuses.js
		isPermanent: true,
		name: "RKS System",
		rating: 4,
		num: 225,
	},
	rockhead: {
		onDamage(damage, target, source, effect) {
			if (effect.id === 'recoil') {
				if (!this.activeMove) throw new Error("Battle.activeMove is null");
				if (this.activeMove.id !== 'struggle') return null;
			}
		},
		name: "Rock Head",
		rating: 3,
		num: 69,
	},
	roughskin: {
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target, true)) {
				this.damage(source.baseMaxhp / 8, source, target);
			}
		},
		name: "Rough Skin",
		rating: 2.5,
		num: 24,
	},
	runaway: {
		name: "Run Away",
		rating: 0,
		num: 50,
	},
	sandforce: {
		onBasePowerPriority: 21,
		onBasePower(basePower, attacker, defender, move) {
			if (this.field.isWeather('sandstorm')) {
				if (move.type === 'Rock' || move.type === 'Ground' || move.type === 'Steel') {
					this.debug('Sand Force boost');
					return this.chainModify([5325, 4096]);
				}
			}
		},
		onImmunity(type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		name: "Sand Force",
		rating: 2,
		num: 159,
	},
	sandrush: {
		onModifySpe(spe, pokemon) {
			if (this.field.isWeather('sandstorm')) {
				return this.chainModify(2);
			}
		},
		onImmunity(type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		name: "Sand Rush",
		rating: 3,
		num: 146,
	},
	sandspit: {
		onDamagingHit(damage, target, source, move) {
			if (this.field.getWeather().id !== 'sandstorm') {
				this.field.setWeather('sandstorm');
			}
		},
		name: "Sand Spit",
		rating: 2,
		num: 245,
	},
	sandstream: {
		onStart(source) {
			this.field.setWeather('sandstorm');
		},
		name: "Sand Stream",
		rating: 4,
		num: 45,
	},
	sandveil: {
		onImmunity(type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		onModifyAccuracyPriority: -1,
		onModifyAccuracy(accuracy) {
			if (typeof accuracy !== 'number') return;
			if (this.field.isWeather('sandstorm')) {
				this.debug('Sand Veil - decreasing accuracy');
				return this.chainModify([3277, 4096]);
			}
		},
		isBreakable: true,
		name: "Sand Veil",
		rating: 1.5,
		num: 8,
	},
	sapsipper: {
		onTryHitPriority: 1,
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Grass') {
				if (!this.boost({atk: 1})) {
					this.add('-immune', target, '[from] ability: Sap Sipper');
				}
				return null;
			}
		},
		onAllyTryHitSide(target, source, move) {
			if (source === this.effectState.target || !target.isAlly(source)) return;
			if (move.type === 'Grass') {
				this.boost({atk: 1}, this.effectState.target);
			}
		},
		isBreakable: true,
		name: "Sap Sipper",
		rating: 3,
		num: 157,
	},
	schooling: {
		onStart(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Wishiwashi' || pokemon.level < 20 || pokemon.transformed) return;
			if (pokemon.hp > pokemon.maxhp / 4) {
				if (pokemon.species.id === 'wishiwashi') {
					pokemon.formeChange('Wishiwashi-School');
				}
			} else {
				if (pokemon.species.id === 'wishiwashischool') {
					pokemon.formeChange('Wishiwashi');
				}
			}
		},
		onResidualOrder: 29,
		onResidual(pokemon) {
			if (
				pokemon.baseSpecies.baseSpecies !== 'Wishiwashi' || pokemon.level < 20 ||
				pokemon.transformed || !pokemon.hp
			) return;
			if (pokemon.hp > pokemon.maxhp / 4) {
				if (pokemon.species.id === 'wishiwashi') {
					pokemon.formeChange('Wishiwashi-School');
				}
			} else {
				if (pokemon.species.id === 'wishiwashischool') {
					pokemon.formeChange('Wishiwashi');
				}
			}
		},
		isPermanent: true,
		name: "Schooling",
		rating: 3,
		num: 208,
	},
	scrappy: {
		onModifyMovePriority: -5,
		onModifyMove(move) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Fighting'] = true;
				move.ignoreImmunity['Normal'] = true;
			}
		},
		onBoost(boost, target, source, effect) {
			if (effect.id === 'intimidate') {
				delete boost.atk;
				this.add('-fail', target, 'unboost', 'Attack', '[from] ability: Scrappy', '[of] ' + target);
			}
		},
		name: "Scrappy",
		rating: 3,
		num: 113,
	},
	screencleaner: {
		onStart(pokemon) {
			let activated = false;
			for (const sideCondition of ['reflect', 'lightscreen', 'auroraveil']) {
				for (const side of [pokemon.side, ...pokemon.side.foeSidesWithConditions()]) {
					if (side.getSideCondition(sideCondition)) {
						if (!activated) {
							this.add('-activate', pokemon, 'ability: Screen Cleaner');
							activated = true;
						}
						side.removeSideCondition(sideCondition);
					}
				}
			}
		},
		name: "Screen Cleaner",
		rating: 2,
		num: 251,
	},
	serenegrace: {
		onModifyMovePriority: -2,
		onModifyMove(move) {
			if (move.secondaries) {
				this.debug('doubling secondary chance');
				for (const secondary of move.secondaries) {
					if (secondary.chance) secondary.chance *= 2;
				}
			}
			if (move.self?.chance) move.self.chance *= 2;
		},
		name: "Serene Grace",
		rating: 3.5,
		num: 32,
	},
	shadowshield: {
		onSourceModifyDamage(damage, source, target, move) {
			if (target.hp >= target.maxhp) {
				this.debug('Shadow Shield weaken');
				return this.chainModify(0.5);
			}
		},
		name: "Shadow Shield",
		rating: 3.5,
		num: 231,
	},
	shadowtag: {
		onFoeTrapPokemon(pokemon) {
			if (!pokemon.hasAbility('shadowtag') && pokemon.isAdjacent(this.effectState.target)) {
				pokemon.tryTrap(true);
			}
		},
		onFoeMaybeTrapPokemon(pokemon, source) {
			if (!source) source = this.effectState.target;
			if (!source || !pokemon.isAdjacent(source)) return;
			if (!pokemon.hasAbility('shadowtag')) {
				pokemon.maybeTrapped = true;
			}
		},
		name: "Shadow Tag",
		rating: 5,
		num: 23,
	},
	shedskin: {
		onResidualOrder: 5,
		onResidualSubOrder: 3,
		onResidual(pokemon) {
			if (pokemon.hp && pokemon.status && this.randomChance(33, 100)) {
				this.debug('shed skin');
				this.add('-activate', pokemon, 'ability: Shed Skin');
				pokemon.cureStatus();
			}
		},
		name: "Shed Skin",
		rating: 3,
		num: 61,
	},
	sheerforce: {
		onModifyMove(move, pokemon) {
			if (move.secondaries) {
				delete move.secondaries;
				// Technically not a secondary effect, but it is negated
				delete move.self;
				if (move.id === 'clangoroussoulblaze') delete move.selfBoost;
				// Actual negation of `AfterMoveSecondary` effects implemented in scripts.js
				move.hasSheerForce = true;
			}
		},
		onBasePowerPriority: 21,
		onBasePower(basePower, pokemon, target, move) {
			if (move.hasSheerForce) return this.chainModify([5325, 4096]);
		},
		name: "Sheer Force",
		rating: 3.5,
		num: 125,
	},
	shellarmor: {
		onCriticalHit: false,
		isBreakable: true,
		name: "Shell Armor",
		rating: 1,
		num: 75,
	},
	shielddust: {
		onModifySecondaries(secondaries) {
			this.debug('Shield Dust prevent secondary');
			return secondaries.filter(effect => !!(effect.self || effect.dustproof));
		},
		isBreakable: true,
		name: "Shield Dust",
		rating: 2,
		num: 19,
	},
	shieldsdown: {
		onStart(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Minior' || pokemon.transformed) return;
			if (pokemon.hp > pokemon.maxhp / 2) {
				if (pokemon.species.forme !== 'Meteor') {
					pokemon.formeChange('Minior-Meteor');
				}
			} else {
				if (pokemon.species.forme === 'Meteor') {
					pokemon.formeChange(pokemon.set.species);
				}
			}
		},
		onResidualOrder: 29,
		onResidual(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Minior' || pokemon.transformed || !pokemon.hp) return;
			if (pokemon.hp > pokemon.maxhp / 2) {
				if (pokemon.species.forme !== 'Meteor') {
					pokemon.formeChange('Minior-Meteor');
				}
			} else {
				if (pokemon.species.forme === 'Meteor') {
					pokemon.formeChange(pokemon.set.species);
				}
			}
		},
		onSetStatus(status, target, source, effect) {
			if (target.species.id !== 'miniormeteor' || target.transformed) return;
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: Shields Down');
			}
			return false;
		},
		onTryAddVolatile(status, target) {
			if (target.species.id !== 'miniormeteor' || target.transformed) return;
			if (status.id !== 'yawn') return;
			this.add('-immune', target, '[from] ability: Shields Down');
			return null;
		},
		isPermanent: true,
		name: "Shields Down",
		rating: 3,
		num: 197,
	},
	simple: {
		onBoost(boost, target, source, effect) {
			if (effect && effect.id === 'zpower') return;
			let i: BoostID;
			for (i in boost) {
				boost[i]! *= 2;
			}
		},
		isBreakable: true,
		name: "Simple",
		rating: 4,
		num: 86,
	},
	skilllink: {
		onModifyMove(move) {
			if (move.multihit && Array.isArray(move.multihit) && move.multihit.length) {
				move.multihit = move.multihit[1];
			}
			if (move.multiaccuracy) {
				delete move.multiaccuracy;
			}
		},
		name: "Skill Link",
		rating: 3,
		num: 92,
	},
	slowstart: {
		onStart(pokemon) {
			pokemon.addVolatile('slowstart');
		},
		onEnd(pokemon) {
			delete pokemon.volatiles['slowstart'];
			this.add('-end', pokemon, 'Slow Start', '[silent]');
		},
		condition: {
			duration: 5,
			onResidualOrder: 28,
			onResidualSubOrder: 2,
			onStart(target) {
				this.add('-start', target, 'ability: Slow Start');
			},
			onModifyAtkPriority: 5,
			onModifyAtk(atk, pokemon) {
				return this.chainModify(0.5);
			},
			onModifySpe(spe, pokemon) {
				return this.chainModify(0.5);
			},
			onEnd(target) {
				this.add('-end', target, 'Slow Start');
			},
		},
		name: "Slow Start",
		rating: -1,
		num: 112,
	},
	slushrush: {
		onModifySpe(spe, pokemon) {
			if (this.field.isWeather('hail')) {
				return this.chainModify(2);
			}
		},
		name: "Slush Rush",
		rating: 3,
		num: 202,
	},
	sniper: {
		onModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).crit) {
				this.debug('Sniper boost');
				return this.chainModify(1.5);
			}
		},
		name: "Sniper",
		rating: 2,
		num: 97,
	},
	snowcloak: {
		onImmunity(type, pokemon) {
			if (type === 'hail') return false;
		},
		onModifyAccuracyPriority: -1,
		onModifyAccuracy(accuracy) {
			if (typeof accuracy !== 'number') return;
			if (this.field.isWeather('hail')) {
				this.debug('Snow Cloak - decreasing accuracy');
				return this.chainModify([3277, 4096]);
			}
		},
		isBreakable: true,
		name: "Snow Cloak",
		rating: 1.5,
		num: 81,
	},
	snowwarning: {
		onStart(source) {
			this.field.setWeather('hail');
		},
		name: "Snow Warning",
		rating: 4,
		num: 117,
	},
	solarpower: {
		onModifySpAPriority: 5,
		onModifySpA(spa, pokemon) {
			if (['sunnyday', 'desolateland'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(1.5);
			}
		},
		onWeather(target, source, effect) {
			if (target.hasItem('utilityumbrella')) return;
			if (effect.id === 'sunnyday' || effect.id === 'desolateland') {
				this.damage(target.baseMaxhp / 8, target, target);
			}
		},
		name: "Solar Power",
		rating: 2,
		num: 94,
	},
	solidrock: {
		onSourceModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).typeMod > 0) {
				this.debug('Solid Rock neutralize');
				return this.chainModify(0.75);
			}
		},
		isBreakable: true,
		name: "Solid Rock",
		rating: 3,
		num: 116,
	},
	soulheart: {
		onAnyFaintPriority: 1,
		onAnyFaint() {
			this.boost({spa: 1}, this.effectState.target);
		},
		name: "Soul-Heart",
		rating: 3.5,
		num: 220,
	},
	soundproof: {
		onTryHit(target, source, move) {
			if (target !== source && move.flags['sound']) {
				this.add('-immune', target, '[from] ability: Soundproof');
				return null;
			}
		},
		onAllyTryHitSide(target, source, move) {
			if (move.flags['sound']) {
				this.add('-immune', this.effectState.target, '[from] ability: Soundproof');
			}
		},
		isBreakable: true,
		name: "Soundproof",
		rating: 1.5,
		num: 43,
	},
	speedboost: {
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			if (pokemon.activeTurns) {
				this.boost({spe: 1});
			}
		},
		name: "Speed Boost",
		rating: 4.5,
		num: 3,
	},
	stakeout: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender) {
			if (!defender.activeTurns) {
				this.debug('Stakeout boost');
				return this.chainModify(2);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender) {
			if (!defender.activeTurns) {
				this.debug('Stakeout boost');
				return this.chainModify(2);
			}
		},
		name: "Stakeout",
		rating: 4.5,
		num: 198,
	},
	stall: {
		onFractionalPriority: -0.1,
		name: "Stall",
		rating: -1,
		num: 100,
	},
	stalwart: {
		onModifyMovePriority: 1,
		onModifyMove(move) {
			// most of the implementation is in Battle#getTarget
			move.tracksTarget = move.target !== 'scripted';
		},
		name: "Stalwart",
		rating: 0,
		num: 242,
	},
	stamina: {
		onDamagingHit(damage, target, source, effect) {
			this.boost({def: 1});
		},
		name: "Stamina",
		rating: 3.5,
		num: 192,
	},
	stancechange: {
		onModifyMovePriority: 1,
		onModifyMove(move, attacker, defender) {
			if (attacker.species.baseSpecies !== 'Aegislash' || attacker.transformed) return;
			if (move.category === 'Status' && move.id !== 'kingsshield') return;
			const targetForme = (move.id === 'kingsshield' ? 'Aegislash' : 'Aegislash-Blade');
			if (attacker.species.name !== targetForme) attacker.formeChange(targetForme);
		},
		isPermanent: true,
		name: "Stance Change",
		rating: 4,
		num: 176,
	},
	static: {
		onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target)) {
				if (this.randomChance(3, 10)) {
					source.trySetStatus('par', target);
				}
			}
		},
		name: "Static",
		rating: 2,
		num: 9,
	},
	steadfast: {
		onFlinch(pokemon) {
			this.boost({spe: 1});
		},
		name: "Steadfast",
		rating: 1,
		num: 80,
	},
	steamengine: {
		onDamagingHit(damage, target, source, move) {
			if (['Water', 'Fire'].includes(move.type)) {
				this.boost({spe: 6});
			}
		},
		name: "Steam Engine",
		rating: 2,
		num: 243,
	},
	steelworker: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Steel') {
				this.debug('Steelworker boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Steel') {
				this.debug('Steelworker boost');
				return this.chainModify(1.5);
			}
		},
		name: "Steelworker",
		rating: 3.5,
		num: 200,
	},
	steelyspirit: {
		onAllyBasePowerPriority: 22,
		onAllyBasePower(basePower, attacker, defender, move) {
			if (move.type === 'Steel') {
				this.debug('Steely Spirit boost');
				return this.chainModify(1.5);
			}
		},
		name: "Steely Spirit",
		rating: 3.5,
		num: 252,
	},
	stench: {
		onModifyMovePriority: -1,
		onModifyMove(move) {
			if (move.category !== "Status") {
				this.debug('Adding Stench flinch');
				if (!move.secondaries) move.secondaries = [];
				for (const secondary of move.secondaries) {
					if (secondary.volatileStatus === 'flinch') return;
				}
				move.secondaries.push({
					chance: 10,
					volatileStatus: 'flinch',
				});
			}
		},
		name: "Stench",
		rating: 0.5,
		num: 1,
	},
	stickyhold: {
		onTakeItem(item, pokemon, source) {
			if (!this.activeMove) throw new Error("Battle.activeMove is null");
			if (!pokemon.hp || pokemon.item === 'stickybarb') return;
			if ((source && source !== pokemon) || this.activeMove.id === 'knockoff') {
				this.add('-activate', pokemon, 'ability: Sticky Hold');
				return false;
			}
		},
		isBreakable: true,
		name: "Sticky Hold",
		rating: 2,
		num: 60,
	},
	stormdrain: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Water') {
				if (!this.boost({spa: 1})) {
					this.add('-immune', target, '[from] ability: Storm Drain');
				}
				return null;
			}
		},
		onAnyRedirectTarget(target, source, source2, move) {
			if (move.type !== 'Water' || ['firepledge', 'grasspledge', 'waterpledge'].includes(move.id)) return;
			const redirectTarget = ['randomNormal', 'adjacentFoe'].includes(move.target) ? 'normal' : move.target;
			if (this.validTarget(this.effectState.target, source, redirectTarget)) {
				if (move.smartTarget) move.smartTarget = false;
				if (this.effectState.target !== target) {
					this.add('-activate', this.effectState.target, 'ability: Storm Drain');
				}
				return this.effectState.target;
			}
		},
		isBreakable: true,
		name: "Storm Drain",
		rating: 3,
		num: 114,
	},
	strongjaw: {
		onBasePowerPriority: 19,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['bite']) {
				return this.chainModify(1.5);
			}
		},
		name: "Strong Jaw",
		rating: 3,
		num: 173,
	},
	sturdy: {
		onTryHit(pokemon, target, move) {
			if (move.ohko) {
				this.add('-immune', pokemon, '[from] ability: Sturdy');
				return null;
			}
		},
		onDamagePriority: -30,
		onDamage(damage, target, source, effect) {
			if (target.hp === target.maxhp && damage >= target.hp && effect && effect.effectType === 'Move') {
				this.add('-ability', target, 'Sturdy');
				return target.hp - 1;
			}
		},
		isBreakable: true,
		name: "Sturdy",
		rating: 3,
		num: 5,
	},
	suctioncups: {
		onDragOutPriority: 1,
		onDragOut(pokemon) {
			this.add('-activate', pokemon, 'ability: Suction Cups');
			return null;
		},
		isBreakable: true,
		name: "Suction Cups",
		rating: 1,
		num: 21,
	},
	superluck: {
		onModifyCritRatio(critRatio) {
			return critRatio + 1;
		},
		name: "Super Luck",
		rating: 1.5,
		num: 105,
	},
	surgesurfer: {
		onModifySpe(spe) {
			if (this.field.isTerrain('electricterrain')) {
				return this.chainModify(2);
			}
		},
		name: "Surge Surfer",
		rating: 3,
		num: 207,
	},
	swarm: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Bug' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Swarm boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Bug' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Swarm boost');
				return this.chainModify(1.5);
			}
		},
		name: "Swarm",
		rating: 2,
		num: 68,
	},
	sweetveil: {
		name: "Sweet Veil",
		onAllySetStatus(status, target, source, effect) {
			if (status.id === 'slp') {
				this.debug('Sweet Veil interrupts sleep');
				const effectHolder = this.effectState.target;
				this.add('-block', target, 'ability: Sweet Veil', '[of] ' + effectHolder);
				return null;
			}
		},
		onAllyTryAddVolatile(status, target) {
			if (status.id === 'yawn') {
				this.debug('Sweet Veil blocking yawn');
				const effectHolder = this.effectState.target;
				this.add('-block', target, 'ability: Sweet Veil', '[of] ' + effectHolder);
				return null;
			}
		},
		isBreakable: true,
		rating: 2,
		num: 175,
	},
	swiftswim: {
		onModifySpe(spe, pokemon) {
			if (['raindance', 'primordialsea'].includes(pokemon.effectiveWeather())) {
				return this.chainModify(2);
			}
		},
		name: "Swift Swim",
		rating: 3,
		num: 33,
	},
	symbiosis: {
		onAllyAfterUseItem(item, pokemon) {
			if (pokemon.switchFlag) return;
			const source = this.effectState.target;
			const myItem = source.takeItem();
			if (!myItem) return;
			if (
				!this.singleEvent('TakeItem', myItem, source.itemState, pokemon, source, this.effect, myItem) ||
				!pokemon.setItem(myItem)
			) {
				source.item = myItem.id;
				return;
			}
			this.add('-activate', source, 'ability: Symbiosis', myItem, '[of] ' + pokemon);
		},
		name: "Symbiosis",
		rating: 0,
		num: 180,
	},
	synchronize: {
		onAfterSetStatus(status, target, source, effect) {
			if (!source || source === target) return;
			if (effect && effect.id === 'toxicspikes') return;
			if (status.id === 'slp' || status.id === 'frz') return;
			this.add('-activate', target, 'ability: Synchronize');
			// Hack to make status-prevention abilities think Synchronize is a status move
			// and show messages when activating against it.
			source.trySetStatus(status, target, {status: status.id, id: 'synchronize'} as Effect);
		},
		name: "Synchronize",
		rating: 2,
		num: 28,
	},
	tangledfeet: {
		onModifyAccuracyPriority: -1,
		onModifyAccuracy(accuracy, target) {
			if (typeof accuracy !== 'number') return;
			if (target?.volatiles['confusion']) {
				this.debug('Tangled Feet - decreasing accuracy');
				return this.chainModify(0.5);
			}
		},
		isBreakable: true,
		name: "Tangled Feet",
		rating: 1,
		num: 77,
	},
	tanglinghair: {
		onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target, true)) {
				this.add('-ability', target, 'Tangling Hair');
				this.boost({spe: -1}, source, target, null, true);
			}
		},
		name: "Tangling Hair",
		rating: 2,
		num: 221,
	},
	technician: {
		onBasePowerPriority: 30,
		onBasePower(basePower, attacker, defender, move) {
			const basePowerAfterMultiplier = this.modify(basePower, this.event.modifier);
			this.debug('Base Power: ' + basePowerAfterMultiplier);
			if (basePowerAfterMultiplier <= 60) {
				this.debug('Technician boost');
				return this.chainModify(1.5);
			}
		},
		name: "Technician",
		rating: 3.5,
		num: 101,
	},
	telepathy: {
		onTryHit(target, source, move) {
			if (target !== source && target.isAlly(source) && move.category !== 'Status') {
				this.add('-activate', target, 'ability: Telepathy');
				return null;
			}
		},
		isBreakable: true,
		name: "Telepathy",
		rating: 0,
		num: 140,
	},
	teravolt: {
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Teravolt');
		},
		onModifyMove(move) {
			move.ignoreAbility = true;
		},
		name: "Teravolt",
		rating: 3.5,
		num: 164,
	},
	thickfat: {
		onSourceModifyAtkPriority: 6,
		onSourceModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Ice' || move.type === 'Fire') {
				this.debug('Thick Fat weaken');
				return this.chainModify(0.5);
			}
		},
		onSourceModifySpAPriority: 5,
		onSourceModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Ice' || move.type === 'Fire') {
				this.debug('Thick Fat weaken');
				return this.chainModify(0.5);
			}
		},
		isBreakable: true,
		name: "Thick Fat",
		rating: 3.5,
		num: 47,
	},
	tintedlens: {
		onModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).typeMod < 0) {
				this.debug('Tinted Lens boost');
				return this.chainModify(2);
			}
		},
		name: "Tinted Lens",
		rating: 4,
		num: 110,
	},
	torrent: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Water' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Torrent boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Water' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Torrent boost');
				return this.chainModify(1.5);
			}
		},
		name: "Torrent",
		rating: 2,
		num: 67,
	},
	toughclaws: {
		onBasePowerPriority: 21,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['contact']) {
				return this.chainModify([5325, 4096]);
			}
		},
		name: "Tough Claws",
		rating: 3.5,
		num: 181,
	},
	toxicboost: {
		onBasePowerPriority: 19,
		onBasePower(basePower, attacker, defender, move) {
			if ((attacker.status === 'psn' || attacker.status === 'tox') && move.category === 'Physical') {
				return this.chainModify(1.5);
			}
		},
		name: "Toxic Boost",
		rating: 2.5,
		num: 137,
	},
	trace: {
		onStart(pokemon) {
			// n.b. only affects Hackmons
			// interaction with No Ability is complicated: https://www.smogon.com/forums/threads/pokemon-sun-moon-battle-mechanics-research.3586701/page-76#post-7790209
			if (pokemon.adjacentFoes().some(foeActive => foeActive.ability === 'noability')) {
				this.effectState.gaveUp = true;
			}
		},
		onUpdate(pokemon) {
			if (!pokemon.isStarted || this.effectState.gaveUp) return;

			const additionalBannedAbilities = [
				// Zen Mode included here for compatability with Gen 5-6
				'noability', 'flowergift', 'forecast', 'hungerswitch', 'illusion', 'imposter', 'neutralizinggas', 'powerofalchemy', 'receiver', 'trace', 'zenmode',
			];
			const possibleTargets = pokemon.adjacentFoes().filter(target => (
				!target.getAbility().isPermanent && !additionalBannedAbilities.includes(target.ability)
			));
			if (!possibleTargets.length) return;

			const target = this.sample(possibleTargets);
			const ability = target.getAbility();
			this.add('-ability', pokemon, ability, '[from] ability: Trace', '[of] ' + target);
			pokemon.setAbility(ability);
		},
		name: "Trace",
		rating: 2.5,
		num: 36,
	},
	transistor: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Electric') {
				this.debug('Transistor boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Electric') {
				this.debug('Transistor boost');
				return this.chainModify(1.5);
			}
		},
		name: "Transistor",
		rating: 3.5,
		num: 262,
	},
	triage: {
		onModifyPriority(priority, pokemon, target, move) {
			if (move?.flags['heal']) return priority + 3;
		},
		name: "Triage",
		rating: 3.5,
		num: 205,
	},
	truant: {
		onStart(pokemon) {
			pokemon.removeVolatile('truant');
			if (pokemon.activeTurns && (pokemon.moveThisTurnResult !== undefined || !this.queue.willMove(pokemon))) {
				pokemon.addVolatile('truant');
			}
		},
		onBeforeMovePriority: 9,
		onBeforeMove(pokemon) {
			if (pokemon.removeVolatile('truant')) {
				this.add('cant', pokemon, 'ability: Truant');
				return false;
			}
			pokemon.addVolatile('truant');
		},
		condition: {},
		name: "Truant",
		rating: -1,
		num: 54,
	},
	turboblaze: {
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Turboblaze');
		},
		onModifyMove(move) {
			move.ignoreAbility = true;
		},
		name: "Turboblaze",
		rating: 3.5,
		num: 163,
	},
	unaware: {
		name: "Unaware",
		onAnyModifyBoost(boosts, pokemon) {
			const unawareUser = this.effectState.target;
			if (unawareUser === pokemon) return;
			if (unawareUser === this.activePokemon && pokemon === this.activeTarget) {
				boosts['def'] = 0;
				boosts['spd'] = 0;
				boosts['evasion'] = 0;
			}
			if (pokemon === this.activePokemon && unawareUser === this.activeTarget) {
				boosts['atk'] = 0;
				boosts['def'] = 0;
				boosts['spa'] = 0;
				boosts['accuracy'] = 0;
			}
		},
		isBreakable: true,
		rating: 4,
		num: 109,
	},
	unburden: {
		onAfterUseItem(item, pokemon) {
			if (pokemon !== this.effectState.target) return;
			pokemon.addVolatile('unburden');
		},
		onTakeItem(item, pokemon) {
			pokemon.addVolatile('unburden');
		},
		onEnd(pokemon) {
			pokemon.removeVolatile('unburden');
		},
		condition: {
			onModifySpe(spe, pokemon) {
				if (!pokemon.item && !pokemon.ignoringAbility()) {
					return this.chainModify(2);
				}
			},
		},
		name: "Unburden",
		rating: 3.5,
		num: 84,
	},
	unnerve: {
		onPreStart(pokemon) {
			this.add('-ability', pokemon, 'Unnerve');
			this.effectState.unnerved = true;
		},
		onStart(pokemon) {
			if (this.effectState.unnerved) return;
			this.add('-ability', pokemon, 'Unnerve');
			this.effectState.unnerved = true;
		},
		onEnd() {
			this.effectState.unnerved = false;
		},
		onFoeTryEatItem() {
			return !this.effectState.unnerved;
		},
		name: "Unnerve",
		rating: 1.5,
		num: 127,
	},
	unseenfist: {
		onModifyMove(move) {
			if (move.flags['contact']) delete move.flags['protect'];
		},
		name: "Unseen Fist",
		rating: 2,
		num: 260,
	},
	victorystar: {
		onAnyModifyAccuracyPriority: -1,
		onAnyModifyAccuracy(accuracy, target, source) {
			if (source.isAlly(this.effectState.target) && typeof accuracy === 'number') {
				return this.chainModify([4506, 4096]);
			}
		},
		name: "Victory Star",
		rating: 2,
		num: 162,
	},
	vitalspirit: {
		onUpdate(pokemon) {
			if (pokemon.status === 'slp') {
				this.add('-activate', pokemon, 'ability: Vital Spirit');
				pokemon.cureStatus();
			}
		},
		onSetStatus(status, target, source, effect) {
			if (status.id !== 'slp') return;
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: Vital Spirit');
			}
			return false;
		},
		isBreakable: true,
		name: "Vital Spirit",
		rating: 2,
		num: 72,
	},
	voltabsorb: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Electric') {
				if (!this.heal(target.baseMaxhp / 4)) {
					this.add('-immune', target, '[from] ability: Volt Absorb');
				}
				return null;
			}
		},
		isBreakable: true,
		name: "Volt Absorb",
		rating: 3.5,
		num: 10,
	},
	wanderingspirit: {
		onDamagingHit(damage, target, source, move) {
			const additionalBannedAbilities = ['hungerswitch', 'illusion', 'neutralizinggas', 'wonderguard'];
			if (source.getAbility().isPermanent || additionalBannedAbilities.includes(source.ability) ||
				target.volatiles['dynamax']
			) {
				return;
			}

			if (this.checkMoveMakesContact(move, source, target)) {
				const sourceAbility = source.setAbility('wanderingspirit', target);
				if (!sourceAbility) return;
				if (target.isAlly(source)) {
					this.add('-activate', target, 'Skill Swap', '', '', '[of] ' + source);
				} else {
					this.add('-activate', target, 'ability: Wandering Spirit', this.dex.abilities.get(sourceAbility).name, 'Wandering Spirit', '[of] ' + source);
				}
				target.setAbility(sourceAbility);
			}
		},
		name: "Wandering Spirit",
		rating: 2.5,
		num: 254,
	},
	waterabsorb: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Water') {
				if (!this.heal(target.baseMaxhp / 4)) {
					this.add('-immune', target, '[from] ability: Water Absorb');
				}
				return null;
			}
		},
		isBreakable: true,
		name: "Water Absorb",
		rating: 3.5,
		num: 11,
	},
	waterbubble: {
		onSourceModifyAtkPriority: 5,
		onSourceModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				return this.chainModify(0.5);
			}
		},
		onSourceModifySpAPriority: 5,
		onSourceModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				return this.chainModify(0.5);
			}
		},
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Water') {
				return this.chainModify(2);
			}
		},
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Water') {
				return this.chainModify(2);
			}
		},
		onUpdate(pokemon) {
			if (pokemon.status === 'brn') {
				this.add('-activate', pokemon, 'ability: Water Bubble');
				pokemon.cureStatus();
			}
		},
		onSetStatus(status, target, source, effect) {
			if (status.id !== 'brn') return;
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: Water Bubble');
			}
			return false;
		},
		isBreakable: true,
		name: "Water Bubble",
		rating: 4.5,
		num: 199,
	},
	watercompaction: {
		onDamagingHit(damage, target, source, move) {
			if (move.type === 'Water') {
				this.boost({def: 2});
			}
		},
		name: "Water Compaction",
		rating: 1.5,
		num: 195,
	},
	waterveil: {
		onUpdate(pokemon) {
			if (pokemon.status === 'brn') {
				this.add('-activate', pokemon, 'ability: Water Veil');
				pokemon.cureStatus();
			}
		},
		onSetStatus(status, target, source, effect) {
			if (status.id !== 'brn') return;
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: Water Veil');
			}
			return false;
		},
		isBreakable: true,
		name: "Water Veil",
		rating: 2,
		num: 41,
	},
	weakarmor: {
		onDamagingHit(damage, target, source, move) {
			if (move.category === 'Physical') {
				this.boost({def: -1, spe: 2}, target, target);
			}
		},
		name: "Weak Armor",
		rating: 1,
		num: 133,
	},
	whitesmoke: {
		onBoost(boost, target, source, effect) {
			if (source && target === source) return;
			let showMsg = false;
			let i: BoostID;
			for (i in boost) {
				if (boost[i]! < 0) {
					delete boost[i];
					showMsg = true;
				}
			}
			if (showMsg && !(effect as ActiveMove).secondaries && effect.id !== 'octolock') {
				this.add("-fail", target, "unboost", "[from] ability: White Smoke", "[of] " + target);
			}
		},
		isBreakable: true,
		name: "White Smoke",
		rating: 2,
		num: 73,
	},
	wimpout: {
		onEmergencyExit(target) {
			if (!this.canSwitch(target.side) || target.forceSwitchFlag || target.switchFlag) return;
			for (const side of this.sides) {
				for (const active of side.active) {
					active.switchFlag = false;
				}
			}
			target.switchFlag = true;
			this.add('-activate', target, 'ability: Wimp Out');
		},
		name: "Wimp Out",
		rating: 1,
		num: 193,
	},
	wonderguard: {
		onTryHit(target, source, move) {
			if (target === source || move.category === 'Status' || move.type === '???' || move.id === 'struggle') return;
			if (move.id === 'skydrop' && !source.volatiles['skydrop']) return;
			this.debug('Wonder Guard immunity: ' + move.id);
			if (target.runEffectiveness(move) <= 0) {
				if (move.smartTarget) {
					move.smartTarget = false;
				} else {
					this.add('-immune', target, '[from] ability: Wonder Guard');
				}
				return null;
			}
		},
		isBreakable: true,
		name: "Wonder Guard",
		rating: 5,
		num: 25,
	},
	wonderskin: {
		onModifyAccuracyPriority: 10,
		onModifyAccuracy(accuracy, target, source, move) {
			if (move.category === 'Status' && typeof accuracy === 'number') {
				this.debug('Wonder Skin - setting accuracy to 50');
				return 50;
			}
		},
		isBreakable: true,
		name: "Wonder Skin",
		rating: 2,
		num: 147,
	},
	zenmode: {
		onResidualOrder: 29,
		onResidual(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Darmanitan' || pokemon.transformed) {
				return;
			}
			if (pokemon.hp <= pokemon.maxhp / 2 && !['Zen', 'Galar-Zen'].includes(pokemon.species.forme)) {
				pokemon.addVolatile('zenmode');
			} else if (pokemon.hp > pokemon.maxhp / 2 && ['Zen', 'Galar-Zen'].includes(pokemon.species.forme)) {
				pokemon.addVolatile('zenmode'); // in case of base Darmanitan-Zen
				pokemon.removeVolatile('zenmode');
			}
		},
		onEnd(pokemon) {
			if (!pokemon.volatiles['zenmode'] || !pokemon.hp) return;
			pokemon.transformed = false;
			delete pokemon.volatiles['zenmode'];
			if (pokemon.species.baseSpecies === 'Darmanitan' && pokemon.species.battleOnly) {
				pokemon.formeChange(pokemon.species.battleOnly as string, this.effect, false, '[silent]');
			}
		},
		condition: {
			onStart(pokemon) {
				if (!pokemon.species.name.includes('Galar')) {
					if (pokemon.species.id !== 'darmanitanzen') pokemon.formeChange('Darmanitan-Zen');
				} else {
					if (pokemon.species.id !== 'darmanitangalarzen') pokemon.formeChange('Darmanitan-Galar-Zen');
				}
			},
			onEnd(pokemon) {
				if (['Zen', 'Galar-Zen'].includes(pokemon.species.forme)) {
					pokemon.formeChange(pokemon.species.battleOnly as string);
				}
			},
		},
		isPermanent: true,
		name: "Zen Mode",
		rating: 0,
		num: 161,
	},

	// CAP
	mountaineer: {
		onDamage(damage, target, source, effect) {
			if (effect && effect.id === 'stealthrock') {
				return false;
			}
		},
		onTryHit(target, source, move) {
			if (move.type === 'Rock' && !target.activeTurns) {
				this.add('-immune', target, '[from] ability: Mountaineer');
				return null;
			}
		},
		isNonstandard: "CAP",
		isBreakable: true,
		name: "Mountaineer",
		rating: 3,
		num: -2,
	},
	rebound: {
		isNonstandard: "CAP",
		name: "Rebound",
		onTryHitPriority: 1,
		onTryHit(target, source, move) {
			if (this.effectState.target.activeTurns) return;

			if (target === source || move.hasBounced || !move.flags['reflectable']) {
				return;
			}
			const newMove = this.dex.getActiveMove(move.id);
			newMove.hasBounced = true;
			this.actions.useMove(newMove, target, source);
			return null;
		},
		onAllyTryHitSide(target, source, move) {
			if (this.effectState.target.activeTurns) return;

			if (target.isAlly(source) || move.hasBounced || !move.flags['reflectable']) {
				return;
			}
			const newMove = this.dex.getActiveMove(move.id);
			newMove.hasBounced = true;
			this.actions.useMove(newMove, this.effectState.target, source);
			return null;
		},
		condition: {
			duration: 1,
		},
		isBreakable: true,
		rating: 3,
		num: -3,
	},
	persistent: {
		isNonstandard: "CAP",
		name: "Persistent",
		// implemented in the corresponding move
		rating: 3,
		num: -4,
	},
};
