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
      staggerChildren: 0.1,
    },
  },
};

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
  { label: "Linux" },
  { label: "CI/CD" },
];

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <motion.div
      ref={ref}
      id="about"
      className="section-layout text-center py-5 vh-md-100 d-flex align-items-center justify-content-center"
      variants={sectionContainerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <Container className="font-color">
        <motion.h2
          variants={itemVariants}
          className="display-5 mb-5 fw-bold mt-3 text-start"
        >
          About Me
        </motion.h2>

        <Row className="justify-content-center align-items-start gx-5">
          <Col lg={6} md={12} className="text-starts">
            <div className="w-100 d-flex flex-column align-items-start">
              <motion.h3 variants={itemVariants} className=" mb-4">
                My Skills
              </motion.h3>
              <motion.p
                variants={itemVariants}
                className="fs-5 mt-4 pt-1 paragraph-justify"
              >
                These are the tools and technologies I use regularly. I'm
                confident working across the full stack, and always open to
                learning more.
              </motion.p>
              <div className="d-flex flex-wrap justify-content-start pt-3 mb-4">
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
          <Col lg={6} md={12} className="text-start">
            <div className="shadow w-100 d-flex flex-column align-items-start">
              <motion.h3 variants={itemVariants} className=" mb-4">
                Get to know me!
              </motion.h3>
              <motion.p
                variants={itemVariants}
                className="fs-5 mt-4 pt-1 paragraph-justify"
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
