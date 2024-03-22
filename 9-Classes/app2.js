// 🌟 Classes and Constructors

// 예제
// This is a constructor function that initializes new Range objects.
// Note that it does not create or return the object. It just initializes this.
function Range(from, to) {
  // Store the start and end points (state) of this new range object.
  // These are noninherited properties that are unique to this object.
  this.from = from;
  this.to = to;
}

// All Range objects inherit from this object.
// Note that the property name must be "prototype" for this to work.
Range.prototype = {
  // Explicitly set the constructor back-reference
  constructor: Range,
  // Return true if x is in the range, false otherwise
  // This method works for textual and Date ranges as well as numeric.
  includes: function (x) {
    return this.from <= x && x <= this.to;
  },
  // A generator function that makes instances of the class iterable.
  // Note that it only works for numeric ranges.
  [Symbol.iterator]: function* () {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  },
  // Return a string representation of the range
  toString: function () {
    return "(" + this.from + "..." + this.to + ")";
  },
};

// Here are example uses of this new Range class
let r = new Range(1, 3); // Create a Range object; note the use of new
r.includes(2); // => true: 2 is in the range
r.toString(); // => "(1...3)"
[...r]; // => [1, 2, 3]; convert to an array via iterator

// ✨ constructor는 생략 가능한 프로퍼티
console.log("🌟", Range.prototype.constructor === Range);

// ✨ 정의된 클래스에 메서드를 하나씩 추가할 수 있음
Range.prototype.dweb = function (x) {
  return this.from <= x && x <= this.to;
};
Range.prototype.incheon = function () {
  return "(" + this.from + "..." + this.to + ")";
};
