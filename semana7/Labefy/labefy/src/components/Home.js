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
        playlists : [],
        inputPlayList:"",
        playlistId:"",
        tracks:[],
    

    
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
            this.setState({playlists: res.data.result.list})
            console.log(res.data)
        })
        .catch((error) => {
            alert(error)
        })
    }

    novaPlaylist = () => {
        const body = {
            name: this.state.inputPlayList
        }
        axios
        .post(url, body, headers)
        .then((res) => {
            alert("Playlist Criada")
            this.setState({inputPlayList:""})
            console.log(res)
        })
        .catch((error) => {
            alert(error)
        })
    }
    
    pegarMusica = () => {
        axios
        .get(url, headers)
        .then((res) =>{
            this.setState({tracks: res})
        })
        .catch((error) => {
            alert(error)
        })
    }

    novaMusica = () => {
        const body = {
            name: this.state.inputNome,
            artist :this.state.inputArtist,
            url: this.state.inputPlayList
        }
        axios
        .post(url, this.state.playlistId, body, headers)
        .then((res) => {
            alert("Música adicionada com sucesso!")
            this.setState({inputNome:""})
            this.setState({inputArtist:""})
            this.setState({inputUrl:""})
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

    mudaInputPlayList = (e) => {
        this.setState({inputPlayList: e.target.value})
    }

    mudaInputPlayListId = (e) => {
        this.setState({playlistId: e.target.value})
    }



    render(){
         const playlists = this.state.playlists.map(playlist => {
             return <p key={playlist.id}>{playlist.name} - {playlist.id}</p>
                   
         })
        return(
            <div>
                <div>
            <h2>Suas Playlists</h2>
            {playlists}
            <h3>Criar Playlist</h3>
            <input placeholder="Nome da PlayList" 
                value={this.state.inputPlayList}
                onChange={this.mudaInputPlayList}
            />
            <button onClick={this.novaPlaylist}>Criar PlayList</button>
            
           

                </div>
                <Inputs>
            <h3>Adicionar Músicas</h3>
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
            <input placeholder="Id da Playlist"
                value={this.state.playlistId}
                onChange={this.mudaInputPlayListId}
                
            />
            <button onClick={this.novaMusica(this.props.playlistId)}>Enviar Música</button>
            </Inputs>

            </div>
        )
    }
  }