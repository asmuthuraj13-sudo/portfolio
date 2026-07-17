import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Leadership from "./components/Leadership/Leadership";
import Education from "./components/Education/Education";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Leadership />
      <Education/>
      <Certificates />
      <Contact />
    </>
  );
}

export default App;