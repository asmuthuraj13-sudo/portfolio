import { useState } from "react";
import "./Hero.css";
import profile from "../../assets/profile.jpeg";
import resume from "../../assets/Resume.pdf";

import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
  FaDownload,
  FaPaperPlane,
} from "react-icons/fa";

function Hero() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("asmuthuraj13@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };
  return (
    <section id="home" className="hero">

      {/* Background Blur */}
      <div className="blur blur-one"></div>
      <div className="blur blur-two"></div>

      <div className="hero-container">

        {/* LEFT SIDE */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-greeting">👋 Hello, I'm</p>

          <h1>Muthu Raj </h1>

          <TypeAnimation
            sequence={[
              "cloud Enthusiast",
              2000,
              "Creative Problem Solver",
              2000,
            ]}
            speed={45}
            repeat={Infinity}
            wrapper="span"
            className="typing"
          />

          <p className="hero-description">
            I enjoy building cloud-based applications and writing efficient, scalable code. 
            My focus is on developing reliable solutions, learning modern cloud technologies 
            and creating applications that solve real-world problems.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">

            <a
              href={resume}
              download="Muthu_Raj_Resume.pdf"
              className="primary-btn"
            >
              <FaDownload />
              Download Resume
            </a>

            <a
              href="#contact"
              className="secondary-btn"
            >
              <FaPaperPlane />
              Contact Me
            </a>

          </div>

          {/* Social Icons */}
          <div className="social-icons">

            <a
              href="https://github.com/asmuthuraj13-sudo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="http://linkedin.com/in/muthuraj07/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:asmuthuraj13@gmail.com"
              onClick={handleEmailClick}
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="profile-card">
            <img
              src={profile}
              alt="Muthu Raj"
            />
          </div>
        </motion.div>

      </div>

      {/* Scroll Down */}
      <motion.a
        href="#about"
        className="scroll-down"
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
      >
        <FaArrowDown />
      </motion.a>

      <AnimatePresence>
        {copied && (
          <motion.div
            className="email-toast"
            initial={{ opacity: 0, y: 50, scale: 0.9, x: "-50%" }}
            animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
            exit={{ opacity: 0, y: 20, scale: 0.95, x: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <span className="toast-icon">📧</span>
            <div className="toast-content">
              <span className="toast-title">Email Copied!</span>
              <span className="toast-email">asmuthuraj13@gmail.com</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

export default Hero;