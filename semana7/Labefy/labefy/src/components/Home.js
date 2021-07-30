import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`

const headers = {
    headers: {
        Authorization: "leandro-wilker-lovelace",
    }
}

const Inputs = styled.div`
display: flex;
flex-direction: column;
width: 160px;
padding: 20px;

button {
width: 110px;
height: 30px;
}

`

export default class Home extends React.Component {
    state = {
        playLists :[
            {
            name:"Forró"
        },
    ],
    inputNome: "",
    inputArtist:"",
    inputUrl:""

    }
  
    componentDidMount = () =>{
        this.pegarPlaylists()
    }

    pegarPlaylists = () => {
        axios
        .get(url, headers)
        .then((res) => {
            this.setState({playLists: res.data.result})
            console.log(res)
        })
        .catch((error) => {
            alert(error)
        })
    }

    mudaInputNome = (e) => {
        this.setState({inputNome: e.target.value})
    }

    mudaInputArtist = (e) => {
        this.setState({inputArtist: e.target.value})
    }

    mudaInputUrl = (e) => {
        this.setState({inputUrl: e.target.value})
    }

    novaMusica = () => {
        const body = {
            name:"string",
            artist:"string",
            url:"string"
        }
        axios
        .post(url, body ,headers)
        .then((res) => {
            alert("Música adicionada com sucesso!")
            this.setState({inputNome:""})
            this.setState({inputArtist:""})
            this.setState({inputUrl:""})
        })
        .catch((error) => {
            alert(error.data.message)
        })
    }

    render(){
        // const componentePlayList = this.state.playLists.map((n) => {
        //     return <li key={n.id}>{n.name}</li>;
        // })

        return(
            <div>
                <div>
            <h2>Suas Playlists</h2>
           

                </div>
                <Inputs>
            <h3>Criar Playlists</h3>
            <input placeholder="Nome da Música" 
                value={this.state.inputNome}
                onChange={this.mudaInputNome}
            />
            <input  placeholder="Nome do artista"
                value={this.state.inputArtist}
                onChange={this.mudaInputArtist}
                
            />
            <input placeholder="URL da musica"
                value={this.state.inputUrl}
                onChange={this.mudaInputUrl}
                
            />
            <button onClick={this.novaMusica}>Enviar Música</button>
            </Inputs>

            </div>
        )
    }
  }