// 🌟 8.2.2 Method Invocation

"use strict";
let o = {
  // An object o.
  m: function () {
    console.log(`😃 ${this === o}`);
    const f = function () {
      // true, 🌟 since we bound this function to the outer this
      console.log(`👏 ${this === o}`);
    }.bind(this);
    f();
  },
};
o.m();

// 😀 bind() 메서드 예제: bind 메서드의 argument 에 객체를 넣을 수 있음
let k = function (a) {
  return this.x + a;
};
let k_bind = k.bind({ x: 10, y: 20 });
console.log(`👏`, k_bind(5));
