import React from 'react';
import { Col, Row, Table, Button, Form } from 'react-bootstrap'
import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";

function Header() {

    let history = useHistory();

    function sair() {
        window.localStorage.clear();
        history.push("/login");
    }

    return (
        <>
            <Row>
                <Col md="11">  <h1 className="text-left"><a href="/">Desafio Malwee</a> </h1></Col>
                <Col md="1">     <Button variant="info" onClick={sair} size="sm">Sair</Button></Col>
            </Row>
        </>
    );
}

export default Header