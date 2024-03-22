// 🌟 Adding arrays with concat()

// ✨ concat() 메서드는 두 배열을 합쳐서 새로운 배열 반환
let a = [1, 2, 3];
a.concat(4, 5); // => [1,2,3,4,5]
a.concat([4, 5], [6, 7]); // => [1,2,3,4,5,6,7]; arrays are flattened
a.concat(4, [5, [6, 7]]); // => [1,2,3,4,5,[6,7]]; but not nested arrays
a; // => [1,2,3]; the original array is unmodified
