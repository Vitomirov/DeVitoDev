import { Container } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  fadeIn,
  slideInFromLeft,
  itemVariants,
  slideInFromRight,
} from "./Animations";

function About() {
  const ref = useRef(null);
  // Postavljamo once: true, da se animacija pokrene samo jednom kada uđe u vidno polje
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  // Nova varijanta za celu About sekciju: samo fadeIn sa staggerChildren
  const aboutSectionContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8, // Brži fade-in za samu sekciju
        ease: "easeOut",
        staggerChildren: 0.55, // Postepeno pojavljivanje unutrašnjih elemenata (naslov, paragrafi)
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      id="about"
      className="about-section text-center"
      // Primeni novu varijantu za ulazak sekcije
      variants={aboutSectionContainerVariants}
      initial="hidden"
      // Animiraj roditelja kada je isInView true
      animate={isInView ? "visible" : "hidden"}
    >
      <Container className="component-content font-color">
        {/* Naslov: koristi itemVariants. Roditelj sa staggerChildren kontroliše kada se animira. */}
        <motion.h2 variants={itemVariants} className="display-5 fw-bold mb-3">
          About Me
        </motion.h2>

        {/* Prvi paragraf: slideInFromLeft. Nema initial/animate jer roditelj orkestrira. */}
        <motion.p variants={slideInFromLeft} className="fs-5">
          I'm a self-taught full-stack developer with a passion for clean code,
          modern web technologies, and building things that work beautifully.
        </motion.p>

        {/* Drugi paragraf: slideInFromRight. Nema initial/animate. */}
        <motion.p variants={slideInFromRight} className="fs-5">
          I work mainly with <strong>React</strong> and <strong>Node.js</strong>
          , and I enjoy turning ideas into responsive, performant, and scalable
          web apps.
        </motion.p>

        {/* Treći paragraf: slideInFromLeft. Nema initial/animate. */}
        <motion.p variants={slideInFromLeft} className="fs-5">
          Beyond coding, I believe in simplicity, curiosity, and the power of
          learning by doing.
          {/* NEMA ZATVARAJUĆEG </motion.p> TAGA U ORIGINALU! To je greška! */}
        </motion.p>
      </Container>
    </motion.div>
  );
}

export default About;
