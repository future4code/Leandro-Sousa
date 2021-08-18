import React from "react";
import { useHistory } from "react-router-dom";

export const HomePage = () => {
    const history = useHistory();

    const goToListTrips = () => {
        history.push("/listtrips")
    }

    const goToLoginPage = () => {
        history.push("/loginpage")
    }



    return(
        <div>      
        <p>Home Page</p>
        <button onClick={goToListTrips}> Viagens </button>
        <button onClick={goToLoginPage}> login </button>
        </div>
        
    )
}