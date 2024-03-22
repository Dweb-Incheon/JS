// ✨ computed properties
const PROPERTY_NAME = "p";
function computePropertyName() {
  return "p" + 2;
}
let o = {};
o[PROPERTY_NAME] = 1;
o[computePropertyName()] = 2;

// → 이런식으로 객체 리터럴에 속성을 추가할 수 있음
let p = {
  [PROPERTY_NAME]: 1,
  [computePropertyName()]: 2,
};
p.p1 + p.p2; // => 3
