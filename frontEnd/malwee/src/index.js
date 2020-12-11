import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import App from './App';
import 'typeface-roboto';

ReactDOM.render(
    <>
      <Container fluid >
        <h1 className="text-center"><a href="/">Desafio Malwee</a></h1>
        <App />
      </Container>
    </>
,
  document.getElementById('root')
);


