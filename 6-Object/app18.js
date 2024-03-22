// ✨ Shorthand Properties
let x = 1,
  y = 2;
let o1 = {
  x: x,
  y: y,
};

// → ES6에서는 이렇게 변경할 수 있음
let o2 = { x, y };
o2.x + o2.y; //=>3
