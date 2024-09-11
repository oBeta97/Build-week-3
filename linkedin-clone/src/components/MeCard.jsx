import { Button, Col, Container, Form, Modal, Row} from "react-bootstrap";
import { FaPencil } from "react-icons/fa6";
import LandscapeImg from "./MeCard/LandscapeImg";
import ProfileInfo from "./MeCard/ProfileInfo";
import ButtonList from "./MeCard/ButtonList";
import OpenToCard from "./MeCard/OpenToCard";


const MeCard = () => {

    return (
        <>
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

            <Modal show={showChangeProfileModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modifica Profilo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        !isLoading ? (
                            <>
                                <Form.Label htmlFor="profileName">Nome</Form.Label>
                                <Form.Control type="text" id="profileName" value={profileData.name} onChange={(e) => handleModalChange(e.target.value, 'name')} />

                                <Form.Label htmlFor="profileName">Cognome</Form.Label>
                                <Form.Control type="text" id="profileName" value={profileData.surname} onChange={(e) => handleModalChange(e.target.value, 'surname')} />

                                <Form.Label htmlFor="profileName">Email</Form.Label>
                                <Form.Control type="email" id="profileName" value={profileData.email} onChange={(e) => handleModalChange(e.target.value, 'email')} />

                                <Form.Label htmlFor="profileName">Bio</Form.Label>
                                <Form.Control type="text" id="profileName" value={profileData.bio} onChange={(e) => handleModalChange(e.target.value, 'bio')} />

                                <Form.Label htmlFor="profileName">Titolo</Form.Label>
                                <Form.Control type="text" id="profileName" value={profileData.title} onChange={(e) => handleModalChange(e.target.value, 'title')} />

                                <Form.Label htmlFor="profileName">Area</Form.Label>
                                <Form.Control type="text" id="profileName" value={profileData.area} onChange={(e) => handleModalChange(e.target.value, 'area')} />
                            </>
                        ) : ""
                    }

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdateProfile}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    );
};

export default MeCard;