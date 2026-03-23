import CategoryMealList from '../meals/CategoryMealList'
import React from 'react'

export default function Home() {
  return (
    <div className='text-white px-14'>



<div className='flex flex-row items-center'>
  <img src="https://www.themealdb.com/images/meal-icon.png" alt="" />

<div className='text-center space-y-4'>
  <h1 className='text-4xl '>Welcome to TheMealDB</h1>
  <p>Welcome to TheMealDB: An open, crowd-sourced database of recipes from around the world.
We offer a free recipe API for anyone wanting to use it, with additional premium features if required.
</p>
</div>

<img src="https://www.themealdb.com/images/meal-icon.png" alt="" />




</div>



<hr />
<CategoryMealList/>
    </div>
  )
}
