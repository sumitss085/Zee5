import React, { useEffect, useState } from 'react'
import CarouselComponent from '../../Component/Carousel/Carousel'
import Footer from '../../Component/Footer/Footer'
import Zee5Loader from '../../Component/LodingSeleton/LodingIndicator'
import PopularTVShow from '../../Component/Movies/PopularTVShow'
import TVShow from '../../Component/Movies/TVShow'

const TV_Show = () => {


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

                              <CarouselComponent URL={"https://api.themoviedb.org/3/tv/on_the_air?api_key=4e44d9029b1270a757cddc766a1bcb63&with_origin_country=IN"}/>
                           
                              <PopularTVShow/>
                              <TVShow/>
                                
                            </div>
                }

                <Footer/>
    
    
    </>
  )
}

export default TV_Show