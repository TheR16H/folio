import React from "react";
import styles from "./landing.module.css";

export const Land = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi!</h1>
        <p className={styles.description}>
         Welcome to my portfolio</p>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
