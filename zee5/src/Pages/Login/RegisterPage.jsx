

import React from 'react'
import './Register.css'
import { Button, CloseButton } from "@chakra-ui/react"
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <>
    <div className='box'>
        <h3 className='head'>Create a new account</h3>
        <div className='head_bot' >
        <p>Create an account to continue enjoying uninterrupted video and personalised experience</p>
        </div>
        
        <Button id="signinbtn" leftIcon={<FcGoogle id="google" />} w="272px"    color="red" bg="white" variant='solid'>Sign in</Button>
        <div className="input-box">
                <input id="user-pass" type="password" name="" required/>
                <label>Mobile Number</label>
        </div>
        <div className='input-checked'>
            <input type="checkbox" />
            <label id="check-label">By proceeding you  agree to our Terms of Service & Privacy Policy   </label>
        </div>

        <div>
        <Button colorScheme='black' variant='outline' w="272px" fontSize="12px" onClick={<Navigate to="/login"/>}> Send OTP</Button>
        </div>
        
        <div className="return_login">
            <p>Already registered? <Link to="/login">Login</Link> </p>
        </div>
        

    </div>

    <div>
      <Link to='/'><CloseButton size='md' id="closebtn" /></Link>
    
        </div>



    </>
  )
}

export default RegisterPage