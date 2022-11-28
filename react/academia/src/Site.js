import React,{ Component } from 'react';


const Site = props=>{

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
        <div className='slider-principal'>
            <img src='./img/banner-01.png' />
            <img src='./img/banner-02.png' />
         
        </div>
        </div>
        <script type='text/javascript' src='https://code.jquery.com/jquery-1.11.0.min.js'></script>
        <script type='text/javascript' src='https://code.jquery.com/jquery-migrate-1.2.1.min.js'></script>
        <script type='text/javascript' src='https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js'></script>
        <script type='text/javascript' src='./js/main.js'></script>

        </div>
    )

    
}

export default Site
