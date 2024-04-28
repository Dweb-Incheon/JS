// 🌟 13.1.1 Timers

"use strict";
console.log("Before timeout: " + new Date());
function f() {
  console.log("After timeout: " + new Date());
  200;
}
setTimeout(f, 60 * 1000); // one minute
console.log("I happen after setTimeout!");
console.log("Me too!");

// using arrow function
console.log("Before timeout: " + new Date());
setTimeout(() => {
  console.log("After timeout: " + new Date());
}, 60 * 1000);

console.log("I happen after setTimeout!");
console.log("Me too!");
