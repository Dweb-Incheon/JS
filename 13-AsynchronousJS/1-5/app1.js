// 🌟 Scope (Closure) and Asynchronous Execution

function countdown() {
  console.log("countdown:");
  for (let i = 5; i >= 0; i--) {
    setTimeout(function () {
      console.log(i == 0 ? "Go!" : i);
    }, (5 - i) * 1000);
  }
}
countdown();
