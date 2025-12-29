const persons={
    name:"Sumirraa Khatiwoda",
    age:25,
    habits:["eat","sleep","code"],
    address:{
        city:"new york",
        street:"Main Street",
        number:123
    },
    sleep:()=>{
        console.log("person is sleeping");
    }
};


// for (let per of persons){
//     console.log(per);
// } yo tarik le mildaina




// yo tarika le xai milxa
for (let per of Object.values(persons)){
    console.log(per)
}
console.log(Object.keys(person));