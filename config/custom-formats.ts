// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
//Things
	///////////////////////////////////////////////////////////////////
	
	{
		section: "Things",
	},
	{
		name: "[Things] Singles",

		mod: 'gen8',
		ruleset: ['Obtainable Abilities', 'Obtainable Formes', 'Obtainable Misc', 'Things Only', 'One Infinity Only', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', 'Team Preview', 'No Nickname Clause',  'Dynamax Clause'],
	},
	{
		name: "[Things] Doubles",

		gameType: 'doubles',
		mod: 'gen8',
		ruleset: ['Obtainable Abilities', 'Obtainable Formes', 'Obtainable Misc', 'Things Only', 'One Infinity Only', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', 'Team Preview', 'No Nickname Clause',  'Dynamax Clause'],
	},
	{
		name: "[Things] Triples",

		gameType: 'triples',
		mod: 'gen8',
		ruleset: ['Obtainable Abilities', 'Obtainable Formes', 'Obtainable Misc', 'Things Only', 'One Infinity Only', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause', 'Team Preview', 'No Nickname Clause',  'Dynamax Clause'],
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
];