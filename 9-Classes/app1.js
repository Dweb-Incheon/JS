// 🌟 Classes and Prototypes

// 예제.
// This is a factory function that returns a new range object.
function range(from, to) {
  // Use Object.create() to create an object that inherits from the
  // prototype object defined below.  The prototype object is stored as
  // a property of this function, and defines the shared methods (behavior)
  // for all range objects.
  let r = Object.create(range.methods);
  // Store the start and end points (state) of this new range object.
  // These are noninherited properties that are unique to this object.
  r.from = from;
  r.to = to;
  // Finally return the new object
  return r;
}
// This prototype object defines methods inherited by all range objects.
range.methods = {
  // Return true if x is in the range, false otherwise
  // This method works for textual and Date ranges as well asnumeric.
  includes(x) {
    return this.from <= x && x <= this.to;
  },
  // A generator function that makes instances of the class iterable.
  // Note that it only works for numeric ranges.
  *[Symbol.iterator]() {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  },
  // Return a string representation of the range
  toString() {
    return "(" + this.from + "..." + this.to + ")";
  },
};

// Here are example uses of a range object.
let r = range(1, 3); // Create a range object
r.includes(2); // => true: 2 is in the range
r.toString(); // => "(1...3)"
[...r]; // => [1, 2, 3]; convert to an array via iterator
console.log(r);
