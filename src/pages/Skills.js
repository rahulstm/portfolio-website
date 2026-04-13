import React from "react";
import "./Skills.css";
import { FaJs, FaReact, FaNodeJs, FaDatabase, FaPython, FaJava } from "react-icons/fa";

const skills = [
  { name: "JavaScript", icon: FaJs },
  { name: "React.js", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "MongoDB", icon: FaDatabase },
  { name: "Python", icon: FaPython },
  { name: "Java", icon: FaJava },
];

function Skills() {
  return (
    <div className="skills">
      <h2>My Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => {
          const Icon = skill.icon; // 👈 important
          return (
            <div className="skill-card" key={index}>
              <Icon className="icon" />
              <p>{skill.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;