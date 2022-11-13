import SliderCarousel from "../SliderCarousel/SliderCarousel"


function TVShow (){
    return (
        <>
          <SliderCarousel URL={"https://api.themoviedb.org/3/tv/on_the_air?api_key=4e44d9029b1270a757cddc766a1bcb63&with_origin_country=IN"} title="TV Show"/>
        </>
    )
}

export default TVShow