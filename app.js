'use strict';

class Character {

	constructor (race, title, language) {
		this.race = race;
		this.title = title;
		this.language = language;
	}

	talk() {
		return `${this.title} talks ${this.language}`;
	}
}

class Ork extends Character {

	constructor(race, title, language, weapon) {
		super(race, title, language);
    	this.weapon = weapon;
	}

	beats() {
		return `${this.title} beats`;
	}


	talk() {
		return `${this.title} roars ${this.language}`;
	}	
}

class Elf extends Character {

	constructor(race, title, language, spell) {
		super(race, title, language);
    	this.spell = spell;
	}

	spells() {
		return `${this.title} spells`;
	}	
	
	talk() {
		return `${this.title} sings ${this.language}`;
	}		
}

const char1 = new Ork('Ork', 'John', 'lang1', 'gun'); 
const char2 = new Elf('Elf', 'Maria', 'lang2', 'magic'); 
console.log(char1);
console.log(char2);
console.log(char1.talk());
console.log(char1.beats());
console.log(char2.spells());
console.log(char2.talk());
