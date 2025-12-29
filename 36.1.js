// only print page and title

const fields=["page","search","sort"]
const obj={
    page:1,
    search:"hello",
    sort:"ascending",
    rating:5,
    title:"great",
}
fields.forEach(element => {
   delete obj[element]
});
console.log(obj)