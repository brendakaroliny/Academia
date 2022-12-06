import React from 'react';



const Unidade = props=>{

    return(
        <div>

<div id='unidades' className='container-fluid text-center bg-grey'>
  <h2>Unidades</h2><br />
  <h4>Nossas Unidades Sempre Perto de Você</h4>
  <div className='row text-center '>
    <div className='col-sm-4'>
      <div className='thumbnail'>
        <img src='image.png' alt='Foto da unidade do Riacho Fundo I' width='400' height='300'/>
        <p><strong>Riacho Fundo I</strong></p>
        <p>Quadra AC 00  conjunto 0 lote 0</p>
      </div>
    </div>
    <div className='col-sm-4'>
      <div className='thumbnail'>
        <img src='newyork.jpg' alt='Foto da unidade de Águas Claras' width='400' height='300'/>
        <p><strong>Águas Claras</strong></p>
        <p>Q. 301 - Águas Claras, Brasília - DF, 0000-000</p>
      </div>
    </div>
    <div className='col-sm-4'>
      <div className='thumbnail'>
        <img src='sanfran.jpg' alt='Foto da unidade de Taguatinga Sul' width='400' height='300'/>
        <p><strong>Taguatinga Sul</strong></p>
        <p>QSA 00 Lotes 00/00 - Avenida Comercial Sul</p>
      </div>
    </div>
  </div><br />
</div>
             
 
       </div>
    )
}

export default Unidade