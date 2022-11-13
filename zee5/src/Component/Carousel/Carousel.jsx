import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useEffect } from "react";
import axios from 'axios'
import { useState } from "react";
import { Link } from "react-router-dom";
import './Carousel.css'
import UseButton from "../Button/Button";


function CarouselComponent(){

    


    const [PopularMovies,SetPopularMovies]=useState([])


    useEffect(()=>{
  
         axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&with_origin_country=IN`)
         .then((data)=>SetPopularMovies(data.data.results))
         .catch((error)=>console.log(error))
       
    },[])


   
    return (
        <>
        <div className="poster">
        <Carousel  
                    showThumbs={false}
                    showArrows={true}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                    centerMode={true}
                    swipeable={true}
                    stopOnHover={true}
                    transitionTime={500}
                    useKeyboardArrows={true}
                >
                    {
                        PopularMovies.map(movie => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} key={movie.id} >
                                
                                <div className="posterImage">
                                  <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="pic"/>
                                </div>
                                
                                <div className="movie_title">
                                   <h1><b>{movie ? movie.original_title: ""}</b>  </h1>
                                </div>

                                <div className="watch_btn">
                                    <UseButton/>
                                </div>
                              
                              

                                
                              
                            </Link> 
                        ))
                    }
                </Carousel>

        </div>
       
        </>
    )
}

export default CarouselComponent


//https://api.themoviedb.org/3/discover/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&with_origin_country=IN



//https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&region=IN&language=hi-IN