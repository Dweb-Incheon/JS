let letters = [..."Hello world"]; // An array of letters
let vowels = "";
for (let i = 0; i < letters.length; i++) {
  // For each index in the array
  let letter = letters[i]; // Get the element at that index
  if (/[aeiou]/.test(letter)) {
    // Use a regular expression test
    vowels += letter; // If it is a vowel, remember it
  }
}
vowels; // => "eoo"

// ✨ 아래와 같이 undefined 원소는 반복 시 스킵할 필요가 있음
let a = [];
a[100000] = "👍";
for (let i = 0; i < a.length; i++) {
  if (a[i] === undefined) continue; // Skip undefined + nonexistent elements
  // loop body here
  console.log(a[i]);
}
