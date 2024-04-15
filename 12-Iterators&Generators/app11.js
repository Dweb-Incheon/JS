// 🌟 yield* and Recursive Generators

function* oneDigitPrimes() {
  // Invoking this function does not run the code
  yield 2; // but just returns a generator object. Calling
  yield 3; // the next() method of that generator runs
  yield 5; // the code until a yield statement provides
  yield 7; // the return value for the next() method.
}

// 🌟 The yield* keyword
// - iterable object를 반복하여 각각의 결과값으로 이루어진 하나의 "Generator"를 반환

function* sequence(...iterables) {
  for (let iterable of iterables) {
    yield* iterable;
  }
}
console.log([...sequence("abc", oneDigitPrimes())]); // => ["a","b","c",2,3,5,7]

// console.log(sequence("abc")); // => ["a","b","c"]
