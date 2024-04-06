// 🌟 8.7 Function Properties, Methods, and Constructor

const f = new Function("x", "y", "return x*y;");
console.log(f(10, 10));

// 🔥🔥 The function it creates do not use lexical scoping
let scope = "global";
function constructFunction() {
  let scope = "local";
  console.log("😯", scope);
  return new Function("return scope");
  // Doesn't capture local scope!
}
// This line returns "global" because the function returned by the
// Function() constructor does not use the local scope.
console.log(constructFunction()()); // => "global"

scope = "incheon";
console.log(constructFunction()()); // => "incheon"
