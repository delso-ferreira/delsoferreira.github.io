import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Repo from './pages/Repo';
import Aside from './components/Aside';
import './styles/app.css';

const App = () => {
  return (
    <BrowserRouter>        
      <Aside>        
        <Routes>                
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Repo" element={<Repo />} />        
        </Routes>        
      </Aside>        
    </BrowserRouter>
  );
};


export default App;