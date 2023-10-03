import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import LodgingInformation from './pages/LodgingInformation';
import Error404 from './pages/Error404';
import index from './styles/index.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/lodgingInformation' element={<LodgingInformation />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;