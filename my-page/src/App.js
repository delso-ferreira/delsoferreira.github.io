import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Repo from './pages/Repo';
import Aside from './components/Aside';
import './styles/app.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
            <Aside>
              <div>            
                  <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/Skills" element={<Skills />} />
                    <Route exact path="/Repo" element={<Repo />} />
                  </Routes>              
              </div>   
            </Aside>          
         </div>
      </BrowserRouter>
    </div >
  );
};


export default App;