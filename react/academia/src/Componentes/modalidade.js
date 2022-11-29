import React from 'react';

const modalidade = props=>{
    return(
        <div>
            <div className='titulo'>
            <div className='titulo-container'>
                <h2 className='titulo-title'>
                    Aulas e treinos 
                    <span>exclusivos!</span>
                </h2>
            </div>
        </div>

        <ul className='lista carousel-lista-active'>
            <li className='item'>
                <div className='item'>
                    <img src='./img/dança.png' alt='Dança' className='card__imagem '/>

                    <div className='card__header'>
                        <h3 className='card__titulo'>
                            Dança
                          </h3>
                    </div>


                </div>


            </li>
        </ul>

        <ul className='lista carousel-lista-active'>
            <li className='item'>
                <div className='item'>
                    <img src='./img/musculacao.png' alt='musculacao' className='card__imagem '/>

                    <div className='card__header'>
                        <h3 className='card__titulo'>
                            Musculação
                          </h3>
                    </div>


                </div>


            </li>
        </ul>

        <ul className='lista carousel-lista-active'>
            <li className='item'>
                <div className='item'>
                    <img src='./img/karate.png' alt='luta' className='card__imagem '/>

                    <div className='card__header'>
                        <h3 className='card__titulo'>
                            Lutas
                          </h3>
                    </div>


                </div>


            </li>
        </ul>
        </div>
    )
}

export default modalidade