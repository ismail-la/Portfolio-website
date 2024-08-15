// components/header.js
import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Import icons
import { useDarkMode } from "./darkmod"; // Import dark mode hook
import "./header.css"; // Import header CSS

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, toggleDarkMode] = useDarkMode(); // Use dark mode hook

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
        <div className="logo-text">Portfolio Website</div>
      </a>
      <nav>
        <ul id="menu" className={menuOpen ? "active" : ""}>
          <li>
            <button className="dark-mode-button" onClick={toggleDarkMode}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </li>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#work experience">Experiences</a>
          </li>
          <li>
            <a href="#skills">About</a>
          </li>
          <li>
            <a href="mailto:lahbariismail@gmail.com" className="button">
              Contact
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
