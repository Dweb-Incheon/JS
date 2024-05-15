// 🌟 IDB - Object Store에 데이터(객체) "저장"
//         🚨 Transaction으로 데이터 저장
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
  addItem();
};

req.onerror = function (e) {
  console.log("onerror! doesnt work");
  console.dir(e);
};

function addItem() {
  const item = {
    name: `횃불이`,
    student_id: `20201234`,
    grade: `C+`,
    created: new Date().getTime(),
  };

  // 트랜잭션을 만들고 ObjectStore에 저장 (readwrite 데이터 쓸 때 사용)
  const objectStore = db
    .transaction("Web", "readwrite")
    .objectStore("Web")
    .add(item);

  objectStore.addEventListener(`success`, () => {
    console.log("😆");
  });
}
