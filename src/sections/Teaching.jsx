import styles from "./Teaching.module.css";

// const testimonials = [
//   {
//     quote:
//       "Shariq's teaching style made complex concepts easy to understand. His practical approach helped me build real-world projects.",
//     author: "Sarah K.",
//     role: "Web Development Student",
//   },
//   {
//     quote:
//       "The mentorship program was exactly what I needed to transition into a tech career. The hands-on projects were invaluable.",
//     author: "Michael R.",
//     role: "Career Switcher",
//   },
//   {
//     quote:
//       "As a CSE student, the guidance I received helped me excel in my coursework and secure an internship.",
//     author: "David L.",
//     role: "Computer Science Student",
//   },
// ];

const Teaching = () => {
  return (
    <section id="teaching" className={styles.teaching}>
      <div className={styles.container}>
        <div className={styles.quoteSection}>
          <h2 className={styles.quote}>
            "Guided students in CSE fundamentals, MERN stack, and real-world
            projects."
          </h2>
        </div>

        <div className={styles.teachingApproach}>
          <h3>My Teaching Philosophy</h3>
          <div className={styles.approachGrid}>
            <div className={styles.approachCard}>
              <h4>Practical Learning</h4>
              <p>
                Focus on hands-on projects and real-world applications to build
                practical skills.
              </p>
            </div>
            <div className={styles.approachCard}>
              <h4>Personalized Guidance</h4>
              <p>
                Tailored learning paths based on individual goals and learning
                styles.
              </p>
            </div>
            <div className={styles.approachCard}>
              <h4>Industry-Relevant</h4>
              <p>
                Teaching current technologies and best practices used in the
                industry.
              </p>
            </div>
          </div>
        </div>

        {/* <div className={styles.testimonials}>
          <h3>Student Success Stories</h3>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <p className={styles.testimonialQuote}>"{testimonial.quote}"</p>
                <div className={styles.testimonialAuthor}>
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Teaching;
