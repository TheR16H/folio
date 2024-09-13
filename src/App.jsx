import styles from "./App.module.css";
import { Headernav } from "./components/Headernav/headernav";
import { Land } from "./components/landingpage/land"
import { About } from "./components/About/about";
import { Projects } from "./components/projects/projects";
import { Contact } from "./components/contact/contact";
import { Experience } from "./components/experience/experience";



function App() {
  return (
    <div className={styles.App}>
      <Headernav />
    <>Rashawn </>
    <Land />
    <About />
     <Experience />
     <Projects />
    <Contact />
    </div>
 ); 
}



export default App;