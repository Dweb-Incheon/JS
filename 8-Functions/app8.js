// 🌟 8.2.2 Method Invocation

"use strict";
let o = {
  // An object o.
  m: function () {
    console.log(`😃 ${this === o}`);
    const f = function () {
      // true, since we bound this function to the outer this
      console.log(`👏 ${this === o}`);
    }.bind(this);
    f();
  },
};
o.m();
