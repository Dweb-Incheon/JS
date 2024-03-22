// 🌟 Array Iterator Methods
// ✨ map()

// map()은 forEach()와 달리 new array (b) 를 반환함. invoke한 array에 영향 없음 (a 배열)
let a = [1, 2, 3];
let b = a.map((x) => x * x); // => [1, 4, 9]: the function takes input x and returns x*x
