import { useState } from "react";

 export const giveTotal=(numbers)=>{
    const []=useState(9);
    let total=0;
    for(let i=0;i<numbers.length;i++){
      total+=numbers[i]

    }
    return total;
  }