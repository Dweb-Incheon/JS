// 🌟 13.1.1 Timers

const checkForUpdates = function (x) {
  console.log(x);
};
setTimeout(() => {
  checkForUpdates(`🤣`);
}, 5000);

// Call checkForUpdates in one minute and then again every minute after that
let updateIntervalId = setInterval(() => {
  checkForUpdates(`💕`);
}, 7000);

setTimeout(stopCheckingForUpdates, 30000);

// setInterval() returns a value that we can use to stop the repeated
// invocations by calling clearInterval(). (Similarly, setTimeout()
// returns a value that you can pass to clearTimeout())
function stopCheckingForUpdates() {
  clearInterval(updateIntervalId);
  console.log(`🔥`);
}
