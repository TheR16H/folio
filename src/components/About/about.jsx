import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/3.png")}
          alt="Flower"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/1-50x50.png")} alt="CPU" className={styles.aboutImage} />
            <div className={styles.aboutItemText}>
              <h3>Introduction</h3>
              <p>
             My name is Rashawn Hall born and raised in PA. i have a background in coding and graphic design.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/4.png")} alt="MAIN" className={styles.aboutImage} />
            <div className={styles.aboutItemText}>
              <h3>Fullstack Developer</h3>
              <p>
              I'm an aspiring fullstack developer with experience in building responsive
                and optimized sites, as well as developing fast and optimised back-end systems
                and utlizing APIs. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/2-50x50.png")} alt="Side"className={styles.aboutImage} />
            <div className={styles.aboutItemText}>
              <h3>History</h3>
              <p>
              Since starting on my full stack journey i picked up a variety of skills, in my freetime i tend to dive into various topics of research always advancing my extensive knowlege on all things 
              full stack and have a few passion projects planned to be released soon!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
