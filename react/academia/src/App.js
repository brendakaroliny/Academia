import React,{ Component } from 'react';
import { BrowserRouter, Router } from 'react-router-dom'

import Site from './Site';
import Cabecalho from './Componentes/Cabecalho';
import Main from './Componentes/Main';
import Modalidade from './Componentes/Modalidade';
import formulario from './Componentes/formulario';


class App extends Component {
  render(){

    return (
      <BrowserRouter>
          <div className="App">
            
          <Cabecalho/>
          <Main/>
          <Modalidade/>
          <Site/>
          

           
          
          
          </div>
      </BrowserRouter>
      
    );

  }
  
  
}

export default App;
