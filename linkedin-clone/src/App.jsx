import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from './components/MyFooter'
import { MyNavbar } from "./components/MyNavbar";
import { Col, Container, Row } from "react-bootstrap";
import ProfilePage from "./components/ProfilPage";



function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <header className="bg-light p-0">
          <Container>
            <Row className="justify-content-center">
              <Col xs={11}>
                <MyNavbar />
              </Col>
            </Row>
          </Container>
        </header>

        <main style={{ backgroundColor: "#F4F2EE" }}>
          <Routes>
            <Route path="/profile/:profileId" element={<ProfilePage />} />
          </Routes>
        </main>

        <footer>
          <Container>
            <Row className="justify-content-center">
              <Col xs={11}>
                <MyFooter />
              </Col>
            </Row>
          </Container>
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;
