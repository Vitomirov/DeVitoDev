import { Container, Row, Col, Card, Button } from "react-bootstrap"; // Dodaj Card i Button
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import warrantyWalletImage from "../images/WarrantyWalletScreenshot.PNG"; //

// Uvozimo potrebne varijante iz Animations.jsx
import {
  fadeIn, // Za celu sekciju
  popUpAndFadeIn, // Za projekat/karticu
  itemVariants, // Za naslov i paragraf
} from "./Animations";

function MyWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // Varijanta za celu My Works sekciju (roditelj za h2, p i sadržaj projekata)
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

  // Podaci za tvoj istaknuti projekat
  const featuredProject = {
    title: "Warranty Wallet",
    description:
      "A full-stack application for managing product warranties and receipts digitally. Built with React, Node.js, Express, and MySQL.",
    image: warrantyWalletImage,
    link: "/projects/WarrantyWallet",
  };

  return (
    <motion.div
      ref={ref}
      variants={myWorksSectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      id="myWorks"
      className="myWorks-section py-5 text-center" // Dodao py-5 za padding
    >
      <Container className="component-content font-color">
        {/* Naslov sekcije */}
        <motion.h2 variants={itemVariants} className="display-5 fw-bold mb-4">
          My Works
        </motion.h2>
        {/* Opisni paragraf */}
        <motion.p variants={itemVariants} className="fs-5 mb-5">
          The one I'm most proud of — and just the start of what’s coming next.
        </motion.p>

        {/* Istaknuti projekat (Featured Project Card) */}
        <Row className="justify-content-center mb-5">
          {" "}
          {/* Centriramo karticu */}
          <Col md={8} lg={6}>
            {" "}
            {/* Dajemo joj odgovarajuću širinu */}
            <motion.div variants={popUpAndFadeIn}>
              <Card className="project-card shadow-lg border-0 rounded-3">
                {" "}
                {/* Dodate klase za stil */}
                <Card.Img
                  variant="top"
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="project-card-image"
                />
                <Card.Body>
                  <Card.Title className="h4 fw-bold mb-2">
                    {featuredProject.title}
                  </Card.Title>
                  <Card.Text className="text-muted mb-3">
                    {featuredProject.description}
                  </Card.Text>
                  <Button
                    as={Link} // Koristi Link komponentu iz react-router-dom
                    to={featuredProject.link}
                    variant="secondary" // Bootstrap primarno dugme
                    className="view-project-button" // Dodatna klasa za stilizaciju
                  >
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>

        {/* Dodatni sadržaj (opciono) */}
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
  );
}

export default MyWorks;
