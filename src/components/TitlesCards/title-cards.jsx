import React, { useEffect, useRef } from 'react'
import classes from "../TitlesCards/title-cards.module.css"
import cards_data from '../../assets/cards/cards_data';



const TitleCards = ({title,category}) => {

  const cardsRef = useRef();
  const handlewheel = (event)=>{
    cardsRef.current.scrollLeft += event.deltaY; 
}

useEffect(() =>{
  cardsRef.current.addEventListener('wheel',handlewheel);
},[])

  return (
    <div className={classes.title_cards}>
      <h2>{title?title : "Popular on Netflix"}</h2> 
      <div className={classes.card_list} ref={cardsRef}> 
        {
          cards_data.map((card, index)=>{
            return <div className={classes.card} key={index}>
              <img src={card.image} alt="" />
              <p>{card.name}</p>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default TitleCards