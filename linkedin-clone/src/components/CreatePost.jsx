import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Spinner,
} from "react-bootstrap";
import { GrGallery } from "react-icons/gr";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineArticle } from "react-icons/md";
import { useEffect, useState } from "react";
import { getProfile } from "../modules/profileFetches";
import { CiFaceSmile } from "react-icons/ci";
import { RiGalleryLine } from "react-icons/ri";
import { MdWorkspacePremium } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { insertPost } from "../modules/postFetches";

const CreatePost = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [postContent, setPostContent] = useState("");

  const handlePostChange = (e) => {
    setPostContent(e.target.value);
  };

  const handlePost = () => {
    insertPost( user,
      {
        text: postContent
      }
    ).then(res => alert('post inserito, ricarica la pagina'))

    setShow(false);
  };

  useEffect(() => {
    getProfile("me")
      .then((data) => {
        setUser(data);
        setIsLoading(true);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching profile:", error));
  }, []);

  return (
    <Container className="bg-white border rounded mt-2">
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
      {isLoading ? (
        <Modal
          show={show}
          onHide={() => {
            setShow(false);
          }}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <Container>
                <Row>
                  <Col xs={2}>
                    <img
                      src={user.image}
                      alt="profile picture"
                      className="w-100 rounded-5 my-3"
                    ></img>
                  </Col>

                  <Col xs={10} className="mt-2">
                {user.name} {user.surname}
                    <p className="extra-small">Pubblica: Chi te se incula</p>
                  </Col>
                </Row>
              </Container>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formPost">
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Manco se paghi lo trovi un lavoro.."
                  value={postContent}
                  onChange={handlePostChange}
                  style={{ resize: "none", fontSize: "1rem", border: "none" }}
                />
              </Form.Group>
            </Form>

            <p className="fs-4 text-secondary">
              <CiFaceSmile />
              <br></br>

              <span className="pe-4"><RiGalleryLine /></span>

              <span className="pe-4"><FaRegCalendarAlt /></span>
              <span className="pe-4"><MdWorkspacePremium /></span>
              <span className="pe-4"><FaPlus /></span>

            </p>

          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={handlePost}
              disabled={postContent.length === 0} // Disabilita il bottone se non c'è testo
              className="rounded-pill"
            >
              Pubblica
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        ""
      )}
    </Container>
  );
};

export default CreatePost;
