import "./Certificates.css";
import certificates from "../../Data/certificateData";
import CertificateCard from "./CertificateCard";
import { motion } from "framer-motion";

function Certificates() {
  return (
    <section id="certificates" className="certificates">

      <motion.div
        className="certificates-title"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p>Professional Growth</p>
        <h2>Certifications</h2>
      </motion.div>

      <div className="certificates-grid">

        {certificates.map((certificate, index) => (
          <CertificateCard
            key={certificate.id}
            certificate={certificate}
            index={index}
          />
        ))}

      </div>

    </section>
  );
}

export default Certificates;