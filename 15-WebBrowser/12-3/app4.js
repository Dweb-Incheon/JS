// 🌟 IDB - Object Store에 저장된 데이터(객체) "조회"

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

  const objectStore = db.transaction("Web", `readonly`).objectStore("Web");
  let obj = objectStore.get(`횃불이`);
  console.log(obj);
  obj.onsuccess = function (e) {
    console.log(e.target.result);
  };
};
