// 🌟 Array Searching and Sorting Methods
// ✨ indexOf() and lastIndexOf() : 찾고자 하는 원소의 위치를 반환함. 찾을 수 없다면 -1
// ✨ lastIndexOf()는 마지막부터 탐색함
let a = [0, 1, 2, 1, 0];
a.indexOf(1); // => 1: a[1] is 1
a.lastIndexOf(1); // => 3: a[3] is 1
a.indexOf(3); // => -1: no element has value 3

// 객체를 탐색하는 경우, reference 가 같은지 비교하여 위치를 알려줌
let obj = { x: 1, y: 2 };
let b = [0, 1, 2, obj, 3];
console.log("👏", b.indexOf(obj));

// 두 번째 인자 값을 주게 되면 찾고자 하는 "시작" 범위를 설정하는 것
console.log(a.indexOf(2));
console.log(a.indexOf(2, 3)); // 3번째 인덱스 이후에는 원소 2가 존재하지 않음
