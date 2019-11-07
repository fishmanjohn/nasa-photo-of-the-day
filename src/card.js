import React from 'react'

const Card = (prop) =>{
    console.log(prop)
    return (
        <div>
            <img alt="" src={prop.hdurl}>
            </img>
            <h1>{prop.title}</h1>
            <p>{prop.explanation}</p>
            <p>{prop.date}</p>
        </div>
    )
};
export default Card;
