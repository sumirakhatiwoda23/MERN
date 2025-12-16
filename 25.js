// call back functions

const greets = (func) => {
  func();


}

const greeting = () => {
  console.log('hello jee');
}

greets(greeting);



function greet(name, callback) {
    console.log("Hello " + name);
    callback(); // calling the callback function
}

function sayBye() {
    console.log("Goodbye!");
}

// Pass sayBye as a callback
greet("Sumira", sayBye);
