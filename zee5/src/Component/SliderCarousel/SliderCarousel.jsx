import './SliderCarousel.css'
import { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import MovieCard from '../MoviesCard/MovieCard';
import axios from 'axios'


function SliderCarousel({URL,title}){
    const[Movie,SetMovies]=useState([])


    useEffect(()=>{
  
        axios.get(`${URL}`)
        .then((data)=>SetMovies(data.data.results))
        .catch((error)=>console.log(error))
        
   },[])





    const breakpoint=[
       { width:500,itemsToShow:1},
       { width:768,itemsToShow:6},
       { width:1200,itemsToShow:3},
       { width:1500,itemsToShow:4},
    ]
    return (
        <>
  <h1 id="title">{title}</h1>
         <div className="slider_container">
                <Carousel showStatus={false}  breakPoints={breakpoint} >
                       {
                        Movie.map((movie,index)=>(
                            <MovieCard key={movie.id} movie={movie} />
                        )) 
                        }
                </Carousel>
        </div>
        </>
   
    )
}

export default SliderCarousel
