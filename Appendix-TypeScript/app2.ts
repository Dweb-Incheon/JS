function add(num1: number, num2: number, num3: number): number {
  let res = num1 + num2 + num3;
  return res;
}

function showNames(students: string[]): string[] {
  const inu_students = students.map((student) => student + " 💕 inu");
  return inu_students;
}
