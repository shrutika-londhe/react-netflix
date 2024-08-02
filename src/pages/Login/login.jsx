import React, { useState } from 'react'
import classes from '../Login/login.module.css';
import logo from "../../assets/logo.jpg"
import mainlogo from '../../assets/mainlogo.png'

const Login = () => {

const [signState, setSignState] = useState("Sign In");


  return (
    <div>
      <div className={classes.login}>
        <img src={mainlogo} alt="" className={classes.login_logo}/>
        <div className={classes.login_form}>
         <h1>{signState}</h1>
         <form>
          {signState === "Sign Up" ?<input type="text" name="" id="" placeholder='Your Name'/>:<></>}
          <input type="email" name="" id="" placeholder='Email' />
          <input type="password" name="" id="" placeholder='Password'/>
          <button>{signState}</button>
          <div className={classes.form_help}>
            <div className={classes.remember}>
              <input type="checkbox"/>
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
         </form>
         <div className={classes.form_switch}>
          {signState === "Sign In"?  <p>New to Netflix? <span onClick={ () => {setSignState("Sign Up")}} >Sign Up Now</span></p> : 
          <p>Already have account?<span onClick={ () => {setSignState("Sign In")}}>Sign In Now</span></p>}
         </div>
        </div>
      </div>
        
    </div>
  )
}

export default Login