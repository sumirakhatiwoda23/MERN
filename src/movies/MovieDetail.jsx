import { useParams } from "react-router"
import { useGetMovieQuery } from "./movieApi";
import MovieVideo from "./MovieVideo";

export default function MovieDetail() {

const{id}=useParams();
const{data, isLoading, error  }=useGetMovieQuery(id)



if(isLoading) return <p>Loading...</p>
if(error) return <p>Something went wrong...</p>

console.log(data)


  return (
    <div>
    <h1>{data.title}</h1>
    <p>{data.overview}</p>  
    <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title} />
<MovieVideo
id={data.id}

/>
    </div>
  )
}