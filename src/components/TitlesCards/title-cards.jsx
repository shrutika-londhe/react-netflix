import React, { useEffect, useRef, useState } from 'react'
import classes from "../TitlesCards/title-cards.module.css"
import cards_data from '../../assets/cards/cards_data';
import { Link, NavLink } from 'react-router-dom';


const TitleCards = ({title,category}) => {


  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDM4ZDQ1ZWRlNTNhNmZmZDQxOTk5MGY3MTU5M2NkYyIsIm5iZiI6MTcyMjYyMzExOS44OTI3OTcsInN1YiI6IjY2YWQyMzJkZDNjMTM1N2NjYTAxMWQ2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rRqK6y6Wag8XZwB-iS3dJboC0dyq_9a-bHWKQSdxQTc'
    }
  };
  
 

  const handlewheel = (event)=>{
    cardsRef.current.scrollLeft += event.deltaY; 
}

useEffect(() =>{

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setApiData(response.results))
  .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel',handlewheel);
},[])

  return (
    <div className={classes.title_cards}>
      <h2>{title?title : "Popular on Netflix"}</h2> 
      <div className={classes.card_list} ref={cardsRef}> 
        {
          apiData.map((card, index)=>{
            return <NavLink to={`/player/${card.id}`} className={classes.card} style={{ textDecoration: 'none' }} key={index}>
              <img src={`https://image.tmdb.org/t/p/w500/`+card.backdrop_path} alt="" />
              <p className={classes.removeline}>{card.original_title}</p>
            </NavLink>
          })
        }
      </div>
    </div>
  )
}

export default TitleCards