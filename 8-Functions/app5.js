// 🌟 8.2.2 Method Invocation

let calculator = {
  // An object literal
  operand1: 1,
  operand2: 1,
  add() {
    // We're using method shorthand syntax for this function
    // Note the use of the this keyword to refer to the containing object.
    this.result = this.operand1 + this.operand2;
  },
};

calculator.add(); // A method invocation to compute 1+1.
calculator.result; // => 2
