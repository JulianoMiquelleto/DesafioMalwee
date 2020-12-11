
import React, { Component } from 'react'
import { Col, Row, Table, Button, Form } from 'react-bootstrap'
import {
    MDBModal, MDBModalBody, MDBModalHeader,
    MDBRow, MDBCol
} from "mdbreact";
import NovaOrdem from './novaOrdem';
import { checkCookie } from '../utils/util'
class Ordens extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalOrdem: false,
            salvar: false
        }
        this.toogleModal = this.toogleModal.bind(this)
        this.pesquisar = this.pesquisar.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }
    componentDidMount() {
        let user = checkCookie();
        //console.log(user);
    }
    toogleModal() {
        this.setState({ modalOrdem: !this.state.modalOrdem })
    }
    pesquisar() {
        console.log('pesquisar')
    }
    submitForm(values) {
        //this.setState({ values })
        console.log(values)
    }
    render() {
        return (
            <>
                <Row className="pt-lg-5 pl-lg-5">
                    <Col md="8"></Col>
                    <Col md="4">
                        <Button variant="primary" onClick={() => this.toogleModal()} size="lg">Nova Ordem de serviço</Button>
                    </Col>
                </Row>
                <Row className="pt-lg-5 pl-lg-5">
                    <Col md="12"></Col>
                </Row>

                <Row>
                    <Col md="3" ><strong>Data Início</strong></Col>
                    <Col md="3" ><strong>Data Fim</strong></Col>
                    <Col md="6" ></Col>
                </Row>
                <Row >
                    <Col md="3"><Form.Control
                        required
                        type="date"
                    /></Col>
                    <Col md="3"><Form.Control
                        required
                        type="date"
                    /></Col>
                    <Col md="6"></Col>
                </Row>
                <Row>
                    <Col md="4"><strong>Cliente</strong></Col>
                    <Col md="3"><strong>Cidade</strong></Col>
                    <Col md="3"><strong>Bairro</strong></Col>
                    <Col md="2"><strong>UF</strong></Col>
                </Row>
                <Row>
                    <Col md="4">
                        <Form.Control
                            required
                            type="text"
                            placeholder="Cliente"
                        />
                    </Col>
                    <Col md="3">
                        <Form.Control
                            required
                            type="text"
                            placeholder="Cidade"
                        />
                    </Col>
                    <Col md="3">
                        <Form.Control
                            required
                            type="text"
                            placeholder="Bairro"
                        />
                    </Col>
                    <Col md="2">
                        <Form.Control
                            required
                            type="text"
                            placeholder="UF"
                        />
                    </Col>
                </Row>

                <Row>
                    <Col md="4"><strong>Tipo</strong></Col>
                    <Col md="3"><strong>Valor Mínimo</strong></Col>
                    <Col md="3"><strong>Valor Máximo</strong></Col>
                </Row>
                <Row>
                    <Col md="4">
                        <Form.Control as="select" placeholder="Serviço">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Col>
                    <Col md="3">
                        <Form.Control
                            required
                            type="number"
                            placeholder="Valor Min"
                        />
                    </Col>
                    <Col md="3">
                        <Form.Control
                            required
                            type="number"
                            placeholder="Valor Max"
                        />
                    </Col>
                    <Col md="2">
                        <Button variant="primary" onClick={() => this.pesquisar()} size="md">Pesquisar</Button>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md="12">
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Cliente</th>
                                    <th>Bairro</th>
                                    <th>Cidade</th>
                                    <th>Uf</th>
                                    <th>Data</th>
                                    <th>Serviço</th>
                                    <th>Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>

                <MDBModal isOpen={this.state.modalOrdem} toggle={this.toogleModal} size="lg" centered>
                    <MDBModalHeader toggle={this.toogleModal}> <span>Nova ordem de serviço</span>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <MDBRow>
                            <MDBCol md="12">
                                <NovaOrdem onFormSubmit={this.submitForm} />
                            </MDBCol>
                        </MDBRow>
                    </MDBModalBody>

                </MDBModal>
            </>
        )
    }
}


export default Ordens