// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
// Things

	{
		section: "Strategic Things",
		column: 2,
	},
	{
		name: "[Things] Random Strategic Singles",
		desc: `Randomized teams of level-balanced Things`,

		mod: 'gen8',
		team: 'randomGThing',
		ruleset: ['Obtainable Abilities', 'Obtainable Formes', 'Obtainable Misc', 'Things Only', 'One Infinity Only', 'One Patron Only', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', 'No Nickname Clause', 'Dynamax Clause'],
	},
	{
		section: "Visible Things",
		column: 2,
	},
	{
		name: "[Things] Random Visible Singles",
		desc: `Randomized teams of level-balanced Things`,

		mod: 'gen8',
		team: 'randomThing',
		ruleset: ['Obtainable Abilities', 'Obtainable Formes', 'Obtainable Misc', 'Things Only', 'Visible Only', 'One Infinity Only', 'One Patron Only', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', 'No Nickname Clause', 'Dynamax Clause'],
	},
	{
		name: "[Things] Random Visible Doubles",
		desc: `Randomized teams of level-balanced Things`,

		gameType: 'doubles',
		mod: 'gen8',
		team: 'randomThing',
		ruleset: ['Obtainable Abilities', 'Obtainable Formes', 'Obtainable Misc', 'Things Only', 'Visible Only', 'One Infinity Only', 'One Patron Only', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', 'No Nickname Clause', 'Dynamax Clause'],
	},
	{
		name: "[Things] Random Visible Triples",
		desc: `Randomized teams of level-balanced Things`,

		gameType: 'triples',
		mod: 'gen8',
		team: 'randomThing',
		ruleset: ['Obtainable Abilities', 'Obtainable Formes', 'Obtainable Misc', 'Things Only', 'Visible Only', 'One Infinity Only', 'One Patron Only', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', 'No Nickname Clause', 'Dynamax Clause'],
	},
	{
		name: "[Things] Visible Free-For-All Random Battle",

		mod: 'gen8',
		team: 'randomThing',
		gameType: 'freeforall',
		tournamentShow: false,
		rated: false,
		ruleset: ['Things Only', 'One Patron Only', 'Species Clause', 'Visible Only', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Dynamax Clause'],
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
			'Things Only', 'One Patron Only', 'Species Clause', 'Visible Only', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Dynamax Clause',
		],
	},


	{
		section: "Things",
		column: 1,
	},
	{
		name: "[Things] Singles",

		mod: 'gen8',
		ruleset: ['Obtainable Abilities', 'Obtainable Formes', 'Obtainable Misc', 'Things Only', 'One Infinity Only', 'One Patron Only', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', 'Team Preview', 'Dynamax Clause'],
	},
	{
		name: "[Things] Doubles",

		gameType: 'doubles',
		mod: 'gen8',
		ruleset: ['Obtainable Abilities', 'Obtainable Formes', 'Obtainable Misc', 'Things Only', 'One Infinity Only', 'One Patron Only', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', 'Team Preview', 'Dynamax Clause'],
	},
	{
		name: "[Things] Triples",

		gameType: 'triples',
		mod: 'gen8',
		ruleset: ['Obtainable Abilities', 'Obtainable Formes', 'Obtainable Misc', 'Things Only', 'One Infinity Only', 'One Patron Only', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', 'Team Preview', 'Dynamax Clause'],
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
		ruleset: ['Things Only', 'One Patron Only', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Dynamax Clause'],
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
			'Things Only', 'One Patron Only', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Dynamax Clause',
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
		ruleset: ['Things Only', 'One Patron Only', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Dynamax Clause'],
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
			'Things Only', 'One Patron Only', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Dynamax Clause',
		],
	},
	{
		name: "[Things] Monotype Free-For-All Random Battle",

		mod: 'gen8',
		team: 'randomThing',
		gameType: 'freeforall',
		tournamentShow: false,
		rated: false,
		ruleset: ['Things Only', 'One Patron Only', 'Same Type Clause', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Dynamax Clause'],
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
			'Things Only', 'One Patron Only', 'Same Type Clause', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Dynamax Clause',
		],
	},
	{
		section: "Hackthings",
		column: 2,
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
];

