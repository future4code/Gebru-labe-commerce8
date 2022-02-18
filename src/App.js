// Realizando as importações 
import React from 'react';                                          // Importando o React
import listaProd from './Lista/listaDeProdutos.json';               // Importando a lista de produtos

import {ComponenteFiltro} from './Components/PastaFilters/filtro';  // Importando o Componente do filtro
import Card from './Components/PastaCard/Card';                               // Importando o Componente do Card
import Carrinho from './Components/PastaCarrinho/Carrinho'                        // Importando o Componente do Carrinho
import {CarrinhoContainer} from './Components/PastaCarrinho/styledCarrinho';
import {ContainerHeader} from './Components/PastaHeader/header';    // Importando o Header da página


export default class App extends React.Component{
  // Criando um estado
  state = {
    
    camisetas: listaProd,
    // ============================
    inputValorMinimo: '',
    inputValorMaximo: '',
    inputBuscarPorNome: '',
    sortingParameter: 'title',
    order: 1,
    
    // ============================
    //Produto no Carrinho
    produtoNoCarrinho: [
      {
        id: 14,
        title: "Camiseta de Robô",
        price: 100,
        quantidade: 1
    },
    ]  
  }

  // ======================================================================
  // FILTRO
  // Puxa os itens salvos no localStorage para os campos de input novamente, 
  // caso a página seja recarregada
  componentDidMount(){
    this.pegarInfos()
  }

  // Salva os dados digitados no filtro no localStorage
  componentDidUpdate(prevProps, prevState){
    if(prevState.inputValorMinimo !== this.state.inputValorMinimo){
        localStorage.setItem("valorMinimo", this.state.inputValorMinimo)
    }
    if(prevState.inputValorMaximo !== this.state.inputValorMaximo){
        localStorage.setItem("valorMaximo", this.state.inputValorMaximo)
    }
    if(prevState.inputBuscarPorNome !== this.state.inputBuscarPorNome){
        localStorage.setItem("BuscarPorNome", this.state.inputBuscarPorNome)
    }
  }

  // Atualiza os valores digitados nos inputs para o state
  mudaValorMinimo = (event) => {
    this.setState({ inputValorMinimo: event.target.value })
  }
  mudaValorMaximo = (event) => {
    this.setState({ inputValorMaximo: event.target.value })
  }
  mudaBuscaPorNome = (event) => {
    this.setState({ inputBuscarPorNome: event.target.value })
  }
  mudaSortingParameter = (event) => {
    this.setState({ SortingParameter: event.target.value })
  }
  mudaOrder = (event) => {
    this.setState({ order: event.target.value })
  }

  // Função para pegar as informações do localStorage e enviar para o componentDidMount
  // quando a página for recarregada
  pegarInfos = () => {
    const valorMinimoSalvo = localStorage.getItem('valorMinimo')
    const valorMaximoSalvo = localStorage.getItem('valorMaximo')
    const buscarPorNomeSalvo = localStorage.getItem('BuscarPorNome')

    this.setState({
      inputValorMinimo: valorMinimoSalvo,
      inputValorMaximo: valorMaximoSalvo,
      inputBuscarPorNome: buscarPorNomeSalvo
    })
  }

  // Função para limpar os campos do filtro com o botão Limpar filtro
  deletarFiltro = () => {
    this.setState({
      inputValorMinimo: '',
      inputValorMaximo: '',
      inputBuscarPorNome: ''
    })
  }
 


  // ==============================================================================
  // FUNÇÃO CARRINHO
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

  
// ======================================================================
// RENDER
  render(){
    const meusProdutos = this.state.camisetas.map((produto) => {
      return (
        <Card
          key={produto.id}
          produto={produto}
          AdicionaCarrinho={this.AdicionarCarrinho}
        />)
    })

    const meuCarrinho = this.state.produtoNoCarrinho.map((produto) => {
      return (
        <Carrinho
          key={produto.id}
          camisetasNoCarrinho={produto}
          removerItens={this.limparCarrinho}
          AdicionaCarrinho={this.AdicionarCarrinho}
        />)
    })

    
    const funcaoFiltro = () => {

    this.state.camisetas.filter(prod => {
      return (prod.title.toLowerCase().includes(this.state.inputBuscarPorNome.toLowerCase()))
    })
    .filter(prod => {
      return (this.state.inputValorMinimo === "" || prod.price >= this.state.inputValorMinimo)
    })
    .filter(prod => {
      return (this.state.inputValorMaximo === "" || prod.price <= this.state.inputValorMaximo)
    })
    .sort((currentProd, nextProd) => {
      switch (this.state.sortingParameter){
        case "title":
          return this.state.order * (currentProd.title.localeCompare(nextProd.title))
        default:
          return this.state.order * (currentProd.price - nextProd.price)
      }
    })
    .map(prod => {
      return (
        <Card 
          key={prod.id} 
          prod={prod}
          AdicionaCarrinho={this.AdicionarCarrinho}

        />)
    })
    }

    return (       
      <div>
        <div>
          <ContainerHeader/>
        </div>
        <div>
          <ComponenteFiltro
          inputValorMinimo={this.state.inputValorMinimo}
          mudaValorMinimo={this.mudaValorMinimo}

          inputValorMaximo={this.state.inputValorMaximo}
          mudaValorMaximo={this.mudaValorMaximo}

          inputBuscarPorNome={this.state.inputBuscarPorNome}
          mudaBuscaPorNome={this.mudaBuscaPorNome}

          deletarFiltro={this.deletarFiltro}
          sortingParameter={this.state.sortingParameter}

          order={this.state.order}
          mudaOrder={this.mudaOrder}
          />

          {funcaoFiltro}
          
          {meusProdutos}
        </div>
        
        <CarrinhoContainer>
          <h3>Carrinho</h3>
          {meuCarrinho}
          <p><b>Valor total carrinho: </b>R${this.valorTotal()},00</p>
        </CarrinhoContainer>
      </div>
    )
  }
}