localStorage.x = 10;
let x = parseInt(localStorage.x);
localStorage.lastRead = new Date().toUTCString();
let lastRead = new Date(Date.parse(localStorage.lastRead));
localStorage.data = JSON.stringify(data); // Encode and store
let data = JSON.parse(localStorage.data); // Retrieve and decode.
