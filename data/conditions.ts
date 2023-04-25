export const Conditions: {[k: string]: ConditionData} = {

	// NEW STUFF
	// Moves
	calibration: {
		name: 'calibration',
		noCopy: true, // doesn't get copied by Baton Pass
		onStart(pokemon, source, effect) {
			if (effect && (['imposter', 'psychup', 'transform'].includes(effect.id))) {
				this.add('-start', pokemon, 'move: Apex-Calibration', '[silent]');
			} else {
				this.add('-start', pokemon, 'move: Apex-Calibration');
			}
		},
		onAnyInvulnerabilityPriority: 1,
		onAnyInvulnerability(target, source, move) {
			if (move && source === this.effectState.target && (move.category === 'Physical' || move.category === 'Special')) return 0;
		},
		onSourceAccuracy(accuracy, target, source, move) {
			if (move.category === 'Physical' || move.category === 'Special') return true;
			return accuracy;
		},
		onModifyCritRatio(critRatio) {
			return 5;
		},
		onModifyMove(move) {
			if (move.drain) {
				move.drain = [(2 * move.drain[0]) + move.drain[1], 2 * move.drain[1]];
			} else {
				move.drain = [1, 2];
			}
		},
		onAfterMove(pokemon, target, move) {
			if (move.category === 'Physical' || move.category === 'Special') {
				this.add('-end', pokemon, 'move: Apex-Calibration', '[silent]');
				pokemon.removeVolatile('calibration');
			}
		},
		onEnd(pokemon) {
			this.add('-end', pokemon, 'move: Apex-Calibration', '[silent]');
		},
	},
	beamfield: {
		// this is a side condition
		name: 'beamfield',
		onSideStart(side) {
			this.add('-sidestart', side, 'move: Beam Scatter');
		},
		onSwitchIn(pokemon) {
			if (pokemon.hasItem('yellowsafetyvest')) return;
			const yellowHazard = this.dex.getActiveMove('Stealth Rock');
			yellowHazard.type = 'Yellow';
			const typeMod = this.clampIntRange(pokemon.runEffectiveness(yellowHazard), -6, 6);
			this.damage(pokemon.maxhp * Math.pow(2, typeMod) / 8);
		},
	},
	fireworked: {
		name: 'fireworked',
		noCopy: true, // doesn't get copied by Baton Pass
		onStart(pokemon, source, effect) {
			if (effect && (['imposter', 'psychup', 'transform'].includes(effect.id))) {
				this.add('-start', pokemon, 'move: Fireworks\u0021', '[silent]');
			} else {
				this.add('-start', pokemon, 'move: Fireworks\u0021');
			}
			this.effectState.multiplier = 1.5;
		},
		onRestart(target, source) {
			this.effectState.multiplier *= 1.5;
			this.add('-start', target, 'move: Fireworks\u0021');
		},
		onEnd(pokemon) {
			this.add('-end', pokemon, 'move: Fireworks\u0021', '[silent]');
		},
		onDisableMove(pokemon) {
			for (const moveSlot of pokemon.moveSlots) {
				const move = this.dex.moves.get(moveSlot.id);
				if (move.category === 'Status') {
					pokemon.disableMove(moveSlot.id);
				}
			}
		},
		onBeforeMovePriority: 5,
		onBeforeMove(attacker, defender, move) {
			if (!move.isZ && !move.isMax && move.category === 'Status') {
				this.add('cant', attacker, 'move: Fireworks\u0021', move);
				return false;
			}
		},
		onBasePowerPriority: 10,
		onBasePower(basePower) {
			this.debug('Boosting from Fireworks: ' + this.effectState.multiplier);
			return this.chainModify(this.effectState.multiplier);
		},
	},
	vetoed: {
		name: 'vetoed',
		noCopy: true, // doesn't get copied by Baton Pass
		onStart(pokemon, source, effect) {
			if (effect && (['imposter', 'psychup', 'transform'].includes(effect.id))) {
				this.add('-start', pokemon, 'move: Vetoed', '[silent]');
			} else {
				this.add('-start', pokemon, 'move: Vetoed', '[silent]');
			}
		},
		onEnd(pokemon) {
			this.add('-end', pokemon, 'move: Vetoed', '[silent]');
		},
	},
	fastforward: {
		name: 'fastforward',
		noCopy: true,
		duration: 3,
		onStart(pokemon) {
			this.add('-start', pokemon, 'Fast Forward');
		},
		onEnd(pokemon) {
			this.add('-end', pokemon, 'Fast Forward', '[silent]');
		},
		onTrapPokemon(pokemon) {
			pokemon.tryTrap();
		},
		onBeforeMove(attacker) {
			this.add('cant', attacker);
			return false;
		},
	},
	fastforwarding: {
		name: 'fastforwarding',
		noCopy: true,
		duration: 1,
	},
	delayedmove: {
		// this is a slot condition
		name: 'delayedmove',
		duration: 2,
		onResidualOrder: 2,
		onEnd(target) {
			const data = this.effectState;
			// time's up; time to hit! :D
			const move = this.dex.moves.get(data.move);

			this.add('-end', target, 'move: ' + move.name);
			target.removeVolatile('Protect');
			target.removeVolatile('Endure');

			if (data.source.hasAbility('infiltrator') && this.gen >= 6) {
				data.moveData.infiltrates = true;
			}
			if (data.source.hasAbility('normalize') && this.gen >= 6) {
				data.moveData.type = 'Normal';
			}
			if (data.source.hasAbility('adaptability') && this.gen >= 6) {
				data.moveData.stab = 2;
			}
			const hitMove = new this.dex.Move(data.moveData) as ActiveMove;

			this.actions.trySpreadMoveHit([target], data.source, hitMove, true);
			if (data.source.isActive && data.source.hasItem('lifeorb') && this.gen >= 5) {
				this.singleEvent('AfterMoveSecondarySelf', data.source.getItem(), data.source.itemState, data.source, target, data.source.getItem());
			}

			this.checkWin();
		},
	},
	brilliancyboost: {
		onSwap(target) {
			if (!target.fainted) {
				this.boost(this.effectState.boosts, target);
				target.side.removeSlotCondition(target, 'brilliancyboost');
			}
		},
	},
	equipped: {
		name: 'equipped',
		noCopy: true,
		duration: 2,
		onFoeRedirectTargetPriority: 1,
		onFoeRedirectTarget(target, source, source2, move) {
			if (target !== this.effectState.target) return;
			let equip = null;
			for (const ally of this.effectState.target.allies()) {
				if (!ally?.isActive || ally === source || !ally.volatiles['equip']) continue;
				equip = ally;
			}
			if (!this.effectState.target.isSkyDropped() && equip && this.validTarget(equip, source, move.target)) {
				if (move.smartTarget) move.smartTarget = false;
				this.debug("Equip redirected target of move");
				return equip;
			}
		},

		onBeforeMove(source, target, move) {
			let equip = null;
			for (const ally of this.effectState.target.allies()) {
				if (!ally?.isActive || !ally.volatiles['equip']) continue;
				equip = ally;
			}
			if (move.name !== 'Equip' || equip !== target) {
				if (equip) equip.removeVolatile('equip');
				source.removeVolatile('equipped');
			}
		},

		onInvulnerability(target, source, move) {
			if (!move.hitsBanished) {
				return false;
			}
		},

		onSwitchOut(pokemon) {
			pokemon.removeVolatile('equipped');
			let equip = null;
			for (const ally of this.effectState.target.allies()) {
				if (!ally?.isActive || !ally.volatiles['equip']) continue;
				equip = ally;
			}
			if (equip) equip.removeVolatile('equip');
		},

		onFaint(pokemon) {
			pokemon.removeVolatile('equipped');
			let equip = null;
			for (const ally of this.effectState.target.allies()) {
				if (!ally?.isActive || !ally.volatiles['equip']) continue;
				equip = ally;
			}
			if (equip) equip.removeVolatile('equip');
		},

		onEnd(target) {
			this.add('-end', target, 'move: Equipped', '[silent]');
		},
	},
	helper: {
		duration: 1,
		noCopy: true,
		onModifyPriority(priority, pokemon, target, move) {
			return 0;
		},
	},


	// Statuses
	prone: {
		onBeforeMovePriority: 10,
		onBeforeMove(pokemon, target, move) {
			if (move.category === 'Status')	pokemon.cureStatus();
			else this.add('-activate', pokemon, 'prone');
		},
		name: 'prone',
		effectType: 'Status',
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.effectType === 'Item') {
				this.add('-status', target, 'prone', '[from] item: ' + sourceEffect.name);
			} else if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'prone', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'prone');
			}
		},
		onSwitchOut(pokemon) {
			pokemon.cureStatus();
		},
		// Damage reduction is handled directly in the sim/battle-actions.js damage function
	},
	banished: {
		name: 'banished',
		effectType: 'Status',
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.effectType === 'Item') {
				this.add('-status', target, 'banished', '[from] item: ' + sourceEffect.name);
			} else if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'banished', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'banished');
			}
			// 1-3 turns
			this.effectState.startTime = this.random(2, 5);
			this.effectState.time = this.effectState.startTime;
		},
		onBeforeMovePriority: 10,
		onBeforeMove(pokemon, target, move) {
			pokemon.statusState.time--;
			if (pokemon.statusState.time <= 0) {
				pokemon.cureStatus();
			} else if (move.banishedUsable) {
				// this.add('-activate', pokemon, 'move: ' + this.effectState.sourceEffect, '[of] ' + pokemon);
			} else {
				this.add('cant', pokemon, 'banished');
				return false;
			}
		},
		onInvulnerability(target, source, move) {
			if (!move.hitsBanished) {
				return false;
			}
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.id === 'noescape') {
				return this.chainModify(2);
			}
		},
		onResidual(pokemon) {
			this.damage(pokemon.baseMaxhp / 8);
		},
	},
	blinded: {
		name: 'blinded',
		effectType: 'Status',
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.effectType === 'Item') {
				this.add('-status', target, 'blinded', '[from] item: ' + sourceEffect.name);
			} else if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'blinded', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'blinded');
			}
		},
		onSourceModifyAccuracyPriority: -1,
		onSourceModifyAccuracy(accuracy, target, source, move) {
			if (typeof accuracy === 'number' && source.getItem().name !== 'Eyeball') {
				return this.chainModify(0.75);
			}
		},
	},
	pressurized: {
		name: 'pressurized',
		effectType: 'Status',
		onStart(target, source, sourceEffect) {
			this.field.addPseudoWeather('pressurizer');
			if (sourceEffect && sourceEffect.effectType === 'Item') {
				this.add('-status', target, 'pressurized', '[from] item: ' + sourceEffect.name);
			} else if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'pressurized', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'pressurized');
			}
			this.effectState.startTime = 3;
			this.effectState.time = this.effectState.startTime;
		},
		onSwitchIn() {
			this.effectState.time = this.effectState.startTime;
		},
	},
	pressurizer: {
		onFieldResidualOrder: 9,
		onFieldResidual() {
			let announced = false;
			const pressureMod = this.field.getWeather().id === 'underwater' ? 2 : 1;
			for (const pokemon of this.getAllPokemon()) {
				if (pokemon.status !== 'pressurized' ||
					pokemon.fainted || !pokemon.hp ||
					pokemon.hasItem('pressurecapsule')
				) continue;
				if (pokemon.isActive && !this.field.getPseudoWeather('hadalzone')) {
					pokemon.statusState.time--;
					if (pokemon.statusState.time <= 0) {
						pokemon.cureStatus();
					}
					continue;
				}
				if (!announced) {
					this.add('-activate', null, 'pressurizer');
					announced = true;
				}
				if (pokemon.ability === 'highpressure') {
					this.add('-activate', pokemon, 'ability: High Pressure');
					let collateral = this.clampIntRange(pressureMod * pokemon.maxhp / 8, 1);
					if (collateral >= (pokemon.maxhp - pokemon.hp)) collateral = (pokemon.maxhp - pokemon.hp);
					this.directHeal(collateral, pokemon);
					if (pokemon.hp === pokemon.baseMaxhp) pokemon.cureStatus();
				} else {
					let collateral = this.clampIntRange(pressureMod * pokemon.maxhp / 8, 1);
					if (collateral >= pokemon.hp) collateral = pokemon.hp - 1;
					this.directDamage(collateral, pokemon);
					if (pokemon.hp === 1) pokemon.cureStatus();
				}
			}
		},
	},
	fluctuant: {
		name: 'fluctuant',
		effectType: 'Status',
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.effectType === 'Item') {
				this.add('-status', target, 'fluctuant', '[from] item: ' + sourceEffect.name);
			} else if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'fluctuant', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'fluctuant');
			}
			// 1-3 turns
			this.effectState.startTime = this.random(2, 5);
			this.effectState.time = this.effectState.startTime;
		},
		onResidual(pokemon) {
			this.add('-activate', pokemon, 'fluctuant');

			const loops = this.field.isWeather(['hot', 'cold']) ? 2 : 1;
			const posLoops = pokemon.hasItem('pRNG Machine') ? 2 : 1;
			const negLoops = 2;

			let stats: BoostID[] = [];
			let boost: SparseBoostsTable = {};
			let statPlus: BoostID;
			for (statPlus in pokemon.boosts) {
				if (statPlus === 'accuracy' || statPlus === 'evasion') continue;
				if (pokemon.boosts[statPlus] < 6) {
					stats.push(statPlus);
				}
			}
			for (let i = 0; i < (loops * posLoops); i++) {
				if (!stats.length) break;
				const rand = Math.floor(Math.random() * stats.length);
				const randomStat: BoostID = stats[rand];
				stats.splice(rand, 1);
				if (randomStat) boost[randomStat] = 1;
			}
			this.boost(boost);

			stats = [];
			boost = {};
			let statMinus: BoostID;
			for (statMinus in pokemon.boosts) {
				if (statMinus === 'accuracy' || statMinus === 'evasion') continue;
				if (pokemon.boosts[statMinus] > -6) {
					stats.push(statMinus);
				}
			}
			for (let i = 0; i < (loops * negLoops); i++) {
				if (!stats.length) break;
				const rand = Math.floor(Math.random() * stats.length);
				const randomStat: BoostID = stats[rand];
				stats.splice(rand, 1);
				if (randomStat) boost[randomStat] = -1;
			}
			this.boost(boost);

			if (!pokemon.hasItem('pRNG Machine')) pokemon.statusState.time--;
			if (pokemon.statusState.time <= 0) {
				pokemon.cureStatus();
				return;
			}
		},
	},
	wounded: {
		name: 'wounded',
		effectType: 'Status',
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.effectType === 'Item') {
				this.add('-status', target, 'wounded', '[from] item: ' + sourceEffect.name);
			} else if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'wounded', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'wounded');
			}
		},
		onModifyDefPriority: 10,
		onModifyDef(def, pokemon) {
			return this.modify(def, 0.5);
		},
		onAfterMoveSecondarySelf(source, target, move) {
			if (source && source !== target && move && move.category !== 'Status') {
				this.damage(source.baseMaxhp / 6);
			}
		},
	},
	distanced: {
		name: 'distanced',
		effectType: 'Status',
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.effectType === 'Item') {
				this.add('-status', target, 'distanced', '[from] item: ' + sourceEffect.name);
			} else if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'distanced', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'distanced');
			}
			this.effectState.startTime = 3;
			this.effectState.time = this.effectState.startTime;
		},
		onSourceModifyAccuracyPriority: -1,
		onSourceModifyAccuracy(accuracy, target, source, move) {
			if (typeof accuracy === 'number') {
				// if (move.target !== 'any') {
				return this.chainModify(0.90);
				// }
			}
		},
		onAnyAccuracy(accuracy, target, source, move) {
			if (move && target === this.effectState.target) {
				if (typeof accuracy === 'number') {
					// if (move.target !== 'any') {
					return this.chainModify(0.90);
					// }
				}
			}
			return accuracy;
		},
		onBeforeMovePriority: 10,
		onBeforeMove(pokemon, target, move) {
			pokemon.statusState.time--;
			if (pokemon.statusState.time <= 0 && !pokemon.hasAbility('Escape Velocity')) {
				pokemon.cureStatus();
			} else {
				this.add('-activate', pokemon, 'distanced');
				if (move.flags['contact'])	{
					this.add('cant', pokemon, 'distanced');
					pokemon.cureStatus();
					return false;
				}
			}
		},
		onInvulnerability(target, source, move) {
			if (move.flags['contact']) {
				return false;
			}
		},
		onResidualOrder: 6,
		onResidual(pokemon) {
			if (pokemon.hasType('Far', true)) this.heal(pokemon.baseMaxhp / 16);
		},
		// Damage reduction is handled directly in the sim/battle-actions.js damage function
	},
	infected: {
		name: 'infected',
		effectType: 'Status',
		onStart(target, source) {
			if (source?.statusState?.infection) {
				// Deep copy; Each infection mutates on its own, even it intially came a spread
				// (Also, I'm doing it in a massively cringe way, please @ me.)
				this.effectState.infection = {
					spreadChance: source.statusState.infection.spreadChance,
					spreadMode: [...source.statusState.infection.spreadMode],
					damageChance: source.statusState.infection.damageChance,
					damageFraction: source.statusState.infection.damageFraction,
				};

				// Shallow copy for easy shorthand
				const inf = this.effectState.infection;
				console.log('spread infection (before mutation)');
				console.log(inf);

				// Each parameter has a 20% chance to 'mutate'
				if (this.random() < 0.2) {
					inf.spreadChance = this.clampIntRange((inf.spreadChance + this.random(-10, 10)), 0, 100);
				}
				if (this.random() < 0.2) {
					inf.damageChance = this.clampIntRange((inf.damageChance + this.random(-10, 10)), 0, 100);
				}
				if (this.random() < 0.2) {
					inf.damageFraction = this.clampIntRange((inf.damageFraction + this.random(-3, 3)), 1, 32);
				}
				if (this.random() < 0.2) {
					inf.spreadMode.push(this.random(1, 5));
				}
				if (this.random() < 0.2 && inf.spreadMode.length) {
					inf.spreadMode.splice(this.random(0, inf.spreadMode.length - 1), 1);
				}
			} else {
				this.effectState.infection = {
					// The % chance a spread occurs
					spreadChance: this.random(20, 60),
					/* Spread modes:
						1 - After Thing makes contact or is made contact with
						2 - After Thing is hit by another Thing
						3 - After Thing hits another Thing
						4 - After Thing faints for all other active Things
						5 - End of turn for all other active Things */
					spreadMode: [this.random(1, 5)],
					// The % chance damage occurs
					damageChance: this.random(40, 80),
					// The amount damaged as 1 / x of max hp
					damageFraction: this.random(2, 16),
				};
				console.log('new infection');
				console.log(this.effectState.infection);
			}

			this.add('-status', target, 'infected');
		},
		onResidual(source) {
			// Shallow copy for easy shorthand
			const inf = this.effectState.infection;

			// Try spread
			if (inf.spreadMode.includes(5)) {
				for (const pokemon of this.getAllActive()) {
					if (pokemon === source) continue;
					if (this.random() * 100 < inf.spreadChance) {
						pokemon.trySetStatus('infected', source);
					}
				}
			}

			// Residual damage
			if (this.random() * 100 < inf.damageChance && !source.hasAbility('pathogentolerant')) {
				this.damage(source.baseMaxhp / inf.damageFraction);
			}

			// Each parameter has a 20% chance to 'mutate'
			if (this.random() < 0.2) {
				inf.spreadChance = this.clampIntRange((inf.spreadChance + this.random(-10, 10)), 0, 100);
			}
			if (this.random() < 0.2) {
				inf.damageChance = this.clampIntRange((inf.damageChance + this.random(-10, 10)), 0, 100);
			}
			if (this.random() < 0.2) {
				inf.damageFraction = this.clampIntRange((inf.damageFraction + this.random(-3, 3)), 1, 32);
			}
			if (this.random() < 0.2) {
				inf.spreadMode.push(this.random(1, 5));
			}
			if (this.random() < 0.2 && inf.spreadMode.length) {
				inf.spreadMode.splice(this.random(0, inf.spreadMode.length - 1), 1);
			}
		},
		onAfterMoveSecondarySelf(source, target, move) {
			if (
				source && source !== target && move &&
				((this.effectState.infection.spreadMode.includes(1) && this.checkMoveMakesContact(move, source, target)) ||
					this.effectState.infection.spreadMode.includes(2)) &&
				this.random() * 100 < this.effectState.infection.spreadChance
			) {
				target.trySetStatus('infected', target);
			}
		},
		onAfterMoveSecondary(source, target, move) {
			if (
				source && source !== target && move &&
				((this.effectState.infection.spreadMode.includes(1) && this.checkMoveMakesContact(move, source, target)) ||
					this.effectState.infection.spreadMode.includes(3)) &&
				this.random() * 100 < this.effectState.infection.spreadChance
			) {
				target.trySetStatus('infected', source);
			}
		},
		onBeforeFaint(source) {
			if (this.effectState.infection.spreadMode.includes(4)) {
				for (const pokemon of this.getAllActive()) {
					if (pokemon === source) continue;
					if (this.random() * 100 < this.effectState.infection.spreadChance) {
						pokemon.trySetStatus('infected', source);
					}
				}
			}
		},
		onEnd() {
			// Not sure if this is necessary
			delete this.effectState.infection;
		},
	},

	// Environmental Factors (New Weather)
	yellowish: {
		onModifyMovePriority: -5,
		onModifyMove(move, pokemon) {
			if (move.type === 'Yellow' && !pokemon.hasItem('cowboyhat')) {
				move.accuracy = true;
				move.ignoreImmunity = true;
			}
		},
		onEffectiveness(typeMod, target, type, move) {
			if (this.blessedEnv && move.type === 'Yellow' && !this.activePokemon?.hasItem('cowboyhat') && typeMod < 0) return 0;
		},
		name: 'Yellowish',
		effectType: 'Weather',
		duration: 5,
		durationCallback(source) {
			if (source?.hasItem('environmentalaccord')) return 10;
			return 5;
		},
		onFieldStart(battle, source, effect) {
			if (effect?.effectType === 'Ability') {
				this.add('-weather', 'Yellowish', '[from] ability: ' + effect, '[of] ' + source);
			} else {
				this.add('-weather', 'Yellowish');
			}
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'Yellowish', '[upkeep]');
			if (this.field.isWeather('yellowish')) this.eachEvent('Weather');
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},
	locustswarm: {
		onModifySpe(_spe, pokemon) {
			if ((pokemon.hasType('Arthropod', true) || pokemon.hasAbility('Adaptable')) &&
				this.field.isWeather('locustswarm') &&
				!pokemon.hasItem('cowboyhat')) {
				return this.chainModify(1.5);
			}
		},
		onWeather(target) {
			if (target.hasAbility('Adaptable') || target.hasAbility('Environmental Blessing') || target.hasItem('cowboyhat') || target.hasType('Arthropod', true)) return;

			const typeMod = this.clampIntRange(target.runEffectiveness(this.dex.getActiveMove('arthropodphysical')), -6, 6);

			let bonus = 1;
			if (target.volatiles['pheromonemark']) {
				bonus = 1.5;
			}
			if (this.blessedEnv) {
				bonus = bonus * 2;
			}

			let damage = 0;
			if (typeMod >= 0) {
				damage = target.maxhp * ((2 + typeMod) / 2) * bonus / 16;
			}
			if (typeMod < 0) {
				damage = target.maxhp * (2 / (2 - typeMod)) * bonus / 16;
			}
			this.damage(damage);

			if (damage) {
				for (const pokemon of target.battle.getAllActive()) {
					if (pokemon.hasAbility('Doomful Descent')) {
						this.heal(damage, pokemon);
					}
				}
			}
		},
		name: 'Locust Swarm',
		effectType: 'Weather',
		duration: 5,
		durationCallback(source) {
			if (source?.hasAbility('Doomful Descent')) return 0;
			if (source?.hasItem('environmentalaccord')) return 10;
			return 5;
		},
		onFieldStart(_field, source, effect) {
			if (effect?.effectType === 'Ability') {
				this.add('-weather', 'Locust Swarm', '[from] ability: ' + effect, '[of] ' + source);
			} else {
				this.add('-weather', 'Locust Swarm');
			}
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'Locust Swarm', '[upkeep]');
			if (this.field.isWeather('Locust Swarm')) this.eachEvent('Weather');
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},
	nighttime: {
		onModifyAccuracy(accuracy, target) {
			if (typeof accuracy !== 'number') return;
			if (target?.hasType('Night', true) && !target.hasItem('cowboyhat')) {
				return this.chainModify(0.8);
			}
		},
		onWeather(target) {
			if ((target.hasType('Night', true) || target.hasAbility('Adaptable') || target.hasAbility('Environmental Blessing')) && !target.hasItem('cowboyhat')) {
				this.heal(target.baseMaxhp / 16);
				if (this.blessedEnv) this.boost({evasion: 1}, target);
			}
		},
		name: 'Nighttime',
		effectType: 'Weather',
		duration: 5,
		durationCallback(source) {
			if (source?.hasItem('environmentalaccord')) return 10;
			return 5;
		},
		onFieldStart(_field, source, effect) {
			if (effect?.effectType === 'Ability') {
				this.add('-weather', 'Nighttime', '[from] ability: ' + effect, '[of] ' + source);
			} else {
				this.add('-weather', 'Nighttime');
			}
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'Nighttime', '[upkeep]');
			if (this.field.isWeather('Nighttime')) this.eachEvent('Weather');
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},
	windy: {
		onAnyModifyBoost(boosts, pokemon) {
			if (!pokemon.hasAbility('windsurfer') && !pokemon.hasItem('cowboyhat')) {
				boosts['spe'] = 0;
			}
		},
		onModifyPriority(priority, pokemon, target, move) {
			if ((move?.type === 'Weather' || ((move.id === 'deposition' || move.id === 'emanation') && pokemon.types[0] === 'Weather')) &&
				!pokemon.hasItem('cowboyhat')) {
				return priority + 1;
			}
		},
		onAfterMove(source, target, move) {
			if (this.blessedEnv && (move?.type === 'Weather' || ((move.id === 'deposition' || move.id === 'emanation') && source.types[0] === 'Weather'))) {
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
				this.boost(boost);
			}
		},
		name: 'Windy',
		effectType: 'Weather',
		duration: 5,
		durationCallback(source) {
			if (source?.hasAbility('lassihnfliegen')) return 0;
			if (source?.hasItem('environmentalaccord')) return 10;
			return 5;
		},
		onFieldStart(_field, source, effect) {
			if (effect?.effectType === 'Ability') {
				this.add('-weather', 'Windy', '[from] ability: ' + effect, '[of] ' + source);
			} else {
				this.add('-weather', 'Windy');
			}
			this.hint("Stat changes to speed are ignored while it is windy!");
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'Windy', '[upkeep]');
			if (this.field.isWeather('windy')) this.eachEvent('Weather');
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},
	hot: {
		onModifyAtkPriority: 10,
		onModifyAtk(_atk, pokemon) {
			if ((pokemon.hasType('Temperature', true) || pokemon.hasAbility('Adaptable') || pokemon.hasAbility('Environmental Blessing')) &&
				this.field.isWeather('hot') &&
				!pokemon.hasItem('cowboyhat')) {
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 10,
		onModifySpA(_spa, pokemon) {
			if ((pokemon.hasType('Temperature', true) || pokemon.hasAbility('Adaptable') || pokemon.hasAbility('Environmental Blessing')) &&
				this.field.isWeather('hot') &&
				!pokemon.hasItem('cowboyhat')) {
				return this.chainModify(1.5);
			}
		},
		onWeather(target) {
			if ((target.hasType('Temperature', true) || target.hasAbility('Adaptable') || target.hasAbility('Environmental Blessing')) && !target.hasItem('cowboyhat')) {
				if (this.blessedEnv) this.boost({spe: 2}, target);
				else this.boost({spe: 1}, target);
			}
		},
		name: 'Hot',
		effectType: 'Weather',
		duration: 5,
		durationCallback(source) {
			if (source?.hasAbility('ahotone')) return 0;
			if (source?.hasItem('environmentalaccord')) return 10;
			return 5;
		},
		onFieldStart(_field, source, effect) {
			if (effect?.effectType === 'Ability') {
				this.add('-weather', 'Hot', '[from] ability: ' + effect, '[of] ' + source);
			} else {
				this.add('-weather', 'Hot');
			}
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'Hot', '[upkeep]');
			if (this.field.isWeather('Hot')) this.eachEvent('Weather');
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},
	cold: {
		onModifyDefPriority: 10,
		onModifyDef(_def, pokemon) {
			if ((pokemon.hasType('Temperature', true) || pokemon.hasAbility('Adaptable') || pokemon.hasAbility('Environmental Blessing')) &&
				this.field.isWeather('cold') &&
				!pokemon.hasItem('cowboyhat')) {
				return this.chainModify(1.5);
			}
		},
		onModifySpDPriority: 10,
		onModifySpD(_spd, pokemon) {
			if ((pokemon.hasType('Temperature', true) || pokemon.hasAbility('Adaptable') || pokemon.hasAbility('Environmental Blessing')) &&
				this.field.isWeather('cold') &&
				!pokemon.hasItem('cowboyhat')) {
				return this.chainModify(1.5);
			}
		},
		onWeather(target) {
			if (!target.hasType('Temperature', true) &&
				!target.hasAbility('Chilled') &&
				!target.hasAbility('Adaptable') &&
				!target.hasAbility('Environmental Blessing') &&
				!target.hasItem('parka') &&
				!target.hasItem('cowboyhat')) {
				if (this.blessedEnv) this.boost({spe: -2}, target);
				else this.boost({spe: -1}, target);
			}
		},
		name: 'Cold',
		effectType: 'Weather',
		duration: 5,
		durationCallback(source) {
			if (source?.hasItem('environmentalaccord')) return 10;
			return 5;
		},
		onFieldStart(_field, source, effect) {
			if (effect?.effectType === 'Ability') {
				this.add('-weather', 'Cold', '[from] ability: ' + effect, '[of] ' + source);
			} else {
				this.add('-weather', 'Cold');
			}
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'Cold', '[upkeep]');
			if (this.field.isWeather('Cold')) this.eachEvent('Weather');
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},
	timedilation: {
		onModifySpe(_spe, pokemon) {
			if (!pokemon.hasType('Time', true) &&
				!pokemon.hasAbility('Adaptable') &&
				!pokemon.hasAbility('Environmental Blessing') &&
				!pokemon.hasItem('cowboyhat')) {
				return this.chainModify(0.25);
			}
		},
		onWeatherModifyDamage(_damage, attacker, defender, move) {
			if (move.type === 'Time' &&
				(defender.newlySwitched || this.queue.willMove(defender)) &&
				!attacker.hasItem('cowboyhat')) {
				return this.chainModify(1.5);
			}
		},
		onAfterMove(source, target, move) {
			if (!source.hasItem('cowboyhat') && this.blessedEnv) {
				for (const pokemon of this.getAllActive()) {
					if (pokemon === source) continue;
					const action = this.queue.willMove(pokemon);
					if (!action) return;
				}
				source.addVolatile('timedilationattack');
				source.volatiles['timedilationattack'].move = move;
			}
		},
		name: 'Time Dilation',
		effectType: 'Weather',
		duration: 5,
		durationCallback(source) {
			if (source?.hasAbility('sinningunapuro')) return 0;
			if (source?.hasItem('environmentalaccord')) return 10;
			return 5;
		},
		onFieldStart(_field, source, effect) {
			if (effect?.effectType === 'Ability') {
				this.add('-weather', 'Time Dilation', '[from] ability: ' + effect, '[of] ' + source);
			} else {
				this.add('-weather', 'Time Dilation');
			}
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'Time Dilation', '[upkeep]');
			if (this.field.isWeather('Time Dilation')) this.eachEvent('Weather');
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},
	underwater: {
		onModifyAccuracyPriority: -1,
		onModifyAccuracy(accuracy, target, _source, move) {
			if (typeof accuracy !== 'number') return;
			if (move.type === 'Liquid' && !target.hasItem('cowboyhat')) {
				return this.chainModify(1.2);
			}
		},
		onImmunity(type, pokemon) {
			if (type === 'prone' && !pokemon.hasItem('cowboyhat')) return false;
		},
		onWeather(target) {
			if (target.hasItem('cowboyhat')) return;

			if (target.hasType('Fish', true) || target.hasAbility('Adaptable') || target.hasAbility('Environmental Blessing')) {
				if (this.blessedEnv) this.heal(target.baseMaxhp / 8);
				else this.heal(target.baseMaxhp / 16);
			} else {
				if (this.blessedEnv) this.damage(target.baseMaxhp / 8);
				else this.damage(target.baseMaxhp / 16);
			}

			if (target.status === 'prone') {
				target.cureStatus();
			}
		},
		name: 'Underwater',
		effectType: 'Weather',
		duration: 5,
		durationCallback(source) {
			if (source?.hasItem('environmentalaccord')) return 10;
			return 5;
		},
		onFieldStart(_field, source, effect) {
			if (effect?.effectType === 'Ability') {
				this.add('-weather', 'Underwater', '[from] ability: ' + effect, '[of] ' + source);
			} else {
				this.add('-weather', 'Underwater');
			}
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'Underwater', '[upkeep]');
			if (this.field.isWeather('Underwater')) this.eachEvent('Weather');
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},
	meteorshower: {
		onFieldResidualOrder: 1,
		onFieldResidual(field) {
			this.add('-weather', 'Meteor Shower', '[upkeep]');

			let targets: Pokemon[] = [];
			for (const pokemon of field.battle.getAllActive()) {
				if (pokemon.hasItem('cowboyhat') || pokemon.hasAbility('Celestial') || pokemon.hasAbility('Cataclysm')/* || pokemon.status === 'banished' */) continue;
				targets.push(pokemon);
			}
			const allTargets = targets;
			let numMeteors = 1;
			if (this.blessedEnv) numMeteors++;
			for (const pokemon of field.battle.getAllActive()) {
				if (pokemon.hasAbility('Cataclysm')) numMeteors++;
			}
			let i = 0;
			while (i < numMeteors && allTargets.length > 0) {
				if (targets.length === 0) targets = allTargets;
				const targNum = this.random(targets.length);
				const target = targets.splice(targNum, 1)[0];

				// Okay, call me cringe but...
				const stati = ['prone', 'banished', 'blinded', 'pressurized', 'fluctuant', 'wounded', 'distanced', 'infected'];

				if (target.hasAbility('Adaptable') || target.hasAbility('Environmental Blessing') || target.hasType('Dirt', true)) {
					this.heal(target.baseMaxhp / 8, target);
					const result = this.random(stati.length + 2);
					if (result < stati.length) {
						target.cureStatus();
					}
				} else {
					const typeMod = this.clampIntRange(target.runEffectiveness(this.dex.getActiveMove('dirtphysical')), -6, 6);
					const bonus = 1;
					let damage = 0;
					if (typeMod >= 0) {
						damage = target.maxhp * ((2 + typeMod) / 2) * bonus / 16;
					}
					if (typeMod < 0) {
						damage = target.maxhp * (2 / (2 - typeMod)) * bonus / 16;
					}
					this.damage(damage, target);
					const result = this.random(stati.length + 2);
					target.trySetStatus(stati[result]);
				}

				i++;
			}

			if (this.field.isWeather('Meteor Shower')) this.eachEvent('Weather');
		},
		name: 'Meteor Shower',
		effectType: 'Weather',
		duration: 5,
		durationCallback(source) {
			if (source?.hasItem('environmentalaccord')) return 10;
			return 5;
		},
		onFieldStart(_field, source, effect) {
			if (effect?.effectType === 'Ability') {
				this.add('-weather', 'Meteor Shower', '[from] ability: ' + effect, '[of] ' + source);
			} else {
				this.add('-weather', 'Meteor Shower');
			}
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},

	friendlyatmosphere: {
		onFieldResidualOrder: 1,
		onFieldResidual(field) {
			this.add('-weather', 'Friendly Atmosphere', '[upkeep]');
		},
		onDamagePriority: -10,
		onDamage(damage, target, source, effect) {
			if (effect?.effectType === 'Move' && damage >= target.hp) {
				this.add('-activate', target);
				return target.hp - 1;
			}
		},
		name: 'Friendly Atmosphere',
		effectType: 'Weather',
		duration: 5,
		durationCallback(source) {
			// if (source?.hasItem('environmentalaccord')) return 10;
			return 5;
		},
		onFieldStart(_field, source, effect) {
			if (effect?.effectType === 'Ability') {
				this.add('-weather', 'Friendly Atmosphere', '[from] ability: ' + effect, '[of] ' + source);
			} else {
				this.add('-weather', 'Friendly Atmosphere');
			}
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},

	// Landscape Factors

	// Other
	timedilationattack: {
		name: "timedilationattack",
		duration: 1,
		onResidualOrder: 3,
		onEnd(pokemon) {
			const move: ActiveMove = this.effectState.move;

			this.actions.useMove(move, pokemon);

			this.checkWin();
		},
	},

	// BASE GAME
	brn: {
		name: 'brn',
		effectType: 'Status',
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.id === 'flameorb') {
				this.add('-status', target, 'brn', '[from] item: Flame Orb');
			} else if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'brn', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'brn');
			}
		},
		// Damage reduction is handled directly in the sim/battle.js damage function
		onResidualOrder: 10,
		onResidual(pokemon) {
			this.damage(pokemon.baseMaxhp / 16);
		},
	},
	par: {
		name: 'par',
		effectType: 'Status',
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'par', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'par');
			}
		},
		onModifySpe(spe, pokemon) {
			if (!pokemon.hasAbility('quickfeet')) {
				return this.chainModify(0.5);
			}
		},
		onBeforeMovePriority: 1,
		onBeforeMove(pokemon) {
			if (this.randomChance(1, 4)) {
				this.add('cant', pokemon, 'par');
				return false;
			}
		},
	},
	slp: {
		name: 'slp',
		effectType: 'Status',
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'slp', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else if (sourceEffect && sourceEffect.effectType === 'Move') {
				this.add('-status', target, 'slp', '[from] move: ' + sourceEffect.name);
			} else {
				this.add('-status', target, 'slp');
			}
			// 1-3 turns
			this.effectState.startTime = this.random(2, 5);
			this.effectState.time = this.effectState.startTime;
		},
		onBeforeMovePriority: 10,
		onBeforeMove(pokemon, target, move) {
			if (pokemon.hasAbility('earlybird')) {
				pokemon.statusState.time--;
			}
			pokemon.statusState.time--;
			if (pokemon.statusState.time <= 0) {
				pokemon.cureStatus();
				return;
			}
			this.add('cant', pokemon, 'slp');
			if (move.sleepUsable) {
				return;
			}
			return false;
		},
	},
	frz: {
		name: 'frz',
		effectType: 'Status',
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'frz', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'frz');
			}
			if (target.species.name === 'Shaymin-Sky' && target.baseSpecies.baseSpecies === 'Shaymin') {
				target.formeChange('Shaymin', this.effect, true);
			}
		},
		onBeforeMovePriority: 10,
		onBeforeMove(pokemon, target, move) {
			if (move.flags['defrost']) return;
			if (this.randomChance(1, 5)) {
				pokemon.cureStatus();
				return;
			}
			this.add('cant', pokemon, 'frz');
			return false;
		},
		onModifyMove(move, pokemon) {
			if (move.flags['defrost']) {
				this.add('-curestatus', pokemon, 'frz', '[from] move: ' + move);
				pokemon.setStatus('');
			}
		},
		onHit(target, source, move) {
			if (move.thawsTarget || move.type === 'Fire' && move.category !== 'Status') {
				target.cureStatus();
			}
		},
	},
	psn: {
		name: 'psn',
		effectType: 'Status',
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'psn', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'psn');
			}
		},
		onResidualOrder: 9,
		onResidual(pokemon) {
			this.damage(pokemon.baseMaxhp / 8);
		},
	},
	tox: {
		name: 'tox',
		effectType: 'Status',
		onStart(target, source, sourceEffect) {
			this.effectState.stage = 0;
			if (sourceEffect && sourceEffect.id === 'toxicorb') {
				this.add('-status', target, 'tox', '[from] item: Toxic Orb');
			} else if (sourceEffect && sourceEffect.effectType === 'Ability') {
				this.add('-status', target, 'tox', '[from] ability: ' + sourceEffect.name, '[of] ' + source);
			} else {
				this.add('-status', target, 'tox');
			}
		},
		onSwitchIn() {
			this.effectState.stage = 0;
		},
		onResidualOrder: 9,
		onResidual(pokemon) {
			if (this.effectState.stage < 15) {
				this.effectState.stage++;
			}
			this.damage(this.clampIntRange(pokemon.baseMaxhp / 16, 1) * this.effectState.stage);
		},
	},
	confusion: {
		name: 'confusion',
		// this is a volatile status
		onStart(target, source, sourceEffect) {
			if (sourceEffect && sourceEffect.id === 'lockedmove') {
				this.add('-start', target, 'confusion', '[fatigue]');
			} else {
				this.add('-start', target, 'confusion');
			}
			this.effectState.time = this.random(2, 6);
		},
		onEnd(target) {
			this.add('-end', target, 'confusion');
		},
		onBeforeMovePriority: 3,
		onBeforeMove(pokemon) {
			pokemon.volatiles['confusion'].time--;
			if (!pokemon.volatiles['confusion'].time) {
				pokemon.removeVolatile('confusion');
				return;
			}
			this.add('-activate', pokemon, 'confusion');
			if (!this.randomChance(33, 100)) {
				return;
			}
			this.activeTarget = pokemon;
			const damage = this.actions.getConfusionDamage(pokemon, 40);
			if (typeof damage !== 'number') throw new Error("Confusion damage not dealt");
			const activeMove = {id: this.toID('confused'), effectType: 'Move', type: '???'};
			this.damage(damage, pokemon, pokemon, activeMove as ActiveMove);
			return false;
		},
	},
	flinch: {
		name: 'flinch',
		duration: 1,
		onBeforeMovePriority: 8,
		onBeforeMove(pokemon) {
			this.add('cant', pokemon, 'flinch');
			this.runEvent('Flinch', pokemon);
			return false;
		},
	},
	trapped: {
		name: 'trapped',
		noCopy: true,
		onTrapPokemon(pokemon) {
			pokemon.tryTrap();
		},
		onStart(target) {
			this.add('-activate', target, 'trapped');
		},
	},
	trapper: {
		name: 'trapper',
		noCopy: true,
	},
	partiallytrapped: {
		name: 'partiallytrapped',
		duration: 5,
		durationCallback(target, source) {
			if (source?.hasItem('gripclaw')) return 8;
			return this.random(5, 7);
		},
		onStart(pokemon, source) {
			this.add('-activate', pokemon, 'move: ' + this.effectState.sourceEffect, '[of] ' + source);
			this.effectState.boundDivisor = source.hasItem('bindingband') ? 6 : 8;
		},
		onResidualOrder: 13,
		onResidual(pokemon) {
			const source = this.effectState.source;
			// G-Max Centiferno and G-Max Sandblast continue even after the user leaves the field
			const gmaxEffect = ['gmaxcentiferno', 'gmaxsandblast'].includes(this.effectState.sourceEffect.id);
			if (source && (!source.isActive || source.hp <= 0 || !source.activeTurns) && !gmaxEffect) {
				delete pokemon.volatiles['partiallytrapped'];
				this.add('-end', pokemon, this.effectState.sourceEffect, '[partiallytrapped]', '[silent]');
				return;
			}
			this.damage(pokemon.baseMaxhp / this.effectState.boundDivisor);
		},
		onEnd(pokemon) {
			this.add('-end', pokemon, this.effectState.sourceEffect, '[partiallytrapped]');
		},
		onTrapPokemon(pokemon) {
			const gmaxEffect = ['gmaxcentiferno', 'gmaxsandblast'].includes(this.effectState.sourceEffect.id);
			if (this.effectState.source?.isActive || gmaxEffect) pokemon.tryTrap();
		},
	},
	lockedmove: {
		// Outrage, Thrash, Petal Dance...
		name: 'lockedmove',
		duration: 2,
		onResidual(target) {
			if (target.status === 'slp') {
				// don't lock, and bypass confusion for calming
				delete target.volatiles['lockedmove'];
			}
			this.effectState.trueDuration--;
		},
		onStart(target, source, effect) {
			this.effectState.trueDuration = this.random(2, 4);
			this.effectState.move = effect.id;
		},
		onRestart() {
			if (this.effectState.trueDuration >= 2) {
				this.effectState.duration = 2;
			}
		},
		onEnd(target) {
			if (this.effectState.trueDuration > 1) return;
			target.addVolatile('confusion');
		},
		onLockMove(pokemon) {
			if (pokemon.volatiles['dynamax']) return;
			return this.effectState.move;
		},
	},
	twoturnmove: {
		// Skull Bash, SolarBeam, Sky Drop...
		name: 'twoturnmove',
		duration: 2,
		onStart(attacker, defender, effect) {
			// ("attacker" is the Pokemon using the two turn move and the Pokemon this condition is being applied to)
			this.effectState.move = effect.id;
			attacker.addVolatile(effect.id);
			// lastMoveTargetLoc is the location of the originally targeted slot before any redirection
			// note that this is not updated for moves called by other moves
			// i.e. if Dig is called by Metronome, lastMoveTargetLoc will still be the user's location
			let moveTargetLoc: number = attacker.lastMoveTargetLoc!;
			if (effect.sourceEffect && this.dex.moves.get(effect.id).target === 'normal') {
				// this move was called by another move such as Metronome
				// and needs a random target to be determined this turn
				// it will already have one by now if there is any valid target
				// but if there isn't one we need to choose a random slot now
				if (defender.fainted) {
					defender = this.sample(attacker.foes(true));
				}
				moveTargetLoc = attacker.getLocOf(defender);
			}
			attacker.volatiles[effect.id].targetLoc = moveTargetLoc;
			this.attrLastMove('[still]');
			// Run side-effects normally associated with hitting (e.g., Protean, Libero)
			this.runEvent('PrepareHit', attacker, defender, effect);
		},
		onEnd(target) {
			target.removeVolatile(this.effectState.move);
		},
		onLockMove() {
			return this.effectState.move;
		},
		onMoveAborted(pokemon) {
			pokemon.removeVolatile('twoturnmove');
		},
	},
	choicelock: {
		name: 'choicelock',
		noCopy: true,
		onStart(pokemon) {
			if (!this.activeMove) throw new Error("Battle.activeMove is null");
			if (!this.activeMove.id || this.activeMove.hasBounced || this.activeMove.sourceEffect === 'snatch') return false;
			this.effectState.move = this.activeMove.id;
		},
		onBeforeMove(pokemon, target, move) {
			if (!pokemon.getItem().isChoice) {
				pokemon.removeVolatile('choicelock');
				return;
			}
			if (
				!pokemon.ignoringItem() && !pokemon.volatiles['dynamax'] &&
				move.id !== this.effectState.move && move.id !== 'struggle'
			) {
				// Fails unless the Choice item is being ignored, and no PP is lost
				this.addMove('move', pokemon, move.name);
				this.attrLastMove('[still]');
				this.debug("Disabled by Choice item lock");
				this.add('-fail', pokemon);
				return false;
			}
		},
		onDisableMove(pokemon) {
			if (!pokemon.getItem().isChoice || !pokemon.hasMove(this.effectState.move)) {
				pokemon.removeVolatile('choicelock');
				return;
			}
			if (pokemon.ignoringItem() || pokemon.volatiles['dynamax']) {
				return;
			}
			for (const moveSlot of pokemon.moveSlots) {
				if (moveSlot.id !== this.effectState.move) {
					pokemon.disableMove(moveSlot.id, false, this.effectState.sourceEffect);
				}
			}
		},
	},
	mustrecharge: {
		name: 'mustrecharge',
		duration: 2,
		durationCallback(source) {
			if (source?.hasAbility('boring')) return 3;
			return 2;
		},
		onBeforeMovePriority: 11,
		onBeforeMove(pokemon) {
			this.add('cant', pokemon, 'recharge');
			pokemon.removeVolatile('mustrecharge');
			pokemon.removeVolatile('truant');
			return null;
		},
		onStart(pokemon) {
			this.add('-mustrecharge', pokemon);
			if (pokemon.hasAbility('boring')) {
				for (const foe of pokemon.foes()) {
					this.boost({spe: -2}, foe);
				}
			}
		},
		onLockMove: 'recharge',
	},
	futuremove: {
		// this is a slot condition
		name: 'futuremove',
		duration: 3,
		onResidualOrder: 3,
		onEnd(target) {
			const data = this.effectState;
			// time's up; time to hit! :D
			const move = this.dex.moves.get(data.move);
			if (target.fainted || target === data.source) {
				this.hint(`${move.name} did not hit because the target is ${(target.fainted ? 'fainted' : 'the user')}.`);
				return;
			}

			this.add('-end', target, 'move: ' + move.name);
			target.removeVolatile('Protect');
			target.removeVolatile('Endure');

			if (data.source.hasAbility('infiltrator') && this.gen >= 6) {
				data.moveData.infiltrates = true;
			}
			if (data.source.hasAbility('normalize') && this.gen >= 6) {
				data.moveData.type = 'Normal';
			}
			if (data.source.hasAbility('adaptability') && this.gen >= 6) {
				data.moveData.stab = 2;
			}
			const hitMove = new this.dex.Move(data.moveData) as ActiveMove;

			this.actions.trySpreadMoveHit([target], data.source, hitMove, true);
			if (data.source.isActive && data.source.hasItem('lifeorb') && this.gen >= 5) {
				this.singleEvent('AfterMoveSecondarySelf', data.source.getItem(), data.source.itemState, data.source, target, data.source.getItem());
			}

			this.checkWin();
		},
	},
	healreplacement: {
		// this is a slot condition
		name: 'healreplacement',
		onStart(target, source, sourceEffect) {
			this.effectState.sourceEffect = sourceEffect;
			this.add('-activate', source, 'healreplacement');
		},
		onSwitchInPriority: 1,
		onSwitchIn(target) {
			if (!target.fainted) {
				target.heal(target.maxhp);
				this.add('-heal', target, target.getHealth, '[from] move: ' + this.effectState.sourceEffect, '[zeffect]');
				target.side.removeSlotCondition(target, 'healreplacement');
			}
		},
	},
	stall: {
		// Protect, Detect, Endure counter
		name: 'stall',
		duration: 2,
		counterMax: 729,
		onStart() {
			this.effectState.counter = 3;
		},
		onStallMove(pokemon) {
			// this.effectState.counter should never be undefined here.
			// However, just in case, use 1 if it is undefined.
			const counter = this.effectState.counter || 1;
			this.debug("Success chance: " + Math.round(100 / counter) + "%");
			const success = this.randomChance(1, counter);
			if (!success) delete pokemon.volatiles['stall'];
			return success;
		},
		onRestart() {
			if (this.effectState.counter < (this.effect as Condition).counterMax!) {
				this.effectState.counter *= 3;
			}
			this.effectState.duration = 2;
		},
	},
	gem: {
		name: 'gem',
		duration: 1,
		affectsFainted: true,
		onBasePowerPriority: 14,
		onBasePower(basePower, user, target, move) {
			this.debug('Gem Boost');
			return this.chainModify([5325, 4096]);
		},
	},

	// weather is implemented here since it's so important to the game

	raindance: {
		name: 'RainDance',
		effectType: 'Weather',
		duration: 5,
		durationCallback(source, effect) {
			if (source?.hasItem('damprock')) {
				return 8;
			}
			return 5;
		},
		onWeatherModifyDamage(damage, attacker, defender, move) {
			if (defender.hasItem('utilityumbrella')) return;
			if (move.type === 'Water') {
				this.debug('rain water boost');
				return this.chainModify(1.5);
			}
			if (move.type === 'Fire') {
				this.debug('rain fire suppress');
				return this.chainModify(0.5);
			}
		},
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				if (this.gen <= 5) this.effectState.duration = 0;
				this.add('-weather', 'RainDance', '[from] ability: ' + effect, '[of] ' + source);
			} else {
				this.add('-weather', 'RainDance');
			}
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'RainDance', '[upkeep]');
			this.eachEvent('Weather');
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},
	primordialsea: {
		name: 'PrimordialSea',
		effectType: 'Weather',
		duration: 0,
		onTryMovePriority: 1,
		onTryMove(attacker, defender, move) {
			if (move.type === 'Fire' && move.category !== 'Status') {
				this.debug('Primordial Sea fire suppress');
				this.add('-fail', attacker, move, '[from] Primordial Sea');
				this.attrLastMove('[still]');
				return null;
			}
		},
		onWeatherModifyDamage(damage, attacker, defender, move) {
			if (defender.hasItem('utilityumbrella')) return;
			if (move.type === 'Water') {
				this.debug('Rain water boost');
				return this.chainModify(1.5);
			}
		},
		onFieldStart(field, source, effect) {
			this.add('-weather', 'PrimordialSea', '[from] ability: ' + effect, '[of] ' + source);
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'PrimordialSea', '[upkeep]');
			this.eachEvent('Weather');
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},
	sunnyday: {
		name: 'SunnyDay',
		effectType: 'Weather',
		duration: 5,
		durationCallback(source, effect) {
			if (source?.hasItem('heatrock')) {
				return 8;
			}
			return 5;
		},
		onWeatherModifyDamage(damage, attacker, defender, move) {
			if (defender.hasItem('utilityumbrella')) return;
			if (move.type === 'Fire') {
				this.debug('Sunny Day fire boost');
				return this.chainModify(1.5);
			}
			if (move.type === 'Water') {
				this.debug('Sunny Day water suppress');
				return this.chainModify(0.5);
			}
		},
		onFieldStart(battle, source, effect) {
			if (effect?.effectType === 'Ability') {
				if (this.gen <= 5) this.effectState.duration = 0;
				this.add('-weather', 'SunnyDay', '[from] ability: ' + effect, '[of] ' + source);
			} else {
				this.add('-weather', 'SunnyDay');
			}
		},
		onImmunity(type, pokemon) {
			if (pokemon.hasItem('utilityumbrella')) return;
			if (type === 'frz') return false;
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'SunnyDay', '[upkeep]');
			this.eachEvent('Weather');
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},
	desolateland: {
		name: 'DesolateLand',
		effectType: 'Weather',
		duration: 0,
		onTryMovePriority: 1,
		onTryMove(attacker, defender, move) {
			if (move.type === 'Water' && move.category !== 'Status') {
				this.debug('Desolate Land water suppress');
				this.add('-fail', attacker, move, '[from] Desolate Land');
				this.attrLastMove('[still]');
				return null;
			}
		},
		onWeatherModifyDamage(damage, attacker, defender, move) {
			if (defender.hasItem('utilityumbrella')) return;
			if (move.type === 'Fire') {
				this.debug('Sunny Day fire boost');
				return this.chainModify(1.5);
			}
		},
		onFieldStart(field, source, effect) {
			this.add('-weather', 'DesolateLand', '[from] ability: ' + effect, '[of] ' + source);
		},
		onImmunity(type, pokemon) {
			if (pokemon.hasItem('utilityumbrella')) return;
			if (type === 'frz') return false;
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'DesolateLand', '[upkeep]');
			this.eachEvent('Weather');
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},
	sandstorm: {
		name: 'Sandstorm',
		effectType: 'Weather',
		duration: 5,
		durationCallback(source, effect) {
			if (source?.hasItem('smoothrock')) {
				return 8;
			}
			return 5;
		},
		// This should be applied directly to the stat before any of the other modifiers are chained
		// So we give it increased priority.
		onModifySpDPriority: 10,
		onModifySpD(spd, pokemon) {
			if (pokemon.hasType('Rock') && this.field.isWeather('sandstorm')) {
				return this.modify(spd, 1.5);
			}
		},
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				if (this.gen <= 5) this.effectState.duration = 0;
				this.add('-weather', 'Sandstorm', '[from] ability: ' + effect, '[of] ' + source);
			} else {
				this.add('-weather', 'Sandstorm');
			}
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'Sandstorm', '[upkeep]');
			if (this.field.isWeather('sandstorm')) this.eachEvent('Weather');
		},
		onWeather(target) {
			this.damage(target.baseMaxhp / 16);
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},
	hail: {
		name: 'Hail',
		effectType: 'Weather',
		duration: 5,
		durationCallback(source, effect) {
			if (source?.hasItem('icyrock')) {
				return 8;
			}
			return 5;
		},
		onFieldStart(field, source, effect) {
			if (effect?.effectType === 'Ability') {
				if (this.gen <= 5) this.effectState.duration = 0;
				this.add('-weather', 'Hail', '[from] ability: ' + effect, '[of] ' + source);
			} else {
				this.add('-weather', 'Hail');
			}
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'Hail', '[upkeep]');
			if (this.field.isWeather('hail')) this.eachEvent('Weather');
		},
		onWeather(target) {
			this.damage(target.baseMaxhp / 16);
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},
	deltastream: {
		name: 'DeltaStream',
		effectType: 'Weather',
		duration: 0,
		onEffectivenessPriority: -1,
		onEffectiveness(typeMod, target, type, move) {
			if (move && move.effectType === 'Move' && move.category !== 'Status' && type === 'Flying' && typeMod > 0) {
				this.add('-activate', '', 'deltastream');
				return 0;
			}
		},
		onFieldStart(field, source, effect) {
			this.add('-weather', 'DeltaStream', '[from] ability: ' + effect, '[of] ' + source);
		},
		onFieldResidualOrder: 1,
		onFieldResidual() {
			this.add('-weather', 'DeltaStream', '[upkeep]');
			this.eachEvent('Weather');
		},
		onFieldEnd() {
			this.add('-weather', 'none');
		},
	},

	dynamax: {
		name: 'Dynamax',
		noCopy: true,
		duration: 3,
		onStart(pokemon) {
			pokemon.removeVolatile('minimize');
			pokemon.removeVolatile('substitute');
			if (pokemon.volatiles['torment']) {
				delete pokemon.volatiles['torment'];
				this.add('-end', pokemon, 'Torment', '[silent]');
			}
			if (['cramorantgulping', 'cramorantgorging'].includes(pokemon.species.id) && !pokemon.transformed) {
				pokemon.formeChange('cramorant');
			}
			this.add('-start', pokemon, 'Dynamax');
			if (pokemon.gigantamax) this.add('-formechange', pokemon, pokemon.species.name + '-Gmax');
			if (pokemon.baseSpecies.name === 'Shedinja') return;

			// Changes based on dynamax level, 2 is max (at LVL 10)
			const ratio = 2; // TODO: Implement Dynamax levels

			pokemon.maxhp = Math.floor(pokemon.maxhp * ratio);
			pokemon.hp = Math.floor(pokemon.hp * ratio);
			this.add('-heal', pokemon, pokemon.getHealth, '[silent]');
		},
		onTryAddVolatile(status, pokemon) {
			if (status.id === 'flinch') return null;
		},
		onBeforeSwitchOutPriority: -1,
		onBeforeSwitchOut(pokemon) {
			pokemon.removeVolatile('dynamax');
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.id === 'behemothbash' || move.id === 'behemothblade' || move.id === 'dynamaxcannon') {
				return this.chainModify(2);
			}
		},
		onDragOutPriority: 2,
		onDragOut(pokemon) {
			this.add('-block', pokemon, 'Dynamax');
			return null;
		},
		onResidualPriority: -100,
		onEnd(pokemon) {
			this.add('-end', pokemon, 'Dynamax');
			if (pokemon.gigantamax) this.add('-formechange', pokemon, pokemon.species.name);
			if (pokemon.baseSpecies.name === 'Shedinja') return;
			pokemon.hp = pokemon.getUndynamaxedHP();
			pokemon.maxhp = pokemon.baseMaxhp;
			this.add('-heal', pokemon, pokemon.getHealth, '[silent]');
		},
	},

	// Arceus and Silvally's actual typing is implemented here.
	// Their true typing for all their formes is Normal, and it's only
	// Multitype and RKS System, respectively, that changes their type,
	// but their formes are specified to be their corresponding type
	// in the Pokedex, so that needs to be overridden.
	// This is mainly relevant for Hackmons Cup and Balanced Hackmons.
	arceus: {
		name: 'Arceus',
		onTypePriority: 1,
		onType(types, pokemon) {
			if (pokemon.transformed || pokemon.ability !== 'multitype' && this.gen >= 8) return types;
			let type: string | undefined = 'Normal';
			if (pokemon.ability === 'multitype') {
				type = pokemon.getItem().onPlate;
				if (!type) {
					type = 'Normal';
				}
			}
			return [type];
		},
	},
	silvally: {
		name: 'Silvally',
		onTypePriority: 1,
		onType(types, pokemon) {
			if (pokemon.transformed || pokemon.ability !== 'rkssystem' && this.gen >= 8) return types;
			let type: string | undefined = 'Normal';
			if (pokemon.ability === 'rkssystem') {
				type = pokemon.getItem().onMemory;
				if (!type) {
					type = 'Normal';
				}
			}
			return [type];
		},
	},
};
