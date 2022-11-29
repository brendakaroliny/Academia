import React,{ Component } from 'react';
import { BrowserRouter, Router } from 'react-router-dom'

import Site from './Site';
import Cabecalho from './Componentes/Cabecalho';
import Main from './Componentes/Main';
import Modalidade from './Componentes/Modalidade';
import Formulario from './Componentes/Unidade';
import Planos from './Componentes/Planos';
import Rodape from './Componentes/Rodape';
import Unidade from './Componentes/Unidade';


class App extends Component {
  render(){

    return (
      <BrowserRouter>
          <div className="App">
            
          <Cabecalho/>
          <Main/>
         <Unidade/>
         <Modalidade/>
          <Planos/>
          <Rodape/>
                  
          </div>
      </BrowserRouter>
      
    );

  }
  
  
}

export default App;
