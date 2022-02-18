import styled from "styled-components"

export const ContainerPrincipal = styled.div`
    display: grid;
    align-items: center;
    text-align: center;
    justify-items: center;
    border: 1px solid black;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 6px;
    column-gap: 6px;
    padding: 10px 10px 10px 10px;
`

export const ProdutoImagem = styled.img`
  height: 200px;
  width: 200px;
  margin-right: 10px;
  border-radius: 50%;
`