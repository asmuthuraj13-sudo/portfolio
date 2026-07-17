import { useState } from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("https://formspree.io/f/xlgqgypp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Safely handle JSON and non-JSON responses
      const contentType = response.headers.get("content-type") || "";
      let result = {};
      if (contentType.includes("application/json")) {
        result = await response.json().catch(() => ({}));
      } else {
        const text = await response.text().catch(() => "");
        try {
          result = text ? JSON.parse(text) : {};
        } catch (e) {
          result = { message: text };
        }
      }

      if (!response.ok) {
        const errorMessage = result.errors?.[0]?.message || result.message;
        throw new Error(errorMessage || "Unable to send your message. Please try again.");
      }

      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus(error.message || "Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">

      <motion.div
        className="contact-title"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p>Let's Connect</p>
        <h2>Get In Touch</h2>
      </motion.div>

      <div className="contact-container">

        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <h3>Let’s build something meaningful together.</h3>

          <p>
            I'm always open to connecting and discussing web development, 
            cloud computing, UI/UX design, innovative technology projects, 
            internships, and exciting career opportunities.
          </p>

          <div className="contact-item">
            <FaEnvelope />
            <span>asmuthuraj13@gmail.com</span>
          </div>

          <div className="contact-item">
            <FaPhone />
            <span>+91 8667665447</span>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <span> Chennai, India</span>
          </div>

          <div className="social-icons">

            <a
              href="https://github.com/asmuthuraj13-sudo"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="http://linkedin.com/in/muthuraj07/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
          />

          <textarea
            rows="6"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          ></textarea>

          {status ? <p className="form-status">{status}</p> : null}

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

        </motion.form>

      </div>

    </section>
  );
}

export default Contact;
