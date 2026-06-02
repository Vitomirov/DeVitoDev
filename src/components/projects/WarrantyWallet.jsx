import { useRef, useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import { BsPlayCircle } from "react-icons/bs";
import videoWarrantyWallet from "../../assets/DemoVideos/warrantyWallet.mp4";
import { portfolioContent } from "../../content/content";
import {
  containerVariants,
  itemVariants,
} from "../animations/animations";
function WarrantyWallet() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [showModal, setShowModal] = useState(false);

  const { warrantyWallet } = portfolioContent;

  return (
    <section id="warrantyWallet" className="project-detail text-white">
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
            {warrantyWallet.title}
          </motion.h1>

          <Row className="project-detail-grid g-3 g-lg-4 align-items-center">
            <Col lg={7} md={12} className="project-detail-body">
              <motion.div variants={itemVariants} className="paragraph-justify">
                <p className="paragraph-justify">{warrantyWallet.description}</p>

                <p className="mt-2 mb-1">
                  <strong>{warrantyWallet.technologiesSubtitle}</strong>
                </p>

                <ul className="list-unstyled ps-3 mb-2">
                  {warrantyWallet.technologies.map((tech, index) => (
                    <li key={index}>
                      <strong>• {tech.label}:</strong> {tech.tools}
                    </li>
                  ))}
                </ul>

                <p className="mb-0">
                  <a
                    href="https://github.com/Vitomirov/warranty-wallet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white me-3"
                  >
                    View on GitHub
                  </a>
                  |
                  <a
                    href="https://dejanvitomirov.com/warrantywallet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white ms-3"
                  >
                    Live Demo
                  </a>
                </p>
              </motion.div>
            </Col>

            <Col lg={5} md={12}>
              <motion.div
                variants={itemVariants}
                onClick={() => setShowModal(true)}
                className="warrantyWallet-video-placeholder"
                role="button"
                tabIndex={0}
                aria-label="Play Warranty Wallet demo video"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setShowModal(true);
                  }
                }}
              >
                <BsPlayCircle size={48} color="black" />
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="lg"
      >
        <Modal.Body className="p-0 bg-transparent d-flex justify-content-center">
          <video
            src={videoWarrantyWallet}
            controls
            autoPlay
            className="project-modal-video"
          />
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default WarrantyWallet;
