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
  FaUserCircle,
} from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";

export const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="sticky-top">
      <Container>
        <Navbar.Brand href="#home">
          <FaLinkedin color="#0077b5" size="2.5rem" />
        </Navbar.Brand>

        <Form className="d-flex d-none d-md-flex align-items-center">
          <div
            className="d-flex align-items-center ps-3 rounded-start-2"
            style={{
              backgroundColor: "#E6F3F8",
              height: "2.2rem"
            }}
          >
            <FaSearch className="" />
          </div>
          <FormControl
            type="text"
            placeholder="Search"
            className="w-75 rounded-start-0 border-0"
            style={{ backgroundColor: "#E6F3F8" }}
          />
        </Form>

        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ml-auto d-flex align-items-center">
            <Nav.Link
              href="#home"
              className=" d-flex flex-column align-items-center "
            >
              <FaHome style={{ fontSize: "1.6rem" }} />
              <small>
                Home
              </small>
            </Nav.Link>
            <Nav.Link
              href="#network"
              className=" d-flex flex-column align-items-center "
            >
              <FaUserFriends style={{ fontSize: "1.6rem" }} />
              <small>
                Network
              </small>
            </Nav.Link>
            <Nav.Link
              href="#jobs"
              className=" d-flex flex-column align-items-center "
            >
              <FaBriefcase style={{ fontSize: "1.6rem" }} />
              <small>
                Jobs
              </small>
            </Nav.Link>
            <Nav.Link
              href="#messaging"
              className=" d-flex flex-column align-items-center "
            >
              <FaEnvelope style={{ fontSize: "1.6rem" }} />
              <small>
                Messaging
              </small>
            </Nav.Link>
            <Nav.Link
              href="#notifications"
              className=" d-flex flex-column align-items-center "
            >
              <FaBell style={{ fontSize: "1.6rem" }} />
              <small>
                Notifications
              </small>
            </Nav.Link>
            <Nav
              href="#profile"
              className="d-flex flex-column align-items-center "
            >
              {/* //img futura */}
              <FaUserCircle style={{ fontSize: "1.6rem" }} />
              <NavDropdown title="Me" id="basic-nav-dropdown" className="p-0">
                <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#logout">Sign Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav.Link
              href="#apps"
              className="text-center border-start 
                d-none d-xl-flex flex-column 
                align-items-center"
            >
              <CgMenuGridO style={{ fontSize: "1.6rem" }} />
              <small>
                Per le aziende
              </small>
            </Nav.Link>
            <Nav.Link
              className="d-none d-xl-flex align-items-center"
              style={{
                fontSize: "0.8rem",
                color: "#a17206",
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
