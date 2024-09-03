import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import "./Work experience.css";

const WorkExperience = ({ itemsPerPage = 3 }) => {
  const { language } = useLanguage(); // Use the useLanguage hook to get the current language
  const [currentPage, setCurrentPage] = useState(0);
  const [expanded, setExpanded] = useState({});

  const Workplaces = [
    {
      id: 1,
      imgSrc: "./imgs/workplace-1.png",
      imgAlt: "Workplace1",
      figcaption: "Workplace1",
      title: {
        en: "Freelance Full-stack software developer",
        fr: "Développeur logiciel Full-stack freelance",
      },
      date: "2023-2024",
      description: {
        en: `
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
        fr: `
          ✔ Fournit des solutions de développement web de bout en bout sur des plateformes comme Upwork.
          <br /> ✔ Spécialisé dans les applications web personnalisées, en s'appuyant sur une solide expérience en ingénierie logicielle.
          <br /> ✔ Expertise clé comprend :
          <br /> - Développement Full-stack (front-end : HTML, CSS, JavaScript, React, Next.js ; back-end : Node.js, Express.js, Django, Flask).
          <br /> - Conception web réactive et optimisée pour le référencement utilisant HTML5, CSS3 et JavaScript.
          <br /> - Conception et prototypage UI/UX avec Figma.
          <br /> - Développement de solutions personnalisées.
          <br /> - Gestion de bases de données et informatique en nuage.
          <br /> - Mise en œuvre CI/CD.
          <br /> - Intégration AI/API.
          <br /> - Optimisation des performances et SEO.
          <br /> - Gestion de projet du concept au déploiement.
        `,
      },
    },
    {
      id: 2,
      imgSrc: "./imgs/workplace-2.png",
      imgAlt: "Workplace2",
      figcaption: "Workplace2",
      title: {
        en: "Software Engineer Intern",
        fr: "Stagiaire Ingénieur Logiciel",
      },
      date: "2023-2024",
      description: {
        en: `
          As a Software Engineer Intern at the ALX Software Engineering Program, developed in partnership with Holberton School, I completed an intensive 12-month program focused on full-stack development and software engineering principles. This hands-on experience provided me with a comprehensive foundation in both front-end and back-end technologies, enabling me to build scalable software solutions.
          <br /> - Key Contributions:
          <br /> - Project Development: Developed and deployed multiple projects using languages and frameworks such as C, HTML, CSS, JavaScript, Next.js, Node.js, Vue.js, Express.js, React.js, Django, Flask, and the MERN Stack, addressing real-world challenges.
          <br /> - Technical Proficiency: Gained expertise in programming languages like Python and C, with a focus on frameworks including Next.js, Express.js, and React.js. Worked with SQL and NoSQL databases such as MySQL, PostgreSQL, and MongoDB.
          <br /> - Industry Practices: Applied industry best practices in project management, communication, and version control using Git and GitHub. Practiced DevOps methodologies, including CI/CD pipelines and Shell Scripting.
          <br /> - Problem-Solving: Enhanced problem-solving abilities through advanced studies in Data Structures and Algorithms, Object-Oriented Programming (OOP), and Debugging techniques.
          <br /> - Community Engagement: Actively participated in a vibrant tech community, networking with professionals and staying informed about emerging technologies.
        `,
        fr: `
          En tant que stagiaire ingénieur logiciel au programme d'ingénierie logicielle ALX, développé en partenariat avec l'école Holberton, j'ai suivi un programme intensif de 12 mois axé sur le développement full-stack et les principes de l'ingénierie logicielle. Cette expérience pratique m'a fourni une base complète en technologies front-end et back-end, me permettant de créer des solutions logicielles évolutives.
          <br /> - Contributions clés :
          <br /> - Développement de projets : Développement et déploiement de plusieurs projets utilisant des langages et des frameworks tels que C, HTML, CSS, JavaScript, Next.js, Node.js, Vue.js, Express.js, React.js, Django, Flask et le MERN Stack, répondant à des défis réels.
          <br /> - Compétence technique : Acquisition d'une expertise en langages de programmation comme Python et C, avec un accent sur les frameworks incluant Next.js, Express.js et React.js. Travail avec des bases de données SQL et NoSQL telles que MySQL, PostgreSQL et MongoDB.
          <br /> - Pratiques industrielles : Application des meilleures pratiques de l'industrie en gestion de projet, communication et contrôle de version utilisant Git et GitHub. Pratique des méthodologies DevOps, y compris les pipelines CI/CD et le scripting Shell.
          <br /> - Résolution de problèmes : Amélioration des capacités de résolution de problèmes grâce à des études avancées en structures de données et algorithmes, programmation orientée objet (OOP) et techniques de débogage.
          <br /> - Engagement communautaire : Participation active à une communauté technologique dynamique, réseautage avec des professionnels et maintien à jour sur les technologies émergentes.
        `,
      },
    },
    {
      id: 3,
      imgSrc: "./imgs/workplace-3.png",
      imgAlt: "Workplace3",
      figcaption: "Workplace3",
      title: {
        en: "IT Engineer",
        fr: "Ingénieur IT",
      },
      date: "2022-2023",
      description: {
        en: `
          - Installed, configured, and maintained servers, networks, and storage systems.
          <br /> - Provided technical support and training, managed data backups, and performed system diagnostics.
          <br /> - Ensured data security and operational monitoring.
          <br /> - Responded swiftly to breakdowns (e.g., black screens, lost files, viruses).
          <br /> - Diagnosed failures, replaced defective components (e.g., hard drives, graphics cards), and conducted control tests.
          <br /> - Proactively anticipated issues and proposed improvement solutions.
        `,
        fr: `
          - Installation, configuration et maintenance des serveurs, réseaux et systèmes de stockage.
          <br /> - Fourniture de support technique et de formation, gestion des sauvegardes de données et réalisation de diagnostics système.
          <br /> - Garantie de la sécurité des données et surveillance opérationnelle.
          <br /> - Réponse rapide aux pannes (par exemple, écrans noirs, fichiers perdus, virus).
          <br /> - Diagnostic des pannes, remplacement des composants défectueux (par exemple, disques durs, cartes graphiques) et réalisation de tests de contrôle.
          <br /> - Anticipation proactive des problèmes et proposition de solutions d'amélioration.
        `,
      },
    },
    {
      id: 4,
      imgSrc: "./imgs/workplace-4.png",
      imgAlt: "Workplace4",
      figcaption: "Workplace4",
      title: {
        en: "Senior IT Technician",
        fr: "Technicien IT Senior",
      },
      date: "2023-2024",
      description: {
        en: `
          - Connect and install hardware, peripherals and devices.
          <br /> - Install and update software.
          <br /> - Provide technical support (by phone, remotely or on-site).
          <br /> - Monitor IT system performance.
          <br /> - Intervene in the event of hardware and software malfunction.
          <br /> - Diagnose the interventions necessary to optimize the IT infrastructure.
          <br /> - Plan a schedule of maintenance interventions.
          <br /> - Manage data backups and security.
        `,
        fr: `
          - Connexion et installation de matériel, périphériques et dispositifs.
          <br /> - Installation et mise à jour de logiciels.
          <br /> - Fourniture de support technique (par téléphone, à distance ou sur site).
          <br /> - Surveillance des performances du système informatique.
          <br /> - Intervention en cas de dysfonctionnement matériel et logiciel.
          <br /> - Diagnostic des interventions nécessaires pour optimiser l'infrastructure informatique.
          <br /> - Planification d'un calendrier d'interventions de maintenance.
          <br /> - Gestion des sauvegardes et de la sécurité des données.
        `,
      },
    },
    {
      id: 5,
      imgSrc: "./imgs/workplace-5.png",
      imgAlt: "Workplace5",
      figcaption: "Workplace5",
      title: {
        en: "IT Infrastructure Engineer",
        fr: "Ingénieur en infrastructure informatique",
      },
      date: "2017-2018",
      description: {
        en: `
          - During my internship, I optimized and enhanced OCP Group's IT infrastructure by:
          <br /> - Conducting a comprehensive assessment of the existing infrastructure.
          <br /> - Implementing performance optimizations, including load balancing and hardware upgrades.
          <br /> - Enhancing security measures, in collaboration with the IT security team.
          <br /> - Assisting in virtualization deployment and cloud integration.
          <br /> - Developing disaster recovery plans.
          <br /> - Documenting improvements and training the IT team.
          <br /> Outcome: The project improved infrastructure performance, reliability, and scalability, reducing operational costs and supporting the company's growth.
        `,
        fr: `
          - Au cours de mon stage, j'ai optimisé et amélioré l'infrastructure informatique du Groupe OCP en :
        <br /> - Réalisant une évaluation complète de l'infrastructure existante.
        <br /> - Implémentant des optimisations de performances, notamment l'équilibrage de charge et les mises à niveau matérielles.
        <br /> - Renforçant les mesures de sécurité, en collaboration avec l'équipe de sécurité informatique.
        <br /> - Assistant au déploiement de la virtualisation et à l'intégration du cloud.
        <br /> - Élaborant des plans de reprise après sinistre.
        <br /> - Documentant les améliorations et formant l'équipe informatique.
        <br Résultat : Le projet a amélioré les performances, la fiabilité et l'évolutivité de l'infrastructure, réduisant ainsi les coûts opérationnels et soutenant la croissance de l'entreprise.
        `,
      },
    },
    {
      id: 6,
      imgSrc: "./imgs/workplace-6.png",
      imgAlt: "Workplace6",
      figcaption: "Workplace6",
      title: {
        en: "Automation Engineer",
        fr: "Ingénieur en automatisation",
      },
      date: "2015-2016",
      description: {
        en: `
          - During my internship, I led the modernization of automation and supervision systems for a key fertilizer and phosphate handling unit using Siemens S7-300 PLCs and Simatic Step7.
          <br /> - Developed and optimized PLC programs to improve process efficiency and reliability.
          <br /> - Integrated new automation solutions with existing systems, ensuring minimal downtime.
          <br /> - Upgraded supervision systems for real-time monitoring and control.
          <br /> - Collaborated with cross-functional teams to meet technical and safety standards.
          <br /> - Conducted thorough testing and validation for a smooth transition to the new setup.
          <br /> Outcome: This project deepened my expertise in industrial automation, control systems, and project management.
        `,
        fr: `
         - Au cours de mon stage, j'ai dirigé la modernisation des systèmes d'automatisation et de supervision d'une unité clé de manutention d'engrais et de phosphates en utilisant des automates Siemens S7-300 et Simatic Step7.
        <br /> - Développé et optimisé des programmes PLC pour améliorer l'efficacité et la fiabilité des processus.
        <br /> - Intégré de nouvelles solutions d'automatisation aux systèmes existants, garantissant des temps d'arrêt minimes.
        <br /> - Systèmes de supervision mis à niveau pour une surveillance et un contrôle en temps réel.
        <br /> - Collaboré avec des équipes interfonctionnelles pour respecter les normes techniques et de sécurité.
        <br /> - Réalisé des tests et une validation approfondis pour une transition en douceur vers la nouvelle configuration.
        <br /> Résultat : Ce projet a approfondi mon expertise en automatisation industrielle, systèmes de contrôle et gestion de projet.
        `,
      },
    },
    // Add more workplace items here if needed
  ];

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = Workplaces.slice(startIndex, endIndex);

  const toggleReadMore = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentPage((prev) =>
      Math.min(prev + 1, Math.ceil(Workplaces.length / itemsPerPage) - 1)
    );
  };

  return (
    <section id="work experience" className="work-experience container">
      <h2>
        {language === "en" ? "Work Experience" : "Expérience Professionnelle"}
      </h2>
      <div className="jobs">
        {currentItems.map((workplace) => (
          <article
            key={workplace.id}
            className={expanded[workplace.id] ? "expanded" : ""}
          >
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
            <h3>{workplace.title[language]}</h3>
            <div>{workplace.date}</div>
            <p
              className={expanded[workplace.id] ? "expanded" : ""}
              dangerouslySetInnerHTML={{
                __html: workplace.description[language],
              }}
            />
            <span
              className="read-more"
              onClick={() => toggleReadMore(workplace.id)}
            >
              {expanded[workplace.id]
                ? language === "en"
                  ? "Read Less"
                  : "Lire Moins"
                : language === "en"
                ? "Read More"
                : "Lire Plus"}
            </span>
          </article>
        ))}
      </div>
      <div className="navigation-buttons">
        <button onClick={handlePrevious} disabled={currentPage === 0}>
          {language === "en" ? "Previous" : "Précédent"}
        </button>
        <button
          onClick={handleNext}
          disabled={
            currentPage >= Math.ceil(Workplaces.length / itemsPerPage) - 1
          }
        >
          {language === "en" ? "Next" : "Suivant"}
        </button>
      </div>
    </section>
  );
};

export default WorkExperience;
