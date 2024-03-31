// 🌟 8.4 Functions as Values
"use strict";

// 함수 정의
function square(x) {
  return x * x;
}

// 😯 ① 변수에 대입 가능
let s = square; // Now s refers to the same function that square does
square(4); // => 16
s(4); // => 16

// 😯 ② 객채의 프로퍼티에 함수 대입
let o = {
  square: function (x) {
    return x * x;
  },
}; // An object literal
let y = o.square(16);

// 😯 ③ 배열 원소에 함수 넣는 상황. 이러한 경우 함수 이름도 필요 없음
let a = [(x) => x * x, 20]; // An array literal
a[0](a[1]); // => 400
