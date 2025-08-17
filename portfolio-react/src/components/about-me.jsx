import { TypeAnimation } from "react-type-animation";
import "./about-me.css";

const AboutMe = () => {
  return (
    <section className="aboutme-container" id='about'>
      <div className='text-wrapper'> 
      <TypeAnimation
        sequence={[
          "Hola, mi nombre es...",
          3000, // Espera 2 segundos
          "", // Borra el texto
          1000, // Espera 1 segundo antes de volver a escribir
        ]}
        wrapper="p"
        speed={10}
        deletionSpeed={10}
        className="intro-text"
        repeat={Infinity}
      />

      <div className='text-wrapper'> 
        <h1 className="name-text"> Santiago Rodríguez </h1>
        
        <h2 className="subtitle-text"> Desarrollador Web </h2>
        
        <p className="description-text">
            Soy estudiante de Ingeniería en Computación y desarrollador web autodidacta, apasionado por crear proyectos que resuelvan problemas reales. Disfruto aprender constantemente, experimentar con nuevas herramientas y mejorar mis habilidades a través de proyectos personales y desafíos prácticos.
        </p>
        </div>
      </div> 
    </section>
  );
};

export default AboutMe;
