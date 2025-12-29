const persons = [
  {
    id: 1, 
    name: "John",
    gender: "male",
    age: 30
  },
  {
    id: 2, 
    name: "Jane",
    gender: "female",
    age: 25
  },
  {
    id: 3, 
    name: "Bob",
    gender: "male",
    age: 35
  },
  {
    id: 4, 
    name: "Alice",
    gender: "female",
    age: 28
  }
];
console.log()
const females = persons.filter(person => person.gender === "female");
console.log(females);