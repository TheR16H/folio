import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/1-50x50.png")}
          alt="Flower"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/1-59x50.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3> Fullstack Developer</h3>
              <p>
                I'm an aspiring fullstack developer with experience in building responsive
                and optimized sites, as well as developing fast and optimised back-end systems
                and utlizing APIs. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/dbhb.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Passion Projects.</h3>
              <p>
              in my freetime i tend to dive into various topics of research always advancing my extensive knowlege on the subject 
             of fullstack and have a few passion projects planned to be released soon!
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/dkdk.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
