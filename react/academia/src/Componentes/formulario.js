import React from "react";

const formulario = props=>{

    return(
        <div>
             
 

           <div className='col-100'>
           <div className='header'>
              <h2>Seja um Franquiado</h2>
            </div>
            <form id='form' className='form'>
            <div className='form-control'>
                <label for='username'>Nome Completo</label>
                <input type='text' 
                id='username'
                placeholder='Digite seu Nome completo'
                />
                <i className='fas fa-exclamation-circle'></i>
                <i className='fas fa-check-circle'></i>
                <small>Erro</small>
            </div>

            <div className='form-control'>
                <label for='email'>E-mail</label>
                <input type='text' 
                id='email'
                placeholder='Digite seu E-mail'
                />
                <i className='fas fa-exclamation-circle'></i>
                <i className='fas fa-check-circle'></i>
                <small>Erro</small>
            </div>

            <div className='form-control'>
                <label for='celular'>Celular</label>
                <input type='text' 
                id='celular'
                placeholder='Digite o número do seu celular'
                />
                <i className='fas fa-exclamation-circle'></i>
                <i className='fas fa-check-circle'></i>
                <small>Erro</small>
            </div>

            <div className='form-control'>
                <label for='telefone'>Telefone</label>
                <input type='text' 
                id='telefone'
                placeholder='Digite seu Telefone'
                />
                <i className='fas fa-exclamation-circle'></i>
                <i className='fas fa-check-circle'></i>
                <small>Erro</small>
            </div>

            <div className='form-control'>
                <label for='cpf'>CPF</label>
                <input type='text' 
                id='cpf'
                placeholder='Digite o seu CPF'
                />
                <i className='fas fa-exclamation-circle'></i>
                <i className='fas fa-check-circle'></i>
                <small>Erro</small>
            </div>

            <div className='form-control'>
                <label for='rg'>RG</label>
                <input type='text' 
                id='rg'
                placeholder='Digite o seu RG'
                />
                <i className='fas fa-exclamation-circle'></i>
                <i className='fas fa-check-circle'></i>
                <small>Erro</small>
            </div>

            <div className='form-control'>
                <label for='capital'>Faixa do Capital</label>
                <input type='text' 
                id='capital'
                placeholder='Digite a faixa do seu capital'
                />
                <i className='fas fa-exclamation-circle'></i>
                <i className='fas fa-check-circle'></i>
                <small>Erro</small>
            </div>

            <div className='form-control'>
                <label for='local'>Onde Deseja Abrir a Franquia?</label>
                <input type='text' 
                id='local'
                placeholder='Digite o local da Franquia'
                />
                <i className='fas fa-exclamation-circle'></i>
                <i className='fas fa-check-circle'></i>
                <small>Erro</small>
            </div>

            <button type='submit'>Enviar</button>
          </form>
          </div>  
           <script
             src='https://kit.fontawesome.com/6bd86e2ead.js' crossorigin='anonymous'
            ></script>
              <script src='./js/formulario.js'></script>
       </div>
    )
}

export default formulario