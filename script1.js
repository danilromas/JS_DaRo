"use strict";
let res = 0;

for (let i = 1; i <= arr.length; i++) {
    res = arr[i - 1] + arr[i] + arr[i + 1];
    console.log(res)
};