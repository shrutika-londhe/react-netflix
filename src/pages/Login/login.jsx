import React, { useState } from 'react'
import classes from '../Login/login.module.css';
import logo from "../../assets/logo.jpg"
import mainlogo from '../../assets/mainlogo.png'
import {login, signup} from '../../firbase';
import netflix_spinner from '../../assets/netflix_spinner.gif';

const Login = () => {

const [signState, setSignState] = useState("Sign In");

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);


const user_auth = async (event)=>{
  event.preventDefault();
  setLoading(true);

  if(signState === "Sign In"){
    await login(email, password);
  }
  else{
    await signup(name, email, password);
  }
  setLoading(false);
}


  return (
    loading?<div className={classes.login_spinner}>
      <img src={netflix_spinner} alt="" />
    </div>:
    <div>
      <div className={classes.login}>
        <img src={mainlogo} alt="" className={classes.login_logo}/>
        <div className={classes.login_form}>
         <h1>{signState}</h1>
         <form>
          {signState === "Sign Up" ?<input type="text" name="" id="" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Your Name'/>:<></>}
          <input type="email" name="" id="" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' />
          <input type="password" name="" id="" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>
          <button onClick={user_auth} type="submit">{signState}</button>
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