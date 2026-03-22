import { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import { portfolioContent } from "../content/content";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const sectionContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.8,
    },
  },
};

function MyJourney() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  const { myJourney } = portfolioContent;

  return (
    <motion.div
      id="myJourney"
      ref={ref}
      variants={sectionContainerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="section-layout text-center py-5 vh-md-100 d-flex align-items-center justify-content-center"
    >
      <Container className="font-color">
        <motion.h2
          variants={itemVariants}
          className="display-5 mb-5 fw-bold mt-3 text-start"
        >
          {myJourney.title}
        </motion.h2>

        <Row className="justify-content-center align-items-start gx-5">
          {/* Leva strana */}
          <Col lg={6} md={12} className="text-start">
            <div className="w-100 d-flex flex-column align-items-start">
              <motion.p
                variants={itemVariants}
                className="fs-5 mt-4 pt-1 paragraph-justify"
              >
                {myJourney.p1}
              </motion.p>

              <div className="shadow w-100 d-flex flex-column align-items-start">
                <motion.h4
                  variants={itemVariants}
                  className="mt-0 paragraph-justify lh-sm text-blue"
                >
                  {myJourney.quoteLeft}
                </motion.h4>
              </div>
            </div>
          </Col>

          {/* Desna Strana */}
          <Col lg={6} md={12} className="text-start">
            <div className="shadow w-100 d-flex flex-column align-items-start pt-3">
              <motion.h4
                variants={itemVariants}
                className="mt-2 paragraph-justify lh-sm"
              >
                {myJourney.quoteRight}
              </motion.h4>

              <motion.p
                variants={itemVariants}
                className="fs-5 paragraph-justify"
              >
                {myJourney.p2}
              </motion.p>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default MyJourney;