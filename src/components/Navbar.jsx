import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* LOGO */}
      <a href="#home" className="logo" onClick={handleNavClick}>PORTFOLIO</a>

      {/* NAVIGATION */}
      <div className={`nav-right ${menuOpen ? "active" : ""}`}>
        <ul className="nav-links">
          <li>
            <a href="#home" onClick={handleNavClick}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={handleNavClick}>
              About
            </a>
          </li>

          <li>
            <a href="#projects" onClick={handleNavClick}>
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" onClick={handleNavClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        type="button"
        className={`menu-btn ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default Navbar;