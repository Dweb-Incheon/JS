// 🌟 15.12.3 IndexedDB

if (window.indexedDB) {
  var name = "IndexedDB Name";
  var version = 1;
  var db = null;
  // IDBOpenDBRequest
  var request = indexedDB.open(name, version);
  request.onupgradeneeded = function (event) {
    // IDBDatabase
    db = request.result;
    var key = "id";
    var name = "store name";
    // IDBObjectStore
    var store = db.createObjectStore(name, { keyPath: key });
    var indexName = "by_name";
    var keyPath = "name";
    // IDBIndex
    var index = store.createIndex(indexName, keyPath);
    var obj = {
      [key]: 1,
      [keyPath]: "name",
    };
    store.put(obj);
  };
  request.onsuccess = function (event) {
    db = request.result;
    // IDBTransaction
    var transaction = db.transaction(["store name"], "readonly");
    // IDBObjectStore
    var objectStore = transaction.objectStore("store name");
    // IDBRequest
    var cursor = objectStore.openCursor();
    cursor.onsuccess = function (event) {
      // IDBCursorWithValue
      var cursor = event.target.result;
      if (cursor) {
        // {id: 1, name: "name"}
        console.log(cursor.value);
        cursor.continue();
      } else {
        console.log("end");
      }
    };
  };
}
