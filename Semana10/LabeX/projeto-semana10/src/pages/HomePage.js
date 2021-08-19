import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components"

const HomepageAll = styled.div`
display: flex;
flex-direction: column;
text-align: center;
padding-top: 30%;

p {
    padding: 30px;
    background-color: brown; 
}
`


export const HomePage = () => {
    const history = useHistory();

    const goToListTrips = () => {
        history.push("/listtrips")
    }

    const goToLoginPage = () => {
        history.push("/loginpage")
    }



    return(
        <HomepageAll>     
        <p>Home Page</p>
        <div> 
        <button onClick={goToListTrips}> Viagens </button>
        <button onClick={goToLoginPage}> login </button>
        </div>
        </HomepageAll>
        
    )
}