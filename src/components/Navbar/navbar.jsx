import React, { useEffect, useReducer, useRef } from 'react'
import classes from '../Navbar/navbar.module.css'
import logo from '../../assets/mainlogo.png'
import search_icon from '../../assets/search.png'
import bell_icon from '../../assets/bell_icon.png'
import profile from '../../assets/profile.png'
import drop from '../../assets/drop.png'

const Navbar = () => {

    const navRef = useRef();

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY >= 80){
                navRef.current.classList.add(classes.navdark);
            }else{
                navRef.current.classList.remove(classes.navdark);
            }
        })

    },[])


  return (
       <div className={classes.navbar}>
            <div className={classes.navbar_left}>
                <img src={logo} alt="" height={87} width={100} />
                <ul>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse by Languages</li>
                </ul>
            </div>
            <div className={classes.navbar_right}>
                <img src={search_icon} alt="" className='icons'/>
                <p>Children</p>
                <img src={bell_icon} alt="" className='icons'/>
                <div className={classes.navbar_profile}>
                    <img src={profile} alt="" className='icons'/>
                    <img src={drop} alt="" className='icons'/>
                    <div className={classes.dropdown}>
                        <p>Sign Out of Netflix</p>
                    </div>
                </div>
            </div>
       </div>
  )
}

export default Navbar