import React from 'react';

const Modalidade = props=>{
    return(
        <div>
            
            <div id='modalidade' className='container-fluid text-center'>
  <h2>Modalidade</h2>
  <h4>Escolha a modalidade que mais combina com você</h4>
  <br />
  <div className='row '>
    <div className='col-sm-4'>
      <span className='glyphicon glyphicon-off logo-small'></span>
      <h4>Musculação</h4>
      <p>É o lugar onde você aperfeiçoa seu preparo físico, aumenta sua força, resistência e tônus muscular. Essa atividade é fundamental para melhorar seu desempenho em outras modalidades, como lutas, esportes e ginástica, por exemplo.</p>
    </div>
    <div className='col-sm-4'>
      <span className='glyphicon glyphicon-music logo-small'></span>
      <h4>Dança</h4>
      <p>Aula de dança com coreografias de ritmos nacionais. As aulas são muito divertidas e usam como seleção musical os sucessos atuais. Conheça, vale muito a pena!</p>
    </div>
    <div className='col-sm-4'>
      <span className='glyphicon glyphicon-user logo-small'></span>
      <h4>Luta</h4>
      <p>As lutas são caracterizadas pelo uso de técnicas de agarramento, derrubadas e golpes que podem ser realizadas por dois ou mais competidores. Existem diferentes estilos de lutas e elas podem variar conforme as regras.</p>
    </div>
  </div>
  <br /><br />
 
</div>
        </div>
    )
}

export default Modalidade