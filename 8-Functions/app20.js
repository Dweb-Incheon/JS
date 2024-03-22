// 🌟 Closures
// ✨ Nested functions 에서의 lexical scoping rules을 이해할 것

// 🔥 매우 쉬운 예제
// → checkscope() 함수는 local variable 을 선언하고 있으며,
// → checkscope() 함수는 local variable의 값을 반환하는 함수를 정의하고, 호출하고 있음
// 당연히, checkscope()을 invoke할 때 local variable 이 반환될 것

let scope = "global scope"; // A global variable
function checkscope() {
  let scope = "local scope"; // A local variable
  function f() {
    return scope; // Return the value in scope here
  }
  return f();
}
checkscope(); // => "local scope"
