'use strict';

function dice(diceType) {
	const number = diceType.substring(1,3); 
	const result =  Math.floor(Math.random() * Number(number) + 1);
	return result;
}

console.log(dice('d20'));