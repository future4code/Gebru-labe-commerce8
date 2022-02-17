import React from 'react';
import {ContainerHeader} from './Componentes/header';

import listaDeProdutos from './Lista/listaDeProdutos.json'
import {ComponenteFiltro} from './Components/filtro.js';
import Card from './Components/Card';
import Carrinho from './Components/Carrinho'
import styled from 'styled-components';

const CarrinhoContainer = styled.div`
display: grid;
align-items: center;
text-align: center;
justify-items: center;
row-gap: 6px;
column-gap: 6px;
border: 1px solid black;
`

class App extends React.Component{

  state =  {
    camisetas: listaDeProdutos,
    produtoNoCarrinho: [
      {
        id: 14,
        title: "Camiseta de Robô",
        price: 100,
        quantidade: 1
    },
    ]
}

AdicionarCarrinho = (camisetaID) => {
  const camisetaNoCarrinho = this.state.produtoNoCarrinho.find(produto => camisetaID === produto.id)

  if (camisetaNoCarrinho) {
    const attCarrinho = this.state.produtoNoCarrinho.map(produto => {
      if (camisetaID === produto.id) {
        return {
          ...produto,
          quantidade: produto.quantidade + 1
        }
      }
      return produto
    })

    this.setState ({produtoNoCarrinho: attCarrinho})
  } else {
    const camisetaAcrescentar = this.state.camisetas.find(produto => camisetaID === produto.id)

    const novoProdutoNoCarrinho = [...this.state.produtoNoCarrinho, {...camisetaAcrescentar, quantidade: 1}]

    this.setState({produtoNoCarrinho: novoProdutoNoCarrinho})
  }
}

limparCarrinho = (camisetaID) => {
  const camisetaNoCarrinho = this.state.produtoNoCarrinho.map((produto) => {
    if (camisetaID === produto.id) {
      return {
        ...produto,
        quantidade: produto.quantidade - 1
      }
    }
    return produto
  }).filter((produto) => produto.quantidade > 0)

  this.setState({produtoNoCarrinho: camisetaNoCarrinho})
}

valorTotal = () => {
  let valorTotal = 0

  for(let camisetas of this.state.produtoNoCarrinho) {
    valorTotal += camisetas.price * camisetas.quantidade
  }
  return valorTotal
}

  render(){
    const meusProdutos = this.state.camisetas.map((produto) => {
      return <Card
      produto={produto}
      AdicionaCarrinho={this.AdicionarCarrinho}
      />
    })

    const meuCarrinho = this.state.produtoNoCarrinho.map((produto) => {
      return <Carrinho
      camisetasNoCarrinho={produto}
      removerItens={this.limparCarrinho}
      AdicionaCarrinho={this.AdicionarCarrinho}
      />
    })

    return (
      <div>
        <div>
          <ContainerHeader/>
        </div>  
          <ComponenteFiltro/>
        {meusProdutos}
        <CarrinhoContainer>
          <h3>Carrinho</h3>
          {meuCarrinho}
          <p><b>Valor total carrinho: </b>R${this.valorTotal()},00</p>
        </CarrinhoContainer>
     </div>
    )
  }
}
export default App;

