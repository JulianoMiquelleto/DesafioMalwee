
import React, { Component } from 'react'
import { Col, Row, Table, Button, Form } from 'react-bootstrap'
import {
    MDBModal, MDBModalBody, MDBModalHeader,
    MDBRow, MDBCol
} from "mdbreact";
import NovaOrdem from './novaOrdem';
import { apiMalwee, tipoServico } from '../api/config';

class Ordens extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalOrdem: false,
            dados: []
        }
        this.toogleModal = this.toogleModal.bind(this)
        this.pesquisar = this.pesquisar.bind(this)
        this.onInputChange = this.onInputChange.bind(this);
    }
    componentDidMount() {
        //this.pesquisar();

    }
    toogleModal() {
        this.setState({ modalOrdem: !this.state.modalOrdem })
    }
    pesquisar() {

        apiMalwee.post('ordem/pesquisaOrdens', this.state)
            .then(response => {
                this.setState({ dados: response.data.ordens })
            })
            .catch(error => {
                console.log(error);
            })
    }

    renderTable(ordem, index) {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{ordem.Cliente}</td>
                <td>{ordem.Bairro}</td>
                <td>{ordem.Cidade}</td>
                <td>{ordem.Uf}</td>
                <td>{ordem.Tipo}</td>
                <td>{ordem.Valor.toFixed(2)}</td>
                <td>{ordem.Data}</td>
            </tr>
        )
    }
    onInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <>
               <Table>
                    <Row >
                        <Col md="8"></Col>
                        <Col md="4">
                            <Button variant="primary" onClick={() => this.toogleModal()} size="lg">Nova Ordem de serviço</Button>
                        </Col>
                    </Row>
                    <Row >
                        <Col md="12"></Col>
                    </Row>
                    <Row>
                        <Col md="3" sm="auto"><strong>Data Início</strong>
                            <Form.Control
                                required onChange={this.onInputChange}
                                type="date" name="DataInicio"
                            />
                        </Col>
                        <Col md="3" sm="12" ><strong>Data Fim</strong>
                            <Form.Control
                                required onChange={this.onInputChange}
                                type="date" name="DataFim"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md="4" sm="12"><strong>Cliente</strong>
                            <Form.Control
                                required
                                type="text"
                                onChange={this.onInputChange} name="Cliente"
                                placeholder="Cliente"
                            />
                        </Col>
                        <Col md="3" sm="12"><strong>Cidade</strong>
                            <Form.Control
                                required
                                type="text"
                                onChange={this.onInputChange} name="Cidade"
                                placeholder="Cidade"
                            />
                        </Col>
                        <Col md="3" sm="12"><strong>Bairro</strong>
                            <Form.Control
                                required
                                type="text"
                                onChange={this.onInputChange} name="Bairro"
                                placeholder="Bairro"
                            />
                        </Col>
                        <Col md="2" sm="12"><strong>UF</strong>
                            <Form.Control
                                required
                                type="text"
                                onChange={this.onInputChange} name="Uf"
                                placeholder="UF"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md="4" sm="12"><strong>Tipo</strong>
                            <Form.Control as="select" placeholder="Serviço">
                                {
                                    tipoServico.map((option, index) => {
                                        return (<option key={option.id} value={option.id}>{option.value}</option>)
                                    })
                                }
                            </Form.Control>
                        </Col>
                        <Col md="3" sm="12"><strong>Valor Mínimo</strong>
                            <Form.Control
                                required
                                type="number"
                                onChange={this.onInputChange} name="ValorMinimo"
                                placeholder="Valor Min"
                            />
                        </Col>
                        <Col md="3" sm="12"><strong>Valor Máximo</strong>
                            <Form.Control
                                required
                                type="number"
                                onChange={this.onInputChange} name="ValorMaximo"
                                placeholder="Valor Max"
                            />
                        </Col>
                        <Col md="2" sm="12">
                            <br />
                            <Button variant="primary" onClick={() => this.pesquisar()} size="md">Pesquisar</Button>

                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col md="12" sm="auto">
                            <div style={{ overflowY: 'scroll', maxHeight: '300px' }}>
                                <Table striped bordered hover responsive >
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Cliente</th>
                                            <th>Bairro</th>
                                            <th>Cidade</th>
                                            <th>Estado</th>
                                            <th>Tipo de serviço</th>
                                            <th>Valor</th>
                                            <th>Data atendimento</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.dados.map(this.renderTable)}
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                    </Row>
                </Table>

                <MDBModal isOpen={this.state.modalOrdem} toggle={this.toogleModal} size="lg" centered>
                    <MDBModalHeader toggle={this.toogleModal}> <span>Nova ordem de serviço</span>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <MDBRow>
                            <MDBCol md="12">
                                <NovaOrdem />
                            </MDBCol>
                        </MDBRow>
                    </MDBModalBody>

                </MDBModal>
            </>
        )
    }
}


export default Ordens