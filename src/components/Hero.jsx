import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

// Uvozimo potrebne varijante
// Proveri da li su sve ove varijante definisane u tvom Animations.jsx fajlu.
import {
  fadeIn,
  slideInFromLeft,
  itemVariants,
  slideInFromRight,
  // slideInFromBottom, // Nije više potrebno ako nema slojeva koji se pomeraju
} from "./Animations";

function Hero() {
  // Varijanta za ulazak celog tekstualnog kontejnera.
  // Ovo će kontrolisati pojavljivanje svih tekstualnih elemenata.
  const textContainerEntry = {
    hidden: { opacity: 0, y: 50 }, // Počinje nevidljivo i malo ispod
    visible: {
      opacity: 1,
      y: 0, // Klizi na svoje mesto
      transition: {
        duration: 1.0, // Trajanje animacije
        ease: "easeOut", // Funkcija ubrzanja
        staggerChildren: 0.2, // Postepeno pojavljivanje dece (H1, H2, P)
      },
    },
  };

  return (
    // Glavni kontejner Hero sekcije.
    // Nema više "parallax-container" klase.
    // Animacija se primenjuje direktno na ovaj div.
    <motion.div
      variants={textContainerEntry} // Koristimo varijantu za ulazak teksta
      initial="hidden"
      animate="visible"
      className="hero-section d-flex flex-column justify-content-center align-items-end text-center" // Dodate flex klase za centriranje
      id="hero" // ID za navigaciju
      style={{ minHeight: "100vh", position: "relative", zIndex: 2 }} // Zauzima celu visinu, z-index iznad pozadine
    >
      <Container className="component-content font-color ">
        {/* Tekstualni elementi sa svojim individualnim animacijama */}
        <motion.h1
          variants={slideInFromLeft}
          className="display-1 fw-bold mb-3 text-center"
        >
          Dejan Vitomirov
        </motion.h1>

        <motion.h2
          variants={slideInFromRight}
          className="h4 mb-4 text-center pb-4"
        >
          Web Developer
        </motion.h2>

        <motion.p variants={itemVariants} className="mt-4 fs-5 text-center">
          Building modern, responsive web applications with passion and
          precision.
        </motion.p>
      </Container>
    </motion.div>
  );
}

export default Hero;
