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
	const msInSecond = 1000;
	const msInMinute = msInSecond * 60;
	const msInHour = msInMinute * 60;
	const msInDay = msInHour * 24;
	const msInMonth = msInDay * 30; 
	const months = Math.floor(diff / msInMonth);
	let remainder = diff % msInMonth;
	const days = Math.floor(remainder / msInDay);
	remainder = remainder % msInDay;
	const hours = Math.floor(remainder / msInHour);
	remainder = remainder % msInHour;
	const minutes = Math.floor(remainder / msInMinute);
	remainder = remainder % msInMinute;
	const seconds = Math.floor(remainder / msInSecond);			
	const resultString = `${Math.floor(months)} месяцев, ${Math.floor(days)} дней,  ${Math.floor(hours)} часов,  ${Math.floor(minutes)} минут,  ${Math.floor(seconds)} секунд`;
	document.getElementById('timer').innerHTML=resultString;
}, 1000);