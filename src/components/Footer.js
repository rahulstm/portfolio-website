import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaGithub, FaYoutube, FaEnvelope } from "react-icons/fa"; // Import icons
import "./Footer.css"; // Ensure styling exists

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com/rahul.shraff.33" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://www.instagram.com/rahul.shraff.33?igsh=M3ZrM28wb3k2ZjN4" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://x.com/RahulShraff77" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://www.linkedin.com/in/rahul-kumar-895689226/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/rahulstm" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.youtube.com/@RahulKumar-b7w4b" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        <a href="mailto:rahulkrstm022002@gmail.com"><FaEnvelope /></a> {/* Email icon */}
      </div>
      <p>Created by Rahul Kumar </p>
    </footer>
  );
}

export default Footer;
