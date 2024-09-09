import { Col, Container, Row } from "react-bootstrap";
import RandomCard from "./RandomCard";

const ProfilePage = () => {
    return (
        <Container className="py-4">
            <Row className="justify-content-center">
              <Col xs={12} sm={11}>
                <Row>
                  <Col xs={12} md={9}>
                    <RandomCard />
                  </Col>
                  <Col xs={12} md={3}>
                    <RandomCard />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
    );
};

export default ProfilePage;