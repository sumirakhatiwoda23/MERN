// let age =90;
// age=age+100;
// age+=100;
// age*=100;
// console.log(age);


// const persons =[11,22,33,44];
// const people=["ram","shyam","hari"];



// people[0]="sita"
// people.push("lio")
// people.pop("hari")
// people.shift()
// people.unshift("sumirraa khatiwoda")


// console.log(people[0]);



// console.log(people);
// console.log(people.at(0));
// console.log(people.concat("t","s","l").concat(people))
// console.log(people.fill(90,2));

// console.log(people.includes("v"))
// console.log(people.includes("ram"));
// console.log(people.indexOf("ram"))
// console.log(people.reverse());
// console.log(people.length);
// console.log(people.slice(1,2));
// people.splice(1,2);
// people.splice(1,1);
// console.log(people);







// loops

// const persons=["ram","shyam","hari"]
// //forEach , map , find , filter , reduce
// let i=0;
// while(i<10){
//     console.log("sumirraa");
//     i++;
// }




let i = 1;
let totalSum = 0;
let evenSum = 0;
let oddSum = 0;

while (i <= 10) {

    if (i % 2 === 0) {
        console.log(`The number ${i} is even`);
        evenSum += i;
    } else {
        console.log(`The number ${i} is odd`);
        oddSum += i;
    }

    totalSum += i;
    i++;
}

console.log("Total sum:", totalSum);
console.log("Even sum:", evenSum);
console.log("Odd sum:", oddSum);
