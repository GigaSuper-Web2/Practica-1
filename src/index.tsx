import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//importar todas las paginas de la ruta donde estan.
import Combos from "./components/combos";
import Factura from './components/factura';
import Lista from './components/lista';
import Detalle from './components/detalle';
import Quiz from './components/quiz';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/combos' element={<Combos />} /> 
      <Route path='/factura' element={<Factura />} /> 
      <Route path='/lista' element={<Lista />} /> 
      <Route path='/detalle' element={<Detalle />} /> 
      <Route path='/quiz' element={<Quiz />} /> 
    </Routes>
  </BrowserRouter>
);

