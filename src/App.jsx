import React, {useEffect} from 'react'
import Home from './pages/Home/home'                                                                                                  
import { Routes, Route } from 'react-router-dom'
import Login from "./pages/Login/login";
import Player from "./pages/Player/player";
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from './firbase';
const App = () => {

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) =>{
      if(user){
        console.log("Logged In");
        navigate('/');
      }
      else{
        console.log("Logged Out");
        navigate('/login');
      }
    })
  
    
  }, [])
  
  return (
    <div>
      {/* <ToastContainer theme='dark'/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/player/:id' element={<Player/>}/>
      </Routes>
      </div>
  )
}

export default App