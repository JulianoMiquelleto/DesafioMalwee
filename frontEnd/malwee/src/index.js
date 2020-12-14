import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import App from './App';
import 'typeface-roboto';


ReactDOM.render(
  <>
    <Container fluid >
     
      <App />
    </Container>
  </>
  ,
  document.getElementById('root')
);


