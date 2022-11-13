

import React, { useEffect, useState } from 'react'
import CarouselComponent from '../../Component/Carousel/Carousel'
import Footer from '../../Component/Footer/Footer'
import Zee5Loader from '../../Component/LodingSeleton/LodingIndicator'
import LestestMovies from '../../Component/Movies/LestestMovie'
import TopRatedMovies from '../../Component/Movies/TopRatedMovies'
import TrendingMovies from '../../Component/Movies/TrendingMovies'
import UpComingMovies from '../../Component/Movies/UpComingMovies'

const Movie = () => {


  const [loading,setloading]=useState(true)
  const [gridloading,gridsetloading]=useState(true)

    useEffect(()=>{
      setTimeout(()=>{
          setloading(false)
      },3000)

      
    },[])
  return (
    <>

{            
                    loading ?
                            <Zee5Loader/>
                           :
                             <div>

                              <CarouselComponent/>
                              <TrendingMovies/>
                              <LestestMovies/>
                              <TopRatedMovies/>
                              <UpComingMovies/>
                            
                                
                            </div>



                }

                <Footer/>


    </>
    
  )
}

export default Movie