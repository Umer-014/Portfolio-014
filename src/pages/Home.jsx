import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import Skills from "../components/sections/Skills";
import Certifications from "../components/sections/Certifications";
import TestimonialsAndBlog from "../components/sections/TestimonialsAndBlog";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <FeaturedProjects />
      <Skills />
      <Certifications />
      <TestimonialsAndBlog />
      <Contact />
    </>
  );
}
