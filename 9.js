// const a=90;
// const b=100;


// airthmetic operations


// let a=90;
// let sum=0;
// sum+=a;
// console.log(sum)

// ternary operator
// const a=90;
// const b=100;
// const gender =a>20?"men":"child";
// console.log(gender)


// const age = 20;

// const eligible =
//   age < 20 ? "young" :
//   age > 20 ? "adult" :
//   "exactly 20";

// console.log(eligible);




const netsalary=90000;
const expenses=850000;
let saved;
let lost;

if(netsalary>expenses){
    saved=netsalary-expenses;
    console.log(`You have saved $${saved} this month`);


}else if(expenses>netsalary)

{
    lost=expenses-netsalary;
    console.log(`You have lost $${lost} this month`);

}
else{
    console.log("Your balance hasn't changed");
}
