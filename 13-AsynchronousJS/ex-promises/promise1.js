// Creating Promises

// countdown is going to return a promise
// when countdown is up

function countdown1(seconds) {
  // new Promise instance with a function that
  // has resolve (fulfill) and reject callbacks
  return new Promise((resolve, reject) => {
    for (let i = seconds; i >= 0; i--) {
      setTimeout(() => {
        if (i > 0) console.log(i + `...`);
        else resolve(console.log("GO"));
      }, (seconds - i) * 1000);
    }
  });
}

function countdown2(seconds) {
  return new Promise(function (resolve, reject) {
    for (let i = seconds; i >= 0; i--) {
      setTimeout(function () {
        if (i > 0) console.log(`${i} ...`);
        else resolve(console.log("GO"), alert("GO"));
      }, (seconds - i) * 1000);
    }
  });
}

countdown2(5);
