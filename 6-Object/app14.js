// If you invoke the toString() method of a basic JavaScript object, you get the string “[object Object]”:
let s = { x: 1, y: 1 }.toString(); // s == "[object Object]"
console.log({}.toString());

// toString()를 타입을 활용하는데 사용
Object.prototype.toString.call([]); // => "[object Array]"
Object.prototype.toString.call(/./); // => "[object RegExp]"
Object.prototype.toString.call(() => {}); // => "[object Function]"
Object.prototype.toString.call(""); // => "[object String]"
Object.prototype.toString.call(0); // => "[object Number]"
Object.prototype.toString.call(false); // => "[object Boolean]"

// 😡 The default toString() method is not very informative.
// 🌟 보통은 아래와 같이 toString 메서드를 직접 만들어 사용하게 됨
// 예시 1
let point = {
  x: 1,
  y: 2,
  toString: function () {
    return `🌟 ${this.x}, ${this.y}`;
  },
};
let res = String(point); // => "🌟 1, 2"  --> toString() is used for string conversions
console.log(res);

// 예시 2. 아래와 같이 함수 코드를 읽어올 수 있음
let ex1 = {
  xxx: function () {
    return true;
  },
  toString: function () {
    return `${this.xxx}`;
  },
};
console.log(String(ex1));
