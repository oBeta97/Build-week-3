import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { FaPencil } from "react-icons/fa6";
import LandscapeImg from "./MeCard/LandscapeImg";
import ProfileInfo from "./MeCard/ProfileInfo";
import ButtonList from "./MeCard/ButtonList";
import OpenToCard from "./MeCard/OpenToCard";
import { useEffect, useState } from "react";
import { getProfile } from "../modules/profileFetches";


const MeCard = () => {

    const [profileData, setProfileData] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getProfile('me').
            then((fetchRes) => {
                setProfileData(fetchRes)
                setIsLoading(false);
                console.log(fetchRes);
            })
    }, [])

    return (
        <Container fluid className="rounded-3 border overflow-hidden p-0 bg-white">

            {
                isLoading ? (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                ) : (
                    <>
                        <LandscapeImg />
                        <Row className="my-3 justify-content-between">
                            <Col xs={4} className="position-relative">
                                <img
                                    src={profileData.image}
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
                                <Button variant="white" className="p-0 m-0">
                                    <FaPencil />
                                </Button>
                            </Col>
                        </Row>
                        <Container fluid className="px-4 pb-4">
                            <ProfileInfo profileData={profileData} />
                            <ButtonList />
                            <OpenToCard />
                        </Container>
                    </>
                )
            }
        </Container>

    );
};

export default MeCard;