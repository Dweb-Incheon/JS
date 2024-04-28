// 🌟 json(), text() 이 외에 Response 객체를 얻는 또 다른 방법
// ✨ "Binary Large Object" blob()
//    - they are useful when you expect large amounts of binary data

const myImage = document.querySelector("#dweb");

const myRequest = new Request("./uni.jpg");

setTimeout(() => {
  fetch(myRequest)
    .then((response) => {
      console.log(`😀`);
      return response.blob();
    })
    .then((myBlob) => {
      console.log(`🤣`);
      const objectURL = URL.createObjectURL(myBlob);
      console.log(objectURL);
      myImage.src = objectURL;
    });
}, 3000);
