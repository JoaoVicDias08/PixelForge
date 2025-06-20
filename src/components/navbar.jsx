import "../styles/navbar.css";
import "../styles/index.css";
import "hover.css/css/hover-min.css";

import "../styles/navbar.css";
import "hover.css/css/hover-min.css";
import { useEffect, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState(true);

  useEffect(() => {
    if (menuOpen) {
      setShowMenuIcon(false);
    } else {
      const timer = setTimeout(() => setShowMenuIcon(true), 300);
      return () => clearTimeout(timer);
    }
  }, [menuOpen]);


  const handleOverlayClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-header">
          <a href="#home" className="navbar-logo">
            PixelForge
          </a>
         <img
  src="/menu.png"
  className={`navbar-menu-icon${menuOpen ? ' animate-out' : ' animate-in'}`}
  onClick={() => setMenuOpen(true)}
  alt="Abrir menu"
/>
        </div>

        {menuOpen && (
          <div className="navbar-overlay" onClick={handleOverlayClick}></div>
        )}

        <ul className={`navbar-menu${menuOpen ? ' active' : ''}`}>
          <img
            src="/close.png"
            className="navbar-close-icon"
            onClick={() => setMenuOpen(false)}
            alt="Fechar menu"
          />
          <li className="navbar-item">
  <a href="#home" className="navbar-link hvr-underline-from-left" onClick={() => setMenuOpen(false)}>Início</a>
</li>
<li className="navbar-item">
  <a href="#about" className="navbar-link hvr-underline-from-left" onClick={() => setMenuOpen(false)}>Sobre nós</a>
</li>
<li className="navbar-item">
  <a href="#services" className="navbar-link hvr-underline-from-left" onClick={() => setMenuOpen(false)}>Serviços</a>
</li>
<li className="navbar-item">
  <a href="#contact" className="navbar-link hvr-underline-from-left" onClick={() => setMenuOpen(false)}>Contato</a>
</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;