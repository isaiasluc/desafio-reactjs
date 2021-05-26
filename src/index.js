import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './global.css';
import Home from './pages/Home';
import Perfil from './pages/Perfil';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/perfil" component={Perfil} />
    </Switch>
  </BrowserRouter>,  
  document.getElementById('root')
);