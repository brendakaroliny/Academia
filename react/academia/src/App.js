import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'


import Cabecalho from './components/Cabecalho';
import Main from './components/Main';
import Modalidade from './components/Modalidade';

import Planos from './components/Planos';
import Rodape from './components/Rodape';
import Unidade from './components/Unidade';


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
