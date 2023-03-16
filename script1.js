"use strict";
function func(arr) {
	let sum = 0;
	
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		
		// Если сумма больше или равна 10:
		if (sum >= 10) {
			return i + 1; // выходим из цикла и из функции
		}
	}
}

let res = func([1, 2, 3, 4, 5]);
console.log(res);
function func() {
	let sum = 0;
	let i = 1;
	
	while (true) { // бесконечный цикл
		sum += i;
		
		if (sum >= 100) {
			return i; // цикл крутится пока не выйдет тут
		}
		
		i++;
	}
}

console.log( func() );