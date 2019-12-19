import React from 'react'
import styled from 'styled-components';

const SmallerImg = styled.img`
height: 500px;
`;
const TextDiv = styled.div`
width: 80%;
margin: 0% 10%;
`;

const Card = (props) =>{
    console.log(props)
    return (
        <div>
        <SmallerImg alt="Space Picture" src={props.media.hdurl}></SmallerImg>
        <TextDiv>
        <h1>{props.media.title}</h1>
        <p>{props.media.explanation}</p>
        <p>{props.media.date}</p>
        </TextDiv>
    </div>
    )
};
export default Card;
