import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { Row, Col, Form, Container } from 'react-bootstrap';
import { FaPen, FaPlus, FaBriefcase } from 'react-icons/fa';
import { deleteExperience, getExperiences, insertExperience, updateExperience } from '../modules/experiencesFetches';
import React, { useState, useEffect } from 'react';
import { getProfile } from '../modules/profileFetches';

function CardEsperienza() {
    const [esperienza, setEsperienza] = useState([]);
    const [user, setUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedExperience, setSelectedExperience] = useState(null);
    const [nuovaEsperienza, setNuovaesperienza] = useState({ role: "", company: "", area: "", startDate: "", endDate: "", description: "" })
    const [modificaEsperienza, setModificaesperienza] = useState({ role: "", company: "", area: "", startDate: "", endDate: "", description: "", _id: "" })
    useEffect(() => {
        getProfile('me')
            .then((data) => {
                setUser(data);
                console.log(data);
            })
            .catch((error) => console.error('Error fetching profile:', error));

        getExperiences()
            .then((data) => {
                setEsperienza(data);
                console.log(data);
            })
            .catch((error) => console.error('Error fetching experiences:', error));
    }, []);

    const cancella = () => {
        if (user) {
            deleteExperience(user._id, modificaEsperienza._id)
            .then((data) => {
                handleCloseEditModal();
                location.reload();
                console.log(data);
            })
            .catch((error) => console.error('Error deleting experiences:', error));
        }

    };

    const inserisci = (userId, experienceData) => {
        insertExperience(userId, experienceData)
            .then((data) => {
                const result = [...esperienza, data];
                console.log(result);
                setEsperienza(result);
                console.log(result);
                handleCloseAddModal();
            })
            .catch((error) => console.error('Error inserting experience:', error));
    };


    const modifica = (userId, experienceData) => {
        updateExperience(userId, experienceData)
            .then((data) => {

                handleCloseEditModal();
                location.reload();
            })
            .catch((error) => console.error('Error inserting experience:', error));
    };




    const toggleEditMode = () => {
        setIsEditing(!isEditing);
    };


    const handleShowAddModal = () => {
        setShowAddModal(true);
    };


    const handleCloseAddModal = () => {
        setShowAddModal(false);
    };


    const handleShowEditModal = (experience) => {
        console.log(experience)
        const modificaStartDate = experience.startDate.split("T")[0]
        const modificaEndDate = experience.endDate.split("T")[0]
        console.log(modificaEndDate)
        setModificaesperienza({
            ...modificaEsperienza,
            role: experience.role,
            company: experience.company,
            area: experience.area,
            startDate: modificaStartDate,
            endDate: modificaEndDate,
            description: experience.description,
            _id: experience._id
        })
        setShowEditModal(true);
    };


    const handleCloseEditModal = () => {
        setShowEditModal(false);
        setSelectedExperience(null);
        setIsEditing(false);
    };


    const handleSaveChanges = () => {
        handleCloseEditModal();

    };

    const handleChange = (e, property) => {
        setNuovaesperienza({
            ...nuovaEsperienza,
            [property]: e.target.value
        })
    }



    const handleChangemodifica = (e, property) => {
        setModificaesperienza({
            ...modificaEsperienza,
            [property]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        inserisci(user._id, nuovaEsperienza);

    };

    const handleSubmitmodifica = (e) => {
        e.preventDefault();
        modifica(user._id, modificaEsperienza);

    };

    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title className="d-flex justify-content-between align-items-center">
                    <p className="mb-0">Esperienza</p>
                    <div>
                        <FaPlus onClick={handleShowAddModal} />
                        {!isEditing && <FaPen className="ms-3" onClick={toggleEditMode} />}
                    </div>
                </Card.Title>

                {esperienza.map((data) => (
                    <Container fluid className="mt-3 " key={data._id}>
                        <Row className='w-100'>
                            <Col xs={2} className="d-flex align-items-start justify-content-end pt-2">
                                <FaBriefcase  />
                            </Col>
                            <Col xs={8} className="text-start">
                                <p className="mb-0">{data.role}</p>
                                <p className="mb-0">{data.company}</p>
                                <p className="mb-0">
                                    {data.startDate} - {data.endDate}
                                </p>
                                <p className="mb-0">{data.area}</p>
                            </Col>
                            <Col xs={2} className="text-start">
                                {isEditing && (
                                    <FaPen
                                        className="ms-3"
                                        onClick={() => handleShowEditModal(data)}
                                    />
                                )}
                            </Col>
                        </Row>
                        <hr />
                    </Container>
                ))}
            </Card.Body>


            <Modal show={showAddModal} onHide={handleCloseAddModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Aggiungi esperienza</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id="event-form" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="role">
                            <Form.Label>Ruolo</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => handleChange(e, 'role')}
                                value={nuovaEsperienza.role}

                                required
                            />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Descrizione</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => handleChange(e, 'description')}
                                value={nuovaEsperienza.description}

                                required
                            />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="company">
                            <Form.Label>Azienda</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => handleChange(e, 'company')}
                                required
                                value={nuovaEsperienza.company}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="startDate">
                            <Form.Label>Inizio</Form.Label>
                            <Form.Control
                                type="date"
                                onChange={(e) => handleChange(e, 'startDate')}
                                required
                                value={nuovaEsperienza.startDate}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="endDate">
                            <Form.Label>Fine</Form.Label>
                            <Form.Control
                                type="date"
                                onChange={(e) => handleChange(e, 'endDate')}
                                required
                                value={nuovaEsperienza.endDate}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="area">
                            <Form.Label>Luogo</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => handleChange(e, 'area')}
                                required
                                value={nuovaEsperienza.area}
                            />
                        </Form.Group>

                        <Button variant="primary" type='submit' >
                            Salva
                        </Button>

                    </Form>
                </Modal.Body>

            </Modal>


            <Modal show={showEditModal} onHide={handleCloseEditModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modifica esperienza</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id="event-form" onSubmit={handleSubmitmodifica}>
                        <Form.Group className="mb-3" controlId="role">
                            <Form.Label>Ruolo</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => handleChangemodifica(e, 'role')}
                                value={modificaEsperienza.role}

                                required
                            />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Descrizione</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => handleChangemodifica(e, 'description')}
                                value={modificaEsperienza.description}

                                required
                            />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="company">
                            <Form.Label>Azienda</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => handleChangemodifica(e, 'company')}
                                required
                                value={modificaEsperienza.company}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="startDate">
                            <Form.Label>Inizio</Form.Label>
                            <Form.Control
                                type="date"
                                onChange={(e) => handleChangemodifica(e, 'startDate')}
                                required
                                value={modificaEsperienza.startDate}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="endDate">
                            <Form.Label>Fine</Form.Label>
                            <Form.Control
                                type="date"
                                onChange={(e) => handleChangemodifica(e, 'endDate')}
                                required
                                value={modificaEsperienza.endDate}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="area">
                            <Form.Label>Luogo</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => handleChangemodifica(e, 'area')}
                                required
                                value={modificaEsperienza.area}
                            />
                        </Form.Group>
                        <Button variant="secondary" onClick={cancella}>
                            Elimina
                        </Button>

                        <Button variant="primary" type='submit' >
                            Modifica
                        </Button>



                    </Form>
                </Modal.Body>

            </Modal>
        </Card>
    );
}

export default CardEsperienza;
