import React from 'react';
import styled from 'styled-components';

const StiloPequeno = styled.div `
  display: flex;
    align-items: center;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const TituloPequeno = styled.h4 `
    margin-bottom: 15px;
    padding: 20px;
    border: 1px solid black;
`

const PPequeno = styled.p `
    margin-bottom: 15px;
    padding: 20px;
    border: 1px solid black;
`

const CardContainerP = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`



function CardPequeno(props) {
    return (
        <StiloPequeno>
            <CardContainerP>
                <TituloPequeno>{ props.endereco }</TituloPequeno>
                <PPequeno>{ props.email }</PPequeno>
            </CardContainerP>
        </StiloPequeno>
        
    )
}

export default CardPequeno;
