"use strict";
let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let newObj = {};

for (let key in obj) {

   let newKey = obj[key];
   let newValue = key;
   newObj[newKey] = newValue;
};
console.log(arr)
console.log(obj);
console.log(newObj);