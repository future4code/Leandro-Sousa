import React from "react";
import axios from "axios";

const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users`

const headers = {
  headers: {
    Authorization: "leandro-wilker-lovelace",
  },
};

class Tela1 extends React.Component {
  state = {
    Lnomes: [],
    Lemail: [],
  };
  
  componentDidMount = () => {
    this.pegarUsuarios();
  };

  pegarUsuarios = () => {
    axios
      .get(url, headers)
      .then((res) => {
        this.setState({ Lnomes: res.data });
        console.log(res);
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };


  render() {
    const componenteCadastro = this.state.Lnomes.map((n) => {
      return <li key={n.id}>{n.name}</li>;
    })

    return (
      <div>
        <h2>Lista</h2>
        {componenteCadastro}
        <button onClick={this.props.voltarTela}>Voltar</button>
      </div>
    );
  }
}

export default Tela1;