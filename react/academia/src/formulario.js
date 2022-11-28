import React,{ Component } from 'react';

const Sites = props=>{

    return(
        <div>
             <header className = 'menu1-principal'>
        <main>

            <div className = 'header1'>
                <div className ='logo'>
                   <img src='./img/logo2-removebg-preview.png'/>
                </div>
                <div className = 'rede-sociais'>
                    <ul>
                    
                       <li><a href='https://www.linkedin.com/in/brenda-karoliny-52b0b9179/'><img src='./img/instagram.png'/></a></li>
                       <li><a href='https://www.linkedin.com/in/brenda-karoliny-52b0b9179/'><img src='./img/facebook.png'/></a></li>
                       <li><a href='https://www.linkedin.com/in/brenda-karoliny-52b0b9179/'><img src='./img/twitter.png'/></a></li>
                       <li><a href='https://www.linkedin.com/in/brenda-karoliny-52b0b9179/'><img src='./img/youtube.png'/></a></li>
                       <li><a href='https://www.linkedin.com/in/brenda-karoliny-52b0b9179/'><img src='./img/wpp.png'/></a></li>
                    </ul>
                 </div>
             </div>
        </main>
    </header>

    <main className='col-100 menu1-urls'>
        <div className = 'header2'>
            <div className = 'menu1'>
                <ul>
                    <li>
                        <a href='./index.html'>Home</a>
                    </li>
                    
                    <li>
                        <a href='./modalidades.html'>Modalidades</a>
                    </li>
                    <li>
                        <a href='./formulario.html'>Franquia</a>
                    </li>
                    <li>
                        <a href='./planos.html'>Planos</a>
                    </li>
                    <li>
                        <a href='./unidades.html'>Unidades</a>
                    </li>
                </ul>
            </div>
            <div className = 'busca'>
                <input placeholder='Buscar Aqui...' type='text'/>
            </div>
        </div>
    </main>
 

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