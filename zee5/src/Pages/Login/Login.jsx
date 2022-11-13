import './Login.css'

import { FaApple, FaFacebook, FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiTwitter } from 'react-icons/fi';
import { CloseButton } from '@chakra-ui/react';
import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { RegisterContext } from '../../Context/RegisterContext';

let init={
    email:"",
    password:""
}

function Login(){
    let {isAuth,login}=useContext(AuthContext)

    let {Register}=useContext(RegisterContext)

    const [user,setuser]=useState(init)
    let {email,password}=user


    const handlechange=(e)=>{
             let {value,name}=e.target
             setuser((prev)=>({...prev,[name]:value}))
    }

    const handleSubmit=(e)=>{
          e.preventDefault()

        axios.post(`https://reqres.in/api/login`,user).then((data)=>login()).catch((err)=>console.log(err))
    }
     if(isAuth){
        return <Navigate to="/"></Navigate>
     }

    return (
        <>

       
        <div className='login_div'>
            <h1 className='heading'>Login to ZEE5</h1>
            <p id="hed_bot">Login to continue enjoying uninterrupted video and personalised experience.</p>
            
            <div className='logo_container'>
                <div ><FaFacebookF  id="facebook"/></div>
                <div ><FaApple id="apple"/></div>
                <div ><FcGoogle id="google"/></div>
                <div ><FiTwitter id="twitter"/></div>
            </div>


            <div id="main" className="main-container">
                <div className="box">
                    
                        <form>
                            <div className="input-box">
                            <input id="user-name" type="text" name="email" onChange={handlechange} value={email}required/>
                            <label>Email id or obile Number</label>
                            </div>
                            <div className="input-box">
                            <input id="user-pass" type="password" name="password" onChange={handlechange} value={password}required/>
                            <label>Password</label>
                            </div>
                            <input id="submit" type="submit" name="" value="Login" onClick={handleSubmit} />
                        </form>
                        <h4 id="register">New to ZEE5<Link to="/register"> Register</Link></h4>
                        
                </div>
            </div>

            

          
            

            
        </div>
        <div>
        <Link to='/'>  <CloseButton size='md' id="closebtn"/></Link>
  
        </div>
        </>
    )
}
export default Login