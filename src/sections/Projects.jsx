import { useState } from 'react';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'TOT Healthcare',
    description: 'A comprehensive healthcare management system with patient records and appointment scheduling.',
    image: '/projects/tot-healthcare.jpg',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/yourusername/tot-healthcare',
    live: 'https://tot-healthcare.com',
    isCaseStudy: true
  },
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with payment integration and inventory management.',
    image: '/projects/ecommerce.jpg',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/yourusername/ecommerce',
    live: 'https://ecommerce-demo.com'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    image: '/projects/task-manager.jpg',
    tech: ['React', 'Firebase', 'Material-UI'],
    github: 'https://github.com/yourusername/task-manager',
    live: 'https://task-manager-demo.com'
  },
  {
    title: 'Portfolio Builder',
    description: 'A tool for creating and customizing professional portfolio websites.',
    image: '/projects/portfolio-builder.jpg',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/portfolio-builder',
    live: 'https://portfolio-builder.com'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`${styles.projectCard} ${project.isCaseStudy ? styles.caseStudy : ''}`}
              onMouseEnter={() => setSelectedProject(index)}
              onMouseLeave={() => setSelectedProject(null)}
            >
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
                <div className={`${styles.projectOverlay} ${selectedProject === index ? styles.active : ''}`}>
                  <div className={styles.projectInfo}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className={styles.techStack}>
                      {project.tech.map((tech, i) => (
                        <span key={i}>{tech}</span>
                      ))}
                    </div>
                    <div className={styles.projectLinks}>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </div>
                  </div>
                </div>
              </div>
              {project.isCaseStudy && (
                <button className={styles.caseStudyButton}>
                  View Case Study
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 