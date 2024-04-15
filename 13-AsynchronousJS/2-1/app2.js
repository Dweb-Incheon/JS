$.getJSON("http://localhost:3000/web")
  .then((jsonData) => {
    console.log(jsonData);
  })
  .catch((error) => {
    console.log("⛔️", error);
  });
