"use strict";
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArr = []

for (let elem of arr13) {
   if (elem % 2 != 0) {
      newArr.push(elem);
   } else {
      continue;
	}
}

console.log(newArr);