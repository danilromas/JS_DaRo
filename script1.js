"use strict";

let nums = ['a', 'b', 'c'];

nums[0] = '1';
nums[1] = nums[0];
nums[2] = '-3';
console.log(nums);

let nums1 = [1, 2, 3];
nums1[0] += 1;
nums1[1] += 1 + nums[0];
nums1[2] += 1 + nums[2];
console.log(nums1);

let nums2 = [1, 2, 3];
nums2[0]++;
nums2[1]++;
nums2[2]++;
console.log(nums2);

let nums3 = [];

nums3[0] = 1;
nums3[1] = 2;
nums3[2] = 3;
nums3[3] = 'a';
nums3[8] = 'b';
alert(nums3.length);
console.log(nums3);

letnums4 = ['a','b']
nums4.push('c');
nums4.push('d');
nums4.push('e');


let nums5 = [1, 2, 3];
nums5.push(4);
nums5.push(5);