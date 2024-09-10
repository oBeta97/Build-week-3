import { Col, Container, Row } from "react-bootstrap";
import { FaPencil } from "react-icons/fa6";
import LandscapeImg from "./MeCard/LandscapeImg";
import ProfileInfo from "./MeCard/ProfileInfo";
import ButtonList from "./MeCard/ButtonList";
import OpenToCard from "./MeCard/OpenToCard";


const MeCard = () => {

    return (
        <Container fluid className="rounded-3 border overflow-hidden p-0 bg-white">
            <LandscapeImg />
            <Row className="my-3 justify-content-between">
                <Col xs={4} className="position-relative">
                    <img
                        src="https://placedog.net/360/480/pixelate"
                        className="
                            rounded-circle border border-5 border-light
                            position-absolute bottom-0 start-0
                            ms-5
                            "
                        alt="immagine profilo"
                        style={{
                            zIndex: "99999",
                            width: '10em',
                            height: '10em',
                        }}
                    />
                </Col>
                <Col xs={1}>
                    <FaPencil />
                </Col>
            </Row>
            <Container fluid className="px-4 pb-4">
                <ProfileInfo />
                <ButtonList />
                <OpenToCard />
            </Container>
        </Container>

    );
};

export default MeCard;