import React from 'react';
import styled from 'styled-components';

const ContainerPrincipal = styled.div`
display: grid;
align-items: center;
text-align: center;
justify-items: center;
grid-template-rows: 1fr;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
row-gap: 6px;
column-gap: 6px;
`

export default class Carrinho extends React.Component {

    render() {

        const produto = this.props.camisetasNoCarrinho

        const totalProduto = produto.price * produto.quantidade

      return (
        <ContainerPrincipal>
        <p><b>Nome do produto: </b>{produto.title}</p>
        <p><b>Valor do produto: R$:</b>{produto.price},00</p>
        <button onClick={() => this.props.AdicionaCarrinho(produto.id)}>+</button>
        <p><b>Quantidade: </b>{produto.quantidade}</p>
        <button onClick={() => this.props.removerItens(produto.id)}>-</button>
        <p><b>Valor total produto: </b>R${totalProduto},00</p>
        </ContainerPrincipal>
      )
    }
  }