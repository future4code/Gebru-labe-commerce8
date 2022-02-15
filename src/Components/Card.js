import React from 'react';
import styled from 'styled-components'

const ContainerPrincipal = styled.div`
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

const ProdutoImagem = styled.img`
  height: 200px;
  width: 200px;
  margin-right: 10px;
  border-radius: 50%;
`

export default class Card extends React.Component {

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
        ]
    }

    render() {
    
        const meusProdutos = this.state.camisetas.map((item) => <ContainerPrincipal>
        <ProdutoImagem src={item.imageUrl} alt='Imagem da camiseta'></ProdutoImagem>
        <p><b>{item.name}</b></p>
        <p>Valor do produto: R${item.value},00</p>
        <button onClick={this.AdicionaCarrinho}>Adicionar no carrinho</button>
        </ContainerPrincipal>)

      return (
        <div>
          {meusProdutos}
      </div>
      )
    }
  }