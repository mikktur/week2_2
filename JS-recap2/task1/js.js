'use strict';
const body = document.querySelector('body');
const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
console.log('Array of fruits: ' + fruits);
console.log('Length of Fruits: ' + fruits.length);
console.log('Element at index 2: ' + fruits[2]);
console.log('Last element of Fruits: ' + fruits[fruits.length - 1]);
const vegetables = [];
for (let i = 0; i < 3; i++) {
  vegetables.push(prompt('Enter a vegetable into array'));
}
console.log('Array of vegetables: ' + vegetables);
console.log('Length of vegetables: ' + vegetables.length);

