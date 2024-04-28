fetch("/api/users/current") // Make an HTTP (or HTTPS) GET request
  .then((response) => response.json()) // Parse its body as a JSON object
  .then((currentUser) => {
    // Then process that parsed object
    displayUserInfo(currentUser);
  });
