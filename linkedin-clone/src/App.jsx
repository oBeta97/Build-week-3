import './App.css';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import FetcthTest from './components/FetcthTest'

function App() {

  return (
    <BrowserRouter>

      <header>

      </header>

      <main>
        <FetcthTest />
      </main>

      <footer>

      </footer>

    </BrowserRouter>
  )
}

export default App
