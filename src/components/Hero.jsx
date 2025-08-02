import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";

// Uvozimo potrebne varijante
import {
  fadeIn,
  slideInFromLeft,
  itemVariants,
  slideInFromRight,
} from "./Animations";

import profilePhoto from "../images/600x400_blue_background.png";

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
      className="section-layout d-flex flex-column justify-content-center align-items-center hero-gradient"
      id="hero"
      style={{ minHeight: "100vh" }} // Postavlja minimalnu visinu hero sekcije
    >
      <Container className="text-start">
        <Row className="justify-content-center align-items-center ">
          {/* Kolona za tekst - prva na velikim ekranima */}
          <Col
            lg={6}
            md={12}
            className="text-center text-lg-start mb-5 mb-lg-0 help"
          >
            <motion.h1 variants={slideInFromLeft} className="display-5 mb-3">
              Hi, my name is <span className="display-2 fw-bold">Dejan.</span>
            </motion.h1>

            <motion.h2
              variants={slideInFromRight}
              className="display-5 mb-4 pb-4"
            >
              Web Developer
            </motion.h2>
            <a
              type="button"
              href="#contact"
              className="custom-button text-center rounded d-inline-block px-4 py-2" // Dodao px-5 py-3 za bolji padding i d-inline-block za poravnanje
            >
              Contact
            </a>
          </Col>

          {/* Kolona za sliku - druga na velikim ekranima */}
          <Col
            lg={6}
            md={12}
            className="order-first order-lg-last d-flex justify-content-end align-items-center" // Dodao order-first/order-lg-last za responsivnost
          >
            <motion.img
              src={profilePhoto}
              alt="Dejan Vitomirov Profile"
              className="img-fluid hero-image"
              variants={fadeIn}
            />
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default Hero;
