// Za sada se ne koristi. Kad bude vise projekta, ukljucice se. Trenutno ulogu MyWorks kompenente igra src\components\projects\WarrantyWallet.jsx

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import warrantyWalletImage from "../images/WarrantyWalletScreenshot.PNG";

const popUpAndFadeIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function MyWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const myWorksSectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const projects = [
    {
      id: 1,
      title: "Warranty Wallet",
      description:
        "A full-stack application for managing product warranties and receipts digitally. Built with React, Node.js, Express, and MySQL.",
      image: warrantyWalletImage,
      link: "/projects/WarrantyWallet",
    },
  ];

  return (
    <div
      id="myWorks"
      className="myWorks-section py-5 vh-md-100 d-flex flex-column justify-content-center"
    >
      <motion.div
        ref={ref}
        variants={myWorksSectionVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="dark-bg"
      >
        <Container className="font-color ps-lg-5">
          <motion.h2 variants={itemVariants} className="display-5 fw-bold mb-4">
            My Works
          </motion.h2>
          <motion.p variants={itemVariants} className="fs-5 mb-5">
            The ones I'm most proud of — and just the start of what’s coming
            next.
          </motion.p>

          <Row className="justify-content-start g-4 mb-5">
            {projects.map((project) => (
              <Col
                key={project.id}
                lg={projects.length === 1 ? 7 : 4}
                md={6}
                sm={12}
              >
                <motion.div variants={popUpAndFadeIn} className="h-100">
                  <Card className="project-card shadow-lg border-0 rounded-3 h-100">
                    <Card.Img
                      variant="top"
                      src={project.image}
                      alt={project.title}
                      className="project-card-image"
                    />
                    <Card.Body className="d-flex flex-column">
                      <Card.Title className="h4 fw-bold mb-2">
                        {project.title}
                      </Card.Title>
                      <Card.Text className="text-muted mb-3 flex-grow-1">
                        {project.description}
                      </Card.Text>
                      <Button
                        as={Link}
                        to={project.link}
                        variant=""
                        className="custom-button w-100 mt-auto"
                      >
                        View Project
                      </Button>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>

          <motion.div variants={itemVariants} className="mt-5">
            <p className="fs-5">
              More projects are currently under development. Stay tuned for
              updates!
            </p>
            <p className="fs-5">
              In the meantime, feel free to explore my code on{" "}
              <a
                href="https://github.com/Vitomirov"
                target="_blank"
                rel="noopener noreferrer"
                className="fw-bold font-color"
              >
                GitHub
              </a>
              .
            </p>
          </motion.div>
        </Container>
      </motion.div>
    </div>
  );
}

export default MyWorks;
