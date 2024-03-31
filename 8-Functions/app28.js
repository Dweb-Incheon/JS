// 🌟 8.7 Function Properties, Methods, and Constructor

// ✨ 예제 ①
// This function needs to be bound
let f = (y) => {
  return this.x + y;
};

let o = { x: 1 }; // An object we'll bind to
let g = f.bind(o); // Calling g(x) invokes f() on o
g(2); // => 3
// 안바뀜
let p = { x: 10, g }; // Invoke g() as a method of this object
p.g(2); // => 3: g is still bound to o, not p.

// ✨ 예제 ②
let sum = (x, y) => x + y; // Return the sum of 2 args
let succ = sum.bind(null, 1); // Bind the first argument to 1
succ(2); //=>3:xisboundto1,andwepass2forthey argument
function f(y, z) {
  return this.x + y + z;
}
let g1 = f.bind({ x: 1 }, 2); // Bind this and y
g1(3); // => 6: this.x is bound to 1, y is bound to 2 and z is 3
