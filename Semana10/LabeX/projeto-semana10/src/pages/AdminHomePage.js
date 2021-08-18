import axios from "axios";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const AdminHomePage = () => {
    const history = useHistory();

    const historyGoBack = () => {
        history.goBack()
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/leandro/trips', {
            headers: {
                auth: token
            }
        })
        .then((response) => {
            console.log(response.data.trips)
        }).catch((error) => {
            console.log('Deu erro: ', error.response)
        })   
    })

    const renderInfo = (response) =>{
        return <p>{response.data.trips.name}</p>
    } 



    return(
        <div>
        <p>Painel Administrativo</p>
        <button onClick={historyGoBack}>Voltar</button>
        <button onClick={historyGoBack}>Criar Viagem</button>
        <button onClick={historyGoBack}>Logout</button>
        
        
        </div>
    )
}