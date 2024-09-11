import { Col, Row } from "react-bootstrap";


const ThreeCol = (props) => {
    return (

        <Row>
            <Col sm={12} md={3} lg={3} className="d-flex flex-column gap-2">
                {props.left}
            </Col>
            <Col xs={12} md={6} className="d-flex flex-column gap-2">
                {props.center}
            </Col>
            <Col xs={12} md={3} className="d-flex flex-column gap-2">
                {props.right}
            </Col>
        </Row>

    )
}

export default ThreeCol;