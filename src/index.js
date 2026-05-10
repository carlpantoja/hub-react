import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { Home } from './components/Home';
import { Calculadora } from './calculadora/Calculadora';
import { Game } from './jogo-da-velha/Game';
import { Index } from './filme-serie/Index';
import { HomePage } from './filme-serie/pages/HomePage';
import { SearchPage } from './filme-serie/pages/SearchPage';
import { MoviePage } from './filme-serie/pages/MoviePage';
import { SeriePage } from './filme-serie/pages/SeriePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/calculadora'} element={<Calculadora/>}/>
          <Route path={'/jogo-da-velha'} element={<Game/>}/>
          <Route element={<Index/>}>
            <Route path={'/catalogo'} element={<HomePage/>}/>
            <Route path={'/catalogo/search'} element={<SearchPage/>}/>
            <Route path={'/catalogo/movie/details/:id'} element={<MoviePage/>}/>
            <Route path={'/catalogo/serie/details/:id'} element={<SeriePage/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);