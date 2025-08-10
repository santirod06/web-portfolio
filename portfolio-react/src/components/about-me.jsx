import { TypeAnimation } from "react-type-animation";
import "./about-me.css";

const AboutMe = () => {
  return (
    <section className="aboutme-container">
      <div className='text-wrapper'> 
      <TypeAnimation
        sequence={[
          "Hola, mi nombre es...",
          3000, // Espera 2 segundos
          "", // Borra el texto
          1000, // Espera 1 segundo antes de volver a escribir
        ]}
        wrapper="p"
        speed={50}
        deletionSpeed={30}
        className="intro-text"
        repeat={Infinity}
      />

      <div className='text-wrapper'> 
        <h1 className="name-text"> Santiago Rodriguez </h1>
        
        <h2 className="subtitle-text"> Desarrollador Web </h2>
        
        <p className="description-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id mollitia, voluptates porro molestias assumenda, minima voluptatibus ad labore aperiam dolorum illum tenetur consectetur cum quia possimus. Perspiciatis, corrupti similique quas iusto distinctio eos ab sint in modi. Et, repudiandae fugiat.
        </p>
        </div>
      </div> 
    </section>
  );
};

export default AboutMe;
