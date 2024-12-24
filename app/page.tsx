import About from "./components/About";
import Blog from "./components/Blogs";
import Contact from "./components/Contact";
import FAQ from "./components/FAQS";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";

function page() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <FAQ />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  );
}

export default page;
