// 🌟 Closures
// ✨ Nested functions 에서의 lexical scoping rules을 이해할 것

// 예제. 객체를 반환
// local variable을 선언하지 않는 대신 Private state로 함수 인자 n을 사용
function counter(n) {
  // Function argument n is the private variable
  return {
    // Property getter method returns and increments private counter var.
    get count() {
      return n++;
    },
    // Property setter doesn't allow the value of n to decrease
    set count(m) {
      if (m > n) n = m;
      else throw Error("count can only be set to a larger value");
    },
  };
}

let c = counter(1000);
c.count; // => 1000
c.count; // => 1001
c.count = 2000;
c.count; // => 2000
//c.count = 2000; // !Error: count can only be set to a larger value
