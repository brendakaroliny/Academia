import React,{ Component } from 'react';
import { BrowserRouter, Router } from 'react-router-dom'

import Site from './Site';
import Cabecalho from './Componentes/Cabecalho';
import formulario from './Componentes/formulario';
import modalidade from './Componentes/modalidade';

class App extends Component {
  render(){

    return (
      <BrowserRouter>
          <div className="App">
            
          <Cabecalho/>

          <Site/>

           
          
          
          </div>
      </BrowserRouter>
      
    );

  }
  
  
}

export default App;
