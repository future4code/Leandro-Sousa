import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components"

const TripsPageAll = styled.div`
display: flex;
flex-direction: column;
text-align: center;
padding-top: 20%;


`


const CardTrips = styled.div`
background-color: brown;
`

export const ListTrips = () => {
    const history = useHistory();
    const [listTrips, setListTrips] = useState([])

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
            setListTrips(response.data.trips)
        }).catch((error) => {
            console.log('Deu erro: ', error.response)
        })   
    },[])



    const renderListTrips = listTrips.map((trip) => {
        return(
            <CardTrips key={trip.id}>
            <p>{trip.name}</p>
            <p>{trip.description}</p>
            </CardTrips>
        )
    })


    return(
        <TripsPageAll>
        <div>
        <p> Ola viagens</p>
        <button onClick={historyGoBack}>Voltar</button>
        {renderListTrips}
        </div>
        </TripsPageAll>
    )
}