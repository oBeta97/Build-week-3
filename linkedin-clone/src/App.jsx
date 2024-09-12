import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MyNavbar } from "./components/MyNavbar";
import ProfilePage from "./components/ProfilPage";
import MyBaseContainer from "./components/MyBaseContainer";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="bg-light p-0">
          <MyBaseContainer>
            <MyNavbar />
          </MyBaseContainer>
        </header>

        <main className="pt-3" style={{ backgroundColor: "#F4F2EE" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile/:profileId" element={<ProfilePage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
