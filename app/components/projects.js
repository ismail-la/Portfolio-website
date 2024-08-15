"use client";

import Image from "next/image";
import "./Projects.css";
import project1 from "../../public/imgs/project-1.png";
import project2 from "../../public/imgs/project-2.png";
import project3 from "../../public/imgs/project-3.png";
import project4 from "../../public/imgs/project-4.png";
import project5 from "../../public/imgs/project-5.png";
import project6 from "../../public/imgs/project-6.png";
import project7 from "../../public/imgs/project-7.png";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [clickedImage, setClickedImage] = useState(null);

  const handleImageClick = (index) => {
    setClickedImage(index);
  };

  return (
    <section id="projects" className="projects">
      <svg width="0" height="0">
        <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#3f5efb" offset="0%" />
          <stop stopColor="#fc466b" offset="100%" />
        </linearGradient>
      </svg>

      <h1 ref={ref}>Projects</h1>
      <div className="projects-container">
        {[
          project1,
          project2,
          project3,
          project4,
          project5,
          project6,
          project7,
        ].map((project, index) => (
          <div
            key={index}
            className="projects-image"
            style={{
              transform: isInView
                ? "none"
                : index % 2 === 0
                ? "translateX(-200px)"
                : "translateX(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            onClick={() => handleImageClick(index)}
          >
            <Image src={project} width={0} height={0} />
            <a href="#" target="_blank">
              <div className={`icon ${clickedImage === index ? "show" : ""}`}>
                <BsFillArrowUpRightCircleFill
                  size={100}
                  style={{ fill: "url(#gradient)" }}
                />
                <h3>Check out Project</h3>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
