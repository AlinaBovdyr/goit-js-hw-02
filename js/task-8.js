function reduceArray(array) {
  'use strict';
  let total = 0;
  for (const number of array) {
    total += array.length > 0 ? number : 0;
  }
  return total;
}

console.log(reduceArray([1, 2, 3]));
// 6

console.log(reduceArray([-2, 0, 2]));
// 0

console.log(reduceArray([1, 2, 2.5]));
// 5.5
