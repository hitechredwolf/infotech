import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Nav.css';
import logo from "./images/redwolflogo.png";

function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const toggleDropdown = () => {
    if (isMobile) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="nav-header sticky-nav">
      <div className="nav-wrapper">
        <Link to="/" className="nav-logo-link">
          <img src={logo} alt="Logo" className="nav-logo" />
        </Link>

        <button className={`nav-toggle ${isMobileMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`nav-menu ${isMobileMenuOpen ? "nav-active" : ""}`}>
          <ul className="nav-items fade-in">
            <li className="nav-item"><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
            <li className="nav-item"><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
            <li
              className={`nav-dropdown ${isDropdownOpen ? "dropdown-open" : ""}`}
              onClick={toggleDropdown}
            >
              <span className="nav-dropbtn">Products ▾</span>
              <ul className="nav-dropdown-list slide-down">
                <li><Link to="/tcops" onClick={() => setIsMobileMenuOpen(false)}>Tcops</Link></li>
                <li><Link to="/speaker" onClick={() => setIsMobileMenuOpen(false)}>Speaker</Link></li>
                <li><Link to="/Led" onClick={() => setIsMobileMenuOpen(false)}>Led</Link></li>
                <li><Link to="/more" onClick={() => setIsMobileMenuOpen(false)}>More</Link></li>
              </ul>
            </li>
            <li className="nav-item"><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
            <li className="nav-item">
              <a href="https://admin.tcopsztpro.in/login" target="_blank" rel="noopener noreferrer">
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
