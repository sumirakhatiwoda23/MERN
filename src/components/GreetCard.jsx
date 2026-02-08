
export default function GreetCard({title,color}) {
  return (
   <div className={`${color}  h-[200px]  mt-2`}>
    <h1 className="p-2 ">{title}</h1>
  <p className={`p-2 `}>Lorem ipsum dolor sit amet.</p>

</div>
  )
}
