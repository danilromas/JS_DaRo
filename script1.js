"use strict";
function func1() {
	res1 = 3;
}
function func2() {
	res2 = 5;
}

console.log( func1() + func2() );

function sum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
		return res;
	}
}

console.log(res);

let arr = [1, 2, 3, 4, 5];

function func(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
}
console.log(res);

function func1() {
	return 3;
}
function func2() {
	return 5;
}

console.log( func1() + func2() );

let sum = sum([1, 2, 3, 4, 5]);

function sum(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
	
	return sum;
}

console.log(sum);