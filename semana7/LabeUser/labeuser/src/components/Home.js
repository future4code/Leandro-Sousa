import React from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';

const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`

const headers = {
  headers: {
    Authorization: "leandro-wilker-lovelace",
  },
};

class Home extends React.Component {
  state = {
    inputNome: "",
    inputEmail: "",
  };


  mudaInputNome = (e) => {
    this.setState({ inputNome: e.target.value });
  };

  mudaInputEmail = (e) => {
    this.setState({ inputEmail: e.target.value });
  };


  novoUsuario = () => {
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail,
    };
    axios
      .post(url, body, headers)
      .then((res) => {
        alert("Usuario cadastrado com sucesso!");
        this.setState({ inputNome: "" });
        this.setState({ inputEmail: "" });
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  }

  render() {


    return (
      <div>
        <h1>LabeUsers</h1>
        <input
          value={this.state.inputNome}
          onChange={this.mudaInputNome}
        />
        <input
          value={this.state.inputEmail}
          onChange={this.mudaInputEmail}
        />
        <button onClick={this.novoUsuario}>Enviar</button>
        <button onClick={this.props.irParaLista}>Ir para lista</button>
      </div>
    )
  }
}

export default Home;