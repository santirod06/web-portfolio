import "./technologies.css";
import reactLogo from "./icons/react-logo.png";
import jsLogo from "./icons/javascript_logo.png";
import nodeLogo from "./icons/node-icon.png";
import htmlLogo from "./icons/html-logo.png";
import cssLogo from "./icons/css-icon.png";
import mongodbLogo from "./icons/mongodb-icon.png";
import postgresqlLogo from "./icons/postgresql-icon.png";

const Technologies = () => {
  return (
    <section className="technologies-section" id='tecnologies'>
      <div className="technologies-inner">
        <h2 className="technologies-title"> TECNOLOGÍAS </h2>

        <div className="technologies-grid">
          <div className="tech-card">
            <img src={reactLogo} alt="react logo" />
            <span className="tech-name"> React </span>
          </div>

          <div className="tech-card">
            <img src={jsLogo} alt="js logo" />
            <span className="tech-name"> JavaScript </span>
          </div>

          <div className="tech-card">
            <img src={nodeLogo} alt="node logo" />
            <span className="tech-name"> Node.js </span>
          </div>

          <div className="tech-card">
            <img src={htmlLogo} alt="html logo" />
            <span className="tech-name"> HTML </span>
          </div>

          <div className="tech-card">
            <img src={cssLogo} alt="css logo" />
            <span className="tech-name"> CSS </span>
          </div>

          <div className="tech-card">
            <img src={mongodbLogo} alt="mongodb logo" />
            <span className="tech-name"> MongoDB </span>
          </div>

          <div className="tech-card">
            <img src={postgresqlLogo} alt="postgresql logo" />
            <span className="tech-name"> PostgreSQL </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
