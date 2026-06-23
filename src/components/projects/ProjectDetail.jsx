import { useRef, useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import { BsPlayCircle } from "react-icons/bs";
import {
  containerVariants,
  itemVariants,
} from "../animations/animations";

function ProjectDetail({ id, content, previewImage, modalMedia }) {
  const [showModal, setShowModal] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleMediaKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openModal();
    }
  };

  const paragraphs = content.description.filter(
    (item) => typeof item === "string" && item.trim()
  );

  const isVideo = modalMedia?.type === "video";

  return (
    <section id={id} className="project-detail text-white">
      <Container className="font-color section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.header variants={itemVariants} className="project-detail-header">
            <h1 className="project-detail-title display-5 fw-bold font-color mb-0">
              {content.title}
            </h1>
          </motion.header>

          <Row className="project-detail-grid g-4 gx-lg-5 align-items-start">
            <Col lg={7} md={12} className="project-detail-body order-last order-lg-0">
              <motion.div variants={itemVariants}>
                {paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="fs-5 paragraph-justify project-detail-paragraph"
                  >
                    {paragraph}
                  </p>
                ))}

                <div className="project-tech-section">
                  <p className="project-tech-subtitle mb-0">
                    {content.technologiesSubtitle}
                  </p>

                  {content.technologies.map((group) => (
                    <div key={group.label} className="project-tech-group">
                      <p className="project-tech-group-label mb-0">
                        {group.label}
                      </p>
                      <div className="project-tech-tags">
                        {group.tools.split(",").map((tool) => (
                          <span key={tool} className="skill-tag">
                            {tool.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {content.links?.length > 0 && (
                  <nav className="project-links" aria-label={`${content.title} links`}>
                    {content.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-action"
                      >
                        <span>{link.label}</span>
                        <i className="bi bi-arrow-up-right" aria-hidden="true" />
                      </a>
                    ))}
                  </nav>
                )}
              </motion.div>
            </Col>

            <Col
              lg={5}
              md={12}
              className="project-media-col order-first order-lg-0"
            >
              <motion.div variants={itemVariants}>
                <div
                  className="project-media-preview"
                  style={{ backgroundImage: `url(${previewImage})` }}
                  onClick={openModal}
                  onKeyDown={handleMediaKeyDown}
                  role="button"
                  tabIndex={0}
                  aria-label={
                    isVideo
                      ? `Play ${content.title} demo video`
                      : `View ${content.title} screenshot`
                  }
                >
                  {isVideo && (
                    <BsPlayCircle
                      size={52}
                      className="project-media-preview__play"
                      aria-hidden="true"
                    />
                  )}
                  {!isVideo && (
                    <span className="project-media-preview__hint">
                      <i className="bi bi-arrows-fullscreen" aria-hidden="true" />
                      <span>View full size</span>
                    </span>
                  )}
                </div>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>

      <Modal
        show={showModal}
        onHide={closeModal}
        centered
        size={isVideo ? "lg" : "xl"}
        contentClassName={isVideo ? undefined : "bg-transparent border-0"}
      >
        {!isVideo && (
          <Modal.Header closeButton closeVariant="white" className="border-0" />
        )}
        <Modal.Body
          className={`p-0 d-flex justify-content-center ${
            isVideo ? "" : "bg-transparent"
          }`}
        >
          {isVideo ? (
            <video
              src={modalMedia.src}
              controls
              autoPlay
              className="project-modal-video"
            />
          ) : (
            <img
              src={modalMedia.src}
              alt={`${content.title} full screenshot`}
              className="project-modal-image"
            />
          )}
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default ProjectDetail;
