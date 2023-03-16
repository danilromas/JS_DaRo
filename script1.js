"use strict";
function isPositive(arr) {
	let flag = true;
	
	for (let elem of arr) {
		if (elem < 0) {
			flag = false;
		}
	}
	
	return flag;
}
function isPositive(arr) {
	for (let elem of arr) {
		if (elem < 0) {
			return false;
		}
	}
	
	return true;
}