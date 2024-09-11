import { Button, Col, Container, Row } from "react-bootstrap";
import { FaGem, FaPlus } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { useParams } from "react-router-dom";

const FormationCard = () => {

    const URLParams = useParams();


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
            <div className="d-flex justify-content-between align-items-center">
                <h5 className="p-0 m-0">
                    Formazione
                </h5>
                <div className="d-flex gap-3">
                    {URLParams.profileId === 'me' ? (
                        <>
                            <Button variant="white">
                                <FaPlus />
                            </Button>
                            <Button variant="white">
                                <FaPencil />
                            </Button>
                        </>
                    ) : ""
                    }
                </div>
            </div>
            <Row>
                <Container>
                    <Row className="py-3 border-bottom">
                        <Col xs={2}>
                            <img
                                src="https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_100_100/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1733961600&v=beta&t=nrLWWjKHe6sHcWyfi1ckaHtt3l7c2mBfc1Oz3-0T1ZU"
                                alt="scholl img"
                                className="rounded-circle"
                                style={{
                                    height: '2.2em',
                                    widows: '2.2em'
                                }}
                            />
                        </Col>
                        <Col>
                            <p className="p-0 m-0 fw-bold">EPICODE</p>
                            <p className="p-0 m-0 text-dark"><small>Corso online</small></p>
                            <p className="p-0 m-0 text-secondary"><small>giu 2024 - dic 2024</small></p>

                            <p className="p-0 m-0 fw-bold"><FaGem /> Redux, React e +10</p>
                        </Col>
                    </Row>
                </Container>
            </Row>
        </Container>
    );
};

export default FormationCard;