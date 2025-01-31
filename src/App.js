import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import SkillCarousel from "./components/SkillCarousel";
import "@fontsource/roboto"; // Import Roboto font

function App() {
  return (
    <Router>
      <div className="app" style={{ fontFamily: 'Roboto, sans-serif' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Home /><SkillCarousel /></>} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
