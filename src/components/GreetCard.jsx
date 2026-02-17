import React from 'react'

export default function GreetCard({title,color,color1}) {
  return (
    <div className={` ${color} mt-3 h-[200px] `}>
<h1 className='font-bold text-2xl p-3'>{title}</h1>
<p className={`${color1} p-3`}> She is so pretty</p>
    </div>
  )
}
