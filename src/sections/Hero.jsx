import React from "react";
import { Col, Container, Row, Nav } from "react-bootstrap";
import { motion } from "framer-motion";
import profilePhoto from "../assets/images/photo.png";
import {
  itemVariants,
  containerVariants,
} from "../components/animations/animations";
import useHero from "../hooks/useHero";

function Hero() {
  const { ref, isInView, handleGitHubClick, handleLinkedinClick } = useHero();

  return (
    <motion.section
      ref={ref}
      id="hero"
      className="section-layout d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <Container>
        <Row className="justify-content-center align-items-center">
          {/* Slika sa lazy load */}
          <Col
            lg={6}
            md={12}
            className="order-first order-lg-last d-flex justify-content-center align-items-center mb-5"
          >
            <motion.img
              loading="lazy"
              decoding="async"
              src={profilePhoto}
              alt="Dejan Vitomirov Profile"
              className="img-fluid hero-image"
              width="400"
              height="400"
              variants={itemVariants}
            />
          </Col>

          {/* Tekstualni deo */}
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

            {/* Dugme + Social ikone */}
            <motion.div
              variants={itemVariants}
              className="d-flex flex-column align-items-center align-items-lg-start mt-3"
            >
              <a
                href="#contact"
                className="custom-button text-center rounded d-inline-block px-4 py-2 "
                id="contact-button"
              >
                Contact
              </a>

              <motion.div
                variants={itemVariants}
                className="d-lg-none clearfix pt-2"
                style={{ width: "12rem" }}
              >
                <Nav.Link
                  onClick={handleLinkedinClick}
                  aria-label="Open LinkedIn profile"
                  className="nav-link text-white float-start p-0"
                  style={{ cursor: "pointer" }}
                >
                  <i
                    className="bi bi-linkedin social-icon pe-5 me-5"
                    style={{ fontSize: "2.2rem" }}
                  ></i>
                </Nav.Link>

                <Nav.Link
                  onClick={handleGitHubClick}
                  aria-label="Open GitHub profile"
                  className="nav-link text-white p-0 float-end"
                  style={{ cursor: "pointer" }}
                >
                  <i
                    className="bi bi-github social-icon"
                    style={{ fontSize: "2.2rem" }}
                  ></i>
                </Nav.Link>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
}

export default React.memo(Hero);
