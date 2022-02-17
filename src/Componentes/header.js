import React from "react";
import LogoFoguete from "../Imagens/foguete.png";
import {HeaderEsquerda, Logo, TituloH1, Menu, ContainerHeaderEstilizacao} from "./styledHeader"

export function ContainerHeader(){
        return(
            <ContainerHeaderEstilizacao>
                <HeaderEsquerda>
                    <Logo src={LogoFoguete} alt='Logo Foguete'/>
                    <TituloH1> NOME DA ECOMMERCE </TituloH1>
                </HeaderEsquerda>
                <Menu>
                    <a href="#"> Home </a>
                    <a href="#"> Carrinho </a>
                    <a href="#"> Contato </a>
                </Menu>
            </ContainerHeaderEstilizacao>
        )
}