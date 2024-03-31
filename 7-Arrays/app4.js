// 🌟🌟 Array를 만드는 두번째 방법. Array Factory Method : ① Array.of() and ② Array.form()

// ⛔️ Array(10), 여기서 10은 length를 의미함
// ✨ 그러나 Array.of(10), 여기서 10은 원소를 의미함
Array.of(); // => []; returns empty array with no arguments
Array.of(10); // => [10]; can create arrays with a single numeric argument
Array.of(1, 2, 3); // => [1, 2, 3]

// ✨ Array.from()
// Argument로 iterable or array-like object를 입력 받음
// Iterable Object? for..of 반복문을 적용할 수 있음 (뒤에서 학습할 예정)
let original = [1, 2, 3];
let copy = Array.from(original);

let arraylike = new Set(original);
let truearray = Array.from(arraylike);

for (let a of arraylike) {
  console.log(`✨ ${a}`);
}
