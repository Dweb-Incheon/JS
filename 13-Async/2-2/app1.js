// Ex. hypothetical Promise chain

fetch(documentURL) // Make an HTTP request
  .then((response) => response.json()) // Ask for the JSON body of the response
  .then((document) => {
    // When we get the parsed JSON
    return render(document); // display the document to the user
  })
  .then((rendered) => {
    // When we get the rendered document
    cacheInDatabase(rendered); // cache it in the local database.
  })
  .catch((error) => handle(error)); // Handle any errors that occur
