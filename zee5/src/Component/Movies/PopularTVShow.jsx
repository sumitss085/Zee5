import SliderCarousel from "../SliderCarousel/SliderCarousel"


function PopularTVShow (){
    return (
        <>
          <SliderCarousel URL={"https://api.themoviedb.org/3/tv/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&with_origin_country=IN"} title="Popular TV Show"/>
        </>
    )
}

export default PopularTVShow