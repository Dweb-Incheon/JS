// ✨ 6.2.4 Object.create()을 이용하여 객체를 만드는 방법
"use strict";

let o1 = Object.create({ x: 1, y: 2 }); // o1 inherits properties x and y.
o1.x + o1.y; //=>3

o1.dweb = "inu lab";

let o2 = Object.create(null); // o2 inherits no props or methods.

let o3 = Object.create(Object.prototype); // o3 is like {} or new Object().

let o = { x: "don't change this value" };

console.log("👿", Object.create(o));
console.log("😀", o);

// 🌟 Guard against accidental modifications
function lib(obj) {
  console.log(`👏🌟 ${obj.x}`);
  obj.x = "-------";
  console.log("실수를 발생시킴", obj);
  for (let a in obj) {
    console.log(`🌟 ${obj[a]}`);
  }
}
lib(Object.create(o));
console.log("영향을 받았는지 확인", o);

// 이런식으로 객체를 생성할 수도 있음
let ox1 = { age: 25, i: o };
ox1.i.x = "ok if you try to modify x";
console.log("👍", ox1);
console.log("🏅", o);

// 이런식으로 객체를 생성할 수도 있음
let ox2 = { age: 25, i: Object.create(o) };
ox2.i.x = "ok if you try to modify x";
console.log("👍", ox2);
console.log("🏅", o);
