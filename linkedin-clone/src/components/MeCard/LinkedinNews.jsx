import { Container, Row, Col, Button } from "react-bootstrap";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

export const LinkedinNews = () => {
  return (
    <Container
      className="border rounded p-4"
      style={{ backgroundColor: "#ffffff" }}
    >
      <Row>
        <Col xs={10} className=" d-flex justify-content-start p-0 m-0">
          <h5> LinkedIn Notizie</h5>
        </Col>
        <Col xs={2}>
          <small className=" p-0 m-0">
            <BsFillInfoSquareFill />
          </small>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-start  text-secondary p-0">
          <p>Storie principali</p>
        </Col>
      </Row>
      <Row className="d-flex flex-column ">
        <Col className="d-flex justify-content-start m-0 p-0 fw-semibold">
          <p className="p-0 m-0 small text-start ">
            Alla fine ring of power non è male
          </p>
        </Col>
        <Col className="d-flex justify-content-start  m-0 p-0">
          <small className=" text-secondary lh-sm">
            6 ore fa • 3567 lettori
          </small>
        </Col>
      </Row>{" "}
      <Row className="d-flex flex-column py-2">
        <Col className="d-flex justify-content-start m-0 p-0 fw-semibold">
          <p className="p-0 m-0 small text-start"> topo giggio è con noi</p>
        </Col>
        <Col className="d-flex justify-content-start  m-0 p-0">
          <small className=" text-secondary lh-sm">
            2 ore fa • 13456 lettori
          </small>
        </Col>
      </Row>
      <Row className="d-flex flex-column py-2">
        <Col className="d-flex justify-content-start m-0 p-0 fw-semibold">
          <p className="p-0 m-0 small text-start">Viva i Kakapo </p>
        </Col>
        <Col className="d-flex justify-content-start  m-0 p-0">
          <small className=" text-secondary lh-sm">1 ore fa • 1 lettore</small>
        </Col>
      </Row>
      <Row className="d-flex flex-column py-2">
        <Col className="d-flex justify-content-start m-0 p-0 fw-semibold">
          <p className="p-0 m-0 small text-start">Era meglio quando si stava peggio </p>
        </Col>
        <Col className="d-flex justify-content-start  m-0 p-0">
          <small className=" text-secondary lh-sm">
            5 giorni fa • 1234 lettore
          </small>
        </Col>
      </Row>
      <Row>
        <Col className=" text-start p-0 py-2 text-secondary">
          I giochi di oggi <IoIosArrowDown />
        </Col>
      </Row>
      <Row>
        <Col xs="2" className="p-0 m-0 d-flex justify-content-start ">
          <img
            src="https://static.licdn.com/aero-v1/sc/h/6uvsjtqx2j32uh1a803qygh5y"
            alt="gioco"
            className="img-fluid p-0 m-0 "
          />
        </Col>
        <Col xs="10" className="ps-2 d-flex flex-column">
          <p className="p-0 m-0 text-start">Queens</p>
          <small className=" text-secondary lh-sm text-start ">
            Incorona ogni regione
          </small>
        </Col>
      </Row>
    </Container>
  );
};
