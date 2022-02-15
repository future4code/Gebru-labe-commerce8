import React from 'react';
import styled from 'styled-components';
import {ComponenteFiltro} from './Components/filtro.js';
import Card from './Components/Card';

class App extends React.Component{
  
  render(){
    return (
      <div>
        <ComponenteFiltro/>
        <Card />
      </div>
    )
  }
}
export default App;
