import { Col, Container, Row } from "react-bootstrap";
import { FaEye, FaArrowRight } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { VscGraph } from "react-icons/vsc";
import { IoPeople } from "react-icons/io5";

const Analisi = () => {
  return (
    <Container className="bg-white border rounded mt-2">
      <Row>
        <Col xs={12} className="text-start">
          <h4 className="fw-bold mb-0 mt-3 ms-2">Analisi</h4>
          <p className="small ms-2 grey">
            <FaEye />
            &nbsp;Solo per te
          </p>
        </Col>
      </Row>
      <Row className="border-bottom px-xs-0 px-lg-3 d-flex">


        {/* PRIMA COLONNA */}
        <Col lg={1} xs={1} className="text-start fs-3">
          <IoPeople />
        </Col>

        <Col lg={3} xs={11} className="p-0 px-1 ps-xs-2 ps-lg-0">
          {" "}
          <p className="fw-bold text-start lh-sm">
            3 visualizzazioni del profilo <br></br>{" "}
            <span className="extra-small">
              Scopri chi ha visitato il tuo profilo.
            </span>
          </p>{" "}
        </Col>


        {/* SECONDA COLONNA */}
        <Col lg={1} xs={1} className="text-start fs-3">
          <VscGraph />
        </Col>
        <Col lg={3} xs={11} className="p-0 px-1 ps-xs-2 ps-lg-0">
          {" "}
          <p className="fw-bold text-start lh-sm">
            {" "}
            0 impressioni del post<br></br><span className="extra-small">Crea un post per aumentare l'interesse.</span><br></br>
            <span className="extra-small grey">Ultimi 7 giorni</span>
          </p>{" "}
        </Col>


        {/* TERZA COLONNA */}
        <Col lg={1} xs={1} className="text-start fs-3">
          <IoSearch />
        </Col>
        <Col lg={3} xs={11} className="p-0 px-1 ps-xs-2 ps-lg-0">
          {" "}
          <p className="fw-bold text-start lh-sm">
            {" "}
            2 comparse nei motori di ricerca<br></br>
            <span className="extra-small">
              Vedi quante volte compari nei risultati di ricerca.
            </span>
          </p>
        </Col>
      </Row>

      <Row>
        <Col xs={12} className="d-flex justify-content-center align-items-start">
          <p className="fw-bold my-2">
            Mostra tutte le analisi <FaArrowRight />
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Analisi;


// da MD a LG si rompono le icone
// > 768 md
// < 992 lg