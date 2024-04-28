// 🌟 13.2.4 More on Promises and Errors

// 💿 Use case. Database Query
// 😀 네트워크 혼잡을 고려하여 500ms 마다 쿼리 수행
queryDatabase()
  .catch((e) => wait(500).then(queryDatabase)) // On failure, wait and retry
  .then(displayTable)
  .catch(displayDatabaseError);
