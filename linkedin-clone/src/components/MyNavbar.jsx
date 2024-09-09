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
  FaUserCircle,
} from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";

export const MyNavbar = () => {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="sticky-top px-5 d-flex justify-content-center align-items-center"
    >
      <Container className="nav d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#home">
          <FaLinkedin color="#0077b5" size="2rem" />
        </Navbar.Brand>

        <Form inline className="mx-auto  d-none d-lg-flex ">
          <FaSearch className="me-4" />
          <FormControl type="text" placeholder="Search" className="w-100 " />
        </Form>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ml-auto g-3 ">
            <Nav.Link
              href="#home"
              className=" d-flex flex-column align-items-center "
            >
              <FaHome className="me-1 " />
              Home
            </Nav.Link>
            <Nav.Link
              href="#network"
              className=" d-flex flex-column align-items-center "
            >
              <FaUserFriends className="me-1 " />
              My Network
            </Nav.Link>
            <Nav.Link
              href="#jobs"
              className=" d-flex flex-column align-items-center "
            >
              <FaBriefcase className="me-1" />
              Jobs
            </Nav.Link>
            <Nav.Link
              href="#messaging"
              className=" d-flex flex-column align-items-center "
            >
              <FaEnvelope className="me-1" />
              Messaging
            </Nav.Link>
            <Nav.Link
              href="#notifications"
              className=" d-flex flex-column align-items-center "
            >
              <FaBell className="me-1" />
              Notifications
            </Nav.Link>
            <Nav
              href="#profile"
              className="d-flex flex-column align-items-center  "
            >
              {/* //img futura */}
              <FaUserCircle />
              <NavDropdown title="Me">
                <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#logout">Sign Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav.Link
              href="#apps"
              className=" border-start d-flex flex-column align-items-center  "
            >
              <CgMenuGridO className=" me-2  " />
              Per le aziende
            </Nav.Link>
            <Nav.Link
              className="text-center"
              style={{
                fontSize: "0.7rem",
                color: "#826A4C",
                textDecoration: "underline",
              }}
            >
              Prova premium per 0 <br />
              EURO
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
