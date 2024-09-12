import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { FaInfoCircle } from "react-icons/fa";
import { useState } from "react";

const SearchCard = ({ data }) => {
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
  const toLocalString = (dateString) => {
    const date = new Date(dateString);

    // estrarre le info utili
    const day = date.getUTCDate(); // giorno
    const month = date.getUTCMonth() + 1; // mese (i mesi partono da 0, quindi aggiungi 1)
    const year = date.getUTCFullYear(); // anno

    console.log(`Giorno: ${day}, Mese: ${month}, Anno: ${year}`);
    console.log(data);

    return `${day}/${month}/${year}`;
  }
  // ------------------ funzione per ritornare il giorno esatto  ------------------


  return (
    <Container className="bg-white border rounded">
      <Row className="pt-3">
        <Col xs={2}>
          {/* url */}
          <img
            src={data.company_logo_url ? data.company_logo_url : 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='}
            alt="profilo azienda"
            className="img-fluid rounded-circle"
          ></img>
        </Col>
        <Col xs={10} className="d-flex flex-column align-items-start text-start">
          {/* company_name */}
          <h4 className="text-wrap">{data.title}</h4>
          {/* candidate_required_location */}
          <p>{data.candidate_required_location}</p>

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
            {<Row>
              <Col xs={6}>
                {/* company_name  +  url */}
                <h4>1. Nome Azienda</h4>
                <p>{data.company_name}</p>
              </Col>
              <Col xs={6} className="text-end">
                <img
                  src={data.company_logo_url ? data.company_logo_url : 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='}
                  alt="profilo azienda"
                  className="w-25 rounded-circle"
                />
              </Col>

              {/* job_type   +  title */}
              <h4>2. Tipo di contratto</h4>
              <p>{data.title}</p>
              <p>Assunto tramite: {data.job_type}</p>

              {/* description */}
              <h4>3. Descrizione</h4>
              <p>
                Titolo lavoro: {data.title}
              </p>
              <p>
                il candidato deve vivere in: {data.candidate_required_location}
              </p>
              <p>
                Categoria lavoro: {data.category}
              </p>
              <p>
                Link richiesta di lavoro: {data.url}
              </p>

              {/* salary */}
              {
                data.salary &&
                <>
                  <h4>4. Stipendio</h4>
                  <p>1.800 €</p>
                </>
              }

              {/* publication_date */}
              <h4>4. Data pubblicazione</h4>
              <p>
                {toLocalString(data.publication_date)}
              </p>
            </Row>}
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
