"use strict";
let num = 1, i = 1;

for (i; ; i++) {
   if (num + i > 100) {
      break;
   } 
   else {
      continue;
      num += i;
   };
};
console.log(num);
console.log(i);