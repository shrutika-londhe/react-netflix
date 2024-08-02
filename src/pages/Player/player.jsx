import React, { useEffect, useState } from 'react'
import classes from '../Player/player.module.css';
import { useNavigate, useParams } from 'react-router-dom';


const Player = () => {

  const {id} = useParams();

  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name:"",
    key: "",
    published_at: "",
    type_of: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDM4ZDQ1ZWRlNTNhNmZmZDQxOTk5MGY3MTU5M2NkYyIsIm5iZiI6MTcyMjYyMzExOS44OTI3OTcsInN1YiI6IjY2YWQyMzJkZDNjMTM1N2NjYTAxMWQ2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rRqK6y6Wag8XZwB-iS3dJboC0dyq_9a-bHWKQSdxQTc'
    }
  };

  useEffect(() =>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
  },[]);

  return (
    <div className={classes.player}>
      <span><i class="fa-solid fa-circle-arrow-left" onClick={() =>{navigate(-2)}}></i></span>
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`} frameborder="0" width="90%" height="90%" title='trailer' allowFullScreen>
      </iframe>
      <div className={classes.player_info}>
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type_of}</p>
      </div>
    </div>
  )
}

export default Player