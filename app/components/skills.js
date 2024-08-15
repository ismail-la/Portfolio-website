// Skills.js
import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills container">
      <h2>Skills</h2>
      <div className="holder-blue">
        <div className="left-column">
          <h3>Front-end</h3>
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
          <h3>Back-end</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Python</li>
            <li>Django</li>
            <li>Flask</li>
            <li>RESTful API</li>
          </ul>
          <h3>Database Management</h3>
          <ul>
            <li>SQL (MySQL, PostgreSQL)</li>
            <li>NoSQL (MongoDB)</li>
          </ul>
          <h3>Cloud Computing</h3>
          <ul>
            <li>AWS</li>
            <li>AZURE</li>
            <li>Docker</li>
            <li>Kubernetes</li>
          </ul>
          <h3>DevOps</h3>
          <ul>
            <li>CI/CD (Jenkins, GitHub Actions)</li>
            <li>Version Control (Git, GitHub)</li>
          </ul>
          <h3>AI</h3>
          <ul>
            <li>Generative AI</li>
            <li>AI Integration in Web Applications</li>
            <li>Chatbot Development</li>
          </ul>
        </div>
        <div className="right-column">
          <h3>A bit about me</h3>
          <p>
            Hi I'm Ismail I am a Software Engineer and Freelance Full-Stack Web
            Developer with a strong focus on DevOps, generative AI, and UX/UI
            design. I specialize in creating high-performance, innovative
            software solutions and visually appealing, user-friendly websites.
            Passionate about technology and continuous learning, I am excited to
            collaborate with professionals and take on new challenges in the
            tech industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
