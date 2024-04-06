// 🌟 Functions as Namespaces

// 이 부분을 합치려는 코드로 가정할 것

// let global = "Dweb";
// function dweb() {
//   console.log("🌟", global);
// }
// dweb();

// ✨ ① 첫번째 방법
let global = "Incheon";
function chunkNamespace() {
  // Chunk of code goes here
  // Any variables defined in the chunk are local to thisfunction
  // instead of cluttering up the global namespace.

  let global = "Dweb"; // 🌟 주석달면 "incheon"
  function dweb() {
    console.log("🌟", global);
  }
  dweb();
}
chunkNamespace(); // 🚨 But don't forget to invoke the function!

// ✨ ② 두번째 방법. 간단하게 anonymous function을 정의한 뒤 호출해도 됨
(function () {
  // chunkNamespace() function rewritten as an unnamed expression.
  // Chunk of code goes here

  let global = "Dweb"; // 🌟 주석달면 "incheon"
  function dweb() {
    console.log("🌟", global);
  }
  dweb();
})(); // End the function literal and invoke it now.
