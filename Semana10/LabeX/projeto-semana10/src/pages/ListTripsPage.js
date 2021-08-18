import React from "react";
import { useHistory } from "react-router-dom";

export const ListTrips = () => {
    const history = useHistory();

    const historyGoBack = () => {
        history.goBack()
    }


    return(
        <div>
        <p> Ola viagens</p>
        <button onClick={historyGoBack}>Voltar</button>
        </div>
    )
}