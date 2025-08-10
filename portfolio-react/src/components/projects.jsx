import "./projects.css";
import { useState } from "react";

import example1 from "./images/example.png";
import example2 from "./images/example2.png";

const projectsList = [
  {
    title: "E-commerce1",
    images: [example1],
    description: "tienda online funcional, responsive",
  },
  {
    title: "E-commerce2",
    images: [example1, example2],
    description: "tienda online funcional, responsive",
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
        <h2> PROYECTOS </h2>

        {/* Mostramos cada tarjeta */}
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
