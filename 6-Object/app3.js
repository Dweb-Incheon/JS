let o1 = Object.create({ x: 1, y: 2 }); // o1 inherits properties x and y.
o1.x + o1.y; //=>3

o1.dweb = "inu lab";

let o2 = Object.create(null); // o2 inherits no props or methods.

let o3 = Object.create(Object.prototype); // o3 is like {} or new Object().

let o = { x: "don't change this value" };

//library.function(Object.create(o)); // Guard against accidental modifications
console.log("👿", Object.create(o));
console.log("😀", o);

// 두 Case를 비교해 볼 것
// case 1. 원본이 변경됨
let ox = { age: 25, i: o };
ox.i.x = "ok if you try to modify x";
console.log("👍", ox);
console.log("🏅", o);

// case2. 원본 변경 안됨
let ox = { age: 25, i: Object.create(o) };
ox.i.x = "ok if you try to modify x";
console.log("👍", ox);
console.log("🏅", o);
