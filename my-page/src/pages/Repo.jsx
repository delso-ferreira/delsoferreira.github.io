import React, { useState } from 'react';
import '../styles/repo.css';

function Repo() {
  const [hoverStates, setHoverStates] = useState([false, false, false, false]);

  const handleMouseEnter = (index) => {
    const updatedHoverStates = [...hoverStates];
    updatedHoverStates[index] = true;
    setHoverStates(updatedHoverStates);
  };

  const handleMouseLeave = (index) => {
    const updatedHoverStates = [...hoverStates];
    updatedHoverStates[index] = false;
    setHoverStates(updatedHoverStates);
  };

  return (
    <div className='repo__container'>
      <div className='repo__container-title'>
      <h1>
          Principais Projetos
        </h1>
        </div>
      <div className='repo__inner-container'>        
        <h3
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={() => handleMouseLeave(0)}
        >
        <a href='https://github.com/delso-ferreira/multi-filters-star-wars'>
          Star Wars Planet Filter &#x1F680;
        </a>
        </h3>
        {hoverStates[0] && <p style={{
          maxWidth: '50vh', 
          textAlign: 'justify'          
        }}>Projeto utilizando uma API de planetas 
          de Star Wars para realização de múltiplos filtros de pesquisa
          </p>}
        
        <h3
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave(1)}
        >
        <a href='https://github.com/delso-ferreira/RTL-Unit-Tests'>
         RTL Test &#x1F52C;  
        </a>       
        </h3>
        {hoverStates[1] && <p style={{
          maxWidth: '50vh', 
          textAlign: 'justify'
        }}>Testes unitários utilizando a biblioteca React Testing Library          
          </p>}        
        <h3
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave(2)}
        >
        <a href='https://github.com/delso-ferreira/shopping-cart'>
          Shopping Cart &#x1F4B3;
        </a>  
        </h3>
        {hoverStates[2] && <p style={{
          maxWidth: '50vh', 
          textAlign: 'justify' 
        }}>Funcionalidades de um carrinho de compras para um E-Commerce
          </p>}
        <h3
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={() => handleMouseLeave(3)}
        >
        <a href='https://github.com/delso-ferreira/currency-converter'>
          Currency Converter &#36;
        </a>
        </h3>        
        {hoverStates[3] && <p style={{
          maxWidth: '50vh', 
          textAlign: 'justify'
        }}>Conversor de moedas para real
          </p>}
          
      </div>
    </div>
  );
}

export default Repo;
