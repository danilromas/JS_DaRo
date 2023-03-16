"use strict";

let res = 1;

if (true) {
	let res = 2;
	console.log(res); // выведет 2
}

console.log(res); // выведет 1


let age = 17;
let adult;

if (age >= 18) {
	let adult = true;
} else {
	let adult = false;
}

console.log(adult);