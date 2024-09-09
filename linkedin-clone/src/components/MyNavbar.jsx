import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Container,
} from "react-bootstrap";
import {
  FaLinkedin,
  FaSearch,
  FaHome,
  FaUserFriends,
  FaBriefcase,
  FaBell,
  FaEnvelope,
} from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";

export const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="sticky-top px-4 py-2">
      <Container>
     
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <FaLinkedin color="#0077b5" size="2rem" />
        </Navbar.Brand>

        <Form className="d-flex flex-grow-1 mx-4 d-none d-md-flex align-items-center">
      <FaSearch className="me-2" style={{ fontSize: '1.25rem' }} />
      <FormControl type="text" placeholder="Search" className="w-100" />
    </Form>

      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto d-flex align-items-center">
            <Nav.Link href="#home" className="d-flex align-items-center ">
              <FaHome className="me-1 "  />
              Home
            </Nav.Link>
            <Nav.Link href="#network" className="d-flex align-items-center ">
              <FaUserFriends className="me-1" />
              My Network
            </Nav.Link>
            <Nav.Link href="#jobs" className="d-flex align-items-center ">
              <FaBriefcase className="me-1" />
              Jobs
            </Nav.Link>
            <Nav.Link href="#messaging" className="d-flex align-items-center ">
              <FaEnvelope className="me-1" />
              Messaging
            </Nav.Link>
            <Nav.Link href="#notifications" className="d-flex align-items-center ">
              <FaBell className="me-1" />
              Notifications
            </Nav.Link>
            
          
            <NavDropdown title="Me" id="basic-nav-dropdown">
              <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout">Sign Out</NavDropdown.Item>
            </NavDropdown>
            
            
            <Nav.Link href="#apps" className="text-center border-start d-none d-xl-flex align-items-center ps-3">
              <CgMenuGridO className="me-2" />
              Per le aziende
            </Nav.Link>
            <Nav.Link className="d-none d-xl-flex align-items-center">
              Prova premium per 0 EURO
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
