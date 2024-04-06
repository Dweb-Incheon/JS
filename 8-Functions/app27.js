// 🌟 8.7 Function Properties, Methods, and Constructor

// ① call() 메서드 사용하는 첫번째 예제
let obj = { class: "dweb", prof: "giseok" };

// ✨ 여기서 this는 call() 메서드가 호출될 때 결정됨
let fullname = function (name) {
  this.class = "incheon" + this.class;
  this.prof = this.prof + name;
  console.log(name);
};
// 🔥 fullname 함수가 obj의 메서드인 것 마냥 indirectly 호출됨
fullname.call(obj, "park");

// ② call() 메서드 사용하는 두번째 예제
let greetings = [
  { greeting: "Incheon", name: "횃불이" },
  { greeting: "Songdo", name: "유니" },
];

for (var i = 0; i < greetings.length; i++) {
  (function (i) {
    // console.log(this);
    // 여기서 this는 call에 전달되는 객체 { greeting: "...", name: "..." }
    // this 객체에 print 메서드를 만들어 호출하는 것
    this.print = function () {
      console.log("#" + i + " " + this.greeting + ", " + this.name);
    };
    this.print();
  }).call(greetings[i], i);
}
