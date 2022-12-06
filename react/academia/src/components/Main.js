import React from 'react';

const Main = props=>{
    return(
       <div>

<div className='jumbotron text-center'>
  <h1>Beekry</h1> 
  <p>A sua melhor opção na hora de levar uma vida + saudável</p> 
  <form>
    <div className='input-group'>
      <input type='email' className='form-control' size='50' placeholder='Email Address' required/>
      <div className='input-group-btn'>
        <button type='button' className='btn btn-danger'>Subscribe</button>
      </div>
    </div>
  </form>
</div>


<div id='home' className='container-fluid'>
  <div className='row'>
    <div className='col-sm-8'>
      <h2>O QUE FAZ A BEEKRY TÃO ESPECIAL?</h2><br />
      <h4>Somos a rede de academias com o melhor custo-benefício do país. Nossas unidades oferecem uma equipe dedicada a ajudar você no que for preciso e transformar a sua meta em grandes resultados.</h4><br />
      <p>Você vai treinar em academias amplas e modernas com equipamentos de última geração, grade de aulas com ginástica, dança e lutas (zumba, jump, funcional, pilates, jiu-jitsu, muay thai, entre outras), que ao longo do ano é renovada com modalidades sazonais, e professores à sua disposição para instruir o seu treino. Temos orgulho em oferecer um serviço premium por um preço acessível, afinal o fácil acesso à atividade física pode mudar a vida de qualquer indivíduo. Entre para o time da BlueFit e descubra a academia que você sempre quis!</p>
      <br /><button className='btn btn-default btn-lg'>Saiba Mais</button>
    </div>
    <div className='col-sm-4'>
      <span className='glyphicon glyphicon-globe logo'></span>
    </div>
  </div>
</div>


       </div>
    )
}

export default Main