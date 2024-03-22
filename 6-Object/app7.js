"use strict";

let book = {
  "main title": "JavaScript",
  "sub-title": "The Definitive Guide",
  for: "all audiences",
  author: {
    firstname: "David",
    surname: "Flanagan",
  },
};
console.log(book.subtitle); // undefined
//let len = book.subtitle.length; // !TypeError: undefined
let len = undefined;
if (book.subtitle) {
  console.log("🔥");
  let len = book.subtitle.length;
}

// let len = book && book.subtitle && book.subtitle.length;

// --------
// Approach 1. A verbose and explicit technique
let surname = undefined;

if (book) {
  if (book.author) {
    surname = book.author.surname;
  }
}

// Approach 2. A concise and idiomatic alternative to get surname or null or undefined
surname = book && book.author && book.author.surname;
console.log(surname);
