"use strict";
let book = {
  "main title": "JavaScript", // These property names include spaces
  "sub-title": "The Definitive Guide", // and hyphens, so use string literals.
  for: "all audiences", // for is reserved, but no quotes.
  author: {
    // The value of this property is
    firstname: "David", // itself an object.
    surname: "Flanagan",
  },
};

let author = book.author; // Get the "author" property of the book.
let name = author.surname; // Get the "surname" property of the author.
let title = book["main title"]; // Get the "main title" property of the book.

book.edition = 7; // Create an "edition" property of book.
book["main title"] = "ECMAScript"; // Change the "main title" property.

//the following two JavaScript expressions have the same value
console.log(book.for);
console.log(book["for"]);
