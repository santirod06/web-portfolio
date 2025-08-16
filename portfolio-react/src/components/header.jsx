import { useState } from "react";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`island-header ${isOpen ? "open" : ""}`}>
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <nav>
        <a href="#about"> Sobre mí </a>
        <a href="#tecnologies"> Tecnologías </a>
        <a href="#projects"> Proyectos </a>
        <a href="#contact"> Contacto </a>
      </nav>
    </header>
  );
}

export default Header;
