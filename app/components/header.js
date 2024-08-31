import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { FaSun, FaMoon } from "react-icons/fa"; // Import icons
import { useDarkMode } from "./DarkMod"; // Import dark mode hook
import { motion } from "framer-motion";
import "./header.css"; // Import header CSS

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, toggleDarkMode] = useDarkMode(); // Use dark mode hook
  const { language, toggleLanguage } = useLanguage(); // Use language from context

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <a id="Home" className="logo-holder">
        <div className="logo">
          <img
            src="./imgs/portfolio icon.png"
            alt="portfolio icon"
            width="48"
          />
        </div>
        <div className="logo-text">
          {language === "en" ? "Portfolio Website" : "Site Web de Portfolio"}
        </div>
      </a>
      <nav>
        <ul id="menu" className={menuOpen ? "active" : ""}>
          <li>
            <button className="dark-mode-button" onClick={toggleDarkMode}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </li>
          <li>
            <button className="language-button" onClick={toggleLanguage}>
              {language === "en" ? "FR" : "EN"}
            </button>
          </li>
          <li>
            <a href="#Home">{language === "en" ? "Home" : "Accueil"}</a>
          </li>
          <li>
            <a href="#skills">{language === "en" ? "Skills" : "Compétences"}</a>
          </li>
          <li>
            <a href="#projects">{language === "en" ? "Projects" : "Projets"}</a>
          </li>
          <li>
            <a href="#work experience">
              {language === "en" ? "Experiences" : "Expériences"}
            </a>
          </li>
          <li>
            <a href="#skills">{language === "en" ? "About" : "À propos"}</a>
          </li>
          <li>
            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.2 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
              >
                {language === "en" ? "Let's Talk" : "Parlons"}
              </motion.button>
            </a>
          </li>
        </ul>
        <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M5 7h14M5 12h14M5 17h10"
            />
          </svg>
        </a>
      </nav>
    </header>
  );
};

export default Header;
