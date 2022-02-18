import styled from "styled-components";

export const CarrinhoContainer = styled.div`
    display: grid;
    align-items: center;
    text-align: center;
    justify-items: center;
    row-gap: 6px;
    column-gap: 6px;
    border: 1px solid black;
`

export const ContainerPrincipal = styled.div`
    display: grid;
    align-items: center;
    text-align: center;
    justify-items: center;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    row-gap: 6px;
    column-gap: 6px;
`