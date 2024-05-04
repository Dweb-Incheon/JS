$.getJSON("http://localhost:3000/web111111")
  .then((jsonData) => {
    console.log(jsonData);
  })
  .catch((error) => {
    console.log("⛔️", error);
  });
