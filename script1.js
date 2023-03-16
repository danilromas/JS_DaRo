"use strict";
let str = 'word1 word2 word3';

console.log(str)

let word = str.split(' ');

for (let i = 0; i <= word.length - 1; i++) {
   word[i] = word[i].slice(0, 1).toUpperCase() + word[i].slice(1);
};

str = word.join(' ');

console.log(str)