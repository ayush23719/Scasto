import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
// import Particles from 'react-particles-js';
// import particlesConfig from './config/particlesConfig';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
      {/* <div className="App" style={{ position: 'relative', overflow: "hidden" }}> */}
      {/* <div style={{ position: 'absolute' }}>
          <Particles height="100vh" width="100vw" params={particlesConfig} />
        </div> */}
      <Router>
        <div className="container-scrollbar">
          <Navbar home="Home" about="About" projects="Projects" contact="Contact" />
        </div>
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
      {/* </div> */}
    </>
  );
}

export default App;
