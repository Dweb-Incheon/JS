// 🌟 13.1.4 Callbacks and Events in Node

// The "fs" module has filesystem-related APIs

const fs = require("fs");

let options = {
  // An object to hold options for our program
  // default options would go here
};
// Read a configuration file, then call the callback function
// ⛔️ 경로 주의: 해당 디렉토리에서 실행할 것
fs.readFile("./config.json", "utf-8", (err, text) => {
  if (err) {
    // If there was an error, display a warning, but continue
    console.warn("Could not read config file:", err);
  } else {
    // Otherwise, parse the file contents and assign to the options object
    Object.assign(options, JSON.parse(text));
  }
  // In either case, we can now start running the program
  startProgram(options);
});
console.log(`😯`, options);

function startProgram(options) {
  console.log(`💕`, options);
}
