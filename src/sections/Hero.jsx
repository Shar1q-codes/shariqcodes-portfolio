import styles from './Hero.module.css';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroBg}></div>
      <div className={styles.heroContent}>
        <h1 className={styles.headline}>
          Crafting Digital Realities That Inspire
        </h1>
        <p className={styles.subheadline}>
          Freelancer · MERN Stack Dev · CSE Educator · Data Scientist in Progress
        </p>
        <button 
          className={styles.ctaButton}
          onClick={scrollToContact}
        >
          Let's Build Something That Matters
        </button>
      </div>
    </section>
  );
};

export default Hero; 