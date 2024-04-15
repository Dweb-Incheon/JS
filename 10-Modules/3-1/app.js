// 🌟 10.3 Modules in ES6
// 🌟 10.3.1 ES6 Exports

const PI = Math.PI;
function degreesToRadians(d) {
  return (d * PI) / 180;
}
class Circle {
  constructor(r) {
    this.r = r;
  }
  area() {
    return PI * this.r * this.r;
  }
}

export { Circle, degreesToRadians, PI };
