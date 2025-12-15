// const pos=1;

// switch(pos){
//     case 1:
//         console.log("hello hjr");
//         break;
//         case 2:
//             console.log("hello");
//             break;
//             case 3 :
//                 console.log("hello anu")
// }



const a = 900;
const b = 1000;
const calc = "add";

switch (calc) {
  case "add":
    console.log(a + b);
    break;

  case "sub":
    console.log(a - b);
    break;
  case "div":
    console.log(a / b);
    break;

  case "multi":
    console.log(a * b);
    break;
  default:
    console.log("Enter a value");
}