import React from 'react'
import classes from '../Home/home.module.css';
import Navbar from '../../components/Navbar/navbar'
import hero from '../../assets/hero.jpg'
import poster from '../../assets/poster.png';

import { Container } from 'react-bootstrap';
import TitleCards from '../../components/TitlesCards/title-cards';
import Footer from '../../components/Footer/footer';

const Home = () => {
  return (
    
    <div>
       <Navbar/>

       <div className={classes.hero}>
          <img src={poster} alt="" className={classes.banner_img} />
            <div className={classes.hero_caption}><br /><br />
                <p className={classes.title_css}>Maharaja</p>
                <p>Maharaja recounts the incident but a flashback depicts the actual event, revealing that the incident happened not to him but to Jothi. Jothi had returned home from sports camp while he was at work.</p><br />
                <div className={classes.hero_btn}>
                  <button className={classes.btn}>
                  <i class="fa-solid fa-play"></i>
                    <span>Play</span>
                  </button>
                  
                  <div className={classes.btn_dark}>
                  <i class="fa-solid fa-circle-info"></i>
                    <span className={classes.center}>More info</span>
                  </div>
                  
                  {/* <button className={`${classes.btn} ${classes.btn_dark}`}><img src={info_icon} alt="" />More Info</button> */}
                </div>
                <TitleCards/>
            </div>
         </div>
      <div className={classes.more_cards}>
      <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
      <TitleCards title={"Only on Netflix"} category={"popular"}/>
      <TitleCards title={"Upcoming"} category={"upcoming"}/>
      <TitleCards title={"Top Pics for you"} category={"now_playing"}/>
      <Footer/>
        </div>      
    </div>
  )
}


export default Home