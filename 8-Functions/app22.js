// 🌟 Closures
// ✨ Nested functions 에서의 lexical scoping rules을 이해할 것

// 😯 두 가지 방식을 비교할 것

// ✨ ① 방법
// Initialize the counter property of the function object.
// Function declarations are hoisted so we really can
// do this assignment before the function declaration.
uniqueInteger1.counter = 0;
// This function returns a different integer each time it is called.
// It uses a property of itself to remember the next value to be returned.
function uniqueInteger1() {
  return uniqueInteger1.counter++; // Return and increment counter property
}
uniqueInteger1(); // => 0
uniqueInteger1(); // => 1

// ✨ ② 방법
// uniqueInteger() function that used a property of the function itself
// to keep track of the next value to be returned.
let uniqueInteger2 = (function () {
  // Define and invoke
  let counter = 0; // Private state of function below
  return function () {
    return counter++;
  };
})();
uniqueInteger2(); // => 0
uniqueInteger2(); // => 1
