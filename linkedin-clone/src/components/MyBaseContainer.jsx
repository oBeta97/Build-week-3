import { Col, Container, Row } from "react-bootstrap";

const MyBaseContainer = ({children}) => {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={11}>
                    {children}
                </Col>
            </Row>
        </Container>
    );
};

export default MyBaseContainer;