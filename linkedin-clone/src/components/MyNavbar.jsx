import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
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
    <Navbar
      bg="light"
      expand="lg"
      className="sticky-top px-5 d-flex justify-content-center align-items-center"
    >
      <Navbar.Brand href="#home">
        <FaLinkedin color="#0077b5" size="2rem" />
      </Navbar.Brand>

      <Form inline className="mx-auto  d-none d-lg-flex ">
        <FaSearch className="me-2" />
        <FormControl type="text" placeholder="Search" className="w-100 gap-4" />
      </Form>
      <Container className=" ps-5">
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ml-auto  ">
            <Nav.Link href="#home">
              <FaHome className="me-1" />
              Home
            </Nav.Link>
            <Nav.Link href="#network">
              <FaUserFriends className="me-1" />
              My Network
            </Nav.Link>
            <Nav.Link href="#jobs">
              <FaBriefcase className="me-1" />
              Jobs
            </Nav.Link>
            <Nav.Link href="#messaging">
              <FaEnvelope className="me-1" />
              Messaging
            </Nav.Link>
            <Nav.Link href="#notifications">
              <FaBell className="me-1" />
              Notifications
            </Nav.Link>
            <NavDropdown title="Me" id="basic-nav-dropdown">
              <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#logout">Sign Out</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#apps" className="text-center border-start">
              <CgMenuGridO className=" me-2 " />
              Per le aziende
            </Nav.Link>
            <Nav.Link>Prova premium per 0 EURO</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
