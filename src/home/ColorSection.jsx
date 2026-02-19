// yeslai as a component garda ni hunxa props pass garera....

export default function ColorSection() {
  return (
    <div className="text-white flex flex-wrap my-10 ">

        <div className="bg-red-500 basis-50 grow">
            <h3>Red</h3>
        </div>

        <div className="bg-blue-500 basis-50 grow">
       <h3>Blue</h3>
        </div>

        <div className="bg-gray-600 basis-50 grow">
        <h3>Blue Grey</h3>
        </div>

          <div className="bg-[#019688] basis-50 grow">
       <h3>Teal</h3>
       </div>

         <div className="bg-yellow-300 basis-50 grow">
       <h3>Yellow</h3>
       </div>
       
       <div className="bg-orange-400 basis-50 grow">
       <h3>Orange</h3>
       </div>
    </div>
  )
}
