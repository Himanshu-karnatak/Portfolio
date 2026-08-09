import { motion } from "framer-motion";

function About() {
  const skills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Responsive UI",
    "UI/UX",
  ];

  return (
    <section className="about" id="about">

      {/* BACKGROUND DETAILS */}
      <div className="about-orb about-orb-one"></div>
      <div className="about-orb about-orb-two"></div>

      {/* =========================
          DESKTOP / TABLET
      ========================== */}

      <div className="about-desktop">

        <motion.div
          className="about-top"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span>ABOUT / 01</span>
          <div></div>
          <span>WHO I AM</span>
        </motion.div>


        <div className="about-desktop-grid">

          {/* LEFT */}

          <motion.div
            className="about-main-copy"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <p className="about-kicker">
              CREATIVE FRONTEND DEVELOPER
            </p>

            <h2>
              I BUILD
              <br />
              <span>DIGITAL</span>
              <br />
              EXPERIENCES.
            </h2>

            <p className="about-description">
              I love turning ideas into clean, interactive and
              meaningful digital experiences. My focus is on
              creating interfaces that look great, feel smooth
              and work beautifully across every screen.
            </p>

            <button
              className="about-work-btn"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              <span>VIEW MY WORK</span>
              <b>↗</b>
            </button>

          </motion.div>


          {/* CENTER VISUAL */}

          <motion.div
            className="about-visual"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >

            <div className="visual-ring visual-ring-one"></div>
            <div className="visual-ring visual-ring-two"></div>

            <div className="visual-core">

              <span className="visual-small">
                CODE
              </span>

              <strong>
                {"</>"}
              </strong>

              <span className="visual-small">
                CREATE
              </span>

            </div>

            <div className="visual-dot dot-one"></div>
            <div className="visual-dot dot-two"></div>
            <div className="visual-dot dot-three"></div>

          </motion.div>


          {/* RIGHT */}

          <motion.div
            className="about-side"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <div className="about-side-header">
              <span>01</span>
              <p>PROFILE</p>
            </div>

            <p className="side-text">
              A developer focused on frontend development,
              modern interfaces and thoughtful user
              experiences.
            </p>


            {/* STATS */}

            <div className="about-stats">

              <div className="about-stat">
                <strong>
                  01<span>+</span>
                </strong>
                <small>YEARS LEARNING</small>
              </div>

              <div className="about-stat">
                <strong>
                  3<span>+</span>
                </strong>
                <small>PROJECTS</small>
              </div>

              <div className="about-stat">
                <strong>
                  05<span>+</span>
                </strong>
                <small>TECHNOLOGIES</small>
              </div>

            </div>


            {/* SKILLS */}

            <div className="skills-block">

              <div className="skills-title">
                <span>TOOLS I USE</span>
                <i></i>
              </div>

              <div className="skills-list">

                {skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}

              </div>

            </div>

          </motion.div>

        </div>

      </div>


      {/* =========================
          MOBILE
      ========================== */}

      <div className="about-mobile">

        <motion.div
          className="mobile-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <span>ABOUT / 01</span>

          <h2>
            ABOUT
            <em>ME.</em>
          </h2>

        </motion.div>


        <motion.div
          className="mobile-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <div className="mobile-ring"></div>

          <div className="mobile-core">
            <span>DEV</span>
            <strong>{"</>"}</strong>
            <span>01</span>
          </div>

        </motion.div>


        <motion.div
          className="mobile-copy"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <p className="mobile-kicker">
            CREATIVE FRONTEND DEVELOPER
          </p>

          <h3>
            I BUILD
            <br />
            <span>DIGITAL EXPERIENCES.</span>
          </h3>

          <p>
            I create modern, responsive and interactive
            websites with a strong focus on design,
            performance and user experience.
          </p>

        </motion.div>


        {/* MOBILE STATS */}

        <motion.div
          className="mobile-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <div>
            <strong>01<span>+</span></strong>
            <small>YEARS</small>
          </div>

          <div>
            <strong>3<span>+</span></strong>
            <small>PROJECTS</small>
          </div>

          <div>
            <strong>05<span>+</span></strong>
            <small>SKILLS</small>
          </div>

        </motion.div>


        {/* MOBILE SKILLS */}

        <motion.div
          className="mobile-skills"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <p>TOOLS I USE</p>

          <div>
            {skills.map((skill) => (
              <span key={skill}>
                {skill}
              </span>
            ))}
          </div>

        </motion.div>


        <motion.button
          className="mobile-work-btn"
          whileTap={{ scale: 0.96 }}
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({
                behavior: "smooth",
              })
          }
        >
          VIEW MY WORK
          <span>↗</span>
        </motion.button>

      </div>

    </section>
  );
}

export default About;