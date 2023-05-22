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
	webbed: {
		isNonstandard: "Thing",
		onDamagingHit(damage, target, source, move) {
			if (move.flags['contact']) {
				this.add('-ability', target, 'Webbed');
				this.boost({spe: -1}, source, target, null, true);
			}
		},
		name: "Webbed",
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
			if (source.hasAbility('longgame') && move.priority <= 1.5) return;
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
			const environmentalfactors = ['locustswarm', 'nighttime', 'windy', 'yellowish', 'hot', 'cold', 'timedilation', 'underwater', 'meteorshower'];
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
				'stormcell', 'dustcloud', 'wetfloor', 'beamfield', 'hotcoals', 'permafrost', 'autoturret', 'voidtrap', 'caltrops', 'lightningstorm', 'eggscatter',
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
			// ignoring drop implemented in condition
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
				const sideconditions = ['duststorm', 'hotcoals', 'permafrost', 'wetfloor', 'beamfield', 'stormcell', 'voidtrap', 'autoturret', 'caltrops', 'lightningstorm', 'eggscatter'];
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
				this.add('-activate', source, 'ability: Soda Spreader');
				this.field.addPseudoWeather('stickysituation', source);
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
				this.add('-activate', source, 'ability: Shining Hair');
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
			if (pokemon.hp <= pokemon.maxhp / 4) {
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
		/* onSetAbility(ability, target, source, effect) {
			return false;
		}, */
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
				this.boost({evasion: pokemon.boosts.spe});
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
			if (move.pp === 1 && move.id !== 'shoot') return 5;
		},
		onAfterMoveSecondarySelf(source, target, move) {
			if (move.pp === 1) {
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
		onAnySetWeather() {
			return false;
		},
		// preventing setting terrain, rooms, and side conditions implemented elsewhere (field.ts, side.ts)
		// preventing removal implemented elsewhere (field.ts, side.ts)
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
		/* onSetAbility(ability, target, source, effect) {
			return false;
		}, */
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
				if (allyActive !== pokemon) {
					this.add('-activate', pokemon, 'ability: Comfy Seat');
					this.heal(allyActive.baseMaxhp / 16, allyActive, pokemon);
				}
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
			if (this.field.weather) {
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
			}
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
			if (this.field.terrain) {
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
			}
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
					this.add('-activate', source, 'ability: Clear Cut');
					switch (type) {
					case 'Arthropod':
					case 'Fish':
					case 'Green':
						source.heal(source.baseMaxhp / 2);
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
				const hazards = ['wetfloor', 'dustcloud', 'voidtrap', 'hotcoals', 'permafrost', 'beamfield', 'stormcell', 'autoturret', 'caltrops', 'lightningstorm', 'eggscatter'];
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
			this.add('-activate', pokemon, 'ability: Make a Mess');
			for (const side of pokemon.side.foeSidesWithConditions()) {
				const hazards = ['wetfloor', 'dustcloud', 'voidtrap', 'hotcoals', 'beamfield', 'caltrops', 'lightningstorm', 'eggscatter'];
				for (const condition in side.sideConditions) {
					hazards.splice(hazards.indexOf(condition), 1);
				}
				let i = 0;
				while (i < 5) {
					const hazard = this.sample(hazards);
					hazards.splice(hazards.indexOf(hazard), 1);
					side.addSideCondition(hazard);
					i++;
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
	thehelveticascenario: {
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		isNonstandard: "ThingInf",
		onStart(source) {
			this.add('-activate', source, 'ability: The Helvetica Scenario');
			for (const thing of this.getAllActive()) {
				if (thing.fainted || !thing.hp) continue;
				thing.trySetStatus('blinded', source);
			}
		},
		onResidual(pokemon) {
			if (!pokemon.hp) return;
			for (const target of this.getAllActive()) {
				if (target === pokemon) continue;
				this.damage(target.baseMaxhp / 8, target, pokemon);
			}
		},
		name: "The Helvetica Scenario",
		rating: 1.5,
		num: 123,
	},
	calcicimagemisplacement: {
		isNonstandard: "Thing",
		onUpdate(pokemon) {
			if (pokemon.status !== 'distanced') {
				this.add('-activate', pokemon, 'ability: Calcic Image Misplacement');
				pokemon.cureStatus();
				pokemon.trySetStatus('distanced');
			}
		},
		name: "Calcic Image Misplacement",
		rating: 2,
		num: -215,
	},
	supercell: {
		isNonstandard: "Thing",
		onStart(pokemon) {
			pokemon.side.addSideCondition('stormcell');
			for (const side of pokemon.side.foeSidesWithConditions()) {
				side.addSideCondition('lightningstorm');
			}
		},
		name: "Supercell",
		rating: 0.5,
		num: -196,
	},
	differentiation: {
		isNonstandard: "Thing",
		onPrepareHit(source, target, move) {
			if (move.hasBounced || move.sourceEffect === 'snatch') return;
			const type = move.type;
			if (type && type !== '???' && source.getTypes().join() !== type) {
				if (!source.addType(type)) return false;
				this.add('-start', source, 'typeadd', type, '[from] ability: Differentiation');
			}
		},
		name: "Differentiation",
		rating: 4.5,
		num: 168,
	},
	pathogenresistant: {
		isNonstandard: "Thing",
		onUpdate(pokemon) {
			if (pokemon.status === 'infected') {
				this.add('-activate', pokemon, 'ability: Pathogen-Resistant');
				pokemon.cureStatus();
			}
		},
		onSetStatus(status, target, source, effect) {
			if (status.id !== 'infected') return;
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: Pathogen-Resistant');
			}
			return false;
		},
		name: "Pathogen-Resistant",
		rating: 2,
		num: -215,
	},
	pathogentolerant: {
		isNonstandard: "Thing",
		// implemented in conditions.ts
		name: "Pathogen-Tolerant",
		rating: 2,
		num: -215,
	},
	insulatinghydroarmor: {
		isNonstandard: "Thing",
		onDamage(damage, target, source, effect) {
			if (effect.effectType !== 'Move') {
				if (effect.effectType === 'Ability') this.add('-activate', source, 'ability: ' + effect.name);
				return false;
			}
		},
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Liquid') {
				this.debug('Insulating Hydro-Armor effect');
				return attacker.getStat('spd', false, false);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Liquid') {
				this.debug('Insulating Hydro-Armor effect');
				return attacker.getStat('spd', false, false);
			}
		},
		name: "Insulating Hydro-Armor",
		rating: 4,
		num: 98,
	},
	ballaura: {
		isNonstandard: "Thing",
		onAllyBasePowerPriority: 22,
		onAllyBasePower(basePower, attacker, defender, move) {
			if (move.flags['ball']) {
				this.debug('Ball Aura boost');
				return this.chainModify(1.5);
			}
		},
		name: "Ball Aura",
		rating: 3.5,
		num: 252,
	},
	rebounding: {
		isNonstandard: "Thing",
		onAfterMoveSecondarySelf(source, target, move) {
			const hitMove = this.dex.getActiveMove('Ball Bounce');
			hitMove.category = move.category;
			hitMove.basePower = move.basePower / 2;
			if (source !== null && target !== null && target.hp) {
				this.add('-activate', target, 'ability: Rebounding');
				this.actions.trySpreadMoveHit([target], source, hitMove, true);
			}
		},
		name: "Rebounding",
		rating: 2.5,
		num: 154,
	},
	springintoaction: {
		isNonstandard: "Thing",
		onStart(source) {
			this.field.setTerrain('springfloor');
		},
		name: "Spring Into Action",
		rating: 4,
		num: 1229,
	},
	sleepy: {
		isNonstandard: "Thing",
		onResidual(pokemon) {
			if (pokemon.status === 'prone') {
				this.heal(pokemon.baseMaxhp / 2);
			}
		},
		name: "Sleepy",
		rating: 4,
		num: 90,
	},
	alert: {
		isNonstandard: "Thing",
		onStart(pokemon) {
			this.effectState.source = pokemon;
		},
		onAnySwitchIn(pokemon) {
			if (this.effectState.source?.foes()?.includes(pokemon)) {
				for (const ally of this.effectState.source.allies()) {
					const types = pokemon.getTypes(true);
					for (const type of types) {
						if (this.dex.getEffectiveness(type, ally) > 0) {
							this.boost({evasion: 1}, ally);
							return;
						}
					}
				}
			}
		},
		name: "Alert",
		rating: 4,
		num: 90,
	},
	whatsup: {
		isNonstandard: "ThingInf",
		onStart(pokemon) {
			pokemon.addVolatile('updog', pokemon);
		},
		// not fainting implemented in updog condition (moves.ts)
		name: "What's up?",
		rating: 4,
		num: 90,
	},
	windturbine: {
		isNonstandard: "ThingInf",
		onBeforeMovePriority: 9,
		onBeforeMove(pokemon) {
			if (!this.field.isWeather('windy')) {
				this.add('cant', pokemon, 'ability: Wind Turbine');
				return false;
			}
		},
		onAllyAfterMove(source, target, move) {
			if (this.field.isWeather('windy') && source.hasType('Industrial')) {
				const moveSlot = source.moveSlots.find(theMove => theMove.id === move.id);
				if (!moveSlot) return;
				moveSlot.pp += 1;
			}
		},
		onAllyBasePowerPriority: 30,
		onAllyBasePower(basePower, attacker, defender, move) {
			if (this.field.isWeather('windy') && attacker.hasType('Industrial')) {
				this.debug('Wind Turbine boost');
				return this.chainModify(1.5);
			}
		},
		name: "Wind Turbine",
		rating: 4,
		num: 90,
	},
	sticky: {
		isNonstandard: "Thing",
		onDamagingHit(damage, target, source, move) {
			if (this.checkMoveMakesContact(move, source, target)) {
				if (this.randomChance(3, 10)) {
					if (!target.item) {
						return;
					} else {
						const old_item = target.getItem();
						target.setItem('');
						target.lastItem = old_item.id;
					}

					this.add('-item', target, this.dex.items.get('plainstick'), '[from] ability: Sticky');
					target.setItem('plainstick');
				}
			}
		},
		name: "Sticky",
		rating: 2,
		num: 504,
	},
	whatsthis: {
		isNonstandard: "ThingInf",
		onResidual(pokemon) {
			if (pokemon.item) { this.actions.useMove('consume', pokemon); }
		},
		name: "What's this?",
		rating: 4,
		num: 2111,
	},

	// BASE GAME
	noability: {
		isNonstandard: "Past",
		name: "No Ability",
		rating: 0.1,
		num: 0,
	},
};
