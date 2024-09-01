// Projects.js
import React, { useState, useRef } from "react";
import { useInView } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import Image from "next/image";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import "./Projects.css";
import project1 from "../../public/imgs/project-1.png";
import project2 from "../../public/imgs/project-2.png";
import project3 from "../../public/imgs/project-3.png";
import project4 from "../../public/imgs/project-4.png";
import project5 from "../../public/imgs/project-5.png";
import project6 from "../../public/imgs/project-6.png";
import project7 from "../../public/imgs/project-7.png";
import project8 from "../../public/imgs/project-8.png";

const projectsData = [
  {
    src: project1,
    link: "https://lahbari-ismail.vercel.app/",
    title: {
      en: "Responsive Portfolio Website",
      fr: "Site Web de Portfolio Réactif",
    },
  },
  {
    src: project2,
    link: "https://github.com/ismail-la/AirBnB_clone_v4",
    title: { en: "AirBnB Clone", fr: "Clone d'AirBnB" },
  },
  {
    src: project3,
    link: "https://github.com/ismail-la/E-commerce-MVP",
    title: {
      en: "E-commerce Website",
      fr: "Site Web de Commerce Électronique",
    },
  },
  {
    src: project4,
    link: "",
    title: { en: "Chat application", fr: "Application de Chat" },
  },
  {
    src: project5,
    link: "",
    title: { en: "Work-out tracker", fr: "Suivi d'Entraînement" },
  },
  {
    src: project6,
    link: "",
    title: {
      en: "Food delivery app",
      fr: "Application de Livraison de Nourriture",
    },
  },
  {
    src: project7,
    link: "",
    title: {
      en: "ToDo list application",
      fr: "Application de Liste de Tâches",
    },
  },
  {
    src: project8,
    link: "",
    title: {
      en: "JavaScript music player",
      fr: "Lecteur de Musique JavaScript",
    },
  },
];

const ProjectItem = ({
  src,
  link,
  isInView,
  index,
  handleTap,
  isSelected,
  title,
}) => {
  const { language } = useLanguage();

  return (
    <div
      className="projects-image"
      style={{
        transform: isInView
          ? "none"
          : `translateX(${index % 2 === 0 ? "-200px" : "200px"})`,
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      onClick={() => handleTap(index)}
    >
      <Image src={src} width={0} height={0} />
      <div className={`icon ${isSelected ? "show" : ""}`}>
        <BsFillArrowUpRightCircleFill
          size={100}
          style={{ fill: "url(#gradient)" }}
        />
        <h3>{language === "en" ? "Check out Project" : "Voir le Projet"}</h3>
        <h4>{title[language]}</h4>{" "}
        {/* Display project title based on language */}
      </div>
    </div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedProject, setSelectedProject] = useState(null);
  const { language } = useLanguage(); // Use useLanguage hook to get language

  const handleTap = (index) => {
    if (isMobileOrTablet()) {
      if (selectedProject === index) {
        window.open(projectsData[index].link, "_blank");
      } else {
        setSelectedProject(index);
      }
    } else {
      window.open(projectsData[index].link, "_blank");
    }
  };

  const isMobileOrTablet = () => {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  };

  return (
    <section id="projects" className="projects">
      <svg width="0" height="0">
        <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#3f5efb" offset="0%" />
          <stop stopColor="#fc466b" offset="100%" />
        </linearGradient>
      </svg>

      <h1 ref={ref}>{language === "en" ? "Projects" : "Projets"}</h1>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <ProjectItem
            key={index}
            {...project}
            isInView={isInView}
            index={index}
            handleTap={handleTap}
            isSelected={selectedProject === index}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
