import React from 'react'

const Card = (media) =>{
    console.log(media)
    return (
        <div>
        <img alt="Space Picture" src={media.media.hdurl}></img>
        <h1>{media.media.title}</h1>
        <p>{media.media.explanation}</p>
        <p>{media.media.date}</p>
    </div>
    )
};
export default Card;
