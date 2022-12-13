import React from 'react';

const Cabecalho = props=>{
    return(
    <div>

<nav className='navbar navbar-default navbar-fixed-top'>
  <div className='container'>
    <div className='navbar-header'>
      <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
        <span className='icon-bar'></span>
        <span className='icon-bar'></span>
        <span className='icon-bar'></span>                        
      </button>
      <a className='navbar-brand' href='#myPage'>Beekry</a>
    </div>
    <div className='collapse navbar-collapse' id='myNavbar'>
      <ul className='nav navbar-nav navbar-right'>
        <li><a href='#home'>Home</a></li>
        <li><a href='#modalidade'>Modalidades</a></li>
        <li><a href='#unidades'>Unidades</a></li>
        <li><a href='#plano'>Planos</a></li>
        <li><a href='#formulario'>Franquiado</a></li>
      </ul>
    </div>
  </div>
</nav>

    </div>
    

    )
}

export default Cabecalho