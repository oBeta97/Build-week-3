import { Col, Container, Row } from "react-bootstrap";
import { FaPencil } from "react-icons/fa6";
import { Link } from "react-router-dom";


const LenguageAndURL = () => {
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
            <Row className="py-3 border-bottom">
                <Row>
                    <Col xs={10}>
                        <h5>Lingua del profilo</h5>
                    </Col>
                    <Col xs={2}>
                        <FaPencil />
                    </Col>
                </Row>
                <small>Italiano</small>
            </Row>
            <Row className="py-3 border-bottom">
                <Row>
                    <Col xs={10}>
                        <h5>Profilo pubblico e URL</h5>
                    </Col>
                    <Col xs={2}>
                        <FaPencil />
                    </Col>
                </Row>
                <small>
                    <Link to={'profile/me'} className="text-decoration-none text-dark">
                        http://localhost:5173/profile/me
                    </Link>
                </small>
            </Row>
        </Container>
    );
};

export default LenguageAndURL;