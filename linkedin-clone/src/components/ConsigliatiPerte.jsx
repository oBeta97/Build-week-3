import { Img, Button, Row, Col, Container } from "react-bootstrap";
import { FaEye } from "react-icons/fa";

const ConsigliatiPerTe = () => {
  return (
    <Container>
      {/*1 prima riga */}
      <Row>
        <Col>
          {" "}
          Consigliato per te <br></br>
          <FaEye /> Solo per te
        </Col>
      </Row>

      {/*2 seconda riga */}
      <Row>
        {/* qui luca ha una barra di avanzamento */}
        <h1>test</h1>
      </Row>

      {/*3 terza riga, split di cards */}
      <Row>
        {/* Prima sezione - dove lavori attualmente */}
        <Container>
          <Col xs={6}>
            <Card className="mb-3 ">
              <Row className="d-flex align-items-start">
                <Col xs={2}>
                  <Img
                    src="https://img.freepik.com/vettori-premium/un-disegno-di-una-macchina-fotografica-con-un-obiettivo-che-dice-il-meglio_410516-87079.jpg"
                    alt="Camera icon"
                    className="me-3 w-25"
                  />
                </Col>

                <Col xs={10} className="small fw-bold text-start">
                  Dove lavori attualmente?
                </Col>
              </Row>
              <Row>
                <Col xs={12} className="text-muted small text-start">
                  Gli utenti che includono un riepilogo ricevono fino a 3,9
                  volte più visualizzazioni del profilo.
                </Col>
              </Row>
              <Row>
                <Col Col xs={12}>
                  <Button variant="outline-dark" className="">
                    Aggiungi un riepilogo
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Container>
        {/* Seconda sezione - Aggiungi Riepilogo */}
        <Container>
          <Col xs={6}>
            <Row className="mb-3 ">
              <Col xs={2} className="d-flex align-items-start">
                <img
                  src="https://static.vecteezy.com/ti/vettori-gratis/p1/25433492-illustrazione-vettore-di-nero-valigia-nel-piatto-design-gratuito-vettoriale.jpg"
                  alt="Summary icon"
                  className="me-3 w-25"
                />
              </Col>
              <Col xs={10} className="small fw-bold text-start">
                Dove lavori attualmente?
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="text-muted small text-start">
                Gli utenti che includono un riepilogo ricevono fino a 3,9 volte
                più visualizzazioni del profilo.
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Button variant="outline-dark" className="">
                  Aggiungi un riepilogo
                </Button>
              </Col>
            </Row>
          </Col>
        </Container>
      </Row>
    </Container>
  );
};

export default ConsigliatiPerTe;
