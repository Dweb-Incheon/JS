// 🌟 valueOf()
// 예시 1. The Date class defines valueOf() to convert dates to numbers
// and this allows Date objects to be chronologically compared with < and >.

const date1 = new Date("02 Feb 1996 03:04:05 GMT");
console.log(date1.valueOf());
// Expected output: 823230245000

const date2 = new Date("03 Feb 1996 03:04:05 GMT");
console.log(date1.valueOf() > date2.valueOf());

// 예시 2.
let point = {
  x: 3,
  y: 4,
  valueOf: function () {
    return Math.hypot(this.x, this.y);
  },
};
Number(point); // => 5 --> valueOf() is used for conversions to numbers;
point > 4; // => true
console.log("😁", point == 5); // => false
point < 6; // => true
