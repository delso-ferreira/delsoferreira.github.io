import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Repo from './pages/Repo';
import Aside from './components/Aside';

const App = () => {
  return (
    <BrowserRouter>
      <Aside>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Repo" component={Repo} />
        </Routes>
      </Aside>
    </BrowserRouter>
  );
};

export default App;