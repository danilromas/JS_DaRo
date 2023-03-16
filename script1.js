"use strict";
let num = 4;
let flag = true;
let i = 2;

while (i < num) {
   if (num % i == 0) {
      flag = !flag;
      break;
	} 
	else {
		i += 1;
	 };
  };

if (flag) {
	console.log(` ${num} простое`)
 } 
else {
	console.log(` ${num}не простое`)
 }