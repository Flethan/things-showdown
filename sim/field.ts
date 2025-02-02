/**
 * Simulator Field
 * Pokemon Showdown - http://pokemonshowdown.com/
 *
 * @license MIT
 */

import {State} from './state';
import {EffectState} from './pokemon';
import {toID} from './dex';


enum SONG_FLAGS {
	NONE			= 0,
	NO_PRIORITY		= 1 << 0,
	NO_PRONE		= 1 << 1,
	NO_BANISHED		= 1 << 2,
	NO_BLINDED		= 1 << 3,
	NO_PRESSURIZED	= 1 << 4,
	NO_FLUCTUANT	= 1 << 5,
	NO_WOUNDED		= 1 << 6,
	NO_DISTANCED	= 1 << 7,
	NO_INFECTED		= 1 << 8,
	HEAL			= 1 << 9,
	HURT			= 1 << 10,
	ATK_UP			= 1 << 11,
	ATK_DOWN		= 1 << 12,
	DEF_UP			= 1 << 13,
	DEF_DOWN		= 1 << 14,
	SPA_UP			= 1 << 15,
	SPA_DOWN		= 1 << 16,
	SPD_UP			= 1 << 17,
	SPD_DOWN		= 1 << 18,
	SPE_UP			= 1 << 19,
	SPE_DOWN		= 1 << 20,
	ATK_BOOST		= 1 << 21,
	ATK_UNBOOST		= 1 << 22,
	DEF_BOOST		= 1 << 23,
	DEF_UNBOOST		= 1 << 24,
	SPA_BOOST		= 1 << 25,
	SPA_UNBOOST		= 1 << 26,
	SPD_BOOST		= 1 << 27,
	SPD_UNBOOST		= 1 << 28,
	SPE_BOOST		= 1 << 29,
	SPE_UNBOOST		= 1 << 30,
}
export class Field {
	readonly battle: Battle;
	readonly id: ID;

	weather: ID;
	weatherState: EffectState;
	terrain: ID;
	terrainState: EffectState;
	pseudoWeather: {[id: string]: EffectState};
	static SONG_FLAGS = SONG_FLAGS;
	songFlags: SONG_FLAGS;
	cards: {
		deck: number[],
		discard: number[],
		mat: number[],
	};

	constructor(battle: Battle) {
		this.battle = battle;
		const fieldScripts = this.battle.format.field || this.battle.dex.data.Scripts.field;
		if (fieldScripts) Object.assign(this, fieldScripts);
		this.id = '';

		this.weather = '';
		this.weatherState = {id: ''};
		this.terrain = '';
		this.terrainState = {id: ''};
		this.pseudoWeather = {};
		this.songFlags = Field.SONG_FLAGS.NONE;
		this.cards = {
			deck: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
			discard: [],
			mat: [],
		};
		// this.shuffleCards();
	}

	toJSON(): AnyObject {
		return State.serializeField(this);
	}

	setWeather(status: string | Condition, source: Pokemon | 'debug' | null = null, sourceEffect: Effect | null = null, permanent: boolean | null = null, overrides: boolean | null = null) {
		status = this.battle.dex.conditions.get(status);
		if (!sourceEffect && this.battle.effect) sourceEffect = this.battle.effect;
		if (!source && this.battle.event && this.battle.event.target) source = this.battle.event.target;
		if (source === 'debug') source = this.battle.sides[0].active[0];

		if (this.weather === status.id) {
			if (sourceEffect && sourceEffect.effectType === 'Ability') {
				if (this.battle.gen > 5 || this.weatherState.duration === 0) {
					return false;
				}
			} else if (this.battle.gen > 2 || status.id === 'sandstorm') {
				return false;
			}
		}
		// new: check if weather is "permanent" - can't be overridden by regular weather setting, only by other "permanent" or "overrides" effects
		if (this.weatherState.permanent && !(permanent || overrides)) return false;
		if (source) {
			const result = this.battle.runEvent('SetWeather', source, source, status);
			if (!result) {
				if (result === false) {
					if ((sourceEffect as Move)?.weather) {
						this.battle.add('-fail', source, sourceEffect, '[from] ' + this.weather);
					} else if (sourceEffect && sourceEffect.effectType === 'Ability') {
						this.battle.add('-ability', source, sourceEffect, '[from] ' + this.weather, '[fail]');
					}
				}
				return null;
			}
		}
		const prevWeather = this.weather;
		const prevWeatherState = this.weatherState;
		this.weather = status.id;
		this.weatherState = {id: status.id, permanent: permanent};
		if (source) {
			this.weatherState.source = source;
			this.weatherState.sourceSlot = source.getSlot();
		}
		if (status.duration) {
			this.weatherState.duration = status.duration;
		}
		if (status.durationCallback) {
			if (!source) throw new Error(`setting weather without a source`);
			this.weatherState.duration = status.durationCallback.call(this.battle, source, source, sourceEffect);
		}
		if (!this.battle.singleEvent('FieldStart', status, this.weatherState, this, source, sourceEffect)) {
			this.weather = prevWeather;
			this.weatherState = prevWeatherState;
			return false;
		}
		this.battle.runEvent('WeatherStart', source, source, status);
		return true;
	}

	clearWeather(overrides: boolean | null = null) {
		if (!this.weather) return false;

		// THINGS - respite check
		for (const pokemon of this.battle.getAllActive()) {
			if (pokemon.hasAbility('respite')) return false;
		}
		// "STRONG WEATHER" check
		if (this.weatherState.permanent && !overrides) {
			return false;
		}

		const prevWeather = this.getWeather();
		this.battle.singleEvent('FieldEnd', prevWeather, this.weatherState, this);
		this.weather = '';
		this.weatherState = {id: ''};
		return true;
	}

	effectiveWeather() {
		if (this.suppressingWeather()) return '';
		return this.weather;
	}

	suppressingWeather() {
		for (const side of this.battle.sides) {
			for (const pokemon of side.active) {
				if (pokemon && !pokemon.fainted && !pokemon.ignoringAbility() && pokemon.getAbility().suppressWeather) {
					return true;
				}
			}
		}
		return false;
	}

	isWeather(weather: string | string[]) {
		const ourWeather = this.effectiveWeather();
		if (!Array.isArray(weather)) {
			return ourWeather === toID(weather);
		}
		return weather.map(toID).includes(ourWeather);
	}

	getWeather() {
		return this.battle.dex.conditions.getByID(this.weather);
	}

	setTerrain(status: string | Effect, source: Pokemon | 'debug' | null = null, sourceEffect: Effect | null = null, permanent: boolean | null = null, overrides: boolean | null = null) {
		status = this.battle.dex.conditions.get(status);
		if (!sourceEffect && this.battle.effect) sourceEffect = this.battle.effect;
		if (!source && this.battle.event && this.battle.event.target) source = this.battle.event.target;
		if (source === 'debug') source = this.battle.sides[0].active[0];
		if (!source) throw new Error(`setting terrain without a source`);

		if (this.terrain === status.id) return false;
		const prevTerrain = this.terrain;
		const prevTerrainState = this.terrainState;
		// THINGS - respite check
		for (const pokemon of this.battle.getAllActive()) {
			if (pokemon.hasAbility('respite')) return false;
		}
		// new: check if terrain is "permanent" - can't be overridden by regular terrain setting, only by other "permanent" or "overrides" effects
		if (prevTerrainState.permanent && !(permanent || overrides)) return false;
		this.terrain = status.id;
		this.terrainState = {
			id: status.id,
			source,
			sourceSlot: source.getSlot(),
			duration: status.duration,
			permanent: permanent,
		};
		if (status.durationCallback) {
			this.terrainState.duration = status.durationCallback.call(this.battle, source, source, sourceEffect);
		}
		if (!this.battle.singleEvent('FieldStart', status, this.terrainState, this, source, sourceEffect)) {
			this.terrain = prevTerrain;
			this.terrainState = prevTerrainState;
			return false;
		}
		this.battle.runEvent('TerrainStart', source, source, status);
		return true;
	}

	clearTerrain() {
		if (!this.terrain) return false;

		// THINGS - respite check
		for (const pokemon of this.battle.getAllActive()) {
			if (pokemon.hasAbility('respite')) return false;
		}

		const prevTerrain = this.getTerrain();
		this.battle.singleEvent('FieldEnd', prevTerrain, this.terrainState, this);
		this.terrain = '';
		this.terrainState = {id: ''};
		return true;
	}

	effectiveTerrain(target?: Pokemon | Side | Battle) {
		if (this.battle.event && !target) target = this.battle.event.target;
		return this.battle.runEvent('TryTerrain', target) ? this.terrain : '';
	}

	isTerrain(terrain: string | string[], target?: Pokemon | Side | Battle) {
		const ourTerrain = this.effectiveTerrain(target);
		if (!Array.isArray(terrain)) {
			return ourTerrain === toID(terrain);
		}
		return terrain.map(toID).includes(ourTerrain);
	}

	getTerrain() {
		return this.battle.dex.conditions.getByID(this.terrain);
	}

	addPseudoWeather(
		status: string | Condition,
		source: Pokemon | 'debug' | null = null,
		sourceEffect: Effect | null = null
	): boolean {
		if (!source && this.battle.event && this.battle.event.target) source = this.battle.event.target;
		if (source === 'debug') source = this.battle.sides[0].active[0];
		status = this.battle.dex.conditions.get(status);

		// THINGS - respite check
		if (this.battle.started) {
			let respite = false;
			this.battle.getAllActive().forEach(p => { if (p.hasAbility('respite')) respite = true; });
			if (respite) return false;
		}

		let state = this.pseudoWeather[status.id];
		if (state) {
			if (!(status as any).onFieldRestart) return false;
			return this.battle.singleEvent('FieldRestart', status, state, this, source, sourceEffect);
		}
		state = this.pseudoWeather[status.id] = {
			id: status.id,
			source,
			sourceSlot: source?.getSlot(),
			duration: status.duration,
		};
		if (status.durationCallback) {
			if (!source) throw new Error(`setting fieldcond without a source`);
			state.duration = status.durationCallback.call(this.battle, source, source, sourceEffect);
		}
		if (!this.battle.singleEvent('FieldStart', status, state, this, source, sourceEffect)) {
			delete this.pseudoWeather[status.id];
			return false;
		}
		return true;
	}

	getPseudoWeather(status: string | Effect) {
		status = this.battle.dex.conditions.get(status);
		return this.pseudoWeather[status.id] ? status : null;
	}

	removePseudoWeather(status: string | Effect) {
		status = this.battle.dex.conditions.get(status);
		const state = this.pseudoWeather[status.id];
		if (!state) return false;
		this.battle.singleEvent('FieldEnd', status, state, this);
		delete this.pseudoWeather[status.id];
		return true;
	}

	// Set the current field's song flags, deleting old ones.
	setSongFlags(songFlags: SongFlagString | SongFlagString[]) {
		if (!Array.isArray(songFlags)) songFlags = [songFlags];
		let newFlags = Field.SONG_FLAGS.NONE;
		songFlags.forEach(v => (newFlags |= Field.SONG_FLAGS[v]));
		this.songFlags = newFlags;
	}

	// Add one or more song flags, keeping old ones. Each call also triggers Landscape Blessing.
	addSongFlags(songFlags: SongFlagString | SongFlagString[]) {
		if (!Array.isArray(songFlags)) songFlags = [songFlags];
		songFlags.forEach(v => (this.songFlags |= Field.SONG_FLAGS[v]));
		this.addRandomSongFlags(0);
	}

	// Add one or more random song flags. Each call also triggers Landscape Blessing
	addRandomSongFlags(number: number) {
		if (this.battle.blessedLand) number++;
		const flagKeys: SongFlagString[] = ['NO_PRIORITY', 'NO_PRONE', 'NO_BANISHED', 'NO_BLINDED', 'NO_PRESSURIZED', 'NO_FLUCTUANT', 'NO_WOUNDED', 'NO_DISTANCED', 'NO_INFECTED',
			'HEAL', 'HURT', 'ATK_UP', 'ATK_DOWN', 'DEF_UP', 'DEF_DOWN', 'SPA_UP', 'SPA_DOWN', 'SPD_UP', 'SPD_DOWN', 'SPE_UP', 'SPE_DOWN', 'ATK_BOOST', 'ATK_UNBOOST', 'DEF_BOOST', 'DEF_UNBOOST', 'SPA_BOOST', 'SPA_UNBOOST', 'SPD_BOOST', 'SPD_UNBOOST', 'SPE_BOOST', 'SPE_UNBOOST'];
		let availableFlags = flagKeys.filter(v => !this.hasSongFlags(v));
		while (number && availableFlags.length) {
			const flag = this.battle.sample(availableFlags);
			availableFlags = availableFlags.filter(v => v !== flag);
			this.songFlags |= 1 << Field.SONG_FLAGS[flag];
			number--;
		}
	}

	// Remove one or more song flags, keeping the rest.
	removeSongFlags(songFlags: SongFlagString | SongFlagString[]) {
		if (!Array.isArray(songFlags)) songFlags = [songFlags];
		songFlags.forEach(v => (this.songFlags &= ~Field.SONG_FLAGS[v]));
	}

	// Checks if the field has ALL the queried song flags.
	hasSongFlags(songFlags: SongFlagString | SongFlagString[]) {
		if (!Array.isArray(songFlags)) songFlags = [songFlags];
		let queriedFlags = Field.SONG_FLAGS.NONE;
		songFlags.forEach(v => (queriedFlags |= Field.SONG_FLAGS[v]));
		return !!(this.songFlags & queriedFlags);
	}

	drawCard() {
		if (!this.cards.deck.length) this.shuffleCards(true);
		return this.cards.deck.shift() as number;
	}

	discardCard(card: number) {
		this.cards.discard.unshift(card);
	}

	shuffleCards(includeDiscard?: boolean, includeMat?: boolean) {
		if (includeDiscard) {
			this.cards.deck.push(...this.cards.discard);
			this.cards.discard = [];
		}
		if (includeMat) {
			this.cards.deck.push(...this.cards.mat);
			this.cards.mat = [];
		}
		for (let i = this.cards.deck.length - 1; i > 0; i--) {
			const j = Math.floor(this.battle.random() * (i + 1));
			const temp = this.cards.deck[i];
			this.cards.deck[i] = this.cards.deck[j];
			this.cards.deck[j] = temp;
		}
	}

	resetCards() {
		this.battle.getAllPokemon().forEach(p => p.discardCard());
		this.cards = {
			deck: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
			discard: [],
			mat: [],
		};
		this.shuffleCards();
	}

	destroy() {
		// deallocate ourself

		// get rid of some possibly-circular references
		(this as any).battle = null!;
	}
}
