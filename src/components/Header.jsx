import React from 'react'
import { NavLink } from 'react-router'

export default function Header() {
  return (
    <div className='px-9 py-2  sticky top-0 flex items-baseline justify-between'>
<h1> TMDB App</h1>  


<nav className='space-x-7'>
<NavLink to={'/popular'} > Popular </NavLink>
<NavLink to={'/upcoming'} > Upcoming</NavLink>
<NavLink to={'/top-rated'} > Top Rated</NavLink>
</nav>

</div>
)
}
