import React from 'react';
import  {ContainerPrincipal} from './styledCarrinho';

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
