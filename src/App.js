import React from 'react';
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
    camisetas: [
        {
            id: 1,
            name: "Camiseta de Astronauta",
            value: 25.0,
            imageUrl: "https://www.usecamisetas.com/media/product/dae/camiseta-infantil-astronauta-espaco-a9b.jpg"
        },
        {
            id: 2,
            name: "Camiseta de Planetas",
            value: 50.0,
            imageUrl: "https://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1620164052"
        },
        {
            id: 3,
            name: "Camiseta de Foguete",
            value: 75.0,
            imageUrl: "https://images.tcdn.com.br/img/img_prod/742661/camiseta_infantil_masculina_preta_foguete_2165_1_20201022092501.jpg"
        },
        {
            id: 4,
            name: "Camiseta de Robô",
            value: 100.0,
            imageUrl: "https://www.camisetas4fun.com.br/media/product/190/camiseta-android-robo-r2-d2-3f5.jpg"
        },
    ],
    produtoNoCarrinho: [
      {
        id: 4,
        name: "Camiseta de Robô",
        value: 100.0,
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
    valorTotal += camisetas.value * camisetas.quantidade
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
