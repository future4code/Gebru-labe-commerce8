// ========================================================
// Importação do React e styled-components
import React from "react";
import styled from "styled-components";

// ========================================================
// Estilização do container do filtro
const ContainerFiltro = styled.div`
    width: 200px;
    border: 1px solid gray;
    border-radius: 2%;
    padding: 2%;
`
// Estilização do Container dos Inputs
const ContainerInputs = styled.div`
    margin: 12% 0;
`

// ========================================================
export class ComponenteFiltro extends React.Component{
    // Cria um estado
    state = {
        inputValorMinimo: '',
        inputValorMaximo: '',
        inputBuscarPorNome: '',
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

    // Puxar os valores digitados nos inputs para o state
    mudaValorMinimo = (event) => {
        this.setState({ inputValorMinimo: event.target.value })
    }
    mudaValorMaximo = (event) => {
        this.setState({ inputValorMaximo: event.target.value })
    }
    mudaBuscaPorNome = (event) => {
        this.setState({ inputBuscarPorNome: event.target.value })
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

    render(){
        return(
            <ContainerFiltro>
                <h2> Filtro </h2>
                <ContainerInputs>
                    <p> Vamor Mínimo </p>
                    <input
                        type={"number"}
                        placeholder={"Valor Mínimo"}
                        value={this.state.inputValorMinimo}
                        onChange={this.mudaValorMinimo}
                    />
                </ContainerInputs>
                <ContainerInputs>
                    <p> Vamor Máximo </p>
                    <input
                        type={"number"}
                        placeholder={"Valor Máximo"}
                        value={this.state.inputValorMaximo}
                        onChange={this.mudaValorMaximo}
                    />
                </ContainerInputs>
                <ContainerInputs>
                    <p> Buscar por nome </p>
                    <input
                        type={"text"}
                        placeholder={"Buscar por nome"}
                        value={this.state.inputBuscarPorNome}
                        onChange={this.mudaBuscaPorNome}
                    />
                </ContainerInputs>
                <button onClick={() => this.deletarFiltro()}>
                    Limpar Filtro
                </button>
            </ContainerFiltro>
        )
    }
}
 