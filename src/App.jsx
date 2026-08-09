import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ParticleBackground from "./components/ParticleBackground";
import CursorEffects from "./components/CursorEffects";

function App() {
  return (
    <>
      <ParticleBackground />
      <CursorEffects />

      <Navbar />

      <main>

        {/* HOME */}
        <section id="home">
          <Hero />
        </section>

        {/* ABOUT */}
        <section id="about">
          <About />
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <Projects />
        </section>

        {/* CONTACT */}
        <section id="contact">
          <Contact />
        </section>

      </main>
    </>
  );
}

export default App;