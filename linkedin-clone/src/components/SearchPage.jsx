import { Col, Container, Row } from "react-bootstrap";
import SearchCard from "./SearchCard";

const SearchPage = () => {
  return (
    <Container>
      <Row>

        {/* PRIMA COLONNA */}
        <Col xs={3}>
        </Col>


        <Col xs={6}>
          <SearchCard />
          {/* POSTO RISERVATO AL COMPONENTE DI LUCA */}
        </Col>


        {/* TERZA COLONNA */}
        <Col xs={3}>
        </Col>

      </Row>
    </Container>
  );
};

export default SearchPage;
