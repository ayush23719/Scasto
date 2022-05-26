import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
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
        <Navbar home="Home" about="About" projects="Projects" contact="Contact" />
        <Routes>
          <Route path="/Scasto" element={<Home />}>
          </Route>
          <Route path="/Scasto/about" element={<About />}>
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
