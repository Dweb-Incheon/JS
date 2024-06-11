interface User {
  name: string;
  id: number;
}
class UserAccount {
  name;
  id;
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
const student: User = new UserAccount("incheon", 1);
