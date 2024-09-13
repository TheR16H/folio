import React from "react";

import "./exp.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {

return (
  <section className="container" id="experience">
    <h2 className="title">Skills</h2>
    <div className="content">
      <div className="skills">
        {skills.map((skill, id) => {
          return (
            <div key={id} className="skill">
              <div className="skillImageContainer">
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
};