import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SkillCarousel.css";
import { FaJs, FaReact, FaNodeJs, FaDatabase, FaPython, FaGitAlt } from "react-icons/fa";

const skills = [
  { name: "JavaScript", description: "Versatile language for web development.", icon: <FaJs /> },
  { name: "React.js", description: "Library for building UI components.", icon: <FaReact /> },
  { name: "Node.js", description: "Server-side JavaScript runtime.", icon: <FaNodeJs /> },
  { name: "MongoDB", description: "NoSQL database for scalable apps.", icon: <FaDatabase /> },
  { name: "Python", description: "Powerful language for multiple domains.", icon: <FaPython /> },
  { name: "Git & GitHub", description: "Version control and collaboration.", icon: <FaGitAlt /> }
];

const SkillCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 900,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">My Skills</h2>

      <Slider {...settings}>
        {skills.map((skill, index) => (
          <div key={index} className="slide">
            <div className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SkillCarousel;