// 🌟 Constructor Property

let F = function () {
  this.x = "Dweb";
  this.y = "I really love Incheon";
}; // This is a function object.

console.log(typeof F);
let p = F.prototype; // This is the prototype object associated with F.
let c = p.constructor; // This is the function associated with the prototype.
c === F; // => true: F.prototype.constructor === F for any F

let o = new F(); // Create an object o of class F
console.log(typeof o);
o.constructor === F; // => true: the constructor property specifies the class
