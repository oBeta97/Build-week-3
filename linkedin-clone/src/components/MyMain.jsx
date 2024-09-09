import { Col, Container } from "react-bootstrap";

import ThreeCol from "./ThreeCol";
import CardComponent from "./CardComponent";



const MyMain = () => {

    

    return (
        <Col
            className="flex-grow-1 m-0 p-5"
        >
            <Container fluid className="m-0 p-0">
                <ThreeCol
                    left={"qui ci va il miniprofilo "}
                    center= {CardComponent}
                    right={"qui ci sono le notizie ed il footer"}
                />
                <ThreeCol
                    left={"vuoto"}
                    center={"con fetch dei lavori/post delle aziende"}
                    right={"vuoto ma da capire se è meglio mettere qui il footer"}
                />
            </Container>

        </Col>
    );
}

export default MyMain;