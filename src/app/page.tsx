import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ServiceCards from "./components/Services";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Blog from "./components/Blog";
import Legal from "./components/Legal";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <ServiceCards />
      <Faq />
      <Portfolio />
      <Pricing />
      <Blog />
      <Contact />
      <Legal />
      <Footer />

    </main>
  );
}
