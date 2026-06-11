import React from 'react'
import { useGetVideoMovieQuery } from './movieApi'

export default function MovieVideo({id}) {

    const {isLoading, data,error}=useGetVideoMovieQuery(id)

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Something went wrong...</p>
    console.log(data)

  return (
    <div>
    <h2>Videos</h2>
    <div className=' w-full flex overflow-scroll gap-5 mt-3'>
    {data.results.map((video) => (  
        <iframe
          key={video.id} 
          width="560"
          height="315"
          className='shrink-0'
          src={`https://www.youtube.com/embed/${video.key}`}
        
          title={video.name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ))}   
      </div>
    </div>
  )
}
