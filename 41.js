class Person {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log('hello jee');
  }

}

const person1 = new Person('ram', 90);
const person2 = new Person('shyam', 900);
console.log(person1, person2);