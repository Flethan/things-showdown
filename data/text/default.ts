export const DefaultText: {[k: string]: DefaultText} = {
	default: {
		startBattle: "Battle started between [TRAINER] and [TRAINER]!",
		winBattle: "**[TRAINER]** won the battle!",
		tieBattle: "Tie between [TRAINER] and [TRAINER]!",

		pokemon: "[NICKNAME]",
		opposingPokemon: "the opposing [NICKNAME]",
		team: "your team",
		opposingTeam: "the opposing team",
		party: "your ally Pok\u00E9mon",
		opposingParty: "the opposing Pok\u00E9mon",

		turn: "== Turn [NUMBER] ==",
		switchIn: "[TRAINER] sent out [FULLNAME]!",
		switchInOwn: "Go! [FULLNAME]!",
		switchOut: "[TRAINER] withdrew [NICKNAME]!",
		switchOutOwn: "[NICKNAME], come back!",
		drag: "[FULLNAME] was dragged out!",
		faint: "[POKEMON] fainted!",
		swap: "[POKEMON] and [TARGET] switched places!",
		swapCenter: "[POKEMON] moved to the center!",

		// Multi Battles only
		canDynamax: "  [TRAINER] can dynamax now!",
		canDynamaxOwn: "  Dynamax Energy gathered around [TRAINER]!",

		zEffect: "  [POKEMON] unleashes its full-force Z-Move!",
		move: "[POKEMON] used **[MOVE]**!",
		abilityActivation: "[[POKEMON]'s [ABILITY]]",

		mega: "  [POKEMON]'s [ITEM] is reacting to the Key Stone!",
		megaNoItem: "  [POKEMON] is reacting to [TRAINER]'s Key Stone!",
		megaGen6: "  [POKEMON]'s [ITEM] is reacting to [TRAINER]'s Mega Bracelet!",
		transformMega: "[POKEMON] has Mega Evolved into Mega [SPECIES]!",
		primal: "[POKEMON]'s Primal Reversion! It reverted to its primal state!",
		zPower: "  [POKEMON] surrounded itself with its Z-Power!",
		zBroken: "  [POKEMON] couldn't fully protect itself and got hurt!",

		// in case the different default messages didn't make it obvious, the difference
		// is that the `cant` message REPLACES "Pokemon used Move!", while the `fail`
		// message happens AFTER "Pokemon used Move!"
		cant: "[POKEMON] can't use [MOVE]!",
		cantNoMove: "[POKEMON] can't move!",
		fail: "  But it failed!",

		// n.b. this is the default message for in-battle forme changes
		// for the move Transform and ability Imposter, see the entry for the move Transform
		transform: "[POKEMON] transformed!",
		typeChange: "  [POKEMON]'s type changed to [TYPE]!",
		typeChangeFromEffect: "  [POKEMON]'s [EFFECT] made it the [TYPE] type!",
		typeAdd: "  [TYPE] type was added to [POKEMON]!",

		start: "  ([EFFECT] started on [POKEMON]!)",
		end: "  [POKEMON] was freed from [EFFECT]!",
		activate: "  ([EFFECT] activated!)",
		startTeamEffect: "  ([EFFECT] started on [TEAM]!)",
		endTeamEffect: "  ([EFFECT] ended on [TEAM]!)",
		startFieldEffect: "  ([EFFECT] started!)",
		endFieldEffect: "  ([EFFECT] ended!)",

		changeAbility: "  [POKEMON] acquired [ABILITY]!",
		card: "  [POKEMON] drew a [CARD].",
		discardCard: "  [POKEMON] discarded its card.",
		addItem: "  [POKEMON] obtained one [ITEM].", // Trick, Switcheroo
		takeItem: "  [POKEMON] stole [SOURCE]'s [ITEM]!", // Thief, Covet, Magician, Pickpocket
		eatItem: "  ([POKEMON] ate its [ITEM]!)",
		useGem: "  The [ITEM] strengthened [POKEMON]'s power!",
		eatItemWeaken: "  The [ITEM] weakened damage to [POKEMON]!",
		removeItem: "  [POKEMON] lost its [ITEM]!",
		activateItem: "  ([POKEMON] used its [ITEM]!)",
		activateWeaken: "  The [ITEM] weakened the damage to [POKEMON]!",

		damage: "  ([POKEMON] was hurt!)",
		damagePercentage: "  ([POKEMON] lost [PERCENTAGE] of its health!)",
		damageFromPokemon: "  [POKEMON] was hurt by [SOURCE]'s [ITEM]!", // Jaboca/Rowap Berry
		damageFromItem: "  [POKEMON] was hurt by its [ITEM]!", // Sticky Barb
		damageFromPartialTrapping: "  [POKEMON] is hurt by [MOVE]!",
		heal: "  [POKEMON] had its HP restored.",
		healFromZEffect: "  [POKEMON] restored its HP using its Z-Power!",
		healFromEffect: "  [POKEMON] restored HP using its [EFFECT]!",

		boost: "  [POKEMON]'s [STAT] rose!",
		boost2: "  [POKEMON]'s [STAT] rose sharply!",
		boost3: "  [POKEMON]'s [STAT] rose drastically!",
		boost0: "  [POKEMON]'s [STAT] won't go any higher!",
		boostFromItem: "  The [ITEM] raised [POKEMON]'s [STAT]!",
		boost2FromItem: "  The [ITEM] sharply raised [POKEMON]'s [STAT]!",
		boost3FromItem: "  The [ITEM] drastically raised [POKEMON]'s [STAT]!",
		boostFromZEffect: "  [POKEMON] boosted its [STAT] using its Z-Power!",
		boost2FromZEffect: "  [POKEMON] boosted its [STAT] sharply using its Z-Power!",
		boost3FromZEffect: "  [POKEMON] boosted its [STAT] drastically using its Z-Power!",
		boostMultipleFromZEffect: "  [POKEMON] boosted its stats using its Z-Power!",

		unboost: "  [POKEMON]'s [STAT] fell!",
		unboost2: "  [POKEMON]'s [STAT] fell harshly!",
		unboost3: "  [POKEMON]'s [STAT] fell severely!",
		unboost0: "  [POKEMON]'s [STAT] won't go any lower!",
		unboostFromItem: "  The [ITEM] lowered [POKEMON]'s [STAT]!",
		unboost2FromItem: "  The [ITEM] harshly lowered [POKEMON]'s [STAT]!",
		unboost3FromItem: "  The [ITEM] drastically lowered [POKEMON]'s [STAT]!",

		swapBoost: "  [POKEMON] switched stat changes with its target!",
		swapOffensiveBoost: "  [POKEMON] switched all changes to its Attack and Sp. Atk with its target!",
		swapDefensiveBoost: "  [POKEMON] switched all changes to its Defense and Sp. Def with its target!",
		copyBoost: "  [POKEMON] copied [TARGET]'s stat changes!",
		clearBoost: "  [POKEMON]'s stat changes were removed!",
		clearBoostFromZEffect: "  [POKEMON] returned its decreased stats to normal using its Z-Power!",
		invertBoost: "  [POKEMON]'s stat changes were inverted!",
		clearAllBoost: "  All stat changes were eliminated!",

		superEffective: "  It's super effective!",
		superEffectiveSpread: "  It's super effective on [POKEMON]!",
		resisted: "  It's not very effective...",
		resistedSpread: "  It's not very effective on [POKEMON].",
		crit: "  A critical hit!",
		critSpread: "  A critical hit on [POKEMON]!",
		immune: "  It doesn't affect [POKEMON]...",
		immuneNoPokemon: "  It had no effect!", // old gens
		immuneOHKO: "  [POKEMON] is unaffected!",
		miss: "  [POKEMON] avoided the attack!",
		missNoPokemon: "  [SOURCE]'s attack missed!", // old gens

		center: "  Automatic center!",
		noTarget: "  But there was no target...", // gen 5 and earlier
		ohko: "  It's a one-hit KO!",
		combine: "  The two moves have become one! It's a combined move!",
		hitCount: "  The Pok\u00E9mon was hit [NUMBER] times!",
		hitCountSingular: "  The Pok\u00E9mon was hit 1 time!",
	},

	// THINGS
	// status
	prone: {
		start: "  [POKEMON] was knocked prone!",
		startFromItem: "  [POKEMON]'s [ITEM] knocked it over!",
		alreadyStarted: "  [POKEMON] is already knocked prone!",
		end: "  [POKEMON] got back up!",
		endFromItem: "  [POKEMON]'s [ITEM] helped it back up!",
		activate: "  [POKEMON] can't get back up!",
	},
	banished: {
		start: "  [POKEMON] was banished!",
		startFromItem: "  [POKEMON] was banished by the [ITEM]!",
		alreadyStarted: "  [POKEMON] is already banished!",
		end: "  [POKEMON] returned from its banishment!",
		endFromItem: "  [POKEMON]'s [ITEM] returned it from its banishment!",
		endFromMove: "  [POKEMON]'s [MOVE] opened a way back from its banishment!",
		damage: "  [POKEMON]'s existence is being torn away by its banishment!",
		heal: "  [POKEMON]'s banishment is causing it to heal!",
		cant: "[POKEMON] can't reach out from its banishment!",
	},
	blinded: {
		start: "  [POKEMON] was blinded!",
		startFromItem: "  [POKEMON] was blinded by the [ITEM]!",
		alreadyStarted: "  [POKEMON] is already blind!",
		end: "  [POKEMON]'s vision was restored!",
		endFromItem: "  [POKEMON]'s [ITEM] restored its vision!",
	},
	pressurized: {
		start: "  [POKEMON] was pressurized!",
		startFromItem: "  [POKEMON] was pressurized by the [ITEM]!",
		alreadyStarted: "  [POKEMON] is already under pressure!",
		end: "  [POKEMON]'s pressure returned to normal!",
		endFromItem: "  [POKEMON]'s [ITEM] returned its pressure to normal!",
	},
	pressurizer: {
		activate: "  The pressure is intense!",
	},
	fluctuant: {
		start: "  [POKEMON] became fluctuant!",
		startFromItem: "  [POKEMON] was made fluctuant by the [ITEM]!",
		alreadyStarted: "  [POKEMON] is already fluctuant!",
		end: "  [POKEMON] is no longer fluctuant!",
		endFromItem: "  [POKEMON]'s [ITEM] made it no longer fluctuant!",
		activate: "  [POKEMON]'s stats fluctuated!",
	},
	wounded: {
		start: "  [POKEMON] was wounded!",
		startFromItem: "  [POKEMON] was wounded by the [ITEM]!",
		alreadyStarted: "  [POKEMON] is already wounded!",
		end: "  [POKEMON]'s wounds closed up!",
		endFromItem: "  [POKEMON]'s [ITEM] closed its wounds!",
		damage: "  [POKEMON] strained its wounds too much!",
	},
	distanced: {
		start: "  [POKEMON] was distanced!",
		startFromItem: "  [POKEMON] was distanced by the [ITEM]!",
		alreadyStarted: "  [POKEMON] is already distanced!",
		end: "  [POKEMON]'s distance shortened!",
		endFromItem: "  [POKEMON]'s [ITEM] shortened its distance!",
		cant: "[POKEMON]'s distance is too great to reach!",
		heal: "[POKEMON] is at a comfortable distance",
	},
	infected: {
		start: "  [POKEMON] was infected!",
		startFromItem: "  [POKEMON] was infected by the [ITEM]!",
		alreadyStarted: "  [POKEMON] is already infected!",
		end: "  [POKEMON]'s infection cleared up!",
		endFromItem: "  [POKEMON]'s [ITEM] cleared its infected!",
		damage: "  [POKEMON] is suffering from its infection!",
	},

	// environment
	locustswarm: {
		weatherName: "Locust Swarm",
		start: "  A swarm of locusts descended!",
		end: "  The locusts dispersed.",
		upkeep: "  (The locusts continue to swarm.)",
		damage: "  [POKEMON] is fed on by the locusts!",
	},
	meteorshower: {
		weatherName: "Meteor Shower",
		start: "  Meteorites began to fall from the sky!",
		end: "  The meteors subsided.",
		upkeep: "  (Meteorites continue to fall.)",
		damage: "  [POKEMON] is struck by a meteorite!",
		heal: "  [POKEMON]'s HP was restored.",
	},
	underwater: {
		weatherName: "Underwater",
		start: "  The battlefield became flooded!",
		end: "  The water dissipated.",
		upkeep: "  (The battlefield remains flooded.)",
		damage: "  [POKEMON] is drowning!",
		heal: "  [POKEMON]'s HP was restored.",
	},
	nighttime: {
		weatherName: "Nighttime",
		start: "  Night fell!",
		end: "  Dawn broke.",
		upkeep: "  (The night is dark.)",
		heal: "  [POKEMON]'s HP was restored.",
	},
	hot: {
		weatherName: "Hot",
		start: "  The temperature started to increase!",
		end: "  The temperature returned to normal.",
		upkeep: "  (It is really hot.)",
		block: "  The heat remains regardless!",
	},
	cold: {
		weatherName: "Cold",
		start: "  The temperature started to decrease!",
		end: "  The temperature returned to normal.",
		upkeep: "  (It is really cold.)",
	},
	timedilation: {
		weatherName: "Time Dilation",
		start: "  Time began to distort!",
		end: "  Time returned to normal.",
		upkeep: "  (Time is distorted.)",
		block: "  The time remains regardless!",
	},
	windy: {
		weatherName: "Windy",
		start: "  Strong winds kicked up!",
		end: "  The winds subsided.",
		upkeep: "  (The wind is strong.)",
		block: "  The winds remains regardless!",
	},
	yellowish: {
		weatherName: "Yellowish",
		start: "  It got yellow!",
		end: "  It is no longer yellow.",
		upkeep: "  (It's yellow.)",
	},
	friendlyatmosphere: {
		weatherName: "Friendly Atmosphere",
		start: "  An air of camaraderie appeared!",
		end: "  Back to the battle.",
		upkeep: "  (Everyone's having a good time.)",
	},
	refractingquintessence: {
		weatherName: "Refracting Quintessence",
		start: "  Whoa",
		end: "  Ok.",
		upkeep: "  (Oh.)",
	},
	// landscape
	richsoil: {
		start: "  The soil became incredibly fertile!",
		end: "  The soil returned to normal.",
		upkeep: "  (The soil is full of nutrients.)",
		heal: "  [POKEMON]'s HP was restored.",
	},
	spatialexpansion: {
		start: "  The space on the battlefield grew!",
		end: "  The distances returned to normal.",
		upkeep: "  (The battlefield is expansive.)",
	},
	greenground: {
		start: "  The floor got green!",
		end: "  The floor is no longer green.",
		upkeep: "  (The floor is green.)",
	},
	sudscape: {
		start: "  Soapsuds flowed across the battlefield!",
		end: "  The soapsuds disappeared from the battlefield.",
		upkeep: "  (It's sudsy.)",
	},
	mysticalsong: {
		start: "  A song has started!",
		end: "  The song has ended.",
		upkeep: "  (The song continues.)",
	},
	nullland: {
		start: "  The battlefield became inverted!",
		end: "  The battlefield returned to normal.",
		upkeep: "  (Everything is inverted.)",
	},
	springfloor: {
		start: "  The battlefield became bouncy!",
		end: "  The battlefield is no longer bouncy.",
		upkeep: "  (The floor is bouncy.)",
	},
	invitingsurroundings: {
		start: "  It's time for a party!",
		end: "  The party has ended.",
		upkeep: "  (Everyone's still at the party.)",
	},
	// rooms
	hadalzone: {
		start: "  The battlefield's pressure grew intense!",
		end: "  The battlefield's pressure normalized.",
		upkeep: "  The battlefield's pressure is still intense!",
	},
	timeloop: {
		start: "  The battlefield was stuck in a time loop!",
		end: "  The time loop ended.",
		upkeep: "  The battlefield is still in a time loop!",
	},
	stickysituation: {
		start: "  The battlefield became sticky!",
		end: "  The stickiness cleared.",
		upkeep: "  The battlefield is still sticky!",
	},
	rankandfile: {
		start: "  The battlefield became ordered!",
		end: "  The order ended.",
		upkeep: "  The battlefield is still ordered!",
	},
	hurricanewatch: {
		start: "  A hurricane is brewing.",
		end: "  The hurricane subsided.",
		upkeep: "  The hurricane reached category [NUMBER]!",
	},
	// side conditions
	beamfield: {
		start: "  Yellow beams surround [TEAM]!",
		end: "  The yellow beams dispersed around [TEAM]!",
		damage: "  [POKEMON] was grazed by the yellow beams!",
	},

	// BASE GAME
	// stats
	hp: {
		statName: "HP",
		statShortName: "HP",
	},
	atk: {
		statName: "Attack",
		statShortName: "Atk",
	},
	def: {
		statName: "Defense",
		statShortName: "Def",
	},
	spa: {
		statName: "Sp. Atk",
		statShortName: "SpA",
	},
	spd: {
		statName: "Sp. Def",
		statShortName: "SpD",
	},
	spe: {
		statName: "Speed",
		statShortName: "Spe",
	},
	accuracy: {
		statName: "accuracy",
	},
	evasion: {
		statName: "evasiveness",
	},
	spc: {
		statName: "Special",
		statShortName: "Spc",
	},
	stats: {
		statName: "stats",
	},

	// statuses
	brn: {
		start: "  [POKEMON] was burned!",
		startFromItem: "  [POKEMON] was burned by the [ITEM]!",
		alreadyStarted: "  [POKEMON] is already burned!",
		end: "  [POKEMON]'s burn was healed!",
		endFromItem: "  [POKEMON]'s [ITEM] healed its burn!",
		damage: "  [POKEMON] was hurt by its burn!",
	},
	frz: {
		start: "  [POKEMON] was frozen solid!",
		alreadyStarted: "  [POKEMON] is already frozen solid!",
		end: "  [POKEMON] thawed out!",
		endFromItem: "  [POKEMON]'s [ITEM] defrosted it!",
		endFromMove: "  [POKEMON]'s [MOVE] melted the ice!",
		cant: "[POKEMON] is frozen solid!",
	},
	par: {
		start: "  [POKEMON] is paralyzed! It may be unable to move!",
		alreadyStarted: "  [POKEMON] is already paralyzed!",
		end: "  [POKEMON] was cured of paralysis!",
		endFromItem: "  [POKEMON]'s [ITEM] cured its paralysis!",
		cant: "[POKEMON] is paralyzed! It can't move!",
	},
	psn: {
		start: "  [POKEMON] was poisoned!",
		alreadyStarted: "  [POKEMON] is already poisoned!",
		end: "  [POKEMON] was cured of its poisoning!",
		endFromItem: "  [POKEMON]'s [ITEM] cured its poison!",
		damage: "  [POKEMON] was hurt by poison!",
	},
	tox: {
		start: "  [POKEMON] was badly poisoned!",
		startFromItem: "  [POKEMON] was badly poisoned by the [ITEM]!",
		end: "#psn",
		endFromItem: "#psn",
		alreadyStarted: "#psn",
		damage: "#psn",
	},
	slp: {
		start: "  [POKEMON] fell asleep!",
		startFromRest: "  [POKEMON] slept and became healthy!",
		alreadyStarted: "  [POKEMON] is already asleep!",
		end: "  [POKEMON] woke up!",
		endFromItem: "  [POKEMON]'s [ITEM] woke it up!",
		cant: "[POKEMON] is fast asleep.",
	},

	// misc effects
	confusion: {
		start: "  [POKEMON] became confused!",
		startFromFatigue: "  [POKEMON] became confused due to fatigue!",
		end: "  [POKEMON] snapped out of its confusion!",
		endFromItem: "  [POKEMON]'s [ITEM] snapped it out of its confusion!",
		alreadyStarted: "  [POKEMON] is already confused!",
		activate: "  [POKEMON] is confused!",
		damage: "It hurt itself in its confusion!",
	},
	drain: {
		heal: "  [SOURCE] had its energy drained!",
	},
	flinch: {
		cant: "[POKEMON] flinched and couldn't move!",
	},
	heal: {
		fail: "  [POKEMON]'s HP is full!",
	},
	healreplacement: {
		activate: "  [POKEMON] will restore its replacement's HP using its Z-Power!",
	},
	nopp: {
		cant: "[POKEMON] used [MOVE]!\n  But there was no PP left for the move!",
	},
	recharge: {
		cant: "[POKEMON] must recharge!",
	},
	recoil: {
		damage: "  [POKEMON] was damaged by the recoil!",
	},
	unboost: {
		fail: "  [POKEMON]'s stats were not lowered!",
		failSingular: "  [POKEMON]'s [STAT] was not lowered!",
	},
	struggle: {
		activate: "  [POKEMON] has no moves left!",
	},
	trapped: {
		start: "  [POKEMON] can no longer escape!",
	},
	dynamax: {
		start: "  ([POKEMON]'s Dynamax!)",
		end: "  ([POKEMON] returned to normal!)",
		block: "  The move was blocked by the power of Dynamax!",
		fail: "  [POKEMON] shook its head. It seems like it can't use this move...",
	},

	// weather
	sandstorm: {
		weatherName: "Sandstorm",
		start: "  A sandstorm kicked up!",
		end: "  The sandstorm subsided.",
		upkeep: "  (The sandstorm is raging.)",
		damage: "  [POKEMON] is buffeted by the sandstorm!",
	},
	sunnyday: {
		weatherName: "Sun",
		start: "  The sunlight turned harsh!",
		end: "  The harsh sunlight faded.",
		upkeep: "  (The sunlight is strong.)",
	},
	raindance: {
		weatherName: "Rain",
		start: "  It started to rain!",
		end: "  The rain stopped.",
		upkeep: "  (Rain continues to fall.)",
	},
	hail: {
		weatherName: "Hail",
		start: "  It started to hail!",
		end: "  The hail stopped.",
		upkeep: "  (The hail is crashing down.)",
		damage: "  [POKEMON] is buffeted by the hail!",
	},
	desolateland: {
		weatherName: "Intense Sun",
		start: "  The sunlight turned extremely harsh!",
		end: "  The extremely harsh sunlight faded.",
		block: "  The extremely harsh sunlight was not lessened at all!",
		blockMove: "  The Water-type attack evaporated in the harsh sunlight!",
	},
	primordialsea: {
		weatherName: "Heavy Rain",
		start: "  A heavy rain began to fall!",
		end: "  The heavy rain has lifted!",
		block: "  There is no relief from this heavy rain!",
		blockMove: "  The Fire-type attack fizzled out in the heavy rain!",
	},
	deltastream: {
		weatherName: "Strong Winds",
		start: "  Mysterious strong winds are protecting Flying-type Pok\u00E9mon!",
		end: "  The mysterious strong winds have dissipated!",
		activate: "  The mysterious strong winds weakened the attack!",
		block: "  The mysterious strong winds blow on regardless!",
	},

	// terrain
	electricterrain: {
		start: "  An electric current ran across the battlefield!",
		end: "  The electricity disappeared from the battlefield.",
		block: "  [POKEMON] is protected by the Electric Terrain!",
	},
	grassyterrain: {
		start: "  Grass grew to cover the battlefield!",
		end: "  The grass disappeared from the battlefield.",
		heal: "  [POKEMON]'s HP was restored.",
	},
	mistyterrain: {
		start: "  Mist swirled around the battlefield!",
		end: "  The mist disappeared from the battlefield.",
		block: "  [POKEMON] surrounds itself with a protective mist!",
	},
	psychicterrain: {
		start: "  The battlefield got weird!",
		end: "  The weirdness disappeared from the battlefield!",
		block: "  [POKEMON] is protected by the Psychic Terrain!",
	},

	// field effects
	gravity: {
		start: "  Gravity intensified!",
		end: "  Gravity returned to normal!",
		cant: "[POKEMON] can't use [MOVE] because of gravity!",
		activate: "[POKEMON] fell from the sky due to the gravity!",
	},
	magicroom: {
		start: "  It created a bizarre area in which Pok\u00E9mon's held items lose their effects!",
		end: "  Magic Room wore off, and held items' effects returned to normal!",
	},
	mudsport: {
		start: "  Electricity's power was weakened!",
		end: "  The effects of Mud Sport have faded.",
	},
	trickroom: {
		start: "  [POKEMON] twisted the dimensions!",
		end: "  The twisted dimensions returned to normal!",
	},
	watersport: {
		start: "  Fire's power was weakened!",
		end: "  The effects of Water Sport have faded.",
	},
	wonderroom: {
		start: "  It created a bizarre area in which Defense and Sp. Def stats are swapped!",
		end: "  Wonder Room wore off, and Defense and Sp. Def stats returned to normal!",
	},

	// misc
	crash: {
		damage: "  [POKEMON] kept going and crashed!",
	},
};
