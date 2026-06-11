import React from 'react'
import { useGetPopularMovieQuery } from './movieApi'
import MovieCompo from './MovieCompo'
import { useSearchParams } from 'react-router'
import { Button } from '@/components/ui/button';

export default function Popular() {

    const[searchParams,setSearchParams ]=useSearchParams();

    const page=searchParams.get('page') || 1;
 
    const{isLoading, data,error}=useGetPopularMovieQuery(page)
  

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Something went wrong...</p>

  return (
    <div>

        <div className='p-5 grid grid-cols-4 gap-3'>
        
        {data.results.map((movie) => (
          <MovieCompo key={movie.id} movie={movie} />
        
        ))}
    
    
        </div>
        <div className='flex gap-5'>
            <Button 
            disabled={Number(page)===1}
            onClick={() => setSearchParams({page: Number(page) - 1})}
            >Prev</Button>
            <h1>{page} </h1>
            <Button
            onClick={() => setSearchParams({page: Number(page) + 1})}
            >Next</Button>
        </div>
    </div>
      )
}
