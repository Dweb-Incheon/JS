// 🌟 The purpose of this method is to return a localized string representation of the object.
// 🌟 Date, Number, Array 클래스들은 toLocaleString()메서드를 커스터마이징 해두고 있음

// ✨ toLocaleString() 활용 예시 1
const date = new Date();
date.toLocaleString();

// ✨ toLocaleString() 활용 예시 2
const check = 520000;
check.toLocaleString();

// ✨ toLocaleString() 활용 예시 3
const arr = [1, "hi", 1234567, date];
arr.toLocaleString();

// ✨ toLocaleString() 활용 예시 4
let point = {
  x: 1000,
  y: 2000,
  toString: function () {
    return `(${this.x}, ${this.y})`;
  },
  toLocaleString: function () {
    return `(${this.x.toLocaleString()},
    ${this.y.toLocaleString()})`;
  },
};
point.toString(); // => "(1000, 2000)"
point.toLocaleString(); // => "(1,000, 2,000)": note thousands separators
