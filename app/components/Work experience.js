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
            ✔ Provides end-to-end web development solutions on platforms like
            Upwork.
            <br /> ✔ Specializes in custom web applications, leveraging a strong
            software engineering background.
            <br /> ✔ Key expertise includes:
            <br /> - Full-stack development (front-end: HTML, CSS, JavaScript,
            React, Next.js; back-end: Node.js, Express.js, Django, Flask).
            <br /> - Responsive, SEO-optimized web design using HTML5, CSS3, and
            JavaScript.
            <br /> - UI/UX design and prototyping with Figma.
            <br /> - Custom solution development.
            <br /> - Database management and cloud computing.
            <br /> - CI/CD implementation.
            <br /> - AI/API integration.
            <br /> - Performance optimization and SEO.
            <br /> - Project management from concept to deployment.
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
            - Installed, configured, and maintained servers, networks, and
            storage systems.
            <br />- Provided technical support and training, managed data
            backups, and performed system diagnostics.
            <br />- Ensured data security and operational monitoring.
            <br />- Responded swiftly to breakdowns (e.g., black screens, lost
            files, viruses).
            <br />- Diagnosed failures, replaced defective components (e.g.,
            hard drives, graphics cards), and conducted control tests.
            <br />- Proactively anticipated issues and proposed improvement
            solutions.
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
            <br />- Install and update software.
            <br />- Provide technical support (by phone, remotely or on-site).
            <br />- Monitor IT system performance.
            <br />- Intervene in the event of hardware and software malfunction.
            <br />- Diagnose the interventions necessary to optimize the IT
            infrastructure.
            <br />- Diagnose the interventions necessary to optimize the IT
            infrastructure.
            <br />- Plan a schedule of maintenance interventions
            <br />- Manage data backups and security.
          </p>
        </article>
      </div>
    </section>
  );
};

export default WorkExperience;
