import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

// Uvozimo potrebne varijante
import {
  fadeIn,
  slideInFromLeft,
  itemVariants,
  slideInFromRight,
} from "./Animations";

function Hero() {
  const textContainerEntry = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={textContainerEntry}
      initial="hidden"
      animate="visible"
      // Centriramo sve sadržaje vertikalno i horizontalno unutar hero sekcije
      className="hero-section d-flex flex-column justify-content-center align-items-center"
      id="hero"
      style={{ minHeight: "100vh", position: "relative", zIndex: 2 }}
    >
      {/* Dodajemo inner-text-container koji će kontrolisati maksimalnu širinu teksta */}
      <div className="inner-text-container text-center">
        <motion.h1
          variants={slideInFromLeft}
          className="display-1 fw-bold mb-3"
        >
          Dejan Vitomirov
        </motion.h1>

        <motion.h2 variants={slideInFromRight} className="h4 mb-4 pb-4">
          Full-stack Developer
        </motion.h2>

        <motion.h2 variants={itemVariants} className="fs-4 mt-4">
          Building elegant, responsive web applications with passion and
          precision.
        </motion.h2>
      </div>
    </motion.div>
  );
}

export default Hero;
