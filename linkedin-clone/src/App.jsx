import "./App.css";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { MyNavbar } from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <header></header>
      <MyNavbar />
      <main></main>

      <footer></footer>
    </BrowserRouter>
  );
}

export default App;
