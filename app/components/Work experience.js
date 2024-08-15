// Work experience.js
import React from "react";
import "./Work experience.css";

const WorkExperience = () => {
  return (
    <section id="work experience" className="work-experience container">
      <h2>Work Experience</h2>
      <div className="jobs">
        <article>
          <figure>
            <div>
              <img src="./imgs/workplace-4.jpg" alt="Workplace3" width="100%" />
              <figcaption>Workplace1</figcaption>
            </div>
          </figure>
          <h3>Freelance Full-stack software developer</h3>
          <div>2023-2024</div>
          <p>
            As a freelance full-stack web developer on Upwork, I leverage my
            expertise in front-end and back-end technologies to deliver robust
            and scalable web solutions for diverse clients worldwide. With a
            strong background in software engineering, I specialize in crafting
            custom web applications tailored to meet specific business needs and
            user requirements;
            <br /> ✔Lead the development and management of custom websites and
            web applications for clients across various industries, utilizing a
            range of platforms and technologies including WordPress, HTML5,
            CSS3, JavaScript, Python, React.js, and Vue.js, among others.
            <br /> ✔Spearhead end-to-end web development projects, from concept
            and design to implementation and maintenance, ensuring optimal
            functionality, usability, and responsiveness across various
            platforms.
            <br /> ✔Collaborate closely with clients to translate their vision
            into compelling digital experiences, incorporating best practices in
            user interface (UI) and user experience (UX) design to enhance
            engagement and usability.
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
            Secured data and networks to ensure safe and reliable operations.
            <br />- Implemented software solutions to optimize system
            performance.
            <br />- Provided technical support to resolve hardware and software
            issues.
            <br />- Trained users on new technologies and IT tools.
            <br />- Organized and managed data backups for system integrity.
            <br />- Responded quickly to system failures and identified faulty
            components.
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
              <img src="./imgs/workplace-3.jpg" alt="Workplace3" width="100%" />
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
            <br />- Intervene in the event of hardware and software malfunction.
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
  );
};

export default WorkExperience;
