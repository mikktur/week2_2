'use strict';
const body = document.querySelector('body');
const numbers = [];
for (let i = 0; i < 5; i++) {
  numbers.push(parseInt(prompt('Input a number')));
}
console.log(numbers);
const checkNum = parseInt(prompt('Check if a number is inside an array'));
console.log(numbers.includes(checkNum));
numbers.pop;
console.log(numbers);
numbers.sort((a, b) => a - b);
console.log(numbers);

