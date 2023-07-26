import React, { useState } from 'react';
import '../styles/about.css';
import FrontSkills from '../components/FrontSkills';

function About() { 

  const [navskills, setNavSkills] = useState(false)

  const mouseClick = () => {
    setNavSkills(!navskills);
  };
  

  return (
    <div className='main__container-about'>
      <div className='main__container-nav'>      
      </div>
      <div className='about__profile'>         
        <p>
          Em 2016, me formei em Arquivologia com a paixão de gerar acesso à informação para todos.
          Atualmente abraço uma nova jornada na área de tecnologia, desenvolvendo aplicações para impactar positivamente a vida das pessoas,
          e o desafio de criar soluções inovadoras e ampliar horizontes, garantindo que o conhecimento seja acessível a todos.<br></br>
          <br></br>Quando não estou trabalhando em algum projeto ou estudando, geralmente estou junto com meus amigos jogando Role Playing Games,
          tentando tocar alguma música na bateria ou brincando com meu gato Fred.
        </p>
      </div>
      <div className='about__skills-container'>
        <h1 className='about__skills-head'>Skills</h1>
      </div>
      <section className='about__skills-listcontainer'>
        <div className='about__skills-list'>
          <button
            className='front_button'    
            onClick={mouseClick}        
          >        
            FRONT END         
          </button>
          {navskills && <FrontSkills />}
          <button
            className='back_button'            
          >        
            BACK END         
          </button>
          <button
            className='other_button'            
          >        
            OTHER         
          </button>          
        </div>
      </section>      
    </div>
  )
}

export default About;
