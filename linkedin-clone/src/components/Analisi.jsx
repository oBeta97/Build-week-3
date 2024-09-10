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
          <h4 className="fw-bold">Analisi</h4>
          <p className="small">
            <FaEye />
            &nbsp;Solo per te
          </p>
        </Col>
      </Row>

      <Row className="border-bottom">
        {/* PRIMA COLONNA */}
        <Col xs={1} className="text-start">
          <IoPeople />
        </Col>

        <Col xs={3}>
          {" "}
          <p className="fw-bold text-start lh-sm">
            3 visualizzazioni del profilo <br></br>{" "}
            <span className="extra-small text-secondary">
              Scopri chi ha visitato il tuo profilo.
            </span>
          </p>{" "}
        </Col>

        {/* SECONDA COLONNA */}
        <Col xs={1} className="text-start">
          <VscGraph />
        </Col>
        <Col xs={3}>
          {" "}
          <p className="fw-bold text-start lh-sm">
            {" "}
            0 impressioni del post<br></br><span className="extra-small">Crea un post per aumentare l&#180;interesse.</span><br></br>
            <span className="extra-small text-secondary">Ultimi 7 giorni</span>
          </p>{" "}
        </Col>

        {/* TERZA COLONNA */}
        <Col xs={1} className="text-start">
          <IoSearch />
        </Col>
        <Col xs={3}>
          {" "}
          <p className="fw-bold text-start lh-sm">
            {" "}
            2 comparse nei motori di ricerca<br></br>
            <span className="extra-small text-secondary">
              Vedi quante volte compari nei risultati di ricerca.
            </span>
          </p>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <p className="fw-bold my-2">
            Mostra tutte le analisi <FaArrowRight />
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Analisi;
