import React from 'react';
import Home from './components/Home';
import axios from 'axios';
import { render } from '@testing-library/react';
import Tela1 from './components/Tela1';


export default class App extends React.Component {
  state = {
    estadoTelas: true
  };

  renderizaTelas = () => {
    if(this.state.estadoTelas) {
      return <Home irParaLista={this.voltarTela} />
    }else {
      return <Tela1 voltarTela={this.passarDeTela} />
    }
  }

  passarDeTela = () => {
    this.setState({ estadoTelas: true })
  }

  voltarTela = () => {
    this.setState({ estadoTelas: false })
  }


    render() {
      return (
        <div>
          <h1>LabeUsers</h1>
          <hr/>
          {this.renderizaTelas()}
        </div>
      )
    }
}
