"use strict";
function sum(arr) { // деление тут не нужно
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	
	return res;
}

function func(arr1, arr2) { // можно сделать всё одним циклом for, да и смысла код не имеет, в любом случае выведет 1
	let res1 = 0;
	let res2 = 0;
	
	for (let elem of arr) {
		res1 += elem;
		res2 += elem;
	}
	return res1 / res2;
}

function getSum(arr) { // код выведет в любом случае 0, поэтому нужно вписать в res 1
	let res = 1;
	for (let elem of arr) {
		res *= elem;
	}
	
	return res;
}