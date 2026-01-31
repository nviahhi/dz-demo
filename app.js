'use strict';

let now = new Date();
const newYear = new Date(now);
newYear.setDate(1)
newYear.setMonth(0);
newYear.setFullYear(now.getFullYear() + 1);
newYear.setHours(0);
newYear.setMinutes(0);
newYear.setSeconds(0);

setInterval(function() { 
	now = new Date();
	const diff = newYear - now;
	const monthes = new Intl.DateTimeFormat("ru-RU", {month: "numeric"}).format(diff);
	const days = new Intl.DateTimeFormat("ru-RU", {day: "numeric"}).format(diff);	
	const hours = new Intl.DateTimeFormat("ru-RU", {hour: "numeric"}).format(diff);	
	const minutes = new Intl.DateTimeFormat("ru-RU", {minute: "numeric"}).format(diff);	
	const seconds = new Intl.DateTimeFormat("ru-RU", {second: "numeric"}).format(diff);				
	const resultString = `${monthes - 1} месяцев, ${days} дней,  ${hours} часов,  ${minutes} минут,  ${seconds} секунд`;
	document.getElementById('timer').innerHTML=resultString;
}, 1000);