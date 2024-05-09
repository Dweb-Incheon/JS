// ✨ Server-Side

const express = require("express");
const app = express();

app.get("/stream", async function (req, res) {
  res.write("Incheon National University ⏰");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  res.write("Computer Science and Engineering");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  res.write("🙋");
  res.end();
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/app5.html");
});

app.listen(8081, function () {
  console.log("server running on 8081");
});
