import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useInView } from "framer-motion";

// Framer Motion animation variants for individual items.
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Framer Motion animation variants for section containers, with staggered children.
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

// Consolidated list of all skills.
const allSkills = [
  { label: "HTML" },
  { label: "CSS" },
  { label: "JavaScript" },
  { label: "React" },
  { label: "Bootstrap" },
  { label: "Node.js" },
  { label: "Express.js" },
  { label: "JWT" },
  { label: "MySQL" },
  { label: "Git" },
  { label: "Docker" },
  { label: "DigitalOcean" },
  { label: "Mailgun" },
  { label: "Linux" },
  { label: "CI/CD" },
];

// Main About component combining personal info and skills.
function About() {
  // Ref for observing component's visibility in viewport.
  const ref = useRef(null);
  // Checks if the component is in view for animation triggering.
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    // Main section container with animation variants.
    <motion.div
      ref={ref}
      id="about"
      className="section-layout text-center help"
      variants={sectionContainerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <Container className="font-color help">
        {/* Main section title */}
        <motion.h2
          variants={itemVariants}
          className="display-5 fw-bold mb-5 mt-3 text-start help"
        >
          About Me
        </motion.h2>

        {/* Row for two-column layout: About Me text on right, Skills on left */}
        <Row className="justify-content-center align-items-start gx-5">
          {/* Left column for "My Skills" section */}
          <Col
            lg={6}
            md={12}
            className="text-start d-flex justify-content-center justify-content-lg-end"
          >
            {/* NOVI WRAPPER DIV SA ISTIM STILOM KAO LEVA KOLONA */}
            <div className="w-100 d-flex flex-column align-items-start align-items-lg-end help">
              {" "}
              <motion.h3 variants={itemVariants} className="fw-bold mb-4 help">
                {" "}
                My Skills
              </motion.h3>
              <motion.p
                variants={itemVariants}
                className="fs-5 mt-4 pt-1 paragraph-justify help"
              >
                {" "}
                {/* text-lg-end za poravnanje desno na desktopu */}
                These are the tools and technologies I use regularly. I'm
                confident working across the full stack, and always open to
                learning more.
              </motion.p>
              {/* Renders all skills as a single, responsive block */}
              <div className="d-flex flex-wrap justify-content-start justify-content-lg-start gap-1 pt-3">
                {" "}
                {/* justify-content-lg-end za poravnanje tagova desno */}
                {allSkills.map((skill, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="skill-tag rounded px-1 py-2"
                  >
                    {skill.label}
                  </motion.div>
                ))}
              </div>
            </div>
          </Col>
          {/* Right column for "Get to know me!" text */}
          <Col
            lg={6}
            md={12}
            className="text-start mb-lg-0 d-flex justify-content-center justify-content-lg-start help" // Dodao justify-content-center za mobilni
          >
            <div className="shadow w-100 help">
              {" "}
              {/* Dodao w-100 da popuni kolonu */}
              <motion.h3 variants={itemVariants} className="fw-bold mb-5">
                Get to know me!
              </motion.h3>
              <motion.p
                variants={itemVariants}
                className="fs-5 mt-4 paragraph-justify help"
              >
                I am a passionate Full-Stack Web Developer, dedicated to
                building and managing robust web applications from concept to
                deployment, always striving to create seamless digital
                experiences that contribute directly to product success. My
                commitment extends to the relentless pursuit of knowledge,
                continuously expanding my expertise with the latest advancements
                to deliver cutting-edge solutions, and I invite you to explore
                my work in the Projects section or{" "}
                <a href="#contact" className="fw-bold font-color">
                  contact
                </a>{" "}
                me regarding compelling opportunities.
              </motion.p>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default About;
