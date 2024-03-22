let letters = [..."Hello world"]; // An array of letters
let everyother = "";
for (let [index, letter] of letters.entries()) {
  // console.log(index, letter);
  if (index % 2 === 0) everyother += letter; // letters at even indexes
}
everyother; // => "Hlowrd"
