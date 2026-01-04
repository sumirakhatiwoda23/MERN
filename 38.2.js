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
];

const somes = persons.map((per) => {
  console.log(per.name);
});
// const person = {
//   name: 'Max',
//   age: 23,
//   habits: ['sleep', 'dance'],
//   address: {
//     city: 'New York',
//     country: 'USA',
//     obj: {
//       nam: 'Max'
//     }
//   }
// }
