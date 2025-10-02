import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import videoWarrantyWallet from "../../assets/DemoVideos/videoWarrantyWallet.mp4";

// Varijacije animacije za pojedinačne elemente (naslovi, tekst, itd.)
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Varijacije animacije za celu sekciju sa kašnjenjem animacije po elementima
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
  // Ref za detekciju kada komponenta uđe u viewport (koristi se za animaciju)
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    // Glavni kontejner sekcije sa tamnom pozadinom i identifikatorom za navigaciju
    <div
      id="warrantyWallet"
      className="section-layout py-5 text-white vh-md-100 d-flex justify-content-center dark-bg"
    >
      {/* motion.div koji obuhvata ceo sadržaj sekcije i upravlja animacijom */}
      <motion.div
        ref={ref}
        variants={sectionContainerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Container className="font-color">
          {/* Glavni naslov sekcije */}
          <motion.h1
            variants={itemVariants}
            className="display-5 fw-bold mb-5 font-color"
          >
            My Works
          </motion.h1>

          {/* Red koji sadrži tekst i video prikaz aplikacije */}
          <Row className="justify-content-center gx-5">
            {/* Podnaslov projekta */}
            <motion.h2
              variants={itemVariants}
              className="text-start  mb-5 font-color"
            >
              Warranty Wallet App
            </motion.h2>

            {/* Leva kolona sa opisom aplikacije i listom tehnologija */}
            <Col
              lg={6}
              md={12}
              className="order-2 order-md-1 font-color paragraph-justify "
            >
              <motion.div
                variants={itemVariants}
                className="text-start paragraph-justify "
              >
                {/* Opis funkcionalnosti aplikacije */}
                <p className="fs-5 pt-1 paragraph-justify ">
                  Warranty Wallet App is a full-stack web application built for
                  easy and organized warranty tracking. It helps users keep
                  receipts safe and avoid missed warranty expirations by storing
                  everything digitally. Key features include secure user
                  authentication, adding new warranties with image uploads, and
                  browsing or deleting saved warranty entries from a
                  personalized dashboard.
                </p>

                {/* Lista korišćenih tehnologija */}
                <p className="mt-4">
                  <strong>Technologies Used:</strong>
                </p>
                <ul className="list-unstyled ps-3">
                  <li className="mb-2">
                    <strong>• Frontend:</strong> React, Bootstrap, React Router
                    DOM, Axios
                  </li>
                  <li className="mb-2">
                    <strong>• Backend:</strong> Node JS, Express, MySQL, JWT
                  </li>
                </ul>

                {/* Linkovi ka GitHub repozitorijumu i live demo verziji */}
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

            {/* Desna kolona sa prikazom demonstracionog videa */}
            <Col
              lg={6}
              md={12}
              className="order-1 order-md-2 mb-4 mb-md-0 d-flex justify-content-start "
            >
              <motion.div variants={itemVariants}>
                <video
                  src={videoWarrantyWallet}
                  controls
                  muted
                  className="video-element "
                >
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </div>
  );
}

export default WarrantyWallet;
