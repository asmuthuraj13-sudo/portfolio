import "./Education.css";
import education from "../../Data/educationData";

import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Education() {
  return (
    <section id="education" className="education">

      <motion.div
        className="education-title"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p>Academic Journey</p>
        <h2>Education</h2>
      </motion.div>

      {education.map((item) => (
        <motion.div
          className="education-card"
          key={item.id}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ y: -8 }}
        >
          <div className="education-icon">
            <FaGraduationCap />
          </div>

          <h3>{item.degree}</h3>

          <h4>{item.department}</h4>

          <h5>{item.college}</h5>

          <div className="education-info">
            <span>
              <FaCalendarAlt />
              {item.duration}
            </span>

            <span>
              <FaMapMarkerAlt />
              {item.location}
            </span>
          </div>
        </motion.div>
      ))}

    </section>
  );
}

export default Education;