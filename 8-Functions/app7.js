// 🌟 8.2.2 Method Invocation
"use strict";
let o = {
  // An object o.
  m: function () {
    console.log(`😃 ${this === o}`);
    const f = () => {
      this === o; // true, since arrow functions inherit this
      console.log(`🌟 ${this === o}`);
    };
    f(); // Now call the helper function f().
  },
};
o.m();
