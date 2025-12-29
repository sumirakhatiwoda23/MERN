
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
let totalage=0
persons.forEach(person => {
  totalage += person.age;
});

console.log("Total age:", totalage)









let s = [];

persons.forEach(person => {
  s.push(person.name);
});