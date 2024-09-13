import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Headernav } from "./components/Headernav/headernav";
import Footer from './components/footer/footer';
import { Land } from "./components/landingpage/land";
import { About } from "./components/About/about";
import { Projects } from "./components/projects/projects";
import { Contact } from "./components/contact/contact";
import { Experience } from "./components/experience/experience";

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Headernav />
        <Routes>
          <Route path="/" element={<Land />} /> {/* Home page */}
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;