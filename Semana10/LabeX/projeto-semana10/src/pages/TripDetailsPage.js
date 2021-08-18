import axios from "axios";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const useProtectedPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if(token === null) {
            console.log("Não está logado!")
            history.push("/loginpage")
        }
    })
}

export const ListTripsDetails = () => {
    useProtectedPage()
    
    useEffect(() => {
        const token = localStorage.getItem('token') 
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/leandro/trip/ABRpncHql5ysxtfD38nz', {
            headers : {
                auth : token
       }
        })
       
        .then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log('Deu erro: ', error.response)
        })
    })

    return(
        <div>
        <p>Detalhes</p>
        
        </div>
    )
}