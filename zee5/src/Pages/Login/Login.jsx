import './Login.css'

import { FaApple, FaFacebook, FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiTwitter } from 'react-icons/fi';



function Login(){
    return (
        <>
        <div className='login_div'>
            <h1>Login to ZEE5</h1>
            <p>Login to continue enjoying uninterrupted video and personalised experience.</p>
            
            <div className='logo_container'>
                <div ><FaFacebookF  id="facebook"/></div>
                <div ><FaApple id="apple"/></div>
                <div ><FcGoogle id="google"/></div>
                <div ><FiTwitter id="twitter"/></div>
            </div>

            <div></div>
            <div>
             <form action="">
                <div className='"txt_field'>
                    <input type="text" />
                    <span></span>
                    <label >Username</label>
                </div>
                <div className='txt_field'>
                    <input type="password" />
                    <span></span>
                    <label >password</label>
                </div>
                <div className="pass">Forget password</div>
                 <input type="submit" value="Login" />
                 <div className="signup_link">not a member</div>
            
             </form>

            </div>
            <p></p>
        </div>
        </>
    )
}
export default Login