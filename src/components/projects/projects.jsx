import React from "react";
import styles from "./projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./projectcards";

export const Projects = () => {

    return ( 
        <section className={styles.container} id="projects"> 
        <h2 className={styles.title}>Some of my favorite projects</h2>
        <div className={styles.projects}> 
            {projects.map((project, id) => {
                return <ProjectCard key={id} project={project} />;
            })}
        </div>
        </section>
    );
};

export default Projects;
