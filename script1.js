"use strict";
let arr = [1, -9, 3, -5, 5, 6, -2, 7, -1];
let newA = [];

for (let key in arr) {
   if (arr[key] > 0) {
      newA.push(arr[key]);
   } else {
      continue;
	}
}
	console.log(arr); 
	console.log(newA); 