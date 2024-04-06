// 🌟 Generator Examples

// ⛔️ If this generator is used with the ... spread operator,
// it will loop until memory is exhausted and the program crashes.

function* fibonacciSequence() {
  let x = 0,
    y = 1;
  for (;;) {
    yield y;
    [x, y] = [y, x + y]; // Note: destructuring assignment
    console.log(`✨ ${x}`);
  }
}
