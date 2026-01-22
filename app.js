'use strict';
const array = [
{ id: 1, name: 'Вася' },
{ id: 2, name: 'Петя' },
{ id: 1, name: 'Вася' },
];
console.log(array);
const set = new Set();
const arrayModified = array.map(function (elem) {
	  const id = elem.id;
	  var foundElement = array.find((elem) => elem.id == id);
	  set.add(foundElement);
});
const arrayUnique = Array.from(set);
console.log(arrayUnique);
