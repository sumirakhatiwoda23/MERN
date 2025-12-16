
// reduce


// const numbers = [11, 22, 33];

// const nN = numbers.reduce((acc, cur) => {
//   console.log(acc);
// //   return 9;
// });
// console.log(nN);




//  const numbers = [11, 22, 33];

// const nN = numbers.reduce((a, b) =>{

//   return a > b ? a : b});

// console.log("The highest number is:", nN);

//  const numbers = [11, 22, 55, 33];

// const max = numbers.reduce((a, b) => {
//   return a > b ? a : b;
// });
// const min = numbers.reduce((a, b) => {
//   return a < b ? a : b;
// });

// console.log("Max value:", max);
// console.log("Min value:", min);



// Find the sum of all numbers.

//  const numbers = [11, 22, 55, 33];
//  const sum=numbers.reduce((acc,curr)=>{
//     return (acc+=curr);
//  }



//  )
//  console.log("the sum of total is ",sum)

// Find the product of all numbers.


//  const numbers = [11, 22, 55, 33];
//  const mux=numbers.reduce((acc,curr)=>{
//     return (acc*=curr);
//  })
//  console.log("The multiplications of all numbers is : ",mux)


// Find the maximum number.

//  const numbers = [11, 22, 55, 33];
//  const max=numbers.reduce((acc,curr)=>{
//  return(acc>curr)?acc:curr

//  })
//  console.log("the highest number is ", max)



//  Count how many elements are even.

//  const numbers = [11, 22, 55, 33];
//  const max=numbers.reduce((acc,curr)=>{
//  return(acc>curr)?acc:curr

//  })
//  console.log("the highest number is ", max)




// Reverse a string using `reduce`.

const str = "hello";

const reversed = str.split("").reduce((acc, curr) => curr + acc, "");

console.log(reversed);
