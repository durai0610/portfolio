import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certification from "./components/Certification";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import FamilyCreation from "./components/FamilyCreation";
import Revit3D from "./components/Revit3D";
import MEPCoordination from "./components/MEPCoordination";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2200);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <FamilyCreation />
      <Revit3D />
      <MEPCoordination />
      <Education />
      <Certification />
      <Contact />
    </>
  );
}

export default App;
