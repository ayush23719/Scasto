import './App.css';
import Navbar from './Components/Navbar';
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
        <Navbar home="Home" about="About" projects="Projects" Contact="Contact" />
        <Routes>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/projects" element={<Projects />}>
          </Route>
          <Route path="/Contact" element={<Contact />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
