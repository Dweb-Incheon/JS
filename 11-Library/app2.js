// ✨ Enumerable & Iterable Object
"use strict";

let obj = { univ: "Incheon National Univ", location: "Songdo" };

// enumerable이 false인 경우 출력되지 않음
/*
Object.defineProperty(obj, "univ", {
  enumerable: false,
});
*/

for (let key in obj) {
  console.log(obj[key]);
}

console.log(Object.getOwnPropertyDescriptor(obj, "univ"));
