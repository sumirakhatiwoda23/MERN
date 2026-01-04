// destructing object
const person = {
  name1: 'Max',
  age: 23,
  habits: ['sleep', 'dance'],
  address: {
    city: 'New York',
    country: 'USA',
    obj: {
      nam: 'Max'
    }
  }
}

const { name1, habits, address } = person;
// const { name, habits: [a,b] , address } = person;
const { address : {city,country,obj:{nam}},age, habits: [a,b] , name } = person;
console.log(nam)