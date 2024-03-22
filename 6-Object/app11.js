// 🌟 첫번째 방법
let target = { x: 1 },
  source = { y: 2, z: 3 };
for (let key of Object.keys(source)) {
  target[key] = source[key];
}
target; //=>{x:1,y:2,z:3}

// 🌟 두번째 방법
let o = { x: 1, z: 3 };
let defaults = { x: 2, y: 2 };
Object.assign(o, defaults); // overwrites everything in o with defaults
o = Object.assign({}, defaults, o); // 같은 결과
o = { ...defaults, ...o }; // "...spread operator" 활용, 같은 결과

// 🌟 세번째 방법. 아래와 같이 함수를 만들어서 복사
// Like Object.assign() but doesn't override existing properties (and also doesn't handle Symbol properties)
function merge(target, ...sources) {
  for (let source of sources) {
    for (let key of Object.keys(source)) {
      if (!(key in target)) {
        // This is different than Object.assign()
        target[key] = source[key];
      }
    }
  }
  return target;
}
Object.assign({ x: 1 }, { x: 2, y: 2 }, { y: 3, z: 4 }); // => {x:2, y: 3, z: 4}
merge({ x: 1 }, { x: 2, y: 2 }, { y: 3, z: 4 }); // => {x:1, y: 2, z: 4}
