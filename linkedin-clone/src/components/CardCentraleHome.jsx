import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BsHandThumbsUp } from "react-icons/bs";
import { MdOutlineInsertComment } from "react-icons/md";
import { GoArrowSwitch } from "react-icons/go";
import { IoIosSend } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { BiWorld } from "react-icons/bi";

export const CardCentraleHome = () => {
  return (
    <Container
      fluid
      className="border rounded p-4 mt-2"
      style={{ backgroundColor: "#ffffff" }}
    >
      {/* prima row */}
      <Row className="text-start mb-3">
        <Col xs={2}>
          <img
            src="https://c8.alamy.com/compit/2f4pywh/idea-e-successo-si-l-uomo-gioisce-2f4pywh.jpg"
            alt="img"
            className="img-fluid "
          />
        </Col>
        <Col xs={8} className="d-flex flex-column">
          <p className="text-start fw-bold lh-sm m-0 p-0">Nome account</p>
          <span className="text-muted">867 follower</span>
          <span className="text-muted ">
            29 minuti • <BiWorld />
          </span>
        </Col>
        <Col xs={2} className="text-primary d-lg-flex ">
          <p>
            +<span className="d-none d-lg-inline m-0 p-0 g-0"> Segui </span>
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs="12" className=" d-flex justify-content-start text-muted">
          <p> testo a cavolo 🤪 </p>
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <img
            src="https://c8.alamy.com/compit/2f4pywh/idea-e-successo-si-l-uomo-gioisce-2f4pywh.jpg"
            alt="img"
            className="img-fluid "
          />
        </Col>
      </Row>
      <Row>
        <Col xs="12" className=" d-flex justify-content-start text-muted my-2">
          <small>
            <FcLike /> 9
          </small>
        </Col>
      </Row>
      <Row>
        <Col
          xs="12 "
          className=" d-flex justify-content-between align-items-center border-top  "
        >
          <Button className="d-flex align-items-center bg-white border-0 text-dark ">
            <BsHandThumbsUp className="me-2" />
            <p className="d-none d-lg-block p-0 m-0 small"> Consiglia</p>
          </Button>
          <Button className="d-flex align-items-center bg-white border-0 text-dark ">
            <MdOutlineInsertComment className="me-2" />
            <p className="d-none d-lg-block p-0 m-0 small">Commenta</p>
          </Button>
          <Button className="d-flex align-items-center bg-white border-0 text-dark p-0">
            <GoArrowSwitch className="me-2" />
            <p className="d-none d-lg-block p-0 m-0 small">Diffondi il post</p>
          </Button>
          <Button className="d-flex align-items-center bg-white border-0 text-dark ">
            <IoIosSend className="me-2" />
            <p className="d-none d-lg-block p-0 m-0 small">Invia</p>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
