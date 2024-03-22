// 🌟 Array Iterator Methods
// ✨ filter() → 조건이 true 이면 필터링됨

let a = [5, 4, 3, 2, 1];

let b = a.filter((x) => x < 3); // => [2, 1]; values less than 3

let c = a.filter((v, k) => {
  console.log("value", v, "index", k);
  return k % 2 === 0;
}); // => [5, 3, 1]; every other value

// ✨ 문법 주의할 것. {}제거 후 return 키워드를 사용하지 않음
let d = a.filter((v, k) => k % 2 === 0);

// ✨ sparse array에 사용하면, missing element를 스킵하기 때문에 dense array를 만들 수 있음
let sparse1 = [1, , 10];
let dense1 = sparse1.filter(() => true);

let sparse2 = [1, , null, 10];
let dense2 = sparse2.filter((x) => x !== undefined && x !== null);
