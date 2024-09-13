import { Button, Col, Container, Row, Spinner, } from "react-bootstrap";
import { GrGallery } from "react-icons/gr";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineArticle } from "react-icons/md";
import { useEffect, useState } from "react";
import { getProfile } from "../modules/profileFetches";
import CreaPostModal from "./CreaPostModal";

const CreatePost = ({ afterPostCreation }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);

  const fetchProfile = () => {
    getProfile("me")
      .then((data) => {
        setUser(data);
        setIsLoading(true);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching profile:", error));
  }

  useEffect(() => {
    fetchProfile()
  }, []);

  return (
    <Container className="bg-white border rounded">
      {/* prima riga, profilo e button "crea" */}
      <Row>
        {isLoading ? (
          <Col xs={2} className="pe-1">
            <img
              src={user.image}
              alt="profile picture"
              className="w-75 rounded-5 my-3"
            ></img>
          </Col>
        ) : (
          <Col xs={2}>
            <Spinner animation="grow" variant="primary" className="mt-4" />
          </Col>
        )}

        <Col xs={10} className="ps-0">
          <Button
            variant="light"
            size="lg"
            className="my-3 border border-2 rounded-5 w-100 text-start"
            onClick={() => {
              setShow(true);
            }}
          >
            Crea un post
          </Button>
        </Col>
      </Row>

      {/* seconda riga, 3 "button" */}
      <Row>
        <Col xs={6}>
          <p className="fw-semibold">
            <GrGallery className="text-primary" /> Contenuti multimediali
          </p>
        </Col>

        <Col xs={3}>
          <p className="fw-semibold">
            <FaRegCalendarAlt className="text-warning-emphasis" /> Evento
          </p>
        </Col>

        <Col xs={3}>
          <p className="fw-semibold">
            <MdOutlineArticle className="text-danger" /> Scrivi un articolo
          </p>
        </Col>
      </Row>

      {/* MODALE  */}
      {isLoading && user ? (
        <CreaPostModal
          showModal={show}
          user={user}
          onPostCreation={afterPostCreation}
          onUnshow={() => {
            setShow(false);
          }}
        />
      ) : (
        ""
      )}
    </Container>
  );
};

export default CreatePost;
