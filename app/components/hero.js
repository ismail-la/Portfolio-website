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
              ? "Welcome to my portfolio! I am a Software Engineer."
              : "Bienvenue sur mon portfolio ! Je suis un ingénieur logiciel."}
            <span>
              {language === "en"
                ? "Specializing in Full-Stack Development, Cloud & DevOps, and AI-driven solutions. With expertise in front-end and back-end development, SaaS architecture, and AI integration, I build scalable and efficient web applications that deliver seamless user experiences."
                : "Spécialisé en développement full-stack, Cloud & DevOps, et solutions basées sur l'IA. Grâce à mon expertise en développement front-end et back-end, architecture SaaS et intégration de l'IA, je conçois des applications web évolutives et performantes offrant une expérience utilisateur fluide."}
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
