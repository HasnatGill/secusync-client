import SmoothScroll from "./components/layout/SmoothScroll";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import About from "./sections/About";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <SmoothScroll>
      <Navbar />
      <main id="top">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}