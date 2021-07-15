import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`


export class SecaoComentario extends Component {
	state = {
		valor:""
		};

	onChangeComentario = (event) => {
		this.setState({valor: event.target.value})
		console.log(this.state.valor)
	}

	render() {
		return (<CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={this.state.valor}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</CommentContainer>
		);		 
	}
	
}
