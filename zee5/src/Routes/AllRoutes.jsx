import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import RegisterPage from "../Pages/Login/RegisterPage"


import Movie from "../Pages/Movie/Movie"
import SingleMoviePage from "../Pages/Movie/SingleMoviePage"
import News from "../Pages/News/News"
import TV_Show from "../Pages/TV_Show/TV_Show"
import WebSeries from "../Pages/WebSeries/WebSeries"
import PrivateRoutes from "./PrivateRoutes"


function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/tvshow" element={<PrivateRoutes><TV_Show/></PrivateRoutes>}></Route>
            <Route path="/movie" element={<PrivateRoutes><Movie/></PrivateRoutes>}></Route>
            <Route path="/webseries" element={<PrivateRoutes><WebSeries/></PrivateRoutes>}></Route>
            <Route path="/news" element={<PrivateRoutes><News/></PrivateRoutes>}></Route>
            <Route path="/singlepage/:id" element={<PrivateRoutes><SingleMoviePage/></PrivateRoutes>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<RegisterPage/>}></Route>


        </Routes>
     

    )
}

export default AllRoutes