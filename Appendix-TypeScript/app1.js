// 🌟 We cannot understand how it works exactly with only function signature.
// ⛔️ try and see if you can figure out how they work

function add(num1, num2, num3) {
  res = num1 + num2 + num3;
  return res;
}

function showNames(students) {
  const inu_students = students.map((student) => student + " 💕 inu");
  return inu_students;
}

const sum = add("Incheon", " National", " University");
console.log(sum);

add(1, 2, 3);

const students = ["kim", "Lee", "Park", "Choi"];
const inu_students = showNames(students);
console.log(inu_students);
