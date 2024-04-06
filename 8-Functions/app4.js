// 🌟 8.1.4. Nested Functions

// console.log(hypotenuse(3, 4)); // Hoisting

let s1 = hypotenuse(10, 20);

function hypotenuse(a, b) {
  function square(x) {
    return x * x + a * b;
  }
  return square;
  // return Math.sqrt(square(a) + square(b));
}

let s2 = hypotenuse(5, 5);

console.log(s1(10));
console.log(s2(2));
