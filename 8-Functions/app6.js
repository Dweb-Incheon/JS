// 🌟 8.2.2 Method Invocation
"use strict";
let o = {
  // An object o.
  m: function () {
    // Method m of the object.
    let self = this; // Save the "this" value in a variable.
    this === o; // => true: "this" is the object o.
    console.log(`😃 ${this === o}`);
    f(); // Now call the helper function f().
    function f() {
      // A nested function f
      this === o; // => false: "this" is global or undefined
      console.log(`🌟 ${this === o}`);
      self === o; // => true: self is the outer "this" value.
      console.log(`✨ ${self === o}`);
    }
  },
};
o.m(); // Invoke the method m on the object o.
