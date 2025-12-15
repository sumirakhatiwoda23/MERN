for (let i = 1; i <= 20; i++) {

  if (i === 5 || i === 6) {
    continue;
  }
  console.log(i);

}

// for i from 1 to 15
//     if i is divisible by 3 and 5
//         print "fizz buzz"
//     otherwise if i is divisible by 3
//         print "fizz"
//     otherwise if i is divisible by 5
//         print "buzz"
//     otherwise
//         print i

for (let i = 1; i <= 15; i++) {

    if(i%3==0 && i%5==0 ){
        console.log("fizz buzz");
    }else if(i%3==0){
        console.log("fizz");
    }else if(i%5==0){
        console.log("buzz");
    }else{
        console.log(`${i}`);
    }
}