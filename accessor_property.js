class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
const user = new User("Frengky", "Manurung");
console.log(user);
console.log(user.fullName);

const fullName = "Manurung Frengky";
console.log(user);
console.log(user.fullName);
