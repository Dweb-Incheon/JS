// 🌟 Closures
// ✨ Nested functions 에서의 lexical scoping rules을 이해할 것

// 예제. 객채를 반환
function counter() {
  let n = 0;
  return {
    count: function () {
      return n++;
    },
    reset: function () {
      n = 0;
    },
  };
}

let c = counter(),
  d = counter(); // Create two counters

console.log(c.count()); // => 0
console.log(d.count()); // => 0: they count independently
console.log(c.reset()); // reset() and count() methods share state
console.log(c.count()); // => 0: because we reset c
console.log(d.count()); // => 1: d was not reset
