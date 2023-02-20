"use strict";

let obj = {x: 1, y: 2, z: 3};
console.log('x' in obj); // true
delete obj.x;

console.log('x' in obj); //false