import React from 'react';
import {ComponenteFiltro} from './Components/filtro.js';
import Card from './Components/Card';

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
    ]
}

  render(){
    const meusProdutos = this.state.camisetas.map((produto) => {
      return <Card
      produto={produto}
      AdicionaCarrinho={this.props.AdicionarCarrinho}
      />
    })
    return (
      <div>
        <ComponenteFiltro/>
        {meusProdutos}
      </div>
    )
  }
}
export default App;
