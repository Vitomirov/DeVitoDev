import React, { useRef } from "react";
import { Col, Container, Row, Nav } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import profilePhoto from "../assets/images/photo.png";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const sectionContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  const handleGitHubClick = () => {
    window.open("https://github.com/Vitomirov", "_blank");
  };

  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/dejan-vitomirov/", "_blank");
  };

  return (
    <motion.div
      ref={ref}
      id="hero"
      className="section-layout d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
      variants={sectionContainerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <Container className="text-start">
        <Row className="justify-content-center align-items-center">
          <Col
            lg={6}
            md={12}
            className="order-first order-lg-last d-flex justify-content-center align-items-center mb-5"
          >
            <motion.img
              src={profilePhoto}
              alt="Dejan Vitomirov Profile"
              className="img-fluid hero-image"
              variants={itemVariants}
            />
          </Col>

          <Col lg={6} md={12} className="text-center text-lg-start">
            <motion.h1 variants={itemVariants} className="display-5">
              Hi, my name is
            </motion.h1>
            <motion.h1
              variants={itemVariants}
              className="display-2 fw-bold mb-4"
            >
              Dejan Vitomirov.
            </motion.h1>
            <motion.h2 variants={itemVariants} className="display-5 mb-4 pb-4">
              Web Developer
            </motion.h2>

            {/* Dugme i social ikonice */}
            <motion.div
              variants={itemVariants}
              className="d-flex flex-column align-items-center align-items-lg-start mt-3"
            >
              {/* Contact dugme */}
              <a
                type="button"
                href="#contact"
                className="custom-button text-center rounded d-inline-block px-4 py-2"
                id="contact-button"
              >
                Contact
              </a>

              {/* Social ikonice samo za sm/md ekrane */}
              <div
                className="d-flex d-lg-none justify-content-between mt-3"
                style={{
                  width: "fit-content",
                  minWidth: "100px",
                }}
              >
                <Nav.Link
                  onClick={handleLinkedinClick}
                  className="nav-link text-white"
                  style={{ cursor: "pointer" }}
                >
                  <i className="bi bi-linkedin social-icon fs-1 pe-3 me-5"></i>
                </Nav.Link>

                <Nav.Link
                  onClick={handleGitHubClick}
                  className="nav-link text-white p-0"
                  style={{ cursor: "pointer" }}
                >
                  <i className="bi bi-github social-icon fs-1"></i>
                </Nav.Link>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default Hero;
