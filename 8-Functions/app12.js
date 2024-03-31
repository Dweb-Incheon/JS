// 🌟 8.3.4 The Spread Operator for Function Calls
"use strict";
// let numbers = [5, 2, 10, -1, 9, 100, 1];
// Math.min(...numbers); // => -1

let incheon = timed(dweb); //timed 함수로부터 함수를 전달받음

const arr = Array.from({ length: 100000 }, () => 1); // i(index) 1씩 증가
incheon(arr);

function dweb(arg) {
  let sum = 0;
  for (let i of arg) sum += i;
  console.log(`👏 ${sum}`);
}
// This function takes a function and returns a wrapped version
// 🔥 Dweb 함수를 평가함
function timed(f) {
  return function (...args) {
    // Collect args into a rest parameter array
    console.log(`Entering function ${f.name}`);
    let startTime = Date.now();
    try {
      // Pass all of our arguments to the wrapped function
      return f(...args); // 🌟 Spread the args back out again
    } finally {
      // Before we return the wrapped return value, print elapsed time.
      console.log(`Exiting ${f.name} after ${Date.now() - startTime}ms`);
    }
  };
}
