import React from "react";

const Cabecalho = props=>{
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


    </div>
    

    )
}

export default Cabecalho