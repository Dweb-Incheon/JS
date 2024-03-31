// 🌟 8.3.3 The Arguments Object
"use strict";

// "use strict"를 선언하는 순간 arguments는 예약어 (reserved word)가 됨
// let arguments = 10;

function max(...args) {
  let maxValue = -Infinity;
  // Loop through the arguments, looking for, and remembering, the biggest.
  console.log(args);
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > maxValue) maxValue = arguments[i];
  }
  // Return the biggest
  return maxValue;
}
let res = max(1, 10, 100, 2, 3, 1000, 4, 5, 6); // => 1000
console.log(res);
