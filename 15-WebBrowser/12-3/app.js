// 🌟 IndexedDB

let db;

const openRequest = indexedDB.open("myDatabase", 2);

openRequest.onupgradeneeded = function (e) {
  db = e.target.result;
  console.log("running onupgradeneeded");
  const storeOS = db.createObjectStore("myDatabaseStore", { keyPath: "name" });
};
openRequest.onsuccess = function (e) {
  console.log("running onsuccess");
  db = e.target.result;
  addItem();
};
openRequest.onerror = function (e) {
  console.log("onerror! doesnt work");
  console.dir(e);
};

function addItem() {
  const item = {
    name: "banana",
    price: "$2.99",
    description: "It is a purple banana!",
    created: new Date().getTime(),
  };
  const tx = db.transaction("myDatabaseStore", "readwrite");
  const store = tx.objectStore("myDatabaseStore");
  store.add(item);
}
