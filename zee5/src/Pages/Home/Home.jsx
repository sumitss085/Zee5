import { useState ,useEffect} from "react"
import CarouselComponent from "../../Component/Carousel/Carousel"
import ImageGrid from "../../Component/LodingSeleton/GridLoading"
import Zee5Loader from "../../Component/LodingSeleton/LodingIndicator"
import LestestMovies from "../../Component/Movies/LestestMovie"
import PopularTVShow from "../../Component/Movies/PopularTVShow"
import TopRatedMovies from "../../Component/Movies/TopRatedMovies"
import TrendingMovies from "../../Component/Movies/TrendingMovies"
import TVShow from "../../Component/Movies/TVShow"
import UpComingMovies from "../../Component/Movies/UpComingMovies"



import './Home.css'




function Home (){

    const [loading,setloading]=useState(true)
    const [gridloading,gridsetloading]=useState(true)

      useEffect(()=>{
        setTimeout(()=>{
            setloading(false)
        },3000)

        
      },[])

      useEffect(()=>{
      

      },[])


return <>

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
                              <PopularTVShow/>
                              <TVShow/>
                                
                            </div>
                }

</>
 
    
 

}

export default Home