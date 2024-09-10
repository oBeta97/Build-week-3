import { Row } from "react-bootstrap";
import { FaCamera } from "react-icons/fa";


// Da aggiungere nelle props l'immagine che arriverà da profile
const LandscapeImg = () => {
    return (
        <Row className="position-relative" style={{ maxHeight: "15em" }}>
            <div
                className="
                        position-absolute top-0 end-0 mt-3 me-4 p-0
                        rounded-circle
                        text-primary bg-white
                        d-flex justify-content-center align-items-center
                        shadow
                    "
                style={{
                    width: "2.4em",
                    height: "2.4em",
                }}
            >
                <FaCamera />
            </div>
            <img src="https://placedog.net/500" className="img-fluid img-fit" alt="landscape profilo" />
        </Row>
    );
};

export default LandscapeImg