// 🌟 IDB - Object Store에 저장된 데이터(객체) "삭제"

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

  const objectStore = db.transaction("Web", `readwrite`).objectStore("Web");
  let obj = objectStore.delete(`횃불이`);
  console.log(obj);
  obj.onsuccess = function (e) {
    console.log(`😊`, e);
  };
};
