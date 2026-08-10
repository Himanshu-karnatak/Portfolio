import { motion } from "framer-motion";
import portfolioImg from "../assets/nainwal-arts.png"; 
import tastybite from "../assets/tastybite.png"; 
import tastybite from "../assets/portfolio.png"; 

const projects = [
  {
    number: "01",
    type: "FEATURED PROJECT",
    title: "Nainwal Art's",
    description:
      "An interactive digital showcase platform highlighting creative arts and designs with a clean, responsive layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: portfolioImg, 
    live: "https://nainwal-arts.vercel.app/",
    github: "https://github.com/Himanshu-karnatak/Nainwal-arts",
  },
  {
    number: "02",
    type: "WEB APPLICATION",
    title: "Tasty-Bite",
    description:
      "A sleek, fully responsive restaurant website crafted with a modern UI to showcase menus and elevate user engagement.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: tastybite, 
    live: "https://tasty-bite-blush.vercel.app/",
    github: "https://github.com/Himanshu-karnatak/TastyBite",
  },
  {
    number: "03",
    type: "PORTFOLIO",
    title: "Personal Portfolio",
    description:
      "A modern developer portfolio designed to present skills, projects and experience through interactive interfaces.",
    tech: ["React", "Framer Motion", "CSS"],
    image: portfolio, 
    live: "https://himanshu-karnatak-portfolio.vercel.app/",
    github: "https://github.com/Himanshu-karnatak/Portfolio",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">

      {/* HEADER SECTION */}

      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-label">
          SELECTED WORK
        </span>

        <h2>
          Projects that
          <span> speak for me.</span>
        </h2>

        <p>
          A collection of projects where design,
          development and problem-solving come together.
        </p>
      </motion.div>


      {/* PROJECTS GRID */}

      <div className="projects-grid">

        {projects.map((project, index) => (
          <motion.article
            className={`project-card ${
              index === 0 ? "featured-project" : ""
            }`}
            key={project.number}
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.12,
            }}
          >

            {/* PROJECT VISUAL CONTAINER */}

            <div className="project-visual">

              <span className="project-number">
                {project.number}
              </span>

              <span className="project-type">
                {project.type}
              </span>

              {/* Conditional rendering: Shows image if available, otherwise shows code placeholder */}
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />
              ) : (
                <div className="project-placeholder">
                  <span>&lt;/&gt;</span>
                </div>
              )}

              <div className="project-glow"></div>

            </div>


            {/* PROJECT INFORMATION */}

            <div className="project-info">

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>


              {/* TECH STACK LIST */}

              <div className="project-tech">

                {project.tech.map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}

              </div>


              {/* EXTERNAL LINKS */}

              <div className="project-links">

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  LIVE PROJECT
                  <span>↗</span>
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GITHUB
                  <span>↗</span>
                </a>

              </div>

            </div>

          </motion.article>
        ))}

      </div>

    </section>
  );
}

export default Projects;