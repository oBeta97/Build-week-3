import { Button, Col, Container, Form, Modal, Row, Spinner } from "react-bootstrap";
import { FaPencil } from "react-icons/fa6";
import LandscapeImg from "./MeCard/LandscapeImg";
import ProfileInfo from "./MeCard/ProfileInfo";
import ButtonList from "./MeCard/ButtonList";
import OpenToCard from "./MeCard/OpenToCard";
import { useEffect, useState } from "react";
import { getProfile, updateProfile } from "../modules/profileFetches";
import { useParams } from "react-router-dom";
import ProfileImg from "./ProfileImg";


const MeCard = ({ lite = false }) => {

    const URLParams = useParams();

    const [profileData, setProfileData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [showChangeProfileModal, setShowChangeProfileModal] = useState(false)


    const handleClose = () => {
        setShowChangeProfileModal(false)
    }

    const handleModalChange = (value, target) => {
        setProfileData({
            ...profileData,
            [target]: value,
        })
    }

    const handleUpdateProfile = () => {
        handleClose();
        setIsLoading(true);
        updateProfile(profileData).
            then((fetchRes) => {
                setProfileData(fetchRes);
                setIsLoading(false);
            })
    }

    useEffect(() => {
        let profileId = lite ? 'me' : URLParams.profileId

        getProfile(profileId).
            then((fetchRes) => {
                setProfileData(fetchRes)
                setIsLoading(false);
                console.log(fetchRes);
            })
    }, [URLParams])

    return (
        <>
            <Container className="rounded-3 border overflow-hidden p-0 bg-white">

                {
                    isLoading ? (
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    ) : (
                        <>
                            <LandscapeImg lite={lite} myProfile={URLParams.profileId === 'me'} />
                            <Row className="my-3 justify-content-between">
                                <ProfileImg profileData={profileData} lite={lite} />
                                {
                                    !lite ? (
                                        <Col xs={6} className="d-flex justify-content-end">
                                            {
                                                URLParams.profileId === 'me' ? (
                                                    <Button variant="white" className="p-0 m-0 pe-3">
                                                        <FaPencil onClick={() => setShowChangeProfileModal(true)} />
                                                    </Button>
                                                ) : ""
                                            }
                                        </Col>
                                    ) : ""
                                }

                            </Row>
                            <Container fluid className="px-4 pb-4">
                                <ProfileInfo lite={lite} profileData={profileData} myProfile={URLParams.profileId === 'me'} />
                                {
                                    !lite && URLParams.profileId === 'me' ? (
                                        <>
                                            <ButtonList />
                                            <OpenToCard />
                                        </>
                                    ) : ""
                                }
                            </Container>
                        </>
                    )
                }
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