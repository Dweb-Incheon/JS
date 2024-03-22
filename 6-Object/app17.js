// 🌟 Object.prototype에 toJSON() 메서드 없음
// 🌟 But, JSON.stringify() method는 요청한 객체에 toJSON() method를 탐색하게 됨

// 예제 1. toJSON() 메서드가 정의되지 않은 경우
let o = { x: 1, y: { x: "dweb" } };
let s = JSON.stringify(o);
console.log(s);

// 예제 2. toJSON() 메서드가 정의된 경우
let point = {
  x: 1,
  y: 2,
  toString: function () {
    return `(${this.x}, ${this.y})`;
  },
  toJSON: function () {
    console.log("🏅");
    return this.toString();
  },
};
JSON.stringify([point]); // => '["(1, 2)"]'
