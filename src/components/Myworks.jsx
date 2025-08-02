import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import warrantyWalletImage from "../images/WarrantyWalletScreenshot.PNG";

// Uvozimo potrebne varijante iz Animations.jsx
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
  // Animacija se pokreće jednom kada je 50% komponente vidljivo
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // Varijanta za celu My Works sekciju (roditelj za h2, p i sadržaj projekata)
  const myWorksSectionVariants = {
    hidden: { opacity: 0, y: 20 }, // Počinje nevidljivo i blago ispod finalne pozicije
    visible: {
      opacity: 1,
      y: 0, // Klizi do svoje finalne pozicije
      transition: {
        duration: 0.8, // Trajanje animacije
        ease: "easeOut", // Funkcija ubrzanja
        staggerChildren: 0.2, // Odlaganje između animacije svakog deteta
      },
    },
  };

  // Array of project data. Add more objects to this array to display additional projects.
  const projects = [
    {
      id: 1, // Jedinstveni ID za React-ov key prop
      title: "Warranty Wallet",
      description:
        "A full-stack application for managing product warranties and receipts digitally. Built with React, Node.js, Express, and MySQL.",
      image: warrantyWalletImage, // Koristi uvezenu lokalnu sliku
      link: "/projects/WarrantyWallet",
    },
  ];

  return (
    // 'myWorks-section' ima fiksnu pozadinu, a animacija se primenjuje na njen sadržaj
    <div
      id="myWorks"
      className="myWorks-section py-5 vh-md-100 d-flex flex-column justify-content-center"
    >
      {/* Omotani sadržaj koji se animira */}
      <motion.div
        ref={ref}
        variants={myWorksSectionVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="dark-bg" // Dodata klasa za tamnu pozadinu
      >
        {/* Container for the main content, ensuring it's responsive and has padding */}
        <Container className="font-color ps-lg-5">
          {/* Naslov sekcije */}
          <motion.h2 variants={itemVariants} className="display-5 fw-bold mb-4">
            My Works
          </motion.h2>
          {/* Uvodni paragraf za sekciju */}
          <motion.p variants={itemVariants} className="fs-5 mb-5">
            The ones I'm most proud of — and just the start of what’s coming
            next.
          </motion.p>

          {/* Red za kartice projekata, koristeći Bootstrap's gutter (g-4) za razmak */}
          <Row className="justify-content-start g-4 mb-5">
            {/* Mapa kroz 'projects' niz za renderovanje svakog projekta kao kartice */}
            {projects.map((project) => (
              <Col
                key={project.id}
                lg={projects.length === 1 ? 7 : 4} // Dinamičko postavljanje širine
                md={6}
                sm={12}
              >
                {/* motion.div za animaciju pojedinačne kartice */}
                <motion.div variants={popUpAndFadeIn} className="h-100">
                  {/* Komponenta kartice projekta */}
                  <Card className="project-card shadow-lg border-0 rounded-3 h-100">
                    {/* Slika projekta */}
                    <Card.Img
                      variant="top"
                      src={project.image}
                      alt={project.title}
                      className="project-card-image"
                    />
                    {/* Telo kartice */}
                    <Card.Body className="d-flex flex-column">
                      {/* Naslov projekta */}
                      <Card.Title className="h4 fw-bold mb-2">
                        {project.title}
                      </Card.Title>
                      {/* Opis projekta */}
                      <Card.Text className="text-muted mb-3 flex-grow-1">
                        {project.description}
                      </Card.Text>
                      {/* Dugme "View Project" */}
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

          {/* Opcioni dodatni sadržaj ispod kartica projekata */}
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
