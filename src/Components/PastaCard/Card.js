import React from 'react';
import {ContainerPrincipal, ProdutoImagem} from './styledCard';

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