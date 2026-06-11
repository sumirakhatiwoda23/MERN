import { useGetNowPlayingQuery } from '@/movies/movieApi';
import MovieCompo from '@/movies/MovieCompo';
import React from 'react'

export default function Home() {
const {data, error, isLoading} = useGetNowPlayingQuery();

console.log(data)

if(isLoading) return <p>Loading...</p>
if(error) return <p>Something went wrong...</p>

  return (
   
<div className='p-5 grid grid-cols-4 gap-3'>

{data.results.map((movie) => (
  <MovieCompo key={movie.id} movie={movie} />

))}


</div>


  )
}
