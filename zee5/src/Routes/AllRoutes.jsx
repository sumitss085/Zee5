import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home/Home"


import Movie from "../Pages/Movie/Movie"
import News from "../Pages/News/News"
import TV_Show from "../Pages/TV_Show/TV_Show"
import WebSeries from "../Pages/WebSeries/WebSeries"


function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/tvshow" element={<TV_Show/>}></Route>
            <Route path="/movie" element={<Movie/>}></Route>
            <Route path="/webseries" element={<WebSeries/>}></Route>
            <Route path="/news" element={<News/>}></Route>
            <Route path="/singlepage/:id" element={<News/>}></Route>
            <Route path="*" element={<News/>}></Route>


        </Routes>
     

    )
}

export default AllRoutes