import './App.css';
import React from 'react';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';

let valor = 1;

export default class App extends React.Component {
  state = {
    etapas: valor
  }

  renderizaEtapa = () => {
    switch (this.state.etapas) {
      case 1:
      return <Etapa1 />;
      case 2:
      return <Etapa2 />;
      case 3:
      return <Etapa3 />;
      default:
        return (
          <h2>O FORMULÁRIO ACABOU</h2>,
          <p>Muito Obrigado por participar! Entraremos em contato!</p>
        )
    }
}
 

  mudarEtapa2 = () => {
    this.setState({ etapas: valor = valor + 1})
  }

  mudarBotao = () => { if (valor <=3 ) {
    return ( 
    <button onClick={this.mudarEtapa2}>Próxima etapa</button>)
  }
}

  render() {

    return (
    <div className="App">
        <h1>Labeform</h1>
        <hr />
        {this.renderizaEtapa()}
        {this.mudarBotao()}
      </div>
    )
  

}
}


