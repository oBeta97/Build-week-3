import { Col, Row } from "react-bootstrap";
import { FaUserCheck } from "react-icons/fa";

// Da aggiungere le props con i dati che arrivano dalle API
const ProfileInfo = () => {
    return (
        <Row>
            <Col xs={8}>
                <div className="d-flex align-items-center">
                    <h3 className="p-0 m-0">Paolo Pellizzari</h3>
                    <div
                        className="
                        border-2 border-dashed border-primary rounded-pill
                        text-primary
                        px-3 ms-1
                        d-flex justify-content-between align-items-center gap-1
                    "
                    >
                        <FaUserCheck />
                        <span >Verifica ora!</span>
                    </div>
                </div>
                <p className="text-start p-0 m-0">Paolo</p>
                <p className="text-start text-secondary p-0 m-0">Vicenza, Veneto, Italia ·
                    <span className="text-primary">Informazioni di contatto</span>
                </p>
                <p className="text-start text-primary fw-bold"> 4 collegamenti</p>
            </Col>
            <Col>
                <div className="d-flex align-items-center gap-2">
                    <img
                        src="https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_100_100/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1733961600&v=beta&t=nrLWWjKHe6sHcWyfi1ckaHtt3l7c2mBfc1Oz3-0T1ZU"
                        alt="scholl img"
                        className="rounded-circle"
                        style={{
                            height: '2.2em',
                            widows: '2.2em'
                        }}
                    />
                    <h6 className="p-0 m-0">EPICODE</h6>
                </div>
            </Col>
        </Row>
    );
};

export default ProfileInfo;