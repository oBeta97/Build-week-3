import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./components/MyFooter";
import { MyNavbar } from "./components/MyNavbar";
import ProfilePage from "./components/ProfilPage";
import MyBaseContainer from "./components/MyBaseContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="bg-light p-0">
          <MyBaseContainer>
            <MyNavbar />
          </MyBaseContainer>
        </header>

        <main style={{ backgroundColor: "#F4F2EE" }}>
          <Routes>
            <Route path="/profile/:profileId" element={<ProfilePage />} />
          </Routes>
        </main>

        <footer>
          <MyBaseContainer>
            <MyFooter />
          </MyBaseContainer>
        </footer>
      </div>
    </BrowserRouter >
  );
}

export default App;
