import react from "react";
import styles from "./contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact me</h2>
                {/* <p>hi </p> */}
            </div>
            <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="rashawn5hall@gmail.com">rashawn5hall@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          /> 
          {/* { I think my linkedin is private dont forget to change edit that soon } */}
          <a href="https://www.linkedin.com/in/ther16h/">linkedin.com/in/ther16h/</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/TheR16H">github.com/TheR16H</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
