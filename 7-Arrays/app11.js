// 🌟 Array의 forEach() 메서드에 함수를 넘겨서 사용
// ✨ forEach() invokes your function once on each element of the array:

// Unlike the for/of loop
// the forEach() is aware of sparse arrays and does not invoke your function for elements that are not there.
let letters = [..."Hello world"]; // An array of letters
let uppercase = "";
letters.forEach((letter) => {
  // Note arrow function syntax here
  uppercase += letter.toUpperCase();
});
uppercase; // => "HELLO WORLD"
