// ✨ 15.12.2 Cookies

// document.cookie = "쿠키이름=쿠키값"
document.cookie = `user1 = incheon`;
// 만료기간을 넣어서 쿠키가 자동 만료 되도록 제작할 수 있다.(UTC time을 이용)
document.cookie =
  `user2=songdo; expires=` +
  new Date("December 17, 2025 03:24:00").toUTCString();
// 파라미터를 이용하여 쿠키가 어디 브라우저에 속할 수 있을지 알려줄 수 있다.
document.cookie = "user3=dweb; expires=Thu, 18 Dec 2033 12:00:00 UTC; path=/";
