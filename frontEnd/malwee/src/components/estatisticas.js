import React, { Component } from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import { apiMalwee } from '../api/config';

class Estatisticas extends Component {

  constructor(props) {
    super(props)
    this.state = {
      servicos: [],
      fornSemAtendimento: [],
      clienteGastoMes:[]
    }
    this.gastoMedioForn = this.gastoMedioForn.bind(this)
    this.fornSemAtendimento = this.fornSemAtendimento.bind(this)
    this.gastoMesCliente = this.gastoMesCliente.bind(this)

  }
  componentDidMount() {
    this.gastoMedioForn()
    this.fornSemAtendimento()
    this.gastoMesCliente();
  }
  gastoMesCliente() {
    apiMalwee.get(`ordem/GastoMes`)
      .then(res => {
        if (res.status === 200) {
          const cli = res.data;
          this.setState({ clienteGastoMes: cli.ClienteMes })
        }
      })
  }
  gastoMedioForn() {
    apiMalwee.get(`ordem/FornecedorGastoMedio`)
      .then(res => {
        if (res.status === 200) {
          const forn = res.data;
          this.setState({ servicos: forn.Servicos })
        }
      })
  }
  fornSemAtendimento() {
    apiMalwee.get(`ordem/FornecedorSemAtendimento`)
      .then(res => {
        if (res.status === 200) {
          const forn = res.data;
          console.log(forn);
          this.setState({ fornSemAtendimento: forn.MesesAno })
          console.log(this.state)
        }
      })
  }
  renderTableFornServicos(serv, index) {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{serv.Nome}</td>
        <td>

          <Table striped bordered>
            <thead>
              <tr>
                <th>Fornecedor</th>
                <th>Valor Médio</th>
              </tr>
            </thead>
            <tbody>
              {serv.Fornecedores.map(function (elem, index1, array) {
                return (

                  <tr key={index1}>
                    <td>{elem.Nome}</td>
                    <td>{elem.ValorMedio.toFixed(2)}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </td>
      </tr>
    )
  }
  renderFornSemAtendimento(meses, index) {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{meses.Nome}</td>
        <td>

          <Table striped bordered>
            <tbody>
              {meses.Fornecedores.map(function (elem, index1, array) {
                return (
                  <tr key={index1}>
                    <td>{elem.Nome}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </td>
      </tr>
    )
  }
  renderTableGastoMesCliente(meses, index) {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{meses.Nome}</td>
        <td>

          <Table striped bordered>
          <thead>
              <tr>
                <th>Cliente </th>
                <th>Valor Total</th>
              </tr>
            </thead>
            <tbody>
              {meses.Clientes.map(function (elem, index1, array) {
                return (
                  <tr key={index1}>
                    <td>{elem.Nome}</td>
                    <td>{elem.ValorTotal.toFixed(2)}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </td>
      </tr>
    )
  }
  render() {
    return (
      <>
        <h2>Clientes que mais gastaram em serviços por mês em {new Date().getFullYear()}</h2>
        <hr />

        <Row>
          <Col md="12">
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Mês</th>
                  <th>Cliente</th>
                  <th>Valor Total</th>

                </tr>
              </thead>
              <tbody>
                {this.state.clienteGastoMes.map(this.renderTableGastoMesCliente)}
              </tbody>
            </Table>
          </Col>
        </Row>

        <h2>Média de valor cobrado por fornecedor e tipo de serviço em {new Date().getFullYear()}</h2>
        <hr />

        <Row>
          <Col md="12">
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Serviço</th>
                  <th>Fornecedor</th>
                </tr>
              </thead>
              <tbody>
                {this.state.servicos.map(this.renderTableFornServicos)}
              </tbody>
            </Table>
          </Col>
        </Row>

        <h2>Lista de fornecedores sem prestar atendimento por mês no ano de {new Date().getFullYear()}</h2>
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
                {this.state.fornSemAtendimento.map(this.renderFornSemAtendimento)}
              </tbody>
            </Table>
          </Col>
        </Row>

      </>
    )
  }
}


export default Estatisticas