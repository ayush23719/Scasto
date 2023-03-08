import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <div className="container-scrollbar">
          <Navbar home="Home" projects="Projects" contact="Contact" resume="Resume" />
        </div>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>

          <Route path="/Scasto/projects" element={<Projects />}>
          </Route>
          <Route path="/Scasto/Contact" element={<Contact />}>
          </Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
