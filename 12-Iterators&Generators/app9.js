// 🌟 Generator Examples

// A generator function that yields the set of one digit (base-10) primes.
function* oneDigitPrimes() {
  // Invoking this function does not run the code
  yield 2; // but just returns a generator object. Calling
  yield 3; // the next() method of that generator runs
  yield 5; // the code until a yield statement provides
  yield 7; // the return value for the next() method.
}

// Given an array of iterables, yield their elements in interleaved order.
function* zip(...iterables) {
  // Get an iterator for each iterable
  let iterators = iterables.map((i) => i[Symbol.iterator]());
  let index = 0;
  while (iterators.length > 0) {
    // While there are still some iterators
    while (iterators.length > 0) {
      // While there are still some iterators
      if (index >= iterators.length) {
        // If we reached the last iterator
        index = 0; // go back to the first one.
      }
      let item = iterators[index].next(); // Get next item from next iterator.
      if (item.done) {
        // If that iterator is done
        iterators.splice(index, 1); // then remove it from the array.
      } else {
        // Otherwise,
        yield item.value; // yield the iterated value
        index++; // and move on to the next iterator.
      }
    }
  }
}

// Interleave three iterable objects
[...zip(oneDigitPrimes(), "ab", [0])]; // => [2,"a",0,3,"b",5,7]
