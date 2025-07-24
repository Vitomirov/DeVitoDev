import { Container } from "react-bootstrap";
import { motion } from "framer-motion"; // Nema potrebe za useInView ni useRef ovde

// Uvozimo potrebne varijante iz Animations.jsx
import {
  fadeIn, // Za celu Hero sekciju
  slideInFromLeft, // Za h1 i prvi paragraf
  itemVariants, // Za drugi paragraf (ili h2 ako zelis specificno)
  slideInFromRight, // Za h2
} from "./Animations";

function Hero() {
  // Definišemo varijantu za celu Hero sekciju.
  // Ona će se samo pojaviti (fade in) bez klizanja,
  // ali će pokrenuti animacije na svojim direktnim 'motion' potomcima sa kašnjenjem.
  const heroSectionVariants = {
    hidden: { opacity: 0 }, // Cela Hero sekcija počinje potpuno providna
    visible: {
      opacity: 1, // Završava potpuno vidljiva
      transition: {
        duration: 1.5, // Trajanje samog fade-in efekta Hero sekcije
        ease: "easeOut",
        staggerChildren: 0.2, // Važno: Kašnjenje između animacija h1, h2, p elemenata
        // Deca će početi da se animiraju 0.2s jedno posle drugog
      },
    },
  };

  return (
    <motion.div
      variants={heroSectionVariants} // Primenjujemo varijantu za ulazak cele sekcije
      initial="hidden" // Početno stanje je 'hidden'
      animate="visible" // Animiraj odmah do 'visible' stanja kada se komponenta učita
      id="hero"
      className="hero-section" // Dodaj klasu za stilizovanje, ako je potrebno
    >
      <Container
        className="component-content text-white text-center d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "100vh", position: "relative", zIndex: 3 }}
      >
        {/* h1: Dejan Vitomirov - klizi sa leve strane */}
        <motion.h1
          variants={slideInFromLeft} // h1 koristi slideInFromLeft
          className="display-3 fw-bold mb-3"
        >
          Dejan Vitomirov
        </motion.h1>

        {/* h2: Web Developer - klizi sa desne strane */}
        <motion.h2
          variants={slideInFromRight} // h2 koristi slideInFromRight
          className="h4 mb-4"
        >
          Web Developer
        </motion.h2>

        {/* p: Building modern... - koristi itemVariants (klizi malo od dole i fade in) */}
        <motion.p
          variants={itemVariants} // p koristi itemVariants (opciono mozes i slideInFromLeft)
          className="mt-4 fs-5"
        >
          Building modern, responsive web applications with passion and
          precision.
        </motion.p>
      </Container>
    </motion.div>
  );
}

export default Hero;
