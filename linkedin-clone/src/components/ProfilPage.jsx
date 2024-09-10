import { Col, Container, Row } from "react-bootstrap";
import MeCard from "./MeCard";
import ResourcesCard from "./ResourcesCard";
import FormationCard from "./FormationCard";
import LenguageAndURL from "./LenguageAndURL";

const ProfilePage = () => {
    return (
        <Container className="py-4">
            <Row className="justify-content-center">
              <Col xs={12} sm={11}>
                <Row>
                  <Col xs={12} md={8} className="d-flex flex-column gap-2">
                    {/* <RandomCard /> */}
                    <MeCard />
                    <ResourcesCard />
                    <FormationCard />
                  </Col>
                  <Col xs={12} md={4}>
                    <LenguageAndURL />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
    );
};

export default ProfilePage;