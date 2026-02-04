'use strict';



// Создайте функцию-конструктор
function Character (race, title, language) {
    this.race = race;
	this.title = title;
	this.language = language;
}

Character.talk = function () {
	return `${this.title} talks ${this.language}`;
}

function Ork (race, title, language, weapon) {
	this.__proto__ = Character;
    this.weapon = weapon;
    this.race = race;
	this.title = title;
	this.language = language;	

	this.beats = function () {
		return `${this.title} beats`;
	}
}

function Elf (race, title, language, spell) {
	this.__proto__ = Character;
	this.spell = spell;
    this.race = race;
	this.title = title;
	this.language = language;	
	this.spells = function () {
		return `${this.title} spells`;
	}		
}

const char1 = new Ork('Ork', 'John', 'lang1', 'gun'); 
const char2 = new Elf('Elf', 'Maria', 'lang2', 'magic'); 
console.log(char1);
console.log(char2);
console.log(char1.talk());
console.log(char1.beats());
console.log(char2.spells());







