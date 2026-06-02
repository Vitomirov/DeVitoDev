import { useRef, useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import { portfolioContent } from "../../content/content";
import shopifyImg from "../../assets/images/ShopifyAnalyzerScreenshot.PNG";
import {
  containerVariants,
  itemVariants,
} from "../animations/animations";
function ShopifyAnalyzer() {
  const [showModal, setShowModal] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const { shopifyAnalyzer } = portfolioContent;

  return (
    <section id="shopifyAnalyzer" className="project-detail text-white">
      <Container className="font-color section-container pt-5">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h1
            variants={itemVariants}
            className="project-detail-title fw-bold font-color"
          >
            {shopifyAnalyzer.title}
          </motion.h1>

          <Row className="project-detail-grid g-3 g-lg-4 align-items-center">
            <Col lg={5} md={12} className="order-lg-last">
              <motion.div
                variants={itemVariants}
                className="shopifyAnalyzer-screenshot"
                onClick={() => setShowModal(true)}
                role="button"
                tabIndex={0}
                aria-label="View Shopify Analyzer screenshot"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setShowModal(true);
                  }
                }}
              />
            </Col>

            <Col lg={7} md={12} className="project-detail-body">
              <motion.div variants={itemVariants} className="paragraph-justify">
                <p className="paragraph-justify">{shopifyAnalyzer.description}</p>

                <p className="mt-2 mb-1">
                  <strong>{shopifyAnalyzer.technologiesSubtitle}</strong>
                </p>

                <ul className="list-unstyled ps-3 mb-2">
                  {shopifyAnalyzer.technologies.map((tech, index) => (
                    <li key={index}>
                      <strong>• {tech.label}:</strong> {tech.tools}
                    </li>
                  ))}
                </ul>

                <p className="mb-0">
                  <a
                    href="https://github.com/UkisAI-Academy/nedelja-3-vas-app-Vitomirov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white me-3"
                  >
                    View on GitHub
                  </a>
                  |
                  <a
                    href="https://shopifyanalyzer.dejanvitomirov.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white ms-3"
                  >
                    Live Demo
                  </a>
                </p>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="xl"
        contentClassName="bg-transparent border-0"
      >
        <Modal.Header closeButton closeVariant="white" className="border-0" />
        <Modal.Body className="p-0 d-flex justify-content-center">
          <img
            src={shopifyImg}
            alt="Shopify Analyzer full screenshot"
            className="project-modal-image"
          />
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default ShopifyAnalyzer;
