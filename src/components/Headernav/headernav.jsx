import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import styles from "./headernav.module.css";

export const Headernav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Link className={styles.title} to="/">
        Portfolio
      </Link>
      <div className={styles.menu}>
        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✗" : "menu ⤵"}
        </button>
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <Link to="/about">About</Link> {/* Use Link instead of a */}
          </li>
          <li>
            <Link to="/experience">Experience</Link> {/* Use Link instead of a */}
          </li>
          <li>
            <Link to="/projects">Projects</Link> {/* Use Link instead of a */}
          </li>
          <li>
            <Link to="/contact">Contact</Link> {/* Use Link instead of a */}
          </li>
        </ul>
      </div>
    </nav>
  );
};