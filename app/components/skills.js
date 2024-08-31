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
              ? "Hi I'm Ismail I am a Junior Software Engineer and Freelance Full-Stack Web Developer with a strong focus on DevOps, generative AI, and UX/UI design. I specialize in creating high-performance, innovative software solutions and visually appealing, user-friendly websites. Passionate about technology and continuous learning, I am excited to collaborate with professionals and take on new challenges in the tech industry."
              : "Salut, je suis Ismail. Je suis un ingénieur logiciel junior et développeur web full-stack freelance avec un fort accent sur le DevOps, l'IA générative et la conception UX/UI. Je me spécialise dans la création de solutions logicielles innovantes et performantes ainsi que de sites web visuellement attrayants et conviviaux. Passionné par la technologie et l'apprentissage continu, je suis enthousiaste à l'idée de collaborer avec des professionnels et de relever de nouveaux défis dans l'industrie technologique."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
