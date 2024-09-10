import { Button, Col, Container, Row } from "react-bootstrap";
import { FaArrowRight, FaPencil } from "react-icons/fa6";

const ActivityCard = () => {
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
            <Row>

                <h5 className="p-2 m-0">Attività</h5>
                <div className="d-flex align-items-center justify-content-between text-secondary gap-1 small">
                    <p className="p-0 m-0 text-primary">0 follower</p>
                    <div className="d-flex justify-content-end gap-3 align-items-center">
                        <button type="button" className="btn btn-outline-primary rounded-pill">Crea un post</button>
                        <FaPencil />
                    </div>
                </div>

            </Row>
            <Row>
                <Container>
                    <Row className="py-3 border-bottom">
                      
                        <Col>
                            <p className="p-0 m-0 fw-bold">Non hai ancora pubblicato nulla</p>
                            <p className="p-0 m-0">I post che condividi appariranno qui</p>
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

export default ActivityCard;