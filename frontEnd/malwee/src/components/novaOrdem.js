import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class NovaOrdem extends Component {

    constructor(props) {
        super(props)
        this.state = {
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }
    onInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    onSubmitForm() {
        
        //this.props.onFormSubmit(this.state)
    }
    render() {
        return (
            <>
                <Form validated onSubmit={() => this.onSubmitForm}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label><strong>Fornecedor</strong></Form.Label>
                        <Form.Control type="text" disabled />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput2">
                        <Form.Label><strong>Data</strong></Form.Label>
                        <Form.Control type="date" required onChange={this.onInputChange} name="data" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput3">
                        <Form.Label><strong>Cliente</strong></Form.Label>
                        <Form.Control as="select" required onChange={this.onInputChange} name="cliente">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label><strong>Tipo de serviço</strong></Form.Label>
                        <Form.Control as="select" required onChange={this.onInputChange} name="tipo">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput4">
                        <Form.Label><strong>Valor do serviço</strong></Form.Label>
                        <Form.Control type="number" required onChange={this.onInputChange} name="valor" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label><strong>Descrição</strong></Form.Label>
                        <Form.Control as="textarea" required rows={3} onChange={this.onInputChange} name="descricao" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.submit" className="text-right">
                        <Button variant="success" type="submit"   size="md">Salvar Ordem de serviço</Button>
                    </Form.Group>

                </Form>
            </>
        )
    }
}


export default NovaOrdem