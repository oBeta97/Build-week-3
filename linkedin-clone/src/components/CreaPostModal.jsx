import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { CiFaceSmile } from "react-icons/ci";
import { FaPlus, FaRegCalendarAlt } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";
import { RiGalleryLine } from "react-icons/ri";
import { insertPost } from "../modules/postFetches";
import { addPostImage } from "../modules/imageFetches";



const CreaPostModal = ({ showModal, user, onPostCreation, onUnshow }) => {

    const [show, setShow] = useState(showModal)
    const [postContent, setPostContent] = useState("");
    const [fileToUpload, setFileToUpload] = useState(null);


    useEffect(() => setShow(showModal), [showModal])

    const handlePostChange = (e) => {
        setPostContent(e.target.value);
    };

    const handleClose = () => { 
        setShow(false)
        onUnshow();
    }

    const handlePost = () => {
        insertPost(user, {
            text: postContent,
        }).
            then((res) => {
                if (fileToUpload)
                    return uploadImage(res)
            });

        handleClose()
    };


    const onFileChange = (event) => {
        setFileToUpload(event.target.files[0])
    }


    const uploadImage = (post) => {
        // if (!fileToUpload) {
        //   setUploadError(true)
        //   return;
        // }
        const formDataImg = new FormData();
        formDataImg.append("post", fileToUpload);


        addPostImage(post.user, formDataImg, post._id).then(() => {
            onPostCreation();
            handleClose()
        })
    }


    return (

        <Modal
            show={show}
            onHide={() => {
                handleClose()
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

                    <label for='imgUpload' className="pe-4 cursor-pointer">
                        <RiGalleryLine />
                    </label>
                    <input type="file" id="imgUpload" className="d-none" onChange={onFileChange} />

                    <span className="pe-4">
                        <FaRegCalendarAlt />
                    </span>
                    <span className="pe-4">
                        <MdWorkspacePremium />
                    </span>
                    <span className="pe-4">
                        <FaPlus />
                    </span>
                </p>
                {
                    fileToUpload ? (
                        <>
                            <h5>Immagine che verrà caricata:</h5>
                            <img
                                src={URL.createObjectURL(fileToUpload)}
                                alt="Immagine da caricare"
                                style={{
                                    maxHeight: '20em',
                                    maxWidth: '20em',
                                    display: 'block',
                                    width: 'auto'
                                }}
                            />
                        </>
                    ) : ""
                }
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

    );
};

export default CreaPostModal;