import React, { useState } from 'react'
import "../Assets/css/LoginSignUp.css";

import user_icon from "../Assets/Images/user.png";
import email_icon from "../Assets/Images/email.png";
import password_icon from "../Assets/Images/password.png"; 
import google_icon from "../Assets/Images/google.png";
import twitter_icon from "../Assets/Images/twitter.png";
import facebook_icon from "../Assets/Images/facebook.png";


const LoginSignUp = () => {

  const [action,setAction]=useState("Sign Up");

  return (
    <div className="container">
      <div className='header'> 
      <div className='text'>{action}</div>
      <div className='underline'></div> 
      </div>
<div className='inputs'>

        {action==="Login"?<div></div>:<div className='input'>
  <img src={user_icon} alt=""/>
  <input type="text" placeholder='Name'/>
  </div>}

 
  <div className='input'>
  <img src={email_icon} alt=""/>
  <input type="email" placeholder='Email'/>
  </div>

  <div className='input'>
  <img src={password_icon} alt=""/>
  <input type="password" placeholder='Password'/>
  </div>
</div>

{action==="Sign Up"? <div className='signInusing'>SignIn Using:</div>:<div className="forgot-password">Forget Password? <span>Click Here! </span></div>}
<div class="row">
  <div class="column">
    <img className='footer' src={google_icon} alt="Snow" />
  </div>
  <div class="column">
    <img className='footer' src={twitter_icon} alt="Forest" />
  </div>
  <div class="column">
    <img  className='footer' src={facebook_icon} alt="Mountains" />
  </div>
</div>

<div className='submit-container'>
  <div className={action==="Login"?"submit g":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
  <div className={action==="Sign Up"?"submit g":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
</div>


</div>
    
  )
}

export default LoginSignUp