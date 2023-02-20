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

let nums6 = ['a', 'b', 'c'];
let key = 2;
console.log(nums6[key]);

let nums7 = [1, 2, 3, 4, 5];
let key1 = 1;
let key2 = 2;
summ = nums7[key1]+nums7[key1];
console.log(summ);

let nums8 = ['a', 'b', 'c', 'd', 'e'];
delete nums8[1];
delete nums8[2];
alert(nums8.length);
console.log(nums8);

/*let arr = [1, 2, 3, 4, 5];
console.log(arr[arr.length]); - length - 1 должно быть

let arr = [1, 2, 3, 4, 5];
console.log(arr[1] + arr[2] + arr[3] + arr[4] + arr[5]); - считает не с 0

let arr = {1, 2, 3, 4, 5};
console.log(arr.length]); - не квадратные скобки массива

let arr = [1, 2, 3, 4, 5];
console.log(arr.lenght); - перепутал буквы местами, плюс опять забыл -1 :/ */