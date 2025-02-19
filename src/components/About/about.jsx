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
             My name is Rashawn, born and raised in PA. I have a background in coding and graphic design.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/4.png")} alt="MAIN" className={styles.aboutImage} />
            <div className={styles.aboutItemText}>
              <h3>Fullstack Developer</h3>
              <p>
              I am an aspiring full-stack developer with experience in creating responsive and optimized websites,
               as well as developing efficient back-end systems and utilizing APIs. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/2-50x50.png")} alt="Side"className={styles.aboutImage} />
            <div className={styles.aboutItemText}>
              <h3>History</h3>
              <p>
              Since beginning my journey as a full-stack developer, I have acquired a diverse set of skills. In my free time.
              I enjoy exploring various research topics, continuously enhancing my extensive knowledge of all aspects of full-stack development. 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
