const { DiceRoll } = require('@dice-roller/rpg-dice-roller');

const initialDiceRoll = new DiceRoll('{d20,d6}');
console.log('Original DiceRoll output:', initialDiceRoll.output);

const json = initialDiceRoll.export();
console.log('Exported JSON:', json);

const diceRoll = DiceRoll.import(json); // TypeError: value must be one of ResultGroup, RollResults, string, or number
console.log('Imported DiceRoll output:', diceRoll.output);
