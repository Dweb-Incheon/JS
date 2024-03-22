// 🌟 ES6부터 property names은 string뿐만 아니라 symbol도 가능
// ✨ 아래와 같이 Symbol() factory function을 사용하여 심볼을 생성할 수 있음
// ✨ 충돌없이 객체를 확장할 수 있는 메커니즘.
const extension = Symbol("my extension symbol"); // extension type은 심볼
let o = {
  [extension]: {
    /* extension data stored in this object */
  },
};
o[extension].x = 0; // This won't conflict with other properties of o

// -----
// ✨ Object.getOwnPropertySymbols() 사용 예시
const object1 = {};
const a = Symbol("a");
const b = Symbol.for("b");

object1[a] = "localSymbol";
object1[b] = "globalSymbol";

const objectSymbols = Object.getOwnPropertySymbols(object1);

console.log(objectSymbols.length);
// Expected output: 2
