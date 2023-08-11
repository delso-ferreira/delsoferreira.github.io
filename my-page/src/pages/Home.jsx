import React, { useEffect, useState } from 'react';
import '../styles/home.css';

function Home() {
  const texts = [
    {
      text: "Full Stack Web Developer",
      color: "var( --neon-color)"
    },
    {
      text: "Drummer",
      color: "var( --neon-rtl)"
    },
    {
      text: "Gamer",
      color: "var(--neon-jest)"
    },
    {
      text: "RPG Geek",
      color: "var(--neon-aws)"
    },
    {
      text: "Good Friend",
      color: "var(--neon-js)" 
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className='main__container'>
      <div className='main__h1-container'>
        <h1 className='main__h1'>Hello, I'm Delso</h1>
      </div>
      <div className="main__container-animation">        
          <h3>I'm a...</h3>          
        <div className='text__animation'>          
          <p style={{ color: texts[currentIndex].color }}>{texts[currentIndex].text}</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
