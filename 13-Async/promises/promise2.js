// Using Promises
"use strict";
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  me() {
    return `My name is ${this.name}!`;
  }
}

function countdown(seconds) {
  return new Promise((resolve, reject) => {
    for (let i = seconds; i >= 0; i--) {
      setTimeout(() => {
        if (i == 13) reject(new Error("Definetly not counting that"));
        if (i > 0) console.log(`${i} ...`);
        else resolve(new Student("Dweb", 22));
      }, (seconds - i) * 1000);
    }
  });
}

// Return Promise
// 프로미스는 fullfill에 대한 "then" handler 와 error에 대한 "catch" handler를 지원함
// countdown(15)과 countdown(10)으로 실행시켜 볼 것
// resolve or reject이 호출되어도 함수는 계속 실행됨
// 단지, Promise의 상태만이 관리된다는 것을 알 수 있음
countdown(11)
  .then(function (obj) {
    console.log(`countdown completed successfully + ${obj.me()}`);
  })
  .catch(function (err) {
    console.log(`countdown experienced an error: " + ${err.message}`);
  });

// 🤔 Settled 되었을 때, 더 이상 동작하지 않게 하려면 💭
