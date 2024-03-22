// 🌟 Closures
// ✨ Nested functions 에서의 lexical scoping rules을 이해할 것

// 🚨 예제 1
// This function returns a function that always returns v
function constfunc(v) {
  return () => v;
}
// Create an array of constant functions:
let funcs1 = [];
for (var i = 0; i < 10; i++) funcs1[i] = constfunc(i);
// The function at array element 5 returns the value 5.
funcs1[5](); // => 5

// 🚨 예제 2
// Return an array of functions that return the values 0-9
function constfuncs() {
  let funcs2 = [];
  for (var i = 0; i < 10; i++) {
    funcs2[i] = () => i;
  }
  return funcs2;
}
let funcs2 = constfuncs();
funcs2[5](); // => 10; Why doesn't this return 5?
