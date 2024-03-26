// ✨ 11.1.1 The Set Class
"use strict";
let oneDigitPrimes = new Set([2, 3, 5, 7]);
let sum = 0;
for (let p of oneDigitPrimes) {
  // Loop through the one-digit primes
  sum += p; // and add them up
}
sum; // => 17: 2 + 3 + 5 + 7

[...oneDigitPrimes]; // => [2,3,5,7]: the set converted to an Array
Math.max(...oneDigitPrimes); // => 7: set elements passed as function arguments
