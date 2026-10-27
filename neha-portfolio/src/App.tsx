import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function App() {
  return (<><a href="#about" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-accent focus:p-3 focus:text-navy">Skip to content</a><Navbar /><main><Hero /><About /><Skills /><Experience /><Projects /><Services /><Education /><Contact /></main><Footer /></>);
}
