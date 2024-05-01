const fs = require("fs");

fs.readFile("./a.txt", (err, dataA) => {
  if (err) console.error(err);
  fs.readFile("./b.txt", (err, dataB) => {
    if (err) console.error(err);
    try {
      fs.readFile("./c.txt", (err, dataC) => {
        if (err) throw err;
        setTimeout(() => {
          fs.writeFile("./d.txt", dataA + dataB + dataC, (err) => {
            if (err) console.error(err);
          });
        }, 30 * 1000);
      });
    } catch (err) {
      console.error(`🚨`);
      console.error(err);
    }
  });
});
