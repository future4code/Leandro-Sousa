import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const LoginPage = () => {
    const history = useHistory();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const historyGoBack = () => {
        history.goBack()
    }

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const onSubmitLogin = () => {
        console.log(email, password)
        const body = {
            email: email,
            password: password
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/leandro/login', body)
        .then((response) => {
            console.log("Deu certo",response.data)
            localStorage.setItem('token', response.data.token)
            history.push("/admpage")
        }).catch((error) => {
            console.log("Deu errado",error.response)
        })
             

    }

    return(
        <div>      
        <p>AdmPage</p>
        <input 
            placeholder ="email"
            type ="email"
            value ={email}
            onChange ={onChangeEmail}
        />
        <input 
            placeholder ="password"
            type ="password"
            value ={password}
            onChange ={onChangePassword}
        />
        <button onClick={onSubmitLogin}>Enviar</button>
        <button onClick={historyGoBack}>Voltar</button>
        </div>
        
    )
}
