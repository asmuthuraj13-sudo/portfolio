import "./Leadership.css";

import { motion } from "framer-motion";

import {
  FaUsers,
  FaCalendarAlt,
  FaMapMarkerAlt
} from "react-icons/fa";

function LeadershipCard({ leadership, index }) {
  return (
    <motion.div
      className="leadership-card"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
      }}
    >
      <div className="leadership-icon">
        <FaUsers />
      </div>

      <h3>{leadership.role}</h3>

      <h4>{leadership.organization}</h4>

      <div className="leadership-info">

        <span>
          <FaCalendarAlt />
          {leadership.duration}
        </span>

        <span>
          <FaMapMarkerAlt />
          {leadership.location}
        </span>

      </div>

      <ul>
        {leadership.responsibilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

    </motion.div>
  );
}

export default LeadershipCard;