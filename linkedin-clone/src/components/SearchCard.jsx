import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { FaInfoCircle } from "react-icons/fa";
import { useState } from "react";

const SearchCard = () => {
  const [follow, setFollow] = useState(false); // per cambiare il follow del button
  const [show, setShow] = useState(false); // per mostrare il modale


  const handleClick = () => {
    setFollow(!follow);
  }; // setterò il contrario di "follow" ad ogni CiLock, tipo uno switch

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  // ------------------ funzione per ritornare il giorno esatto  ------------------
  const dateString = "2021-09-10T06:00:52.000Z";

  const date = new Date(dateString);

  // estrarre le info utili
  const day = date.getUTCDate(); // giorno
  const month = date.getUTCMonth() + 1; // mese (i mesi partono da 0, quindi aggiungi 1)
  const year = date.getUTCFullYear(); // anno

  console.log(`Giorno: ${day}, Mese: ${month}, Anno: ${year}`);
  // ------------------ funzione per ritornare il giorno esatto  ------------------


  return (
    <Container className="bg-white border rounded">
      <Row className="pt-3">
        <Col xs={2}>
          {/* url */}
          <img
            src="https://www.shutterstock.com/image-photo/yellow-crested-cockatoo-cacatua-sulphurea-260nw-2226573105.jpg"
            alt="profilo azienda"
            className="w-100 rounded-5"
          ></img>
        </Col>

        <Col xs={10} className="d-flex flex-column align-items-start">
          {/* company_name */}
          <h4>Opus One Solutions</h4>
          {/* candidate_required_location */}
          <p>Anywhere</p>

          <div className="d-flex">
            <Button
              onClick={handleClick}
              variant={follow ? "success" : "outline-light"}
              style={{ color: follow ? "white" : "black" }}
              className="mb-3 me-2 rounded-5 d-flex align-items-center extra-small border"
            >
              &nbsp;{follow ? "Stai seguendo" : "+ Segui"}
            </Button>

            <Button
              className="mb-3 rounded-5 d-flex align-items-center extra-small"
              onClick={handleShow}
            >
              <FaInfoCircle />
              &nbsp;Info
            </Button>
          </div>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Dettagli della nostra proposta di lavoro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={6}>
                {/* company_name  +  url */}
                <h4>1. Nome Azienda</h4>
                <p>Opus One Solution</p>
              </Col>
              <Col xs={6} className="text-end">
                <img
                  src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg"
                  alt="profilo azienda"
                  className="w-25 rounded-5"
                ></img>
              </Col>

              {/* job_type   +  title */}
              <h4>2. Tipo di contratto</h4>
              <p>Freelance Content Writer</p>
              <p>Assunto tramite : contract</p>

              {/* description */}
              <h4>3. Descrizione</h4>
              <p>
                Dettagli sull indirizzo di residenza e indirizzo di
                spedizione...
              </p>

              {/* salary */}
              <h4>4. Stipendio</h4>
              <p>1.800 €</p>

              {/* publication_date */}
              <h4>6. Data pubblicazione</h4>
              <p>
                {day} - {month} - {year}
              </p>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default SearchCard;
