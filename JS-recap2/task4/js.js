'use strict';
function sortArray(numbers, order) {
  if (order == 'asc') {
    numbers.sort((a, b) => a - b);
  } else {
    numbers.sort((a, b) => b - a);
  }
  return numbers;
}
const numbers = [5, 2, 8, 1, 9];
console.log(sortArray(numbers, 'asc')); // Output: [1, 2, 5, 8, 9]
console.log(sortArray(numbers, 'desc')); // Output: [9, 8, 5, 2, 1]

