"use strict";
function func(num) {
	let res;
	
	if (num >= 0) {
		res = Math.sqrt(num);
	} else {
		res = 0;
	}
	
	return res;
}

console.log(func(3));
function func(num) {
	if (num >= 0) {
		return Math.sqrt(num);
	} else {
		return 0;
	}
}

console.log(func(3));

function func(num1, num2) {
	let res;
	
	if (num1 > 0 && num2 > 0) {
		res = num1 * num2;
	} else {
		res = num1 - num2;
	}
	
	return res;
}

console.log(func(3, 4));