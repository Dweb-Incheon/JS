// 🌟 8.4 Functions as Values
"use strict";

let a = [33, 4, 1111, 222];
a.sort(); // a == [1111, 222, 33, 4];

a.sort(function (a, b) {
  // Pass a comparator function
  return a - b; // Returns < 0, 0, or > 0, depending on order
}); // a == [4, 33, 222, 1111]; numerical order
console.log(a);

a.sort((a, b) => b - a); // a == [1111, 222, 33, 4]; reverse numerical order
console.log(a);

let arr = ["b", "a", "d", "c"];
arr.sort((x, y) => {
  if (x > y) return 1;
  else return -1;
});
console.log("👏", arr);
