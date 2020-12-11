import React, { Component } from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'

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

   
    window.localStorage.setItem('stgDesafioMalwee', JSON.stringify( this.state));
    console.log(this.props.history.push('/ordens'))
  }
  render() {
    return (
      <>
        <Row>
          <Col md="4"></Col>
          <Col md="4">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label><strong>Fornecedor</strong></Form.Label>
                <Form.Control type="text" placeholder="Nome" onChange={this.onInputChange} name="fornecedor" />
                <Form.Text className="text-muted">
                  Nome do fornecedor
              </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label><strong>Senha</strong></Form.Label>
                <Form.Control type="password" placeholder="Senha" onChange={this.onInputChange} name="senha" />
              </Form.Group>
              <Button variant="primary" onClick={this.login} type="button">
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