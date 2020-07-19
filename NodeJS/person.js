const person = {
  name: "John Doe",
  age: 18,
  profession: "Engineer",
};

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  helloPerson() {
    console.log(`Hello ${this.name} of age ${this.age}`);
  }
}
module.exports = Person;
