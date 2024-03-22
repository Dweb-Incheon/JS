// 🌟 Subarrays with slice(), splice(), fill(), and copyWithin()

// ✨ slice() 메서드는 slice (subarray)를 반환
// 슬라이스의 처음과 끝을 알려주는 두 인자 값을 취함. 첫번째 인자 값의 원소는 포함하고 두번째 인자 값의 원소는 포함시키지 않음
let a = [1, 2, 3, 4, 5];
a.slice(0, 3); // Returns [1,2,3]
a.slice(3); // Returns [4,5]

// 인자 값이 음수이면? -1이면 마지막 원소를 의미. -2이면 마지막에서 하나 앞을 의미, -3은 -2의 이전 원소
a.slice(1, -1); // Returns [2,3,4]
a.slice(-3, -2); // Returns [3]
