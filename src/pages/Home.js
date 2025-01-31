import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  return (
    <motion.div 
      className="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>Hello, I'm Rahul Kumar</h1>
      <p>Welcome to my portfolio website. Explore my work and projects.</p>
    </motion.div>
  );
};

export default Home;
