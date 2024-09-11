import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaEye } from "react-icons/fa";

const ConsigliatiPerTe = () => {
  return (
    <Container
      className="border rounded p-4 mt-2"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <Row className="mb-3">
        <Col xs={12}>
          <h5 className="text-start fw-bold">Consigliato per te</h5>
          <p className="text-muted text-start mb-0">
            <FaEye /> Solo per te
          </p>
        </Col>
      </Row>

      <Row>
        <Col ms={12} md={12} lg={6} className="mb-3">
          <Container className="border rounded p-3 h-100">
            <Row className="mb-1">
              <Col xs={4} sm={3} md={3} lg={4} className="d-flex justify-content-center">
                <img
                  src="https://img.freepik.com/vettori-premium/un-disegno-di-una-macchina-fotografica-con-un-obiettivo-che-dice-il-meglio_410516-87079.jpg"
                  alt="Camera icon"
                  className="img-fluid"
                />
              </Col>
              <Col xs={8} sm={9} lg={8}>
                <h6 className="fw-bold  small text-start">
                  Aggiungi una foto al tuo profilo per aiutare gli altri a
                  riconoscerti
                </h6>{" "}
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <p className="text-muted small text-start mb-2">
                  Gli utenti con una foto del profilo ricevono fino a 2,3 volte
                  più visualizzazioni del profilo.
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Button
                  variant="outline-dark d-flex justify-content-start"
                  size="sm"
                >
                  Aggiungi foto
                </Button>
              </Col>
            </Row>
          </Container>
        </Col>

        <Col ms={12} md={12} lg={6} className="mb-3 ">
          <Container className="border rounded p-3 h-100">
            <Row className="mb-1">
              <Col xs={4} sm={3} md={3} lg={4} className="d-flex justify-content-center">
                <img
                  src="https://static.vecteezy.com/ti/vettori-gratis/p1/25433492-illustrazione-vettore-di-nero-valigia-nel-piatto-design-gratuito-vettoriale.jpg"
                  alt="Summary icon"
                  className="img-fluid "
                />
              </Col>
              <Col xs={8} sm={9} lg={8}>
                <h6 className="fw-bold small text-start mt-">
                  Dove lavori attualmente?
                </h6>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <p className="text-muted small text-start mb-2">
                  Gli utenti che includono un riepilogo ricevono fino a 3,9
                  volte più visualizzazioni del profilo.
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Button
                  variant="outline-dark d-flex justify-content-start "
                  size="sm"
                >
                  Aggiungi un riepilogo
                </Button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default ConsigliatiPerTe;
