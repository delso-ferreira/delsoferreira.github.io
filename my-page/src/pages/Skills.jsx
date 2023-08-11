import React from 'react';
import '../styles/skills.css';
import Info from '../components/Info';

function Skills() { 

  return (
    <div className='main__container-about'>
      <div className='main__container-nav'>      
      </div>
      <div className='about__profile'>         
        <p>
         Skills
        </p>
      </div>
      <div className="about__skills-btn">
          <Info />        
      </div>
    </div>
  )
}

export default Skills;
