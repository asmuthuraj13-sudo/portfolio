import "./Experience.css";
import experience from "../../data/experienceData";
import ExperienceCard from "./ExperienceCard";

import { motion } from "framer-motion";

function Experience() {
  return (
    <section id="experience" className="experience">

      <motion.div
        className="experience-title"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p>Professional Journey</p>
        <h2>Experience</h2>
      </motion.div>

      <div className="timeline">

        {experience.map((item, index) => (
          <ExperienceCard
            key={item.id}
            experience={item}
            index={index}
          />
        ))}

      </div>

    </section>
  );
}

export default Experience;