import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { searchFetch } from "../redux/action";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";

const CercaPer = () => {

  const searchString = useSelector(store => store.searchReducer.searchString)
  const [genericSearch, setGenericSearch] = useState(true);
  const [companySearch, setCompanySearch] = useState(false);
  const [categorySearch, setCategorySearch] = useState(false);

  const dispatch = useDispatch();

  const handleClick = (searchType) => {
    dispatch(
      searchFetch(searchString, searchType)
    );

    if (searchType === 'query') {
      setGenericSearch(true)
      setCompanySearch(false);
      setCategorySearch(false);
    }
    
    if (searchType === 'company') {
      setGenericSearch(false)
      setCompanySearch(true);
      setCategorySearch(false);
    }

    if (searchType === 'category') {
      setGenericSearch(false)
      setCompanySearch(false);
      setCategorySearch(true);
    }

  }

  return (
    <Container className="bg-white border rounded  d-flex  flex-column p-3 gap-2">
      <Row>
        <Col xs={12}>
          <h5 className="text-start m-0 p-0"> Cerca Per:</h5>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="cursor-pointer d-flex justify-content-between" onClick={() => handleClick('query')}>
          <p className="text-start m-0 p-0 ">Generico</p>
          {
            genericSearch ? (
              <span className="text-success">
                <FaCheckCircle />
              </span>

            ) : ""
          }
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="cursor-pointer d-flex justify-content-between" onClick={() => handleClick('company')}>
          <p className="text-start m-0 p-0 ">Azienda</p>
          {
            companySearch ? (
              <span className="text-success">
                <FaCheckCircle />
              </span>

            ) : ""
          }
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="cursor-pointer d-flex justify-content-between" onClick={() => handleClick('category')}>
          <p className="text-start m-0 p-0 ">Categoria</p>
          {
            categorySearch ? (
              <span className="text-success">
                <FaCheckCircle />
              </span>

            ) : ""
          }
        </Col>
      </Row>
    </Container>
  );
};

export default CercaPer;
