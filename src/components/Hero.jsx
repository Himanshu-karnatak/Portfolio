import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import heroImg from "../assets/hero.png";

function Hero() {
  const connectToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero" id="home">

      {/* =========================
          LEFT CONTENT
      ========================== */}

      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
      >

        <motion.div
          className="hero-status"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className="status-dot"></span>
          AVAILABLE FOR WORK
        </motion.div>


        <p className="small-text">
          I'M
        </p>


        <h1>
          HIMANSHU
          <br />
          <span>KARNATAK</span>
        </h1>


        <div className="hero-role">

          <span className="role-line"></span>

          <TypeAnimation
            sequence={[
              "WEB DEVELOPER",
              2200,
              "FRONTEND DEVELOPER",
              2200,
              "REACT DEVELOPER",
              2200,
            ]}
            wrapper="span"
            repeat={Infinity}
          />

        </div>


        <p className="hero-description">
          I create modern, responsive and interactive
          digital experiences with clean code and
          thoughtful design.
        </p>


        <motion.button
          className="connect-btn"
          whileHover={{
            y: -4,
          }}
          whileTap={{
            scale: 0.96,
          }}
          onClick={connectToContact}
        >
          <span>LET'S CONNECT</span>

          <b>↗</b>
        </motion.button>

      </motion.div>


      {/* =========================
          RIGHT VISUAL
      ========================== */}

      <motion.div
        className="hero-right"
        initial={{
          opacity: 0,
          scale: 0.85,
          x: 60,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.15,
          ease: "easeOut",
        }}
      >

        <div className="hero-orbit orbit-one"></div>

        <div className="hero-orbit orbit-two"></div>

        <div className="hero-glow"></div>

        <div className="hero-image-frame">

          <img
            src={heroImg}
            alt="Himanshu Karnatak"
          />

        </div>


        <div className="hero-code-tag">
          {"</>"}
        </div>


        <div className="hero-scroll-indicator">
          <span></span>
          SCROLL
        </div>

      </motion.div>

    </section>
  );
}

export default Hero;