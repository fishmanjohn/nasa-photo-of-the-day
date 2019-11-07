import React from 'react'
import styled from 'styled-components';

const FlexHeader = styled.div`
height:75px;
display:flex;
justify-content:space-evenly;
align-items;center;
border-bottom: 3px solid black;
margin-bottom: 20px;
`;


const Header = () =>{
    return (
        <FlexHeader>
            <h1>NASA</h1>
            <h2>Photo Of The Day.</h2>
        </FlexHeader>
    )
};
export default Header;