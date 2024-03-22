// Note. 객체 o는 객체 { x: 1, y: 2, z: 3 }를 상속
let o = Object.create({ x: 1, y: 2, z: 3 }); // Three enumerable own properties
o.xx = 11;
o.yy = 22;
o.zz = 33;
o.ff = function(){};

// Note. 빌트인 함수를 이용하여 Property 열거 유무 확인
o.propertyIsEnumerable("toString"); // => false: not enumerable
o.propertyIsEnumerable("xx"); // => true

// Note. 열거할 수 있는 Property를 모두 출력
for (let p in o) {
  // Loop through the properties
  console.log("😀", p); // Prints x, y, and z, but not toString
}

// Note. 상속받은 Property를 제외시킴
for (let p in o) {
  if (!o.hasOwnProperty(p)) continue; // Skip inherited properties
  else console.log("🔥", p);
}

// Note. 함수 자료형을 가지는 Property를 제외시킴
for (let p in o) {
  if (typeof o[p] === "function") continue; // Skip all methods
  else console.log("👿", p);
}
