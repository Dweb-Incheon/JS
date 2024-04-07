// 🌟 Generator Examples

function* fibonacciSequence() {
  let x = 0,
    y = 1;
  for (;;) {
    yield y;
    [x, y] = [y, x + y]; // Note: destructuring assignment
  }
}

// 🌟 ① n-th 까지 피보나치 수를 얻는 방법
// Yield the first n elements of the specified iterable object
function* take(n, iterable) {
  let it = iterable[Symbol.iterator](); // Get iterator for iterable object
  while (n-- > 0) {
    // Loop n times:
    let next = it.next(); // Get the next item from the iterator.
    if (next.done) return; // If there are no more values, return early
    else yield next.value; // otherwise, yield the value
  }
}
// An array of the first 5 Fibonacci numbers
console.log("①", [...take(5, fibonacciSequence())]); // => [1, 1, 2, 3, 5]

// 🌟 ② iterator를 생성할 필요없이 다음과 같이 할 수 있음
// Yield the first n elements of the specified iterable object
function* take(n, iterable) {
  while (n-- > 0) {
    // Loop n times:
    let next = iterable.next(); // Get the next item from the iterator.
    if (next.done) return; // If there are no more values, return early
    else yield next.value; // otherwise, yield the value
  }
}
// An array of the first 5 Fibonacci numbers
console.log("②", [...take(5, fibonacciSequence())]); // => [1, 1, 2, 3, 5]
