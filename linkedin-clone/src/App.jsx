
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { MyNavbar } from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import FetcthTest from './components/FetcthTest'


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header><MyNavbar /></header>
        

      <main>
        <FetcthTest />
      </main>

      <footer>

      </footer>
 </div>

    </BrowserRouter>
  );
}

export default App;
