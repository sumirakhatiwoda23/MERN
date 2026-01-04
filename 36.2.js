const fields=["page","search","sort"]
const obj={
    page:1,
    search:"hello",
    sort:"ascending",
    rating:5,
    title:"great",
    some:function(){
        console.log(`rating is ${this.rating}`)
    }
   
}

obj.some();
// console.log(obj)