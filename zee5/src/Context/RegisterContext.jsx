import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const RegisterContext=createContext()

const RegisterContextProvider = ({children}) => {



    const [Register,setRegister]=useState(false)

  const RegisterSuccess=()=>{

  }

  const RegisterFailed=()=>{
    
}

  return (
    <RegisterContext.Provider value={{Register,RegisterSuccess,RegisterFailed}}>{children}</RegisterContext.Provider>
  )
}

export default RegisterContextProvider