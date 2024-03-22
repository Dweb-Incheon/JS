// 🌟 메서드를 객체의 Property로 정의하려면?
// ✨ ES6 이전 버전) 객체 리터럴에 function definition expression을 이용함
let square = {
  area: function () {
    return this.side * this.side;
  },
  side: 10,
};
square.area(); // => 100

// ✨✨ ES6 이후 버전) function 키워드와 colon을 생략할 수 있음
let square1 = {
  area() {
    return this.side * this.side;
  },
  side: 10,
};
square1.area(); // => 100

// ✨ 추가) 메서드 이름에 심볼을 사용할 수도 있음
const METHOD_NAME = "m";
const symbol = Symbol();
let weirdMethods = {
  "method With Spaces"(x) {
    return x + 1;
  },
  [METHOD_NAME](x) {
    return x + 2;
  },
  [symbol](x) {
    return x + 3;
  },
};
weirdMethods["method With Spaces"](1); // => 2
weirdMethods[METHOD_NAME](1); // => 3
weirdMethods[symbol](1); // => 4
