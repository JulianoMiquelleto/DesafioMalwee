import React, { Component } from 'react'
import { Col, Row, Table, Button } from 'react-bootstrap'


class Ordens extends Component {
    render() {
        return (
            <>
                <Row className="pt-lg-5 pl-lg-5">
                    <Col md="8"></Col>
                    <Col md="4">
                        <Button variant="primary" size="lg">Nova Ordem de serviço</Button>
                    </Col>
                </Row>
                <Row className="pt-lg-5 pl-lg-5">
                    <Col md="12"></Col>
                </Row>


                <Row>
                    <Col md="12">
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Cliente</th>
                                    <th>Data</th>
                                    <th>Serviço</th>
                                    <th>Descrição</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </>
        )
    }
}


export default Ordens