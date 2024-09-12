import { Container, Row, Col } from "react-bootstrap";

const CercaPer = () => {
  return (
    <Container className="bg-white border rounded ">
      <Row>
        <Col xs={12}>
          <h4 className="text-start"> Cerca Per:</h4>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <p className="text-start ">Aziendea</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <p className="text-start ">categoria</p>
        </Col>
      </Row>
    </Container>
  );
};

export default CercaPer;
