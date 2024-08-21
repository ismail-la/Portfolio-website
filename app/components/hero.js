// hero.js
import React from "react";
import { motion, useInView } from "framer-motion";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero-blue">
        <div>
          <h1>
            <small>Hi I'm</small>
            Lahbari Ismail
          </h1>
          <p>
            Welcome to my portfolio! I am a Junior Software Engineer.{" "}
            <span>
              I craft innovative and responsive web solutions with expertise in
              front-end development, AI integration, and full architecture to
              deliver seamless and dynamic user experiences.
            </span>
          </p>
       

          <div className="call-to-action">
            <motion.a
              whileHover={{ scale: 1.1 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              href="./ISMAIL-LAHBARI-Resume.pdf"
            >
              <button>View Resume</button>
            </motion.a>
            <motion.a
              href="mailto:lahbariismail@gmail.com"
              whileHover={{ scale: 1.1 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              <button>Contact Me</button>
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
