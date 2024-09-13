import React from "react";
import styles from "./exp.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Expierence</h2>
      <div className={styles.content}>
        {/* Skills Section */}
        <div className={styles.skills}>
          <h2 className={styles.skillsTitle}>Skills</h2>
          <div className={styles.skillsList}>
            {skills.map((skill, id) => {
              return (
                <div key={id} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <p>{skill.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* History Section */}
        <div className={styles.history}>
          <h2 className={styles.historyTitle}>History</h2>
          <ul>
            {history.map((historyItem, id) => {
              return (
                <li key={id} className={styles.historyItem}>
                  {/* <img
                    src={getImageUrl(historyItem.imageSrc)}
                    alt={`${historyItem.organisation} Logo`}
                  /> */}
                  <div className={styles.historyItemDetails}>
                    <h3>{`${historyItem.role}`}</h3>
                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                    <ul>
                      {historyItem.experiences.map((experience, id) => {
                        return <li key={id}>{experience}</li>;
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};