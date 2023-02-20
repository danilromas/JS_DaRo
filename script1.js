"use strict";

let nums1 = [1, 2, 3];
let nums2 = nums1;

nums1[0] = 'a';
console.log(nums2);

let nums3 = [1, 2, 3];
let nums4 = nums3;
nums3[0] = 'a';
nums4[1] = 'b';
console.log(nums3);