import React from 'react';
import styled from 'styled-components'
import Card from './components/Card';

const ContainerPrincipal = styled.div `
display: grid;
grid-template-rows: 1fr 1fr 1fr;
grid-template-columns: 1fr 3fr 1fr;
`
const ContainerSecundario = styled.div `
display: grid;
align-items: center;
justify-items: center;
border: 1px solid black;
`

export default class App extends React.Component {

  render() {

    return (
      <div>
        <h1> MINHA HOME TESTE</h1>
        <ContainerPrincipal>
          <ContainerSecundario>QUADRO FILTRO</ContainerSecundario>
          <ContainerSecundario>
            <Card />
          </ContainerSecundario>
          <ContainerSecundario>QUADRO CARRINHO</ContainerSecundario>
        </ContainerPrincipal>
      </div>
    )
  }
}