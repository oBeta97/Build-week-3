import { Col, Container, Row } from "react-bootstrap";
import MeCard from "./MeCard";
import ResourcesCard from "./ResourcesCard";
import FormationCard from "./FormationCard";
import LenguageAndURL from "./LenguageAndURL";
import AdsComp from "./AdsComp";
import ActivityCard from "./MeCard/ActivityCard";
// import RandomCard from "./RandomCard";
import Analisi from "./Analisi";

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
                    <ActivityCard />
                    <Analisi />
                  </Col>
                  <Col xs={12} md={4} className="d-flex flex-column gap-2">
                    <LenguageAndURL />
                    <AdsComp />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
    );
};

export default ProfilePage;