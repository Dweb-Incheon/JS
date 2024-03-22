// 🌟 ... syntax : spread operator를 이용하여 객체의 Property 복사하기
let position = { x: 0, y: 0 };
let dimensions = { width: 100, height: 75 };
let rect = { ...position, ...dimensions };
rect.x + rect.y + rect.width + rect.height; // => 175

// ✨ ... syntax로 복사할 때, Property 이름이 중복되면??? 😃 마지막에 오는 값을 선택
let o = { x: 1 };
let p = { x: 0, ...o };
p.x; // => 1: the value from object o overrides the initial value
let q = { ...o, x: 2 };
q.x; // => 2: the value 2 overrides the previous value from o.

// 🚨 상속된 Property는 spread되지 않음. 객체 자신의 Property만 복사되는 것을 주의
let o1 = Object.create({ x: 1 }); // o inherits the property x
let p1 = { ...o1 };
p1.x; // => undefined
