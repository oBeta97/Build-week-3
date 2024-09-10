import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal'; 
import { Row, Col } from 'react-bootstrap';
import { FaPen, FaPlus, FaBriefcase } from 'react-icons/fa';
import { deleteExperience, getExperiences } from '../modules/experiencesFetches';
import React, { useState, useEffect } from 'react';
import { getProfile } from '../modules/profileFetches';

function CardEsperienza() {
  const [esperienza, setEsperienza] = useState([]);
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false); 
  const [showAddModal, setShowAddModal] = useState(false); 
  const [showEditModal, setShowEditModal] = useState(false); 
  const [selectedExperience, setSelectedExperience] = useState(null); 

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

  const cancella = (userId, experienceId) => {
    deleteExperience(userId, experienceId)
      .then((data) => {
        location.reload();
        console.log(data);
      })
      .catch((error) => console.error('Error deleting experiences:', error));
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
    setSelectedExperience(experience);
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
          <div className="mt-3" key={data._id}>
            <Row>
              <Col xs={1} className="d-flex align-items-start justify-content-end pt-2">
                <FaBriefcase />
              </Col>
              <Col xs={10} className="text-start">
                <p className="mb-0">{data.role}</p>
                <p className="mb-0">{data.company}</p>
                <p className="mb-0">
                  {data.startDate} - {data.endDate}
                </p>
                <p className="mb-0">{data.area}</p>
              </Col>
              <Col xs={1} className="text-start">
                {isEditing && (
                  <FaPen
                    className="ms-3"
                    onClick={() => handleShowEditModal(data)} 
                  />
                )}
              </Col>
            </Row>
            <hr />
          </div>
        ))}
      </Card.Body>

     
      <Modal show={showAddModal} onHide={handleCloseAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi esperienza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        </Modal.Body>
        <Modal.Footer>
         
          <Button variant="primary" onClick={() => {
            handleCloseAddModal();
           
          }}>
            Salva 
          </Button>
        </Modal.Footer>
      </Modal>

     
      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica esperienza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModal}>
            Elimina
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
           Modifica
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
}

export default CardEsperienza;
