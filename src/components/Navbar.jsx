import { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "./logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          <img
            src={logo}
            alt="ShariqCodes Logo"
            className={styles.logoImg}
          />
        </a>
      </div>

      <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
        >
          About
        </a>
        <a
          href="#services"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("services");
          }}
        >
          Services
        </a>
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("projects");
          }}
        >
          Projects
        </a>
        <a
          href="#teaching"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("teaching");
          }}
        >
          Teaching
        </a>
        <a
          href="#data-science"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("data-science");
          }}
        >
          Data Science
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
        >
          Contact
        </a>
      </div>

      <div
        className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
