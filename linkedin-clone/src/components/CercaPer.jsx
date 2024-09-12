import { Container, Row, Col } from "react-bootstrap";

const CercaPer = () => {
  return (
    <Container className="bg-white border rounded  d-flex  flex-column p-3 gap-2">
      <Row>
        <Col xs={12}>
          <h5 className="text-start m-0 p-0"> Cerca Per:</h5>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <p className="text-start m-0 p-0 ">Azienda</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <p className="text-start m-0 p-0 ">categoria</p>
        </Col>
      </Row>
    </Container>
  );
};

export default CercaPer;
