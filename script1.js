"use strict";
let letarr = [
	[
	  [1, 2],
	  [3, 4],
	],
	[
	  [5, 6],
	  [7, 8],
	],
  ];
 
  let sum = 0;
 
  for (let i = 0; i < letarr.length; i++) {
	for (let j = 0; j < letarr[i].length; j++) {
	  for (let k = 0; k < letarr[i][j].length; k++) {
		sum += letarr[i][j][k];
	  }
	}
  }
 
  console.log(sum);