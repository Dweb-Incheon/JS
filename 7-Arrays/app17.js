// 🌟 Array Iterator Methods
// ✨ every() and some()

// 😀 mathematical 관점에서 every() method 는 “for all” quantifier ∀ 과 같은 의미를 지님
// 즉, 모든 원소에 대해 조건이 참이면 true를 반환함
let a = [1, 2, 3, 4, 5];
a.every((x) => x < 10); // => true: all values are < 10.
a.every((x) => x % 2 === 0); // => false: not all values are even.

// 😃 mathematical 관점에서 some() method 는 “there exists” quantifier ∃ 와 같은 의미를 지님
// 즉, 적어도 하나의 원소가 조건을 만족시키면 true를 반환함
let b = [1, 2, 3, 4, 5];
b.some((x) => x % 2 === 0); // => true; a has some even numbers.
b.some(isNaN); // => false; a has no non-numbers. "not a number" isNaN()은 number인 경우 false 반환
