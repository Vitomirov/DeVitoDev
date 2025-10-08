import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useInView } from "framer-motion";

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
      staggerChildren: 1,
    },
  },
};

function MyJourney() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

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
        {/* Naslov */}
        <motion.h2
          variants={itemVariants}
          className="display-5 mb-5 fw-bold mt-3 text-start"
        >
          My Journey
        </motion.h2>

        <Row className="justify-content-center align-items-start gx-5">
          <Col lg={6} md={12} className="text-start">
            <div className="shadow w-100 d-flex flex-column align-items-start pt-3">
              <motion.h3
                variants={itemVariants}
                className=" mt-2 paragraph-justify lh-sm"
              >
                I love turning ideas into visible, usable products. Seeing a
                concept evolve from a simple thought into a fully functional
                application is what motivates me every day as a developer.
              </motion.h3>
            </div>
          </Col>

          <Col lg={6} md={12} className="text-start">
            <div className="w-100 d-flex flex-column align-items-start">
              <motion.p
                variants={itemVariants}
                className="fs-5 mt-4 pt-1 paragraph-justify"
              >
                I started coding out of curiosity, experimenting with ideas in
                the console just to see them work. But I realized I wanted more.
                I wanted to see my creations online, fully interactive,
                something tangible that people could actually use. That
                curiosity led me to dive into full-stack development, learning
                both frontend and backend to turn ideas into complete,
                real-world products.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="fs-5 mt-4 pt-1 paragraph-justify"
              >
                Along the way, my work in market research and mortgage loan
                processing showed me firsthand how inefficient some systems can
                be. Instead of just accepting them, I wanted to build better
                solutions. That drive is what made me fully commit to web
                development—and today, creating efficient, user-friendly
                applications is what excites me every day.
              </motion.p>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default MyJourney;
