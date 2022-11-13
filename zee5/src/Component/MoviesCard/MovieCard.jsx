import { Link } from 'react-router-dom'
import './MovieCard.css'

function MovieCard({movie}){
  

    return (
        <>
        <div className='Card'>
            <Link to={`/singlepage/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/original${movie && movie.poster_path}`} alt="Image Not Found" />
            </Link>
           
         
        </div>
        </>
    )
}

export default MovieCard



//https://image.tmdb.org/t/p/original${movie && movie.poster_path}