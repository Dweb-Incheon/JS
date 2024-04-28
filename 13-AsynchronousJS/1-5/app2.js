// 🌟 Error-First Callbacks

const fs = require("fs");
const fname = `may_or_may_not_exist.txt`;
//const fname = `incheon.txt`;

fs.readFile(fname, function (err, data) {
  if (err) return console.error(`error reading file ${fname}: ${err.massage}`);
  console.log(`${fname} contents: ${data}`);
});
