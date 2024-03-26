// ✨ 11.1.1 The Set Class
"use strict";

let oneDigitPrimes = new Set([2, 3, 5, 7]);
oneDigitPrimes.has(2); // => true: 2 is a one-digit prime number
oneDigitPrimes.has(3); // => true: so is 3
oneDigitPrimes.has(4); // => false: 4 is not a prime
oneDigitPrimes.has("5"); // => false: "5" is not even a number
