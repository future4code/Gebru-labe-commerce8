import React from 'react';
import {ComponenteFiltro} from './Components/filters/filtro';
// import listaProd from './lista/listaDeProdutos.json'; DESCOMENTAR QUANDO INSERIDA A LISTA DE PRODUTOS
// import Card from './Components....'; DESCOMENTAR QUANDO INSERIDA A LISTA DE PRODUTOS

class App extends React.Component{
  // Cria um estado
  state = {
    // produtos: listaProd, DESCOMENTAR QUANDO INSERIDA A LISTA DE PRODUTOS
    // ============================
    // Variáveis para LocalStorage
    inputValorMinimo: '',
    inputValorMaximo: '',
    inputBuscarPorNome: '',
    sortingParameter: 'title',
    order: 1

    // ============================
    //Variáveis para o Filtro

  }

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
  // =========================================================================
  // Filtro


  render(){
    return (
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

        <div>
          {/* {this.state.produtos
          .filter(prod => {
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
                return this.state.order * (currentProd.title.localCompare(nextProd.title))
              default:
                return this.state.order * (currentProd.price - nextProd.price)
            }
          })
          .map(prod => {
            return <Card key={prod.id} prod={prod} />
          })
        } */}
        </div>
      </div>
    )
  }
}
export default App;
