// 🌟 8.1.4. Nested Functions

console.log(hypotenuse(3, 4)); // Hoisting

function hypotenuse(a, b) {
  function square(x) {
    return x * x;
  }
  return Math.sqrt(square(a) + square(b));
}
