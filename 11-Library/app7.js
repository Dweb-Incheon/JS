// ✨ 11.1.1 The Set Class

"use strict";
let oneDigitPrimes = new Set([2, 3, 5, 7]);
let product = 1;
oneDigitPrimes.forEach((n) => {
  product *= n;
});
product; // => 210: 2 * 3 * 5 * 7

let numbers = [10, 11, 12, 13];
numbers.forEach(function (number, idx) {
  console.log(number, idx);
});
