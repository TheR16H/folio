import React from "react";
import styles from "./landing.module.css";
import quotes from "../../data/quotes";

export const Land = () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi!</h1>
        <p className={styles.description}>
         My name's Rashawn. Welcome to my portfolio</p>
         <p className={styles.quote}>{randomQuote}</p>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
