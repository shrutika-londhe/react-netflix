import card1 from "../../assets/cards/card1.jpg"
import card2 from "../../assets/cards/card2.jpg"
import card3 from "../../assets/cards/card3.jpg"
import card4 from "../../assets/cards/card4.jpg"
import card5 from "../../assets/cards/card5.jpg"
import card6 from "../../assets/cards/card6.jpg"
import card7 from "../../assets/cards/card7.jpg"
import card8 from "../../assets/cards/card8.jpg"
import card9 from "../../assets/cards/card9.jpg"
import card10 from "../../assets/cards/card10.jpg"
import card11 from "../../assets/cards/card11.jpg"
import card12 from "../../assets/cards/card12.jpg"
import React from 'react'
import classes from '../cards/cards.module.css'

const Cards = () => {
  return (
    <div>
        
      <div className={classes.grid}>
          <div className={classes.col_pd}>
            <img src={card1} alt="" />
            <h4 className={classes.center}>Maharaja</h4>
          </div>  
          <div className={classes.col_pd}>
            <img src={card2} alt="" />
            <h4 className={classes.center}>Srikanth</h4>
          </div> 
          <div className={classes.col_pd}>
            <img src={card3} alt="" />
            <h4 className={classes.center}>Laapata Ladies</h4>
          </div> 
          <div className={classes.col_pd}>
            <img src={card4} alt="" />
            <h4 className={classes.center}>Savi</h4>
          </div> 
          <div className={classes.col_pd}>
            <img src={card5} alt="" />
            <h4 className={classes.center}>Animal</h4>
          </div> 
          <div className={classes.col_pd}>
            <img src={card6} alt="" />
            <h4 className={classes.center}>Crew</h4>
          </div> 
          <div className={classes.col_pd}>
            <img src={card7} alt="" />
            <h4 className={classes.center}>Dhunki</h4>
          </div>   <div className={classes.col_pd}>
            <img src={card8} alt="" />
            <h4 className={classes.center}>Mr & Mrs Mahi</h4>
          </div> 
          <div className={classes.col_pd}>
            <img src={card9} alt="" />
            <h4 className={classes.center}>Article 370</h4>
          </div> 
          <div className={classes.col_pd}>
            <img src={card10} alt="" />
            <h4 className={classes.center}>Bade Miyan Chote Miyan</h4>
          </div> 
          <div className={classes.col_pd}>
            <img src={card11} alt="" />
            <h4 className={classes.center}>Fighter</h4>
          </div> 
          <div className={classes.col_pd}>
            <img src={card12} alt="" />
            <h4 className={classes.center}>Leo</h4>
          </div> 
      </div>
    </div>

  )
}

export default Cards