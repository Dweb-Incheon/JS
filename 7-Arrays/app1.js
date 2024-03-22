// 🌟 Array를 만드는 첫번째 방법. Array Literals

//--------
// 예시 1
let empty = []; // An array with no elements
let primes = [2, 3, 5, 7, 11]; // An array with 5 numeric elements;
let misc = [1.1, true, "a"]; // 3 elements of various types + trailing comma

//--------
// 예시 2. ✨ 어레이 리터럴에 상수만 포함할 필요도 없음
let base = 1024;
let table = [base, base + 1, base + 2, base + 3];
console.log(table);
base = 3;
console.log(table); // 🌟 배열 원소 변경 안됨!!

//--------
// 예시 3. ✨ 겍체 리터럴, 어레이 리터럴을 포함할 수도 있음
let b = [
  [1, { x: 1, y: 2 }],
  [2, { x: 3, y: 4 }],
];

//--------
// 예시 3. ✨ comma를 이용해서 비워둘 수 있음 (length에는 카운트 됨)
let count = [1, , 3]; // Elements at indexes 0 and 2. No element at index 1
console.log(count);
let undefs = [, ,]; // An array with no elements but a length of 2
console.log(undefs);
