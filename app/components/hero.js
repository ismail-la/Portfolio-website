// Hero.js
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import "./hero.css";

const Hero = () => {
  const { language } = useLanguage();

  return (
    <section className="hero container">
      <div className="hero-blue">
        <div>
          <h1>
            <small>{language === "en" ? "Hi I'm" : "Salut, je suis"}</small>
            Lahbari Ismail
          </h1>
          <p>
            {language === "en"
              ? "Welcome to my portfolio! I am a Junior Software Engineer."
              : "Bienvenue sur mon portfolio ! Je suis un ingénieur logiciel junior."}
            <span>
              {language === "en"
                ? "I craft innovative and responsive web solutions with expertise in front-end development, AI integration, and full architecture to deliver seamless and dynamic user experiences."
                : "Je crée des solutions web innovantes et réactives avec une expertise en développement front-end, intégration de l'IA et architecture complète pour offrir des expériences utilisateur fluides et dynamiques."}
            </span>
          </p>

          <div className="call-to-action">
            <motion.a
              whileHover={{ scale: 1.1 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              href="./ISMAIL-LAHBARI-Resume.pdf"
            >
              <button>
                {language === "en" ? "View Resume" : "Voir le CV"}
              </button>
            </motion.a>
            <motion.a
              href="mailto:lahbariismail@gmail.com"
              whileHover={{ scale: 1.1 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              <button>
                {language === "en" ? "Contact Me" : "Contactez-moi"}
              </button>
            </motion.a>
          </div>

          <div className="social-links">
            <a href="https://github.com/ismail-la">
              <img src="./imgs/github.png" alt="GitHub" width="48" />
            </a>
            <a href="https://www.linkedin.com/in/ismail-lahbari/">
              <img src="./imgs/linkedin.png" alt="Linkedin" width="48" />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-yellow">
        <img src="./imgs/ismail face pc.png" alt="Ismail's Face" width="100%" />
      </div>
    </section>
  );
};

export default Hero;
