import { Col, Container, Row } from "react-bootstrap";
import { FaBookmark, FaCalendar, FaUsers } from "react-icons/fa6";


const LeftAsideList = () => {
    return (
        <Container fluid className="d-none d-md-block rounded-3 border overflow-hidden p-3 bg-white d-flex flex-column gap-1">
            <Row>
                <Col xs={2}>
                    <FaBookmark />
                </Col>
                <Col xs={10} className="text-start">
                    Elementi salvati
                </Col>
            </Row>
            <Row>
                <Col xs={2}>
                    <FaUsers />
                </Col>
                <Col xs={10} className="text-start">
                    Gruppi
                </Col>
            </Row>
            <Row>
                <Col xs={2}>
                    <FaCalendar />
                </Col>
                <Col xs={10} className="text-start">
                    Eventi
                </Col>
            </Row>
        </Container>
    );
};

export default LeftAsideList