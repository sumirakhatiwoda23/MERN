import React from 'react'
import { useGetPopularMovieQuery } from './movieApi'
import MovieCompo from './MovieCompo'

export default function Popular() {
 
    const{isLoading, data,error}=useGetPopularMovieQuery()


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
