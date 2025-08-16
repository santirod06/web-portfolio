import "./projects.css";
import { useState } from "react";

import example1 from "./images/example.png";
import example2 from "./images/example2.png";

/* Aca subo la lista de proyectos a mostrar, con sus nombres, imagenes, descripcion y github */
const projectsList = [
  {
    title: "E-commerce1",
    images: [example1],
    description: "tienda online funcional, hecha con: JavaScript, HTML y CSS",
    github: "https://github.com/santirod06",
  },
  {
    title: "E-commerce2",
    images: [example1, example2],
    description: "tienda online funcional, responsive",
    github: "https://github.com/santirod06",
  },
  {
    title: "E-commerce1",
    images: [example1],
    description: "tienda online funcional, hecha con: JavaScript, HTML y CSS",
    github: "https://github.com/santirod06",
  },
  {
    title: "E-commerce2",
    images: [example1, example2],
    description: "tienda online funcional, responsive",
    github: "https://github.com/santirod06",
  },
];

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
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
        <h2 id='projects'> PROYECTOS </h2>


        {/* Mostramos cada tarjeta, el map filtra cada proyecto del arreglo de objetos y crea un div con toda la info por c/u */}
        <div className="projects-grid">
          {projectsList.map((project) => (
            <div
              key={project.title}
              className="project-card"
              onClick={() => openModal(project.images)}
            >
              <img src={project.images[0]} alt={project.title} />
              <h3> {project.title} </h3>
              <p> {project.description} </p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                ver en github
              </a>
            </div>
          ))}
        </div>


        {/* mostrar solo si modalOpen es true */}
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
