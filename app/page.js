"use client";
import React, { useState, useEffect, useRef } from "react";
import Chatbot from "./components/Chatbot";
import "./globals.css";
import { FaSun, FaMoon } from "react-icons/fa"; // Import icons
import axios from "axios";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "How can I help you learn more about Adrian and his Resume?",
    },
  ]);
  // dark mod
  const [darkMode, setDarkMode] = useState(false); // Add dark mode state

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode"); // Toggle dark mode class on body element
  };

  const submitForm = async (e) => {
    e.preventDefault();
    let newMessages = [...messages, { role: "user", content: messageInput }];
    setMessages(newMessages);
    setMessageInput("");
  };

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleInputChange = (e) => {
    setMessageInput(e.target.value);
  };

  return (
    <>
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
              <a href="#Projects">Projects</a>
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
      <main>
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
                  I craft innovative and responsive web solutions with expertise
                  in front-end development, AI integration, and full
                  architecture to deliver seamless and dynamic user experiences.
                </span>
              </p>
              <div className="call-to-action">
                <a href="./ISMAIL-LAHBARI-Resume.pdf" className="button black">
                  View Resume
                </a>
                <a
                  href="mailto:lahbariismail@gmail.com"
                  className="button white"
                >
                  Contact Me
                </a>
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
            <img
              src="./imgs/ismail face pc.png"
              alt="Ismail's Face"
              width="100%"
            />
          </div>
        </section>
        <section className="logos container">
          <div className="marquee">
            <div className="track">
              <img src="./imgs/html.png" alt="HTML" width="128" />
              <img src="./imgs/css.png" alt="CSS" width="128" />
              <img src="./imgs/javascript.png" alt="JS" width="128" />
              <img src="./imgs/react.png" alt="REACT" width="128" />
              <img src="./imgs/nextjs.png" alt="NEXT.JS" width="128" />
              <img src="./imgs/python.png" alt="PYTHON" width="128" />
              <img src="./imgs/sass.png" alt="SASS" width="128" />
              <img src="./imgs/mysql.png" alt="MYSQL" width="128" />
              <img src="./imgs/django.png" alt="DJANGO" width="128" />
              <img src="./imgs/flask.png" alt="FLASK" width="128" />
              <img src="./imgs/figma.png" alt="FIGMA" width="128" />
              <img src="./imgs/wordpress.png" alt="WORDPRESS" width="128" />
              <img src="./imgs/linux.png" alt="LINUX" width="128" />
              <img src="./imgs/nginx.png" alt="NGINX" width="128" />
              <img src="./imgs/vscode.png" alt="VSCODE" width="128" />
              <img src="./imgs/azure.png" alt="AZURE" width="128" />
            </div>
          </div>
        </section>
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
                Hi I'm Ismail I am a Software Engineer and Freelance Full-Stack
                Web Developer with a strong focus on DevOps, generative AI, and
                UX/UI design. I specialize in creating high-performance,
                innovative software solutions and visually appealing,
                user-friendly websites. Passionate about technology and
                continuous learning, I am excited to collaborate with
                professionals and take on new challenges in the tech industry.
              </p>
            </div>
          </div>
        </section>
        <section id="work experience" className="work-experience container">
          <h2>Work Experience</h2>
          <div className="jobs">
            <article>
              <figure>
                <div>
                  <img
                    src="./imgs/workplace-4.jpg"
                    alt="Workplace3"
                    width="100%"
                  />
                  <figcaption>Workplace1</figcaption>
                </div>
              </figure>
              <h3>Freelance Full-stack software developer</h3>
              <div>2023-2024</div>
              <p>
                As a freelance full-stack web developer on Upwork, I leverage my
                expertise in front-end and back-end technologies to deliver
                robust and scalable web solutions for diverse clients worldwide.
                With a strong background in software engineering, I specialize
                in crafting custom web applications tailored to meet specific
                business needs and user requirements;
                <br /> ✔Lead the development and management of custom websites
                and web applications for clients across various industries,
                utilizing a range of platforms and technologies including
                WordPress, HTML5, CSS3, JavaScript, Python, React.js, and
                Vue.js, among others.
                <br /> ✔Spearhead end-to-end web development projects, from
                concept and design to implementation and maintenance, ensuring
                optimal functionality, usability, and responsiveness across
                various platforms.
                <br /> ✔Collaborate closely with clients to translate their
                vision into compelling digital experiences, incorporating best
                practices in user interface (UI) and user experience (UX) design
                to enhance engagement and usability.
              </p>
            </article>
            <article>
              <figure>
                <div>
                  <img
                    src="./imgs/ismail face work.png"
                    alt="Workplace2"
                    width="100%"
                  />
                  <figcaption>Workplace2</figcaption>
                </div>
              </figure>
              <h3>IT Engineer</h3>
              <div>2023-2024</div>
              <p>
                - Specialized in installation, configuration, and maintenance of
                servers, networks, and storage systems.
                <br />
                Secured data and networks to ensure safe and reliable
                operations.
                <br />- Implemented software solutions to optimize system
                performance.
                <br />- Provided technical support to resolve hardware and
                software issues.
                <br />- Trained users on new technologies and IT tools.
                <br />- Organized and managed data backups for system integrity.
                <br />- Responded quickly to system failures and identified
                faulty components.
                <br />- Conducted control tests to ensure proper functionality.
                <br />- Monitored systems continuously to anticipate and prevent
                issues.
                <br />- Proposed solutions to enhance performance and system
                reliability.
              </p>
            </article>
            <article>
              <figure>
                <div>
                  <img
                    src="./imgs/workplace-3.jpg"
                    alt="Workplace3"
                    width="100%"
                  />
                  <figcaption>Workplace3</figcaption>
                </div>
              </figure>
              <h3>Senior IT Technician</h3>
              <div>2023-2024</div>
              <p>
                - Connect and install hardware, peripherals and devices.
                <br />- Install and update computer software and programs.
                <br />- Inform users about new installed programs and devices.
                <br />- Monitor the proper functioning of IT systems.
                <br />- Intervene in the event of hardware and software
                malfunction.
                <br />- Provide rapid technical support (by phone, remotely or
                on-site).
                <br />- Diagnose the interventions necessary to optimize the IT
                infrastructure.
                <br />- Plan a schedule of maintenance interventions.
                <br />- Manage data backup systems.
                <br />- Ensuring the security of computer data.
              </p>
            </article>
          </div>
        </section>
        <section id="Projects" className="project container">
          <h2>Projects</h2>
          <div className="project-grid">
            <div className="project-item">
              <img
                src="./imgs/project-1.jpg"
                alt="E-Commerce Website"
                width="100%"
              />
              <div className="button-container">
                <button
                  onClick={() =>
                    (window.location.href =
                      "https://github.com/ismail-la/E-commerce-MVP")
                  }
                >
                  Source Code
                </button>
                <button
                  onClick={() =>
                    (window.location.href = "https://ecommerce-demo-link.com")
                  }
                >
                  Demo
                </button>
              </div>
              <div className="project-name">E-Commerce Website with Djando</div>
            </div>
            <div className="project-item">
              <img
                src="./imgs/project-2.jpg"
                alt="ToDo list using ReactJS Application"
                width="100%"
              />
              <div className="button-container">
                <button
                  onClick={() =>
                    (window.location.href =
                      "https://github.com/ismail-la/ToDo-ReactJS")
                  }
                >
                  Source Code
                </button>
                <button
                  onClick={() =>
                    (window.location.href = "https://todo-demo-link.com")
                  }
                >
                  Demo
                </button>
              </div>
              <div className="project-name">
                ToDo list using ReactJS Application
              </div>
            </div>
            <div className="project-item">
              <img
                src="./imgs/project-6.jpg"
                alt="Food Delivery App"
                width="100%"
              />
              <div className="button-container">
                <button
                  onClick={() =>
                    (window.location.href =
                      "https://github.com/ismail-la/Food-Delivery-App")
                  }
                >
                  Source Code
                </button>
                <button
                  onClick={() =>
                    (window.location.href =
                      "https://food-delivery-demo-link.com")
                  }
                >
                  Demo
                </button>
              </div>
              <div className="project-name">Food Delivery App</div>
            </div>
            <div className="project-item">
              <img
                src="./imgs/project-4.jpg"
                alt="Chat Application and Website"
                width="100%"
              />
              <div className="button-container">
                <button
                  onClick={() =>
                    (window.location.href =
                      "https://github.com/ismail-la/Chat-App")
                  }
                >
                  Source Code
                </button>
                <button
                  onClick={() =>
                    (window.location.href = "https://chat-app-demo-link.com")
                  }
                >
                  Demo
                </button>
              </div>
              <div className="project-name">Chat Application and Website</div>
            </div>
            <div className="project-item">
              <img
                src="./imgs/project-5.jpg"
                alt="Work-Out Tracker "
                width="100%"
              />
              <div className="button-container">
                <button
                  onClick={() =>
                    (window.location.href =
                      "https://github.com/ismail-la/Workout-Tracker")
                  }
                >
                  Source Code
                </button>
                <button
                  onClick={() =>
                    (window.location.href =
                      "https://workout-tracker-demo-link.com")
                  }
                >
                  Demo
                </button>
              </div>
              <div className="project-name">Work-Out Tracker</div>
            </div>
            <div className="project-item">
              <img
                src="./imgs/project-3.jpg"
                alt="JavaScript Music Player"
                width="100%"
              />
              <div className="button-container">
                <button
                  onClick={() =>
                    (window.location.href =
                      "https://github.com/ismail-la/JS-Music-Player")
                  }
                >
                  Source Code
                </button>
                <button
                  onClick={() =>
                    (window.location.href =
                      "https://music-player-demo-link.com")
                  }
                >
                  Demo
                </button>
              </div>
              <div className="project-name">JavaScript Music Player</div>
            </div>
            <div className="project-item">
              <img src="./imgs/project-7.jpg" alt="AirBnB Clone" width="100%" />
              <div className="button-container">
                <button
                  onClick={() =>
                    (window.location.href =
                      "https://github.com/ismail-la/AirBnB_clone")
                  }
                >
                  Source Code
                </button>
                <button
                  onClick={() =>
                    (window.location.href =
                      "https://airbnb-clone-demo-link.com")
                  }
                >
                  Demo
                </button>
              </div>
              <div className="project-name">AirBnB Clone</div>
            </div>
          </div>
        </section>{" "}
        <section id="Chatbot" className="Chatbot-container">
          <div className="Chatbot">
            <Chatbot />
          </div>
        </section>
        <footer>
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
                <a
                  className="social-icon__link"
                  href="https://github.com/ismail-la"
                >
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
                <a className="menu__link" href="#Projects">
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
          <script
            type="module"
            src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
          ></script>
          <script
            noModule
            src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
          ></script>
        </footer>
      </main>
    </>
  );
}
