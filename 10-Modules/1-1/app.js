// 10.1.1 Automating Closure-Based Modularity

const modules = {};
function require(moduleName) {
  return modules[moduleName];
}

modules["sets.js"] = (function () {
  const exports = {};
  exports.BitSet = class BitSet {
    arr = [];
    insert(v) {
      this.arr.push(v);
      console.log(v);
    }
  };
  return exports;
})();

modules["stats.js"] = (function () {
  const exports = {};
  const sum = (x, y) => x + y;
  const square = (x) => x * x;
  exports.mean = function (data) {
    let sum = 0;
    for (let v of data) {
      sum += v;
    }
    return sum / data.length;
  };
  exports.stddev = function (data) {};
  return exports;
})();
