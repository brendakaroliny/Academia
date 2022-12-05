import React from 'react';




    const Rodape = props=>{
    

    return(
        <div>

<div id='contact' className='container-fluid bg-grey'>
  <h2 className='text-center'>Franquia</h2>
  <div className='row'>
   
    <div className='col-sm-14 '>
      <div className='row'>
        <div className='col-sm-6 form-group'>
        <label for='name'>Digite o Nome Completo::</label>
          <input className='form-control' id='name' name='name' placeholder='Name' type='text' required/>
        </div>
        <div className='col-sm-6 form-group'>
        <label for='email'>Informe o E-mail:</label>
          <input className='form-control' id='email' name='email' placeholder='Email' type='email' required/>
          <small>Erro</small>
        </div>
      </div>

      <div className='row'>
        <div className='col-sm-6 form-group'>
        <label for='celular'>Celular:</label>
          <input className='form-control' id='celular' name='celular' placeholder='Cel' type='text' required/>
        </div>
        <div className='col-sm-6 form-group'>
        <label for='telefone'>Telefone:</label>
          <input className='form-control' id='telefone' name='telefone' placeholder='Tel' type='telefone' required/>
          <small>Erro</small>
        </div>
      </div>

      <div className='row'>
        <div className='col-sm-6 form-group'>
        <label for='celular'>Celular:</label>
          <input className='form-control' id='celular' name='celular' placeholder='Cel' type='text' required/>
        </div>
        <div className='col-sm-6 form-group'>
        <label for='telefone'>Telefone:</label>
          <input className='form-control' id='telefone' name='telefone' placeholder='Tel' type='telefone' required/>
          <small>Erro</small>
        </div>
      </div>

      <label for='local'>Onde Deseja Abrir a Franquia?</label>
      <textarea className='form-control' id='local' name='local' placeholder='Comment' rows='5'></textarea><br />
      <div className='row'>
        <div className='col-sm-12 form-group'>
          <button className='btn btn-default pull-right' type='submit'>Send</button>
        </div>
      </div>
    </div>
  </div>
</div>



<footer className='container-fluid text-center'>
  <a href='#myPage' title='To Top'>
    <span className='glyphicon glyphicon-chevron-up'></span>
  </a>
  <p>Bootstrap Theme Made By <a href='https://www.w3schools.com' title='Visit w3schools'>www.w3schools.com</a></p>
</footer>

        </div>
    )
}
export default Rodape
