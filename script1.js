"use strict";
function func(num) {
	return num;
	
	let res = num ** 2;
	return res;
}

console.log( func(3) );
function func(num) {
	if (num <= 0) {
		return Math.abs(num);
	} else {
		return num ** 2;
	}
}

console.log( func(10) );
console.log( func(-5) );
function func(num) {
	if (num <= 0) {
		return Math.abs(num);
	}
	
	return num ** 2;
}

console.log( func(10) );
console.log( func(-5) );