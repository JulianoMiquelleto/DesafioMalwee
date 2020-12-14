import React, { Component } from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'
import { apiMalwee } from '../api/config';

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.login = this.login.bind(this);
  }
  onInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  login() {

    console.log(this.state.fornecedor)
    if (this.state.fornecedor != '' || this.state.fornecedor != undefined) {
      apiMalwee.get(`fornecedor/${this.state.fornecedor}`)
        .then(res => {
          if (res.status === 200) {
            const forn = res.data;
            window.localStorage.setItem('stgDesafioMalwee', JSON.stringify(forn));
            this.props.history.push('/ordens');
          } else {
            alert('Login ou senha não identificado.')
          }
        })
    }else{
      alert('Login ou senha obrigatório')
    }
  }

  render() {
    return (
      <>
        <Row>
          <Col md="4"></Col>
          <Col md="4">
            <Form onSubmit={() => this.valida}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label><strong>Fornecedor</strong></Form.Label>
                <Form.Control type="text" placeholder="Nome" required onChange={this.onInputChange} name="fornecedor" />

              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label><strong>Senha</strong></Form.Label>
                <Form.Control type="password" placeholder="Senha" required onChange={this.onInputChange} name="senha" />
              </Form.Group>
              <Button variant="primary" size="lg" type="button" onClick={this.login}>
                Acessar 
              </Button>
            </Form>
          </Col>
          <Col md="4"></Col>
        </Row>
      </>
    )
  }
}


export default Login