import React from "react";
import "./Skills.css"; // Make sure this file exists

function Skills() {
  return (
    <div className="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        <div className="skill">JavaScript</div>
        <div className="skill">React.js</div>
        <div className="skill">Node.js</div>
        <div className="skill">MongoDB</div>
      </div>
    </div>
  );
}

export default Skills;
