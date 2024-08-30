import styles from "./App.module.css";
// import { About } from "./components/About/About"; // i mixed this up with contact oops
import { Projects } from "./components/projects/projects";
import { Contact } from "./components/contact/contact";
import { Experience } from "./components/experience/experience";



function App() {
  return (
    <div className={styles.App}>
    <>Rashawn </>
    {/* <About /> this will be made or folded into contact idk */}
   {/* why is this line breaking it?? -->    <Experience /> */}
     <Projects />
    <Contact />
    </div>
 ); 
}



export default App;