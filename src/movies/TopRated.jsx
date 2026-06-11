import React from 'react'
import MovieCompo from './MovieCompo'
import { useGetTopRatedQuery } from './movieApi'

export default function TopRated() {
 
    const{isLoading, data,error}=useGetTopRatedQuery();


    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Something went wrong...</p>

  return (
    <div className='p-5 grid grid-cols-4 gap-3'>
    
    {data.results.map((movie) => (
      <MovieCompo key={movie.id} movie={movie} />
    
    ))}


    </div>
  )
}
