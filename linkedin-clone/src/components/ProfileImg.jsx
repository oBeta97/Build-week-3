import { useState } from "react";
import { Alert, Button, Col, Modal } from "react-bootstrap";
import { changeProfileImage } from "../modules/imageFetches";
import { getProfile } from "../modules/profileFetches";


const ProfileImg = ({ profileData, lite }) => {

    const [showModal, setShowModal] = useState(false);
    const [fileToUpload, setFileToUpload] = useState(null);
    const [uploadError, setUploadError] = useState(false);
    const [profileImg, setProfileImg] = useState(profileData.image)

    const handleClose = () => {
        setShowModal(false);
        setFileToUpload(null);
    }

    const onFileChange = (event) => {
        setUploadError(false);
        setFileToUpload(event.target.files[0])
    }

    const handleClick = () => {
        if (lite)
            return;

        setShowModal(true)
    }

    const handleUpload = () => {
        if (!fileToUpload) {
            setUploadError(true)
            return;
        }
        const formDataImg = new FormData();
        formDataImg.append("profile", fileToUpload);

        changeProfileImage(profileData, formDataImg).then(() => {
            getProfile(profileData._id).then(profile => {
                console.log(profile);
                setProfileImg(profile.image)
            })
        })


        handleClose();
    }

    return (
        <>
            <Col xs={6} className="position-relative">
                <img
                    src={profileImg}
                    className={`
                        rounded-circle border border-5 border-light
                        position-absolute bottom-0 start-0
                        ms-5
                        ${!lite ? 'cursor-pointer' : ""}
                    `}
                    onClick={handleClick}
                    alt="immagine profilo"
                    style={{
                        width: lite ? '5em' : '10em',
                        height: lite ? '5em' : '10em',
                    }}
                />
            </Col>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modifica immagine profilo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex flex-column gap-3 align-items-center">
                        <input type="file" onChange={onFileChange} />

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

                        {
                            uploadError ? (
                                <Alert variant='danger'>
                                    Errore nel caricamento
                                </Alert>
                            ) : ""
                        }
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>chiudi</Button>
                    <Button variant="primary" onClick={handleUpload}>Aggiorna immagine</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ProfileImg