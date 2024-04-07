// 이벤트는 Node의 Built-in 기능. 웹 브라우저에서 동작시키고자 한다면, jQuery를 활용할 것
// 구독(Subscribe)하고자 하는 이벤트를 누구나 리스닝할 수 있음
"use strict";
import EventEmitter from "events";

// event를 만들 수 있는 EventEmitter를 상속하여 Countdown class를 만듦
// countdown.emit("tick", i);

class Countdown extends EventEmitter {
  constructor(seconds, superstitious) {
    super();
    this.seconds = seconds;
    this.superstitious = !!superstitious;
  }
  go() {
    // this의 current value를 반드시 저장해야 함
    // this 변수는 콜백 내에서 계속 변함
    // countdown을 this로 바꿔볼 것
    const countdown = this;
    return new Promise((resolve, reject) => {
      for (let i = countdown.seconds; i >= 0; i--) {
        setTimeout(() => {
          if (countdown.superstitious && i === 13)
            return reject(new Error("DEFINITELY NOT COUNTING THAT"));
          countdown.emit("tick", i);
          if (i === 0) resolve();
        }, (countdown.seconds - i) * 1000);
      }
    });
  }
}

function launch() {
  return new Promise(function (resolve, reject) {
    console.log("Lift off!");
    setTimeout(function () {
      resolve("In orbit!");
    }, 2 * 1000); // a very fast rocket indeed
  });
}
const c = new Countdown(13).on("tick", (i) => console.log(i + "..."));
c.go()
  .then(launch)
  .then(function (msg) {
    console.log(msg);
  })
  .catch(function (err) {
    console.error("Houston, we have a problem....");
  });
