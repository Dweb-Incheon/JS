// 🌟 Generators

// A generator function that yields the set of one digit (base-10) primes.
function* oneDigitPrimes() {
  // Invoking this function does not run the code
  yield 2; // but just returns a generator object. Calling
  yield 3; // the next() method of that generator runs
  yield 5; // the code until a yield statement provides
  yield 7; // the return value for the next() method.
}

// When we invoke the generator function, we get a generator
let primes = oneDigitPrimes();

// A generator is an iterator object that iterates the yielded values
primes.next().value; //=>2
primes.next().value; //=>3
primes.next().value; //=>5
primes.next().value; //=>7
primes.next().done; // => true

// Generators have a Symbol.iterator method to make them iterable
primes[Symbol.iterator](); // => primes

[...oneDigitPrimes()]; // => [2,3,5,7]
let sum = 0;
for (let prime of oneDigitPrimes()) sum += prime;
sum; // => 17
