import { Button, Row, Col } from 'react-bootstrap';
import { useHistory } from "react-router-dom";



function Inicial() {
  let history = useHistory();
  function click(route) {
    history.push(`/${route}`);
  }
  return (
    <>
      <Row className="pt-lg-5 pl-lg-5" >
        <Col md="3"> </Col>

        <Col md="3">
          <Button variant="outline-info" onClick={() => click('estatisticas')} size="lg">Estatísticas</Button>
        </Col>

        <Col md="3">
          <Button variant="outline-info" onClick={() => click('ordens')} size="lg">Ordens de serviço</Button>
        </Col>

        <Col md="3"> </Col>
      </Row>
    </>
  );
}

export default Inicial
