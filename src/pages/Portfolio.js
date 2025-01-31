import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio">
      <h2>Projects</h2>

      <div className="projects-container">
        {/* Pollinator Project */}
        <div className="project">
          <img src="/pol.jpg" alt="Pollinator Project" />
          <h3>Pollinator</h3>
          <p>A machine learning project that predicts seasonal diseases using pollen data.</p>
          <a href="https://github.com/Sahil-Suman-720/Pollinator">View on GitHub</a>
        </div>

        {/* Sensei Project */}
        <div className="project">
          <img src="sens.jpeg" alt="Sensei Project" />
          <h3>Sensei</h3>
          <p>The project is a web development project in which we connect students and teachers 
             for private one-to-one sessions on a particular subject or topic.</p>
          <a href="https://github.com/Sahil-Suman-720/Sensei">View on GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
