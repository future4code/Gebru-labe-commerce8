// ========================================================
// Importação do React e styled-components
import React from "react";
import {ContainerFiltro, ContainerInputs} from "./styledFiltro"

// ========================================================
export function ComponenteFiltro(props) {
    return(
        <>
        <ContainerFiltro>
            <h2> Filtro </h2>
            <ContainerInputs>
                <p> Vamor Mínimo </p>
                <input
                    type={"number"}
                    placeholder={"Valor Mínimo"}
                    value={props.inputValorMinimo}
                    onChange={props.mudaValorMinimo}
                />
            </ContainerInputs>
            <ContainerInputs>
                <p> Vamor Máximo </p>
                <input
                    type={"number"}
                    placeholder={"Valor Máximo"}
                    value={props.inputValorMaximo}
                    onChange={props.mudaValorMaximo}
                />
            </ContainerInputs>
            <ContainerInputs>
                <p> Buscar por nome </p>
                <input
                    type={"text"}
                    placeholder={"Buscar por nome"}
                    value={props.inputBuscarPorNome}
                    onChange={props.mudaBuscaPorNome}
                />
            </ContainerInputs>
            <button onClick={props.deletarFiltro}>
                Limpar Filtro
            </button>
            <span>
                <label htmlFor="sort"> Ordenação: </label>
                <select 
                    name="sort"
                    value={props.sortingParameter}
                    onChange={props.mudaSortingParameter}    
                >
                    <option value="title"> Título </option>
                    <option value="price"> Preço </option>
                </select>
            </span>
            <select 
                name="order"
                value={props.order}
                onChange={props.mudaOrder}    
            >
                <option value={1}> Crescente </option>
                <option value={-1}> Decrescente </option>
            </select>
        </ContainerFiltro>
        </>
    )
}