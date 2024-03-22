// 🌟 Array Iterator Methods
// ✨ reduce() & reduceRight()
// ✨ single value를 만들기 위해서 배열의 원소들을 결합함

// 😀 reduce() 메서드는 두 개의 인자를 취할 수 있고 reduced value를 리턴함
// → 첫번째 인자는 reduction operation을 수행하는 함수. 두번째 인자는 첫번째 인자의 initial value
let a = [1, 2, 3, 4, 5];
a.reduce((x, y) => x + y, 0); // => 15; the sum of the values
a.reduce((x, y) => x * y, 1); // => 120; the product of the values
a.reduce((x, y) => (x > y ? x : y)); // => 5; the largest of the values

// 😀 reduceRight()는 highest index에서 lowest index로 동작하는 것을 제외하면, reduce() 와 동일함
// 예시) Compute 2^(3^4). Exponentiation has right-to-left precedence
//     아래 두 결과는 다름
let b = [2, 3, 4];
b.reduceRight((acc, val) => Math.pow(val, acc)); // => 2.4178516392292583e+24
b.reduce((acc, val) => {
  console.log(acc, val);
  return Math.pow(val, acc);
});
