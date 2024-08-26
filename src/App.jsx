import styles from "./App.module.css";
// import { About } from "./components/About/About";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/contact/contact";

// import images from './components/showcaaseGallery';


function App() {
  return (
    <div className={styles.App}>
    <>Rashawn </>
    {/* <About /> */}
    <Projects />
    <Contact />
    </div>
 ); 
}



export default App;