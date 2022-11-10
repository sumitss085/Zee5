import SliderCarousel from "../SliderCarousel/SliderCarousel"


function TrendingMovies (){
    return (
        <>
          <SliderCarousel URL={"https://api.themoviedb.org/3/discover/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&with_origin_country=IN"}/>
        </>
    )
}

export default TrendingMovies