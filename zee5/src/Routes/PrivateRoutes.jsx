

import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'



const PrivateRoutes = ({children}) => {
    let {isAuth}=useContext(AuthContext)

    console.log(isAuth)


    if(!isAuth){
        return <Navigate to="/login"/>
    }

 return children
  
}

export default PrivateRoutes