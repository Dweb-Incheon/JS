let a = {}; // Start with a regular empty object
// Add properties to make it "array-like"
let i = 0;
while (i < 10) {
  a[i] = i * i;
  i++;
}
a.length = i; // 🌟 length property를 추가

// Now iterate through it as if it were a real array
let total = 0;
for (let j = 0; j < a.length; j++) {
  total += a[j];
}
