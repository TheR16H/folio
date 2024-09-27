import React from 'react';
import styles from './footer.module.css'; // Import your CSS file for styling
import { getImageUrl } from "../../utils";

const Footer = () => {
    return (
        <footer className={styles.footer}> {/* Add a class for styling */}
           <div className={styles.footerContent}>
                  <p>© 2024 TheR16H. All rights reserved.</p> 
                <div className={styles.footerImages}>
                <a href="rashawn5hall@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
             </a>
             <a href="https://www.linkedin.com/TheR16H" target="_blank" rel="noopener noreferrer">
                        <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
                    </a>
            <a href="https://github.com/TheR16H" target="_blank" rel="noopener noreferrer">
                        <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
               </a> </div> 
            </div>
        </footer>
    );
};

export default Footer;

