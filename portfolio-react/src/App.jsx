import "./App.css";
import Header from "./components/header.jsx";
import AboutMe from "./components/about-me.jsx";
import Technologies from "./components/technologies.jsx";
import Projects from "./components/projects.jsx";
import ContactMe from "./components/contact-me.jsx";
import UniverseBackground from "./components/back-ground/universe.jsx";

function App() {
  return (
    <div>
      <UniverseBackground />
      <div>
        <title> Portfolio Website </title>
        <Header />
        <AboutMe />
        <Technologies />
        <Projects />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
