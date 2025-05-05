import { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: false });

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormStatus({ submitting: false, submitted: true, error: false });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setFormStatus({ submitting: false, submitted: false, error: true });
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Let's Connect</h2>
        <p className={styles.sectionSubtitle}>
          Have a project in mind? Let's discuss how we can work together.
        </p>

        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <h3>Get in Touch</h3>
              <ul>
                <li>
                  <span className={styles.icon}>📧</span>
                  <div>
                    <h4>Email</h4>
                    <p>shariqhussain691@gmail.com</p>
                  </div>
                </li>
                <li>
                  <span className={styles.icon}>📱</span>
                  <div>
                    <h4>Phone</h4>
                    <p>+91 9398219300</p>
                  </div>
                </li>
                <li>
                  <span className={styles.icon}>📍</span>
                  <div>
                    <h4>Location</h4>
                    <p>India — Working Worldwide</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className={styles.availability}>
              <h3>Availability</h3>
              <p>
                I'm currently accepting new projects and teaching opportunities.
                Let's discuss how I can help you achieve your goals.
              </p>
              <div className={styles.availabilityStatus}>
                <span className={styles.statusDot}></span>
                <span>Available for Freelance Work</span>
              </div>
            </div>
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project"
                rows="5"
              ></textarea>
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={formStatus.submitting}
            >
              {formStatus.submitting ? "Sending..." : "Send Message"}
            </button>

            {formStatus.submitted && (
              <p className={styles.successMessage}>
                Thank you! Your message has been sent successfully.
              </p>
            )}

            {formStatus.error && (
              <p className={styles.errorMessage}>
                Oops! Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
