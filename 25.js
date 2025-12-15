// call back functions

const greets = (func) => {
  func();


}

const greeting = () => {
  console.log('hello jee');
}

greets(greeting);