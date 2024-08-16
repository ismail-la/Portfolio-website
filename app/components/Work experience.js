import React, { useState } from "react";
import "./Work experience.css";

const WorkExperience = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const [expanded, setExpanded] = useState({});

  const workplaces = [
    {
      imgSrc: "./imgs/workplace-4.jpg",
      imgAlt: "Workplace1",
      figcaption: "Workplace1",
      title: "Freelance Full-stack software developer",
      date: "2023-2024",
      description: `
        ✔ Provides end-to-end web development solutions on platforms like Upwork.
        <br /> ✔ Specializes in custom web applications, leveraging a strong software engineering background.
        <br /> ✔ Key expertise includes:
        <br /> - Full-stack development (front-end: HTML, CSS, JavaScript, React, Next.js; back-end: Node.js, Express.js, Django, Flask).
        <br /> - Responsive, SEO-optimized web design using HTML5, CSS3, and JavaScript.
        <br /> - UI/UX design and prototyping with Figma.
        <br /> - Custom solution development.
        <br /> - Database management and cloud computing.
        <br /> - CI/CD implementation.
        <br /> - AI/API integration.
        <br /> - Performance optimization and SEO.
        <br /> - Project management from concept to deployment.
      `,
    },
    {
      imgSrc: "./imgs/workplace-2.jpeg",
      imgAlt: "Workplace2",
      figcaption: "Workplace2",
      title: "Software Engineer Intern",
      date: "2023-2024",
      description: `
      As a Software Engineer Intern at the ALX Software Engineering Program, developed in partnership with Holberton School, I completed an intensive 12-month program focused on full-stack development and software engineering principles. This hands-on experience provided me with a comprehensive foundation in both front-end and back-end technologies, enabling me to build scalable software solutions.

        - Key Contributions:
        <br />- Project Development: Developed and deployed multiple projects using languages and frameworks such as C, HTML, CSS, JavaScript, Next.js, Node.js, Vue.js, Express.js, React.js, Django, Flask, and the MERN Stack, addressing real-world challenges.
        <br />- Technical Proficiency: Gained expertise in programming languages like Python and C, with a focus on frameworks including Next.js, Express.js, and React.js. Worked with SQL and NoSQL databases such as MySQL, PostgreSQL, and MongoDB.
        <br />- Industry Practices: Applied industry best practices in project management, communication, and version control using Git and GitHub. Practiced DevOps methodologies, including CI/CD pipelines and Shell Scripting.
        <br />- Problem-Solving: Enhanced problem-solving abilities through advanced studies in Data Structures and Algorithms, Object-Oriented Programming (OOP), and Debugging techniques.
        <br />- Community Engagement: Actively participated in a vibrant tech community, networking with professionals and staying informed about emerging technologies.
      `,
    },
    {
      imgSrc: "./imgs/ismail face work.png",
      imgAlt: "Workplace3",
      figcaption: "Workplace3",
      title: "IT Engineer",
      date: "2022-2023",
      description: `
        - Installed, configured, and maintained servers, networks, and storage systems.
        <br />- Provided technical support and training, managed data backups, and performed system diagnostics.
        <br />- Ensured data security and operational monitoring.
        <br />- Responded swiftly to breakdowns (e.g., black screens, lost files, viruses).
        <br />- Diagnosed failures, replaced defective components (e.g., hard drives, graphics cards), and conducted control tests.
        <br />- Proactively anticipated issues and proposed improvement solutions.
      `,
    },
    {
      imgSrc: "./imgs/workplace-3.jpg",
      imgAlt: "Workplace4",
      figcaption: "Workplace4",
      title: "Senior IT Technician",
      date: "2023-2024",
      description: `
        - Connect and install hardware, peripherals and devices.
        <br />- Install and update software.
        <br />- Provide technical support (by phone, remotely or on-site).
        <br />- Monitor IT system performance.
        <br />- Intervene in the event of hardware and software malfunction.
        <br />- Diagnose the interventions necessary to optimize the IT infrastructure.
        <br />- Plan a schedule of maintenance interventions.
        <br />- Manage data backups and security.
      `,
    },
    // Add more workplace items here if needed
  ];

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(workplaces.length / itemsPerPage) - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const toggleReadMore = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = workplaces.slice(startIndex, endIndex);

  return (
    <section id="work experience" className="work-experience container">
      <h2>Work Experience</h2>
      <div className="jobs">
        {currentItems.map((workplace, index) => (
          <article key={index}>
            <figure>
              <div>
                <img
                  src={workplace.imgSrc}
                  alt={workplace.imgAlt}
                  width="100%"
                />
                <figcaption>{workplace.figcaption}</figcaption>
              </div>
            </figure>
            <h3>{workplace.title}</h3>
            <div>{workplace.date}</div>
            <p
              className={expanded[index] ? "expanded" : ""}
              dangerouslySetInnerHTML={{ __html: workplace.description }}
            />
            <span className="read-more" onClick={() => toggleReadMore(index)}>
              {expanded[index] ? "Read Less" : "Read More"}
            </span>
          </article>
        ))}
      </div>
      <div className="navigation-buttons">
        <button onClick={handlePrevious} disabled={currentPage === 0}>
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={
            currentPage >= Math.ceil(workplaces.length / itemsPerPage) - 1
          }
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default WorkExperience;
