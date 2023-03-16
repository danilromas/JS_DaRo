"use strict";
function func() {
	let sum = 0;
	
	for (let i = 1; i <= 5; i++) {
		sum += i;
	}
	
	return sum;
}

let res = func();
console.log(res);
function func() {
	let sum = 0;
	
	for (let i = 1; i <= 5; i++) {
		sum += i;
		return sum;
	}
}

let res = func();
console.log(res);