import React from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';

const MyFooter = () => {
  return (
    <footer style={{ backgroundColor: '#f8f9fa' }}>
      <Container fluid className="py-5">
        <Row className="text-start">
          <Col xs={12} md={7}>
            <Row>
              <Col xs={6} md={4}>
                <p className="mb-2">Informazioni</p>
              </Col>
              <Col xs={6} md={4}>
                <p className="mb-2">Accessibilità</p>
              </Col>
              <Col xs={6} md={4}>
                <p className="mb-2">Talent Solutions</p>
              </Col>
              <Col xs={6} md={4}>
                <p className="mb-2">Informazioni sulla community professionale</p>
              </Col>
              <Col xs={6} md={4}>
                <p className="mb-2">Carriera</p>
              </Col>
              <Col xs={6} md={4}>
                <p className="mb-2">Soluzioni di marketing</p>
              </Col>
              <Col xs={6} md={4}>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="link"
                    className="p-0  d-flex align-items-center text-decoration-none "
                    id="dropdown-basic"
                  >
                    <p className="mb-0">Privacy e condizioni</p>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Privacy</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Condizioni</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col xs={6} md={4}>
                <p className="mb-2">Opzioni per gli annunci pubblicitari</p>
              </Col>
              <Col xs={6} md={4}>
                <p className="mb-2">Pubblicità</p>
              </Col>
              <Col xs={6} md={4}>
                <p className="mb-2">Sales Solutions</p>
              </Col>
              <Col xs={6} md={4}>
                <p className="mb-2">Mobile</p>
              </Col>
              <Col xs={6} md={4}>
                <p className="mb-2">Piccole imprese</p>
              </Col>
              <Col xs={6} md={4}>
                <p className="mb-2">Centro sicurezza</p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={3}>
            <Row>
              <Col xs={2}>
                <p>Icn1</p>
              </Col>
              <Col xs={10}>
                <p className="mb-1 fs-6">Domande?</p>
                <p>Visita il nostro Centro assistenza.</p>
              </Col>
              <Col xs={2}>
                <p>Icn2</p>
              </Col>
              <Col xs={10}>
                <p className="mb-1 fs-6">Gestisci il tuo account e la tua privacy</p>
                <p>Vai alle impostazioni</p>
              </Col>
              <Col xs={2}>
                <p>Icn3</p>
              </Col>
              <Col xs={10}>
                <p className="mb-1 fs-6">Trasparenza sui contenuti consigliati</p>
                <p>Scopri di più sui contenuti consigliati.</p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={2}>
            <Row>
              <Col xs={12}>
                <p>Seleziona lingua</p>
              </Col>
              <Col xs={12}>
                <Dropdown >
                  <Dropdown.Toggle variant="outline-dark" id="dropdown-basic" className=' bg-white'>
                    Italiano
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="Inglese">Inglese</Dropdown.Item>
                    <Dropdown.Item eventKey="Spagnolo">Spagnolo</Dropdown.Item>
                    <Dropdown.Item eventKey="Francese">Francese</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-secondary mt-3 text-start">
              LinkedIn Corporation © 2024
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
