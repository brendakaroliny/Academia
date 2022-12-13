import React from 'react';


const Planos = props=>{

  
    return(
        <div>

<div id='plano' className='container-fluid'>
  <div className='text-center'>
    <h2>Planos</h2>
    <h4>Escolha um Plano</h4>
  </div>
  <div className='row '>
    <div className='col-sm-4 col-xs-12'>
      <div className='panel panel-default text-center'>
        <div className='panel-heading'>
          <h1>Basic</h1>
        </div>
        <div className='panel-body'>
          <p> Acesso a todas as aulas coletivas</p>
          <p> Sem multas ou taxas de cancelamento</p>
          <p> Acesso total a estrutura da academia</p>
          <p> Sem restrição de horários</p>
          <p> Taxa zero</p>
        </div>
        <div className='panel-footer'>
          <h3>R$119,99</h3>
          <h4>Mensais</h4>
          <button className='btn btn-lg'>Escolher Este</button>
        </div>
      </div>      
    </div>     
    <div className='col-sm-4 col-xs-12'>
      <div className='panel panel-default text-center'>
        <div className='panel-heading'>
          <h1>Pro</h1>
        </div>
        <div className='panel-body'>
          <p><span className='glyphicon glyphicon-asterisk '></span> Treino em todas as Unidades</p>
          <p> Acesso a todas as aulas coletivas</p>
          <p>Acesso total a estrutura da academia</p>
          <p> Sem restrição de horários</p>
          <p> Taxa zero</p>
        </div>
        <div className='panel-footer'>
          <h3>R$129,99</h3>
          <h4>Mensais</h4>
          <button className='btn btn-lg'>Escolher Este</button>
        </div>
      </div>      
    </div>       
    <div className='col-sm-4 col-xs-12'>
      <div className='panel panel-default text-center'>
        <div className='panel-heading'>
          <h1>Premium</h1>
        </div>
        <div className='panel-body'>
          <p><span className='glyphicon glyphicon-asterisk '></span>Treino em todas as Unidades </p>
          <p> Sem multas ou taxas de cancelamento</p>
          <p> Acesso a todas as aulas coletivas</p>
          <p> Acesso total a estrutura da academia</p>
          <p> Sem restrição de horários</p>
        </div>
        <div className='panel-footer'>
          <h3>R$149,99</h3>
          <h4>Mensais</h4>
          <button className='btn btn-lg'>Escolher Este</button>
        </div>
      </div>      
    </div>    
  </div>
</div>

        </div>
    )
    }

    export default Planos