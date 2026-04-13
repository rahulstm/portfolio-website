import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio">
      <h2>My Projects</h2>

      <div className="projects-container">

        {/* Pollinator */}
        <div className="project">
          <img src="/portfolio-website/pol.jpg" alt="Pollinator Project" />

          <div className="project-content">
            <h3>Pollinator</h3>
            <p>
              A machine learning system that predicts seasonal diseases using
              pollen data, helping users take preventive measures.
            </p>


            <div className="buttons">
              <a href="https://pollinator-frontend.onrender.com/" target="_blank">
                Live
              </a>
              
            </div>
          </div>
        </div>

        {/* Tripzholidays */}
        <div className="project">
          <img src="/portfolio-website/tripz.jpeg" alt="Tripzholidays Project" />

          <div className="project-content">
            <h3>Tripzholidays</h3>
            <p>
              A travel platform offering curated packages, personalized
              itineraries, and seamless booking services worldwide.
            </p>

           

            <div className="buttons">
              <a href="https://tripzholidays.com/" target="_blank" rel="noopener noreferrer">
                Live
              </a>
             
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Portfolio;