// 🌟 IDB - DB "생성"
//    version을 변경할 수 있음. 버전 값을 입력하지 않으면 1로 설정
//    이미 만들어진 버전보다 더 낮은 버전의 DB를 생성할 수 없음 (에러!)

// 🚨 IDB의 모든 동작은 비동기임을 기억할 것
const req = indexedDB.open("inuDB", 1);

req.onsuccess = function (e) {
  alert(`👏 Success is called`);
};

// DB의 버전이 업그레이드 되는 경우 실행되는 콜백
req.onupgradeneeded = function (e) {
  alert(`🤯 Upgrade!`);

  // console.log("🤯", e);
  // let db = e.target.result;
  // // 객체의 식별자 (id)로 사용될 필드를 keyPath로 지정할 수 있음
  // db.createObjectStore("Web", { keyPath: "name" });
  // console.log("🤯", db);
};
