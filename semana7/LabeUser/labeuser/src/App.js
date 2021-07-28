import React from 'react';
import Home from './components/Home';
import axios from 'axios';
import { render } from '@testing-library/react';
import Tela1 from './components/Tela1';


export default class App extends React.Component {
  state = {
    estadoTelas: false
  };

  renderizaTelas = () => {
    if(this.state.estadoTelas) {
      return <Home voltarTela={this.passarDeTela} />
    }else {
      return <Tela1 irParaLista={this.voltarTela} />
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
