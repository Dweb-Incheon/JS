// ✨ 6.2.1 Object Literal을 이용하여 객체를 만드는 방법
"use strict";
const obj = {}; // const keyword로 만든 변수는 값을 재할당 받을 수 없음
obj.x = 10; // 하지만, 객체를 업데이트 하는 것은 가능
//✨ 에러가 발생하는 경우: obj = { x: 10 };

let empty = {}; // An object with no properties
let point = { x: 0, y: 0 }; // Two numeric properties
let p2 = { x: point.x, y: point.y + 1 }; // More complex values

let book = {
  "main title": "JavaScript", // These property names include spaces
  "sub-title": "The Definitive Guide", // and hyphens, so use string literals.
  for: "all audiences", // for is reserved, but no quotes.
  author: {
    // The value of this property is
    firstname: "David", // itself an object.
    surname: "Flanagan",
  },
};
