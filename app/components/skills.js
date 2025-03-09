// Skills.js
import React from "react";
import { useLanguage } from "./LanguageContext";
import "./skills.css";

const Skills = () => {
  const { language } = useLanguage();

  return (
    <section id="skills" className="skills container">
      <h2>{language === "en" ? "Skills" : "Compétences"}</h2>
      <div className="holder-blue">
        <div className="left-column">
          <h3>{language === "en" ? "Front-end" : "Front-end"}</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>REACT</li>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>TailwindCSS</li>
            <li>UI/UX Design</li>
          </ul>
          <h3>{language === "en" ? "Back-end" : "Back-end"}</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Python</li>
            <li>Django</li>
            <li>Flask</li>
            <li>RESTful API</li>
          </ul>
          <h3>
            {language === "en"
              ? "Database Management"
              : "Gestion de base de données"}
          </h3>
          <ul>
            <li>SQL (MySQL, PostgreSQL)</li>
            <li>NoSQL (MongoDB)</li>
          </ul>
          <h3>
            {language === "en" ? "Cloud Computing" : "Informatique en nuage"}
          </h3>
          <ul>
            <li>AWS</li>
            <li>AZURE</li>
            <li>Docker</li>
            <li>Kubernetes</li>
          </ul>
          <h3>{language === "en" ? "DevOps" : "DevOps"}</h3>
          <ul>
            <li>CI/CD (Jenkins, GitHub Actions)</li>
            <li>Version Control (Git, GitHub)</li>
          </ul>
          <h3>{language === "en" ? "AI" : "IA"}</h3>
          <ul>
            <li>Generative AI</li>
            <li>AI Integration in Web Applications</li>
            <li>Chatbot Development</li>
          </ul>
        </div>
        <div className="right-column">
          <h3>{language === "en" ? "A bit about me" : "Un peu sur moi"}</h3>
          <p>
            {language === "en"
              ? "I'm Ismail Lahbari, a Software Engineer and Freelance Full-Stack Developer specializing in Cloud & DevOps, Generative AI, and UX/UI Design. I build scalable, AI-powered solutions with a focus on performance, automation, and user experience. Passionate about innovation and problem-solving, I thrive on optimizing workflows, integrating AI, and crafting seamless digital experiences. Always eager to learn and collaborate, I push boundaries to deliver high-impact, future-ready applications."
              : "Je suis Ismail Lahbari, Ingénieur Logiciel et Développeur Full-Stack Freelance, spécialisé en Cloud & DevOps, IA Générative et UX/UI Design. Je conçois des solutions évolutives et optimisées par l'IA, axées sur la performance, l'automatisation et l'expérience utilisateur. Passionné par l'innovation et la résolution de problèmes, j’excelle dans l’optimisation des workflows, l’intégration de l’IA et la création d’expériences numériques fluides. Toujours avide d'apprendre et de collaborer, je repousse les limites pour développer des applications impactantes et prêtes pour l’avenir."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
