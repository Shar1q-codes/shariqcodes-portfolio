import styles from './Services.module.css';

const services = [
  {
    title: 'Custom Web Design',
    description: 'Creating beautiful, responsive websites using React and MERN stack technologies.',
    icon: '💻'
  },
  {
    title: 'Freelancer Portfolio Builds',
    description: 'Designing and developing professional portfolios that showcase your work effectively.',
    icon: '🎨'
  },
  {
    title: '1:1 Teaching & Mentorship',
    description: 'Personalized guidance in web development, computer science, and programming fundamentals.',
    icon: '👨‍🏫'
  },
  {
    title: 'Freelance Project Rescue',
    description: 'Helping fix and optimize existing projects, ensuring they meet modern standards.',
    icon: '🚑'
  },
  {
    title: 'CSE Student Guidance',
    description: 'Supporting computer science students with coursework, projects, and career advice.',
    icon: '📚'
  },
  {
    title: 'Data Dashboards & AI Projects',
    description: 'Building interactive data visualizations and implementing machine learning solutions.',
    icon: '📊'
  }
];

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>What I Offer</h2>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 