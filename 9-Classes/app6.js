// 🌟 Classes with the class Keyword

// 아래 두 케이스를 비교
// 1. 변수에 함수 할당
let square = function (x) {
  return x * x;
};
square(3); // => 9

// 2. 변수에 클래스 할당
let Square = class {
  constructor(x) {
    this.area = x * x;
  }
  includes() {
    return this.area * this.area;
  }
};
new Square(3).area; // => 9
new Square(3).includes(); // ==> 81
