import './MovieCard.css'

function MovieCard({movie}){
   

    return (
        <>
        <div className='Card'>
            <img src={`https://image.tmdb.org/t/p/original${movie && movie.poster_path}`} alt="pic" />
         
        </div>
        </>
    )
}

export default MovieCard



//https://image.tmdb.org/t/p/original${movie && movie.poster_path}