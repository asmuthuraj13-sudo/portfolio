import "./Leadership.css";
import LeadershipCard from "./LeadershipCard";
import leadership from "../../Data/leadershipData";
import { motion } from "framer-motion";

function Leadership() {
  return (
    <section id="leadership" className="leadership">

      <motion.div
        className="leadership-title"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p>Leadership & Activities</p>
        <h2>Community Leadership</h2>
      </motion.div>

      <div className="leadership-container">
        {leadership.map((item, index) => (
          <LeadershipCard
            key={item.id}
            leadership={item}
            index={index}
          />
        ))}
      </div>

    </section>
  );
}

export default Leadership;