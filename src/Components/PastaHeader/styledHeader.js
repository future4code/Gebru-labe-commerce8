import styled from "styled-components"

// ================================================================
// Estilização container da Esquerda (Logo + nome da Empresa)
export const HeaderEsquerda = styled.div`
    display: flex;
    align-items: center;
`
export const Logo = styled.img`
    width: 7%;
    padding-right: 2%;
`
export const TituloH1 = styled.h1`
    font-size: 15px;
`

// ================================================================
// Estilização container da Direita (menu)
export const Menu = styled.nav`
    display: flex;
    align-items: center;
    a{
        text-decoration: none;
        color: black;
        margin-right: 5%;
        width: 100px
    }
    a:hover{
        color: red;
    }
`

// ================================================================
// Estilização container Header (<- Logo + nome da empresa || -> menu)
export const ContainerHeaderEstilizacao = styled.div`
    display: flex;
    justify-content: space-between;

    background-color: #8CA800;
    height: 10%;
    padding: 1% 2%;
    border-bottom: 1px solid gray;
`