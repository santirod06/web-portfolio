import "./projects.css";
import { useState } from "react";

import eCommerce1 from './images/e-commerce1.png';
import eCommerce2 from './images/e-commerce2.png';
import eCommerce3 from './images/e-commerce3.png';
import eCommerce4 from './images/e-commerce4.png';
import chismelatte1 from './images/Chismelatte1.png';
import chismelatte2 from './images/Chismelatte2.png';
import chismelatte3 from './images/Chismelatte3.png';
import enrutagps0 from './images/enrutagps.png'
import bakery1 from './images/bakery1.png';
import bakery2 from './images/bakery2.png';
import login1 from './images/login1.png';
import login2 from './images/login2.png';
import passwordGenerator1 from './images/password-generator1.png';
import passwordGenerator2 from './images/password-generator2.png';
import backendProjectImage from './images/backend-project-image.png';
import webPortfolio from './images/web-portfolio.png';


/* Aca subo la lista de proyectos a mostrar, con sus nombres, imagenes, descripcion y github */
const projectsList = [
  {
    title: "E-Commerce",
    images: [eCommerce2, eCommerce3, eCommerce4, eCommerce1],
    description: "Proyecto final de JAP: e-commerce con funcionalidades completas de compra, carrito, autenticación y gestión de productos",
    techs: "JavaScript • HTML • CSS • Node.js",
    github: "https://github.com/santirod06/ProyectoJAP",
  },
  {
    title: "Chismelatte Landing Page",
    images: [chismelatte1, chismelatte2, chismelatte3],
    description: "Página web responsive para una cafetería, desarrollada con React, con objetivo de tener las secciónes informativas mas importantes y información de facil acceso para el usuario",
    techs: "React • JavaScript • HTML • CSS",
    demo: "https://web-chismelatte.vercel.app/",
  },
  {
    title: "EnRutaGPS Web Corporativa (EN DESARROLLO)",
    images: [enrutagps0],
    description: "Sitio web corporativo responsive desarrollado en React, diseñado para una empresa de soluciones GPS.",
    techs: "React • JavaScript • HTML • CSS • Node.js",
  },
  {
    title: "Bakery Landing Page",
    images: [bakery1, bakery2],
    description: "Página responsive como ejemplo para clientes, completamente desarrollada en React con Vite, teniendo secciones informativas, galería, testiomonios y formularios, optimizando la experiencia al usuario",
    techs: "React • JavaScript • HTML • CSS",
    github: "https://github.com/santirod06/bakery-landing-page",
    demo: "https://bakery-landing-page-orpin.vercel.app/",
  },
  {
    title: "Sistema de Autenticación",
    images: [login2, login1],
    description: "Aplicacion Full-Stack de un sistema seguro de registro e inicio de sesión, con manejo de tokens JWT y proteccion de rutas, incluye validaciones avanzadas y cifrado de contraseñas con bcrypt.",
    techs: "React • Node.js • Express • MongoDB",
    github: "https://github.com/santirod06/Auth-project",
  },
  {
    title: "Generador de Contraseñas",
    images: [passwordGenerator1, passwordGenerator2],
    description: "Aplicación en React que permite generar contraseñas fuertes, personalizando longitud, uso de mayúsculas, números y símbolos.",
    techs: "React",
    github: "https://github.com/santirod06/password-generator",
  },
  {
    title: "API de Reservas de Clases",
    images: [backendProjectImage],
    description: "API RESTful para gestionar usuarios, clases y reservas. Incluye CRUD completo, validacion de cupos y prevención de reservas duplicadas.",
    techs: "Node.js • Express • MongoDB",
    github: "https://github.com/santirod06/backend-reservas",
  },
  {
    title: "Portfolio Web Personal",
    images: [webPortfolio],
    description: "Portfolio interactivo de proyectos web personales, con diseño responsivo, animaciones y fondo animado.",
    techs: "React • JavaScript • HTML • CSS",
    github: "https://github.com/santirod06/web-portfolio",
  },
];

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false); // arranca falso (cerrado)
  const [currentProjectImages, setCurrentProjectImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Funcion para abrir el modal y mostrar las imagenes
  const openModal = (images) => {
    setCurrentProjectImages(images);
    setCurrentImageIndex(0);
    setModalOpen(true);
  };

  // Funcion para cerrar el modal 
  const closeModal = () => {
    setModalOpen(false);
  };

  // Funciones para avanzar y retroceder en el carrusel
  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === currentProjectImages.length - 1 ? 0 : prev + 1
    );
  };
  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? currentProjectImages.length - 1 : prev - 1
    );
  };




  return (
    <section className="projects-section">
      <div className="projects-inner">
        <h2 id='projects'> PROYECTOS & TRABAJOS FREELANCE </h2>


        {/* Mostramos cada tarjeta, el map filtra cada proyecto del arreglo de objetos y crea un div con toda la info (es la card completa) por c/u */}
        <div className="projects-grid">
          {projectsList.map((project) => (
            <div
              key={project.title}
              className="project-card"
              onClick={() => openModal(project.images)}
            >
              <img src={project.images[0]} alt={project.title} /> {/* Muestro la info correspondiente de cada proyecto en la tarjeta */}
              
              <h3> {project.title} </h3>
              
              <p> {project.description} </p>

              <p className="tech-title"> Tecnologías: </p>
              <p className="project-techs"> {project.techs} </p> 

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  ver en github
                </a>
              )}

              {project.demo && ( // Para que aparezca el <a> SOLO en los que pongo un link de demo
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  probar App
                </a>
               )}
            </div>
          ))}
        </div>


        {/* Función para mostrar el modal si esta openModal en true */}
        {modalOpen && (
          <div className="modal" onClick={closeModal}>
            {/* Botón para ir a la imagen anterior */}
            <button
              className="prev-btn"
              onClick={(e) => {
                e.stopPropagation(); // evitar que cierre el modal si hago click en el botón
                prevImage();
              }}
            >
              ◀
            </button>

            {/* Imagen actual */}
            <img
              src={currentProjectImages[currentImageIndex]}
              alt="Proyecto imagen"
              onClick={(e) => e.stopPropagation()} // evitar cerrar modal si hago click en la imagen
            />

            {/* Botón para ir a la imagen siguiente */}
            <button
              className="next-btn"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              ▶
            </button>

            {/* Botón para cerrar el modal */}
            <button
              className="close-btn"
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
            >
              ✕
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
