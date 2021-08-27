import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components"

const CardTrips = styled.div`


`

export const AdminHomePage = () => {
    const history = useHistory();
  
    const historyGoBack = () => {
        history.goBack()
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