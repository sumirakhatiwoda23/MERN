// Write a function that takes a number and a callback. The callback should check whether the number is even or odd.
const input = (func, value) => {
    func(value);
}

const check = (number) => {
    if (number % 2 == 0) {
        console.log(`${number} is even`);
    } else {
        console.log(`${number} is odd`);
    }
}

input(check, 25);





// Create a function calculate(a, b, callback) that performs addition, subtraction, multiplication, or division based on the callback passed.

const calculate=(a,b,func)=>{
    func(a,b)
}
const add=(a,b)=>{
    console.log(`The addition of ${a} and ${b} is`,a+b)
}
const sub=(a,b)=>{
    console.log(`The subtraction of ${a} and ${b} is`,a-b)
}
const multi=(a,b)=>{
    console.log(`The multiplication of ${a} and ${b} is`,a*b)
}
const div=(a,b)=>{
    console.log(`The division of ${a} and ${b} is`,a/b)
}

calculate(4,5,add)
calculate(8,7,sub)
calculate(8,9,multi)
calculate(45,9,div)


// Write a function that accepts a string and a callback. The callback should return the string in uppercase.

const string=(personName,func)=>{
    func(personName)
}
const upper_case=(personName)=>{
    console.log(personName.toUpperCase())
}
string("sumira",upper_case)