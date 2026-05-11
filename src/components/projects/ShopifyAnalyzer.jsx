import { useRef, useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap"; // Modal je ovde
import { motion, useInView } from "framer-motion";
import { portfolioContent } from "../../content/content";
// Uvezi sliku direktno da bi je koristio i u Modalu lakše
import shopifyImg from "../../assets/images/ShopifyAnalyzerScreenshot.PNG";

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

function ShopifyAnalyzer() { // Mala napomena: Komponente u Reactu uvek velikim slovom
  const [showModal, setShowModal] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  const { shopifyAnalyzer } = portfolioContent;

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div
      id="shopifyAnalyzer"
      className="section-layout py-5 text-white vh-md-100 d-flex justify-content-center dark-bg"
    >
      <motion.div
        ref={ref}
        variants={sectionContainerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Container className="font-color">
          <Row className="justify-content-start d-flex justify-content-between">
            <motion.h2 variants={itemVariants} className="text-start mb-5 font-color">
              {shopifyAnalyzer.subtitle}
            </motion.h2>

            {/* Klikabilni Screenshot */}
            <Col lg={4} md={8} className="me-5">
              <motion.div
                variants={itemVariants}
                className="shopifyAnalyzer-screenshot"
                onClick={handleShow} // Otvara modal na klik
                style={{ cursor: "pointer" }} // Dodajemo ruku na hover
              ></motion.div>
            </Col>

            {/* Tekstualni sadržaj */}
            <Col lg={7} md={12} className="font-color paragraph-justify pe-5">
              <motion.div variants={itemVariants} className="text-start paragraph-justify">
                <p className="fs-5 pt-1 paragraph-justify">
                  {shopifyAnalyzer.description}
                </p>
                
                <p className="mt-4">
                  <strong>{shopifyAnalyzer.technologiesSubtitle}</strong>
                </p>

                <ul className="list-unstyled ps-3">
                  {shopifyAnalyzer.technologies.map((tech, index) => (
                    <li key={index} className="mb-2">
                      <strong>• {tech.label}:</strong> {tech.tools}
                    </li>
                  ))}
                </ul>

                <p className="mt-4">
                  <a href="https://github.com/UkisAI-Academy/nedelja-3-vas-app-Vitomirov" target="_blank" rel="noopener noreferrer" className="text-white me-3">View on GitHub</a> | 
                  <a href="https://shopifyanalyzer.dejanvitomirov.com/" target="_blank" rel="noopener noreferrer" className="text-white ms-3">Live Demo</a>
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.div>

      {/* Bootstrap Modal za prikaz velike slike */}
      <Modal show={showModal} onHide={handleClose} centered size="xl" contentClassName="bg-transparent border-0">
        <Modal.Header closeButton closeVariant="white" className="border-0"></Modal.Header>
        <Modal.Body className="p-0 d-flex justify-content-center">
          <img 
            src={shopifyImg} 
            alt="Shopify Analyzer Full Screenshot" 
            style={{ width: '100%', borderRadius: '10px', boxShadow: '0 0 20px rgba(0,0,0,0.5)' }} 
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ShopifyAnalyzer;