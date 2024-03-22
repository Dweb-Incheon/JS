// 🌟 Generator Examples

function* fibonacciSequence() {
  let x = 0,
    y = 1;
  for (;;) {
    yield y;
    [x, y] = [y, x + y]; // Note: destructuring assignment
  }
}
// Return the nth Fibonacci number
function fibonacci(n) {
  for (let f of fibonacciSequence()) {
    if (n-- <= 0) return f;
  }
}
fibonacci(20); // => 10946
