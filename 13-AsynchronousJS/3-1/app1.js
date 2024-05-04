// 🌟 13.3.1 await Expressions

let response = await fetch("https://jsonplaceholder.typicode.com/posts");
let profile = response.json();

console.log(response);
console.log(profile);
