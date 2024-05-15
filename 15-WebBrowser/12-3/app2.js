// 🌟 IDB - DB 연결
let db;
const req = indexedDB.open("inuDB", 1);

req.onupgradeneeded = function (e) {
  alert(`🤯 Upgrade!`);
  db = e.target.result;
  db.createObjectStore("Web", { keyPath: "name" });
};

req.onsuccess = function (e) {
  console.log(`🔥 Onsuccess`);
  db = e.target.result;
  console.log(`🔥`, db);
};

req.onerror = function (e) {
  console.log("onerror! doesnt work");
  console.dir(e);
};
