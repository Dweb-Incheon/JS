// 🌟 Generators

const seq = function* (from, to) {
  for (let i = from; i <= to; i++) yield i;
};
// 👍 [Symbol.Iterator] 메서드를 가짐. 따라서 ... spread operator 사용도 가능
[...seq(3, 5)]; // => [3, 4, 5]

// 👍 [Symbol.Iterator] 메서드를 가짐. 따라서 ... for/of 사용도 가능
const gen = seq(1, 10);
let sum = 0;
for (let i of gen) {
  sum += i;
}
