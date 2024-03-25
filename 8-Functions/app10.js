// 🌟 8.3.2 Rest Parameters and Variable-Length Argument Lists
"use strict";

function max(first = -Infinity, ...rest) {
  let maxValue = first; // Start by assuming the first arg is biggest
  // Then loop through the rest of the arguments, looking for bigger
  console.log(first);
  console.log(rest);
  for (let n of rest) {
    if (n > maxValue) {
      maxValue = n;
    }
  }
  // Return the biggest
  return maxValue;
}
max(1, 10, 100, 2, 3, 1000, 4, 5, 6); // => 1000
