// footer.js
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="social-icon">
        <li className="social-icon__item">
          <a className="social-icon__link" href="https://x.com/MrLahbari">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
        <li className="social-icon__item">
          <a
            className="social-icon__link"
            href="https://www.linkedin.com/in/ismail-lahbari/"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="https://github.com/ismail-la">
            <ion-icon name="logo-GitHub"></ion-icon>
          </a>
        </li>
      </ul>
      <ul className="menu">
        <li className="menu__item">
          <a className="menu__link" href="#Home">
            Home
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#skills">
            Skills
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#projects">
            Projects
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#work experience">
            Experiences
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#skills">
            About
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="mailto:lahbariismail@gmail.com">
            Contact
          </a>
        </li>
      </ul>
      <p>&copy;2024 Lahbari Ismail | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
