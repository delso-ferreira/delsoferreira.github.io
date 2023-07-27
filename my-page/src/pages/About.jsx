import React, { useState } from 'react';
import '../styles/about.css';

function About() { 

  return (
    <div className='main__container-about'>
      <div className='main__container-nav'>      
      </div>
      <div className='about__profile'>         
        <p>
          Em 2016, me formei em Arquivologia com a paixão de gerar acesso à informação para todas as pessoas.<br></br>
          
          <br></br>Atualmente abraço uma nova jornada na área de tecnologia, desenvolvendo aplicações para impactar positivamente a vida das pessoas,
          e o desafio de criar soluções inovadoras e ampliar horizontes, buscando sempre fornecer experiências positivas.<br></br>
          <br></br>Quando não estou trabalhando em algum projeto ou estudando, geralmente estou junto com meus amigos jogando Role Playing Games,
          tentando tocar alguma música na bateria ou brincando com meu gato Fred.
        </p>
      </div>
    </div>
  )
}

export default About;
