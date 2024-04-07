// 🌟 Generator Examples

function* fibonacciSequence() {
  let x = 0,
    y = 1;
  for (;;) {
    yield y;
    [x, y] = [y, x + y]; // Note: destructuring assignment
  }
}

// 🌟 다음과 같이 Break 조건을 추가하여 특정 n-th 피보나치 수를 구할 수 있음
// Return the nth Fibonacci number

function fibonacci(n) {
  for (let f of fibonacciSequence()) {
    if (n-- <= 0) return f;
  }
}
fibonacci(20); // => 10946
