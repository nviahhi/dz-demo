'use strict';


const userBirthday1 = '2024-01-01';
const userBirthday2 = '2000-01-01';

function checkAge(birthday) {
	const compareDate  = new Date(birthday);
	const now  = new Date();
	compareDate.setFullYear(compareDate.getFullYear() + 14);
	if (now <= compareDate.getTime()) {
		return false;
	}
	else return true;
}
console.log(checkAge(userBirthday1));
console.log(checkAge(userBirthday2));