import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h2>About Me</h2>

      <div className="about-card">
        <p>
          I am a passionate and dedicated developer with strong skills in 
          <span> React</span>, <span> Java</span>, and <span> Python</span>.  
          I enjoy building modern web applications, solving real-world problems, 
          and continuously learning new technologies to improve my skills.
        </p>

        <div className="about-highlights">
          <div className="highlight"> Problem Solver</div>
          <div className="highlight">Full Stack Developer</div>
          <div className="highlight">Quick Learner</div>
        </div>
      </div>
    </div>
  );
};

export default About;