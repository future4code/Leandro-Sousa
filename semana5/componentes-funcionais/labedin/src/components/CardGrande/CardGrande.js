import React from 'react';
import styled from 'styled-components';

const Stilo = styled.div `
  display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const ImagemPequeno = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const TituloGrande = styled.h4 `
    margin-bottom: 15px;
`

const CardContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`




function CardGrande(props) {
    return (
        <Stilo>
            <ImagemPequeno src={ props.imagem }/> 
            <CardContainer>
                <TituloGrande>{ props.nome }</TituloGrande>
                <p>{ props.descricao }</p>
            </CardContainer>
            
        </Stilo>
    )
}

export default CardGrande;