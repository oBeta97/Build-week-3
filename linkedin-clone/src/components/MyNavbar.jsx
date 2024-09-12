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
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="sticky-top">
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>
            <FaLinkedin color="#0077b5" size="2.5rem" />
          </Link>
        </Navbar.Brand>

        <SearchBar />

        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ml-auto d-flex align-items-center">
            <Link to={"/"} className="text-dark text-decoration-none">
              <Nav.Link
                href="#home"
                className=" d-flex flex-column align-items-center "
              >
                <FaHome style={{ fontSize: "1.6rem" }} />

                <small>Home</small>
              </Nav.Link>
            </Link>
            <Nav.Link
              href="#network"
              className=" d-flex flex-column align-items-center "
            >
              <FaUserFriends style={{ fontSize: "1.6rem" }} />
              <small>Rete</small>
            </Nav.Link>
            <Nav.Link
              href="#jobs"
              className=" d-flex flex-column align-items-center "
            >
              <FaBriefcase style={{ fontSize: "1.6rem" }} />
              <small>Lavoro</small>
            </Nav.Link>
            <Nav.Link
              href="#messaging"
              className=" d-flex flex-column align-items-center "
            >
              <FaEnvelope style={{ fontSize: "1.6rem" }} />
              <small>Messaggistica</small>
            </Nav.Link>
            <Nav.Link
              href="#notifications"
              className=" d-flex flex-column align-items-center "
            >
              <FaBell style={{ fontSize: "1.6rem" }} />
              <small>Notifiche</small>
            </Nav.Link>
            <Nav
              href="#profile"
              className="d-flex flex-column align-items-center "
            >
              {/* //img futura */}
              <FaUserCircle style={{ fontSize: "1.6rem" }} />
              <NavDropdown title="Me" id="basic-nav-dropdown" className="p-0">
                <NavDropdown.Item>
                  <Link
                    to={"/profile/me"}
                    className="text-decoration-none text-dark"
                  >
                    Profile
                  </Link>
                </NavDropdown.Item>
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
              <small>Per le aziende</small>
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
