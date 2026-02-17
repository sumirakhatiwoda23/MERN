import React from 'react'
import { NavLink } from 'react-router'
import { FaAlignJustify } from "react-icons/fa6";


export default function Header() {
  return (
    <div className='bg-black text-white font-semibold px-5 py-5 flex items-baseline justify-between'>
<FaAlignJustify  size={19}/>
<nav className='flex gap-5'>

</nav>


    </div>
  )
}
