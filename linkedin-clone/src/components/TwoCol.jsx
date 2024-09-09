import { Col, Row } from "react-bootstrap";


const TwoCol = (props) => {
    return (
        <Row className="mb-3">
            <Col sm={12} md={7} lg={7} className="d-flex align-items-center">
                {props.left}
            </Col>

            <Col sm={12} md={5} lg={5} className="">
                {props.right}
            </Col>
        </Row>
    )
}

export default TwoCol;