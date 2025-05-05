import { useState } from "react";
import styles from "./DataScience.module.css";

const timeline = [
  {
    stage: "Excel",
    description: "Mastered data manipulation and visualization in Excel",
    year: "2025",
  },
  {
    stage: "SQL",
    description: "Learned database management and complex queries",
    year: "2025",
  },
  {
    stage: "Power BI",
    description: "Developed interactive dashboards and reports",
    year: "2025",
  },
  {
    stage: "Python",
    description: "Acquired Python programming and data analysis skills",
    year: "2025",
  },
  {
    stage: "Machine Learning",
    description: "Started implementing ML algorithms and models",
    year: "2025",
  },
];

const DataScience = () => {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <section id="data-science" className={styles.dataScience}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Data Science Journey</h2>
          <div className={styles.badge}>AI-Enhanced Human Developer</div>
        </div>

        <div className={styles.timeline}>
          {timeline.map((item, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>{item.stage}</h3>
                <p>{item.description}</p>
                <span className={styles.year}>{item.year}</span>
              </div>
              {index < timeline.length - 1 && (
                <div className={styles.timelineConnector}></div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.dashboardSection}>
          <button
            className={styles.dashboardButton}
            onClick={() => setShowDashboard(!showDashboard)}
          >
            {showDashboard ? "Hide Dashboard" : "See Dashboard Demo"}
          </button>

          {showDashboard && (
            <div className={styles.dashboardPreview}>
              <div className={styles.dashboardPlaceholder}>
                <h3>Interactive Data Dashboard</h3>
                <p>Real-time analytics and visualization</p>
                <div className={styles.dashboardGrid}>
                  <div className={styles.dashboardCard}>Chart 1</div>
                  <div className={styles.dashboardCard}>Chart 2</div>
                  <div className={styles.dashboardCard}>Chart 3</div>
                  <div className={styles.dashboardCard}>Chart 4</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DataScience;
