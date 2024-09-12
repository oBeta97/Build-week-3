import { Col, Row } from "react-bootstrap";
import { FaUserCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

// Da aggiungere le props con i dati che arrivano dalle API
const ProfileInfo = (props) => {
    return (
        <Row>
            <Col xs={12} lg={props.lite ? 12 : 8}>
                <div className="d-flex flex-column flex-md-row align-items-start gap-2">
                    <Link to={`/profile/${props.lite ? 'me' : props.profileData._id}`} className="text-decoration-none text-dark">
                        <h3 className="p-0 m-0">{`${props.profileData.name} ${props.profileData.surname}`}</h3>
                    </Link>
                    {
                        !props.lite && props.myProfile ? (
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
                        ) : ""
                    }

                </div>
                <p className="text-start p-0 m-0">{props.profileData.username}</p>
                {
                    props.profileData.area ? (
                        <p className="text-start text-secondary p-0 m-0">{props.profileData.area}
                            {
                                !props.lite && props.myProfile ? (
                                    <>
                                        · <span className="text-primary">Informazioni di contatto</span>
                                    </>
                                ) : ""
                            }
                        </p>
                    ) : ""
                }

                {
                    !props.lite ? (
                        <p className="text-start text-secondary fw-bold mb-1"> {props.profileData.bio}</p>
                    ) : ""
                }
            </Col>
            <Col xs={12} lg={4}>
                <div className="d-flex align-items-center gap-2 mb-1">
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