import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'react-bootstrap'
import Inicial from './components/inicial';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Estatisticas from './components/estatisticas';
import Ordens from './components/ordens';
import Login from './components/login';


ReactDOM.render(
  <React.StrictMode>

    <>

    <main role="main">
      
    </main>
      <Container fluid="lg">
        <h1 className="text-center">Desafio Malwee</h1>
        <BrowserRouter>
          <Switch>

            <Route path='/' exact component={Inicial} />
            <Route path='/login' exact component={Login} />
            <Route path='/ordens' exact component={Ordens} />
            <Route path='/estatisticas' exact component={Estatisticas} />
          </Switch>
        </BrowserRouter>
      </Container>
    </>



  </React.StrictMode>,
  document.getElementById('root')
);


