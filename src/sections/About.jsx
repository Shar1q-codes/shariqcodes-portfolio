import styles from "./About.module.css";

const About = () => {
  const skills = [
    { name: "React", level: "90%" },
    { name: "Node.js", level: "85%" },
    { name: "MongoDB", level: "80%" },
    { name: "Express", level: "85%" },
    { name: "Git", level: "90%" },
    { name: "JavaScript", level: "95%" },
    { name: "HTML/CSS", level: "95%" },
    { name: "Python", level: "75%" },
    { name: "Data Science", level: "70%" },
    { name: "Teaching", level: "90%" },
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.story}>
            <h2>My Journey</h2>
            <p>
              I'm Shariq Hussain, a passionate MERN Stack Developer with a deep
              love for teaching and learning. My journey in tech began with a
              curiosity about how things work, which led me to explore the world
              of web development and computer science education.
            </p>
            <p>
              As a freelancer, I've helped clients bring their digital visions
              to life, creating robust and scalable web applications. My
              experience in teaching has allowed me to share my knowledge with
              students, helping them build strong foundations in computer
              science
            </p>
            <p>
              Currently, I'm expanding my expertise into the realm of Data
              Science, combining my programming skills with data analysis and
              machine learning to create intelligent solutions.
            </p>
          </div>
          <div className={styles.skills}>
            <h2>Skills & Expertise</h2>
            <div className={styles.skillsGrid}>
              {skills.map((skill, index) => (
                <div key={index} className={styles.skillCard}>
                  <div className={styles.skillInfo}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillLevel}>{skill.level}</span>
                  </div>
                  <div className={styles.skillBar}>
                    <div
                      className={styles.skillProgress}
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
