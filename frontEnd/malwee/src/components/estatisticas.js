import React, { Component } from 'react'
import { Col, Row, Table } from 'react-bootstrap'

class Estatisticas extends Component {
  render() {
    return (
      <>
        <h2>Melhores Cliente</h2>
        <hr />

        <Row>
          <Col md="12">
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Mês</th>
                  <th>Cliente</th>
                  <th>Valor Total</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Jan</td>
                  <td>Juca</td>
                  <td>200</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>

        <h2>Fornecedores sem ordens de serviço</h2>
        <hr />
        <Row>
          <Col md="12">
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Mês</th>
                  <th>Fornecedor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Jan</td>
                  <td>Juca</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>

      </>
    )
  }
}


export default Estatisticas