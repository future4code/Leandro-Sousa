import axios from 'axios';
import React from 'react';

import styled from 'styled-components';

import Home from './components/Home';
import Labefy from './img/Labefy2.png'

const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`

const headers = {
    headers: {
        Authorization: "leandro-wilker-lovelace",
    }
}

const Header = styled.div` 
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: black;
color: white;

img{
  width: 10%;
  
}

input{
  width: 100px;
  height: 30px;
 
}

`
const Input = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

`



export default class App extends React.Component {
  state = {
    estadotela:"Home",
  }


  renderizarTelas = () => {
    if(this.state.estadotela) {
      return <Home irParaHome={this.irParaHome}/>
    }
  }

  irParaHome = () => {
    this.setState({estadotela:"Home"})
  }

  pegarMusicas = () => {
    axios
    .get(url, headers)
    .then((res) => {
      this.setState({})
    })
  }


  render(){
    return (
      <div>
      <Header>
      <img src= {Labefy} alt="" />
      <h1>Seu site de musicas</h1>
      <Input>
      <input placeholder="Buscar Música"
       
      />
      </Input>
      </Header>
      {this.renderizarTelas()}
      </div>
     
  )
}
}


