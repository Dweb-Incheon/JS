let letters = [..."Hello world"]; // An array of letters
let string = "";
for (let letter of letters) {
  string += letter;
}
string; // => "Hello world"; we reassembled the original text

// ✨ Sparse Array에서의 원소는 undefined로 확인됨
let letter2 = [..."Hello world", , 10];
for (let l of letter2) {
  console.log(l);
}
