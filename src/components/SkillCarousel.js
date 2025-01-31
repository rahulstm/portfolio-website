import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SkillCarousel.css";
import { FaJs, FaReact, FaNodeJs, FaDatabase, FaPython, FaGitAlt } from "react-icons/fa"; // Material UI icons

const skills = [
  { name: "JavaScript", description: "A versatile language for web development.", icon: <FaJs /> },
  { name: "React.js", description: "A library for building user interfaces.", icon: <FaReact /> },
  { name: "Node.js", description: "A runtime for executing JavaScript server-side.", icon: <FaNodeJs /> },
  { name: "MongoDB", description: "A NoSQL database for scalable applications.", icon: <FaDatabase /> },
  { name: "Python", description: "A widely used language for various applications.", icon: <FaPython /> },
  { name: "Git & GitHub", description: "Version control for managing code.", icon: <FaGitAlt /> }
];

const SkillCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">My Skills</h2>
      <Slider {...settings}>
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SkillCarousel;
