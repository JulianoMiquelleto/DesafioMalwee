import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { apiMalwee, dadosUser, tipoServico } from '../api/config';

class NovaOrdem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            arCli: [],
            tipo: 1,
            cliente: 4

        };
        this.onInputChange = this.onInputChange.bind(this);
        this.salvar = this.salvar.bind(this);

    }
    componentDidMount() {
        let forn = dadosUser();
        this.setState({
            nome: forn.nome,
            idForn: forn.id,
            tipoServico: tipoServico
        })
        this.getClientes();
    }
    onInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    salvar() {
        let ordem = {
            IdFornecedor: this.state.idForn,
            Data: (new Date(this.state.data)).toJSON(),
            IdCliente: this.state.cliente,
            Tipo: this.state.tipo,
            Valor: this.state.valor,
            Descricao: this.state.descricao
        }
        apiMalwee.post('ordem', ordem)
            .then(function (response) {
                alert('Ordem cadastrada com sucesso!')
            })
            .catch(function (error) {
                alert('Erro ao cadastrar orde de serviço, favor verificar os dados!')
            });
    }
    getClientes() {
        apiMalwee.get(`cliente`)
            .then(res => {
                if (res.status === 200) {
                    const cli = res.data;
                    this.setState({ arCli: cli })
                }
            })
    }
    render() {
        return (
            <>
                <Form validated >
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label><strong>Fornecedor</strong></Form.Label>
                        <Form.Control type="text" style={{ textTransform: 'uppercase' }} disabled defaultValue={this.state.nome} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput2">
                        <Form.Label><strong>Data</strong></Form.Label>
                        <Form.Control type="date" required onChange={this.onInputChange} name="data" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput3">
                        <Form.Label><strong>Cliente</strong></Form.Label>
                        <Form.Control as="select" required onChange={this.onInputChange} name="cliente">
                            {
                                this.state.arCli.map((option, index) => {
                                    return (<option key={index} value={option.Id}>{option.Nome}</option>)
                                })
                            }
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label><strong>Tipo de serviço</strong></Form.Label>
                        <Form.Control as="select" required onChange={this.onInputChange} name="tipo">
                            {
                                tipoServico.map((option, index) => {
                                    return (<option key={option.id} value={option.id}>{option.value}</option>)
                                })
                            }
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
                        <Button variant="success" type="button" onClick={this.salvar} size="md">Salvar Ordem de serviço</Button>
                    </Form.Group>

                </Form>
            </>
        )
    }
}


export default NovaOrdem