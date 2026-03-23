import { MedalIcon } from 'lucide-react'
import React from 'react'


export default function Header() {
  return (
    <div className=' px-5 py-2 text-white flex items-baseline justify-between'>
<div className='flex items-center gap-3'>

<MedalIcon size={50}/>
<h1>The MealDB</h1>
</div>
    </div>
  )
}
