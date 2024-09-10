import { Button, Col, Container, Row } from "react-bootstrap";
import { FaArrowRight, FaBookmark, FaEye, FaUsers } from "react-icons/fa6";

const ResourcesCard = () => {
    return (
        <Container
            fluid
            className="rounded-3 border 
                overflow-hidden 
                p-0 px-4 pt-4 
                bg-white 
                text-start
            "
        >
            <h5 className="p-0 m-0">Risorse</h5>
            <Row>
                <div className="d-flex align-items-center text-secondary gap-1 small">
                    <FaEye />
                    <p className="p-0 m-0">Solo per te</p>
                </div>
            </Row>
            <Row>
                <Container>
                    <Row className="py-3 border-bottom">
                        <Col xs={1}>
                            <FaUsers className="fs-3" />
                        </Col>
                        <Col>
                            <p className="p-0 m-0 fw-bold">La mia rete</p>
                            <p className="p-0 m-0">Salva e gestisci i tuoi collegamenti e interessi.</p>
                        </Col>
                    </Row>
                    <Row className="py-3 border-bottom">
                        <Col xs={1}>
                            <FaBookmark className="fs-3" />
                        </Col>
                        <Col>
                            <p className="p-0 m-0 fw-bold">Elementi salvati</p>
                            <p className="p-0 m-0">Monitora le tue offerte di lavoro, i corsi e gli articoli.</p>
                        </Col>
                    </Row>
                </Container>
            </Row>
            <Row>
                <Button variant="white" className="fw-bold text-secondary">Mostra tutte le attività <FaArrowRight /> </Button>
            </Row>
        </Container>
    );
};

export default ResourcesCard;