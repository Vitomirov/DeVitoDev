import { useRef, useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import { BsPlayCircle } from "react-icons/bs";
import videoWarrantyWallet from "../../assets/DemoVideos/warrantyWallet.mp4";
import { portfolioContent } from "../../content/content";

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

function WarrantyWallet() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      id="warrantyWallet"
      className="section-layout py-5 text-white vh-md-100 d-flex justify-content-center dark-bg"
    >
      <motion.div
        ref={ref}
        variants={sectionContainerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Container className="font-color">
          <motion.h1
            variants={itemVariants}
            className="display-5 fw-bold mb-5 font-color"
          >
            {portfolioContent.warrantyWallet.title}
          </motion.h1>

          <Row className="justify-content-start d-flex justify-content-between">
            <motion.h2
              variants={itemVariants}
              className="text-start mb-5 font-color"
            >
              {portfolioContent.warrantyWallet.subtitle}
            </motion.h2>

            {/* Tekst */}
            <Col lg={7} md={12} className="font-color paragraph-justify pe-5">
              <motion.div
                variants={itemVariants}
                className="text-start paragraph-justify"
              >
                <p className="fs-5 pt-1 paragraph-justify">
                  {portfolioContent.warrantyWallet.description}
                </p>

                <p className="mt-4">
                  <strong>
                    {portfolioContent.warrantyWallet.technologiesSubtitle}
                  </strong>
                </p>
                <ul className="list-unstyled ps-3">
                  {portfolioContent.warrantyWallet.technologies.map(
                    (tech, index) => (
                      <li key={index} className="mb-2">
                        <strong>• {tech.label}:</strong> {tech.tools}
                      </li>
                    ),
                  )}
                </ul>

                <p className="mt-4">
                  <a
                    href="https://github.com/Vitomirov/warranty-wallet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white me-3"
                  >
                    View on GitHub
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://devitowarranty.xyz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white ms-3"
                  >
                    Live Demo
                  </a>
                </p>
              </motion.div>
            </Col>

            {/* Video placeholder */}
            <Col lg={4} md={8} className="me-5">
              <motion.div
                variants={itemVariants}
                onClick={() => setShowModal(true)}
                className="videro-placeholder"
              >
                <BsPlayCircle size={60} color="black" />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.div>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="sm"
      >
        <Modal.Body
          className="p-0"
          style={{
            backgroundColor: "transparent",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <video
            src={videoWarrantyWallet}
            controls
            autoPlay
            style={{
              height: "600px",
              width: "auto",
              maxWidth: "90vw",
              borderRadius: "6px",
              objectFit: "contain",
            }}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default WarrantyWallet;
