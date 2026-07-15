import "./Projects.css";
import { motion } from "framer-motion";
import projects from "../../data/projectsData";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="projects-title">
        <p>My Recent Work</p>
        <h2>My Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;