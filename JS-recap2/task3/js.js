'use strict';
const body = document.querySelector('body');
const numbers = [];
do {
  numbers.push(parseInt(prompt('input a number')));
} while (numbers.length < 8);
for (let number of numbers) {
  if (number % 2 === 0) {
    const p = document.createElement('p');
    p.innerText = number;
    body.appendChild(p);
  }
}

const p = document.createElement('p');
p.innerText = 'Program has ended';
body.appendChild(p);

