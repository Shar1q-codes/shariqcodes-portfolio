import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import styles from "./Contact.module.css";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
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
      await emailjs.sendForm(
        'service_pv97r7s',
        'template_dtwnwya',
        formRef.current,
        'V_QVMRoFd7U35lQzg'
      );
      
      setFormStatus({ submitting: false, submitted: true, error: false });
      setFormData({ user_name: "", user_email: "", subject: "", message: "" });
    } catch (error) {
      console.error('Error sending email:', error);
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

          <form ref={formRef} className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="user_name">Name</label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="user_email">Email</label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                value={formData.user_email}
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
