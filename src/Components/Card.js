import React from 'react';
import styled from 'styled-components'

const ContainerPrincipal = styled.div`
display: grid;
align-items: center;
text-align: center;
justify-items: center;
border: 1px solid black;
grid-template-rows: 1fr;
grid-template-columns: 1fr 1fr 1fr 1fr;
row-gap: 6px;
column-gap: 6px;
padding: 10px 10px 10px 10px;
`

const ProdutoImagem = styled.img`
  height: 200px;
  width: 200px;
  margin-right: 10px;
  border-radius: 50%;
`

export default class Card extends React.Component {


    render() {
    
        const produto = this.props.produto

      return (
        <ContainerPrincipal>
            <ProdutoImagem src={produto.imagem}></ProdutoImagem>
            <p><b>{produto.title}</b></p>
            <p>Valor do produto: R${produto.price},00</p>
            <button onClick={() => this.props.AdicionaCarrinho(produto.id)}>Adicionar no carrinho</button>
        </ContainerPrincipal>
      )
    }
  }