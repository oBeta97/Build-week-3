import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Alert,
} from "react-bootstrap";
import { BsHandThumbsUp } from "react-icons/bs";
import { MdOutlineInsertComment } from "react-icons/md";
import { GoArrowSwitch } from "react-icons/go";
import { IoIosSend } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { BiWorld } from "react-icons/bi";
import { FaImage, FaPencil } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import { deletePost, updatePost } from "../modules/postFetches";
import { addPostImage } from "../modules/imageFetches";
import { GiBombingRun } from "react-icons/gi";
import { FaDna } from "react-icons/fa";

export const CardCentraleHome = ({
  post,
  isMyPost,
  profileData,
  afterPostCreation,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [showImagePostModal, setShowImagePostModal] = useState(false);
  const [postData, setPostData] = useState(post);

  const [fileToUpload, setFileToUpload] = useState(null);
  const [uploadError, setUploadError] = useState(false);

  // parte di luca :)
  const [showComment, setShowComment] = useState(false);

  const handleComment = () => {
    setShowComment(!showComment);
  };
  // ---------------------------------------

  const minutesAgo = (datetime) => {
    const now = new Date();

    const differenceInMs = now - new Date(datetime);
    return Math.floor(differenceInMs / (1000 * 60));
  };

  const onFileChange = (event) => {
    setUploadError(false);
    setFileToUpload(event.target.files[0]);
  };

  const uploadImage = () => {
    if (!fileToUpload) {
      setUploadError(true);
      return;
    }
    const formDataImg = new FormData();
    formDataImg.append("post", fileToUpload);

    addPostImage(post.user, formDataImg, post._id).then(() => {
      handleDeleteClose();
      afterPostCreation();
    });
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleDeleteClose = () => {
    setShowImagePostModal(false);
  };

  const viewModal = () => {
    setShowModal(true);
  };

  const viewPostImageModal = () => {
    setShowImagePostModal(true);
  };

  const changePost = () => {
    updatePost(postData.user, postData).then(() => {
      handleClose();
      afterPostCreation();
    });
  };

  const removePost = () => {
    deletePost(postData.user, postData._id).then(() => {
      handleClose();
      afterPostCreation();
    });
  };

  return (
    <>
      {post && profileData ? (
        <>
          <Container
            fluid
            className="border rounded px-4 pt-4 mb-2"
            style={{ backgroundColor: "#ffffff" }}
          >
            {/* prima row */}
            <Row className="text-start mb-3">
              <Col xs={2}>
                <img
                  src={profileData.image}
                  alt="img"
                  className="img-fluid img-fit rounded-circle"
                  style={{ width: "4em", height: "3.2em" }}
                />
              </Col>
              <Col xs={7} className="d-flex flex-column">
                <Link
                  to={"/profile/" + profileData._id}
                  className="text-start text-decoration-none text-black fw-bold lh-sm m-0 p-0"
                >
                  {post.username}
                </Link>
                <span className="text-muted">867 follower</span>
                <span className="text-muted ">
                  {minutesAgo(post.createdAt)} minuti • <BiWorld />
                </span>
              </Col>
              <Col
                xs={3}
                className="text-primary d-lg-flex justify-content-end p-0"
              >
                {!isMyPost ? (
                  <p className="small">
                    +
                    <span className="d-none d-lg-inline m-0 p-0 g-0">
                      {" "}
                      Segui{" "}
                    </span>
                  </p>
                ) : (
                  <div className="d-flex gap-2">
                    <Button
                      variant="white"
                      className="p-0 m-0"
                      onClick={viewPostImageModal}
                    >
                      <FaImage />
                    </Button>
                    <Button
                      variant="white"
                      className="p-0 m-0"
                      onClick={viewModal}
                    >
                      <FaPencil />
                    </Button>
                  </div>
                )}
              </Col>
            </Row>
            <Row>
              <Col xs="12" className=" d-flex justify-content-start text-muted">
                <p className="text-start"> {post.text} </p>
              </Col>
            </Row>
            <Row>
              {post.image ? (
                <Col xs="12">
                  <img src={post.image} alt="img" className="img-fluid " />
                </Col>
              ) : (
                ""
              )}
            </Row>
            <Row>
              <Col
                xs="12"
                className=" d-flex justify-content-start text-muted my-2"
              >
                <small>
                  <FcLike /> 9
                </small>
              </Col>
            </Row>
            <Row>
              <Col
                xs="12 "
                className=" d-flex justify-content-between align-items-center border-top  "
              >
                <Button className="d-flex align-items-center bg-white border-0 text-dark ">
                  <BsHandThumbsUp className="me-2" />
                  <p className="d-none d-lg-block p-0 m-0 small"> Consiglia</p>
                </Button>

                {/* ------ lavora qui diommerda -------------------------------------------------------------------------------------------------------- */}
                <Button
                  className="d-flex align-items-center bg-white border-0 text-dark"
                  onClick={handleComment}
                >
                  <MdOutlineInsertComment className="me-2" />
                  <p className="d-none d-lg-block p-0 m-0 small">Commenta</p>
                </Button>

                {/* ------ lavora qui diommerda -------------------------------------------------------------------------------------------------------- */}

                <Button className="d-flex align-items-center bg-white border-0 text-dark p-0">
                  <GoArrowSwitch className="me-2" />
                  <p className="d-none d-lg-block p-0 m-0 small">
                    Diffondi il post
                  </p>
                </Button>
                <Button className="d-flex align-items-center bg-white border-0 text-dark ">
                  <IoIosSend className="me-2" />
                  <p className="d-none d-lg-block p-0 m-0 small">Invia</p>
                </Button>
              </Col>
            </Row>

            <Row
              className={`border-top comment-row ${
                showComment ? "show" : "hide"
              }`}
            >
              {showComment && (
                <>
                  <Col xs={2}>
                    <img
                      src="https://www.pensionedagatti.it/wp-content/uploads/2017/07/1243768940588_f.jpg"
                      alt="foto profilo"
                      className="img-fluid rounded-5 w-75 pt-2"
                    />
                  </Col>

                  <Col xs={10} className="text-start">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <p className="m-0 pb-2">
                          <span className="fw-bold small">
                            Francesca Scrotini :
                          </span>
                          <br />
                          <span className="small">Ciao, gran bel post!</span>
                        </p>
                      </div>

                      <div className="fs-5">
                        <GiBombingRun /> &nbsp; &nbsp;
                        <FaDna />
                      </div>
                    </div>
                  </Col>
                </>
              )}
            </Row>

            {/* ROW DEI COMMENTI DI LUCA
              <Row>
                {/* FOTO PROFILO METODO ORIGINALE*/}
            {/* { showComment ? (
                  <>
                  <Col xs={2}>
                <img src="https://www.pensionedagatti.it/wp-content/uploads/2017/07/1243768940588_f.jpg" alt="foto profilo" className="img-fluid rounded-5 w-75 pt-2"></img>
                </Col>

                <Col xs={10} className="text-start border-bottom">
                <p className="m-0 pb-2"><span className="fw-bold small">Francesca Scrotini :</span><br></br>
                <span className="small">Ciao, gran bel post!</span></p>
                </Col> 
                </> )
                : 
                ("") }
              </Row> */}
          </Container>

          {/* !!! IMAGE POST !!! */}
          <Modal show={showImagePostModal} onHide={handleDeleteClose}>
            <Modal.Header closeButton>
              <Modal.Title>Inserisci una immagine al post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="d-flex flex-column gap-3 align-items-center">
                <input type="file" onChange={onFileChange} />

                {fileToUpload ? (
                  <>
                    <h5>Immagine che verrà caricata:</h5>
                    <img
                      src={URL.createObjectURL(fileToUpload)}
                      alt="Immagine da caricare"
                      style={{
                        maxHeight: "20em",
                        maxWidth: "20em",
                        display: "block",
                        width: "auto",
                      }}
                    />
                  </>
                ) : (
                  ""
                )}

                {uploadError ? (
                  <Alert variant="danger">Errore nel caricamento</Alert>
                ) : (
                  ""
                )}
              </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-between">
              <Button variant="secondary" onClick={handleDeleteClose}>
                Chiudi
              </Button>

              <Button variant="primary" onClick={uploadImage}>
                Aggiungi
              </Button>
            </Modal.Footer>
          </Modal>

          {/* !!! CHANGE POST !!! */}
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modifica Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Label htmlFor="postData">Testo del post</Form.Label>
              <Form.Control
                type="text"
                value={postData.text}
                onChange={(e) =>
                  setPostData({ ...postData, text: e.target.value })
                }
              />
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-between">
              <Button variant="secondary" onClick={handleClose}>
                Chiudi
              </Button>
              <div className="d-flex gap-2">
                <Button variant="danger" onClick={removePost}>
                  Elimina post
                </Button>
                <Button variant="primary" onClick={changePost}>
                  Aggiorna post
                </Button>
              </div>
            </Modal.Footer>
          </Modal>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default CardCentraleHome;
