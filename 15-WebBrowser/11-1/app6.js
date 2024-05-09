const data = { studentID: "202503021", name: "Park" };

fetch("http://localhost:3000/web", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Connection: "keep-alive",
  },
  body: JSON.stringify(data),
})
  .then((response) => {
    if (response.status === 201) {
      return response.json();
    }
  })
  .then((profile) => {
    console.log(profile);
  });
