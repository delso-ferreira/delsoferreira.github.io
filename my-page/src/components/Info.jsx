import React from 'react';
import '../styles/info.css';

function Info() {
  const stacks = [
    'JavaScript',
    'HTML5',
    'CSS',
    'React',
    'Redux',
    'Vite',
    'Jest',
    'RTL',
    'Docker',
    'MySQL',
    'Node',
    'Git',
    'AWS'
  ];

  return (
    <div className="info__container">
      <div className="skills_list">
        {stacks.map((stack, index) => (
          <div
            key={index}
            className={`neon_button neon-${stack.toLowerCase().replace(/\s/g, '-')}`}
          >
            {stack}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Info;