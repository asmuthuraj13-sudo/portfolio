import "./Experience.css";

import { motion } from "framer-motion";

import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt
} from "react-icons/fa";

function ExperienceCard({ experience, index }) {
  return (
    <motion.div
      className="experience-card"
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
      }}
      viewport={{ once: true }}
    >
      <div className="timeline-dot"></div>

      <div className="experience-content">

        <h3>
          <FaBriefcase />
          {experience.role}
        </h3>

        <h4>{experience.company}</h4>

        <div className="experience-info">

          <span>
            <FaCalendarAlt />
            {experience.duration}
          </span>

          <span>
            <FaMapMarkerAlt />
            {experience.location}
          </span>

        </div>

        <div className="tech-stack">

          {experience.technologies.map((tech) => (
            <span
              className="tech-badge"
              key={tech}
            >
              {tech}
            </span>
          ))}

        </div>

        <ul>

          {experience.responsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}

        </ul>

      </div>

    </motion.div>
  );
}

export default ExperienceCard;