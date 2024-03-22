// 🌟 자바스크립트 객체는 data properties 뿐만 아니라 ✨ accessor properties 를 가질 수 있음
// ✨ data properties는 name과 value로 이루어지지만 accessor properties는 getter와 setter 두 메서드를 가짐

// ----------
// 예제 ①
const value = 20;
let o = {
  // An ordinary data property
  dataProp: value,
  // An accessor property defined as a pair of functions.
  get accessorProp() {
    return this.dataProp;
  },
  set accessorProp(value) {
    console.log("값을 변경하셨네요");
    this.dataProp = value;
  },
};
console.log(o.accessorProp);
o.accessorProp = "Dweb";

// ----------
// 예제 ②
let p = {
  // x and y are regular read-write data properties.
  x: 1.0,
  y: 1.0,
  // r is a read-write accessor property with getter and setter.
  // Don't forget to put a comma after accessor methods.
  get r() {
    return Math.hypot(this.x, this.y);
  },
  set r(newvalue) {
    let oldvalue = Math.hypot(this.x, this.y);
    let ratio = newvalue / oldvalue;
    this.x *= ratio;
    this.y *= ratio;
  },
  // theta is a read-only accessor property with getter only.
  get theta() {
    return Math.atan2(this.y, this.x);
  },
};
p.r; // => Math.SQRT2
p.theta; // => Math.PI / 4

// ----------
// 예제 ③ ✨ Accessor Property도 상속됨. 아래에서 r 속성은 상속된 프로퍼티에 의해 만들어진 것
let q = Object.create(p); // A new object that inherits getters and setters
q.x = 3; // Create q's own data properties
q.y = 4;
q.r; // => 5: ✨ the inherited accessor properties work
q.theta; // => Math.atan2(4, 3)

// ----------
// 예제 ④ Accessor Property를 통해 읽기/쓰기 동작을 검사할 수 있음
// This object generates strictly increasing serial numbers
const serialnum = {
  // This data property holds the next serial number.
  // The _ in the property name hints that it is for internal use only.
  _n: 0,
  // Return the current value and increment it
  get next() {
    return this._n++;
  },
  // Set a new value of n, but only if it is larger than current
  set next(n) {
    if (n > this._n) this._n = n;
    else throw new Error("serial number can only be set to a larger value");
  },
};
serialnum.next = 10; // Set the starting serial number
serialnum.next; // => 10
serialnum.next; // => 11: different value each time we get next
