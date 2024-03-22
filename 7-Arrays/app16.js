// 🌟 Array Iterator Methods
// ✨ find() & findIndex()

// 매칭되는 첫번째 원소의 값을 찾아서 위치를 반환해 줌. 매칭되는 값이 없으면? undefined or -1을 반환함
let a = [1, 2, 3, 4, 5];
// 인덱스 반환
a.findIndex((x) => x === 3); // => 2; the value 3 appears at index 2
a.findIndex((x) => x < 0); // => -1; no negative numbers in the array
// 값 반환
a.find((x) => x % 5 === 0); // => 5: this is a multiple of 5
a.find((x) => x % 7 === 0); // => undefined: no multiples of 7 in the array
