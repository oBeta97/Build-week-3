import { Col, Row } from "react-bootstrap";


const TwoCol = (props) => {
    return (
        <Row>
            <Col xs={12} md={8} className="d-flex flex-column gap-2">
                {props.left}
            </Col>

            <Col xs={12} md={4} className="d-flex flex-column gap-2">
                {props.right}
            </Col>
        </Row>
    )
}

export default TwoCol;