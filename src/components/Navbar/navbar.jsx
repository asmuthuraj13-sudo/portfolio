import "./navbar.css";
import resume from "../../assets/Resume.pdf";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <h2>Muthu</h2>
        </div>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a href={resume} target="_blank" rel="noopener noreferrer" className="resume-btn">Resume</a>
      </div>
    </nav>
  );
}

export default Navbar;