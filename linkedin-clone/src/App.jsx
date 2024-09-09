import "./App.css";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from './components/MyFooter'
import { MyNavbar } from "./components/MyNavbar";
import FetcthTest from './components/FetcthTest'


function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <header>
          <MyNavbar />
        </header>

        <main>
          <FetcthTest />
        </main>

        <footer>
          <MyFooter></MyFooter>
        </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;
