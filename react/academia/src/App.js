import React, {useState, Component} from "react";
import { BrowserRouter, Route } from 'react-router-dom'
import Axios from "axios";


import Cabecalho from './components/Cabecalho';
import Main from './components/Main';
import Modalidade from './components/Modalidade';

import Planos from './components/Planos';
import Rodape from './components/Rodape';
import Unidade from './components/Unidade';


function App() {

 
    const [values, SetValues] = useState();
    const handleChangeValues = (value) => {
     SetValues(prevValue => ({
      ... prevValue,
      [value.target.name]: value.target.value
     }));
    };
  
    const handleClickButton =() =>{
      Axios.post("http://localhost:3001/register",{
  
        name: values.name,
        email: values.email,
        celular: values.celular,
        telefone: values.telefone,
        cpf: values.cpf,
        rg: values.rg,
        capital: values.capital,
        local: values.local,
  
      }).then((response)=>{
        console.log(response);
      });
     
     
    };


    return (
      <BrowserRouter>
          <div className="App">
            
          <Cabecalho/>
          <Main/>
         <Unidade/>
         <Modalidade/>
          <Planos/>

          <div>

          <div id='formulario' className='container-fluid bg-grey'>
  <h2 className='text-center'>Franquia</h2>
  <div className='row'>
   
    <div className='col-sm-14 '>
      <div className='row'>
        <div className='col-sm-6 form-group'>
        <label for='name'>Digite o Nome Completo::</label>
          <input className='form-control' id='name' name='name' placeholder='Name' type='text' 
           onChange={handleChangeValues}
            required />
        </div>
        <div className='col-sm-6 form-group'>
        <label for='email'>Informe o E-mail:</label>
          <input className='form-control' id='email' name='email' placeholder='Email' type='email'
           onChange={handleChangeValues}
            required/>
          <small>Erro</small>
        </div>
      </div>

      <div className='row'>
        <div className='col-sm-6 form-group'>
        <label for='celular'>Celular:</label>
          <input className='form-control' id='celular' name='celular' placeholder='Cel' type='text'
           onChange={handleChangeValues}
            required/>
        </div>
        <div className='col-sm-6 form-group'>
        <label for='telefone'>Telefone:</label>
          <input className='form-control' id='telefone' name='telefone' placeholder='Tel' type='telefone'
           onChange={handleChangeValues}
            required/>
          <small>Erro</small>
        </div>
      </div>

      <div className='row'>
        <div className='col-sm-6 form-group'>
        <label for='cpf'>CPF:</label>
          <input className='form-control' id='cpf' name='cpf' placeholder='CPF' type='text' 
           onChange={handleChangeValues}
           required/>
        </div>
        <div className='col-sm-6 form-group'>
        <label for='rg'>RG:</label>
          <input className='form-control' id='rg' name='rg' placeholder='RG' type='telefone' 
           onChange={handleChangeValues}
           required/>
          <small>Erro</small>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-6 form-group'>
        <label for='capital'>Capital:</label>
          <input className='form-control' id='capital' name='capital' placeholder='Capital' type='text' 
           onChange={handleChangeValues}
           required/>
        </div>
        <div className='col-sm-6 form-group'>
        <label for='local'>Onde Deseja Abrir a Franquia?</label>
          <input className='form-control' id='local' name='local' placeholder='Localidade' type='text' 
           onChange={handleChangeValues}
           required/>
        </div>
      </div>

      <div className='row'>
        <div className='col-sm-12 form-group'>
          <button className='btn btn-default pull-right' type='submit' onClick={() => handleClickButton()}>Send</button>
        </div>
      </div>
    </div>
  </div>
</div>
          </div>

          <Rodape/>
                  
          </div>
      </BrowserRouter>
      
    );


  
  
}

export default App;
