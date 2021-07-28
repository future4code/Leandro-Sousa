import React from "react";

class Tela1 extends React.Component {
  render() {
    return (
      <div>
        <h2>Login</h2>
        {this.props.}
        <button onClick={this.props.voltarTela}>Voltar</button>
      </div>
    );
  }
}

export default Tela1;