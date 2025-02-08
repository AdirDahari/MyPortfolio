import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/education/Education";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/projects/Projects";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contact />
      <ScrollToTop />
    </>
  );
}

export default App;
