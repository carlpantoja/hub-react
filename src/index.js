import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { Home } from './components/Home';
import { Calculadora } from './calculadora/Calculadora';
import { Game } from './jogo-da-velha/Game';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/calculadora'} element={<Calculadora/>}/>
          <Route path={'/jogo-da-velha'} element={<Game/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);