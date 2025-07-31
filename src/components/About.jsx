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
      className="about-section py-5 text-center"
      variants={sectionContainerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <Container className="font-color">
        {/* Main section title */}
        <motion.h2
          variants={itemVariants}
          className="display-5 fw-bold mb-5 mt-5"
        >
          About Me
        </motion.h2>

        {/* Row for two-column layout: About Me text on left, Skills on right */}
        <Row className="justify-content-center align-items-start gx-5 pt-5">
          {/* Left column for "Get to know me!" text */}
          <Col
            lg={6}
            md={12}
            // Uklonjeno justify-content-start jer je div unutra flex-column
            className="text-start mb-5 mb-lg-0 d-flex justify-content-center justify-content-lg-start" // Dodao justify-content-center za mobilni
          >
            <div className="shadow p-4 w-100">
              {" "}
              {/* Dodao w-100 da popuni kolonu */}
              <motion.h3 variants={itemVariants} className="fw-bold mb-5">
                Get to know me!
              </motion.h3>
              <motion.p
                variants={itemVariants}
                className="paragraph-justify fs-5 mb-3"
              >
                I'm a passionate Full-Stack Web Developer, dedicated to building
                and managing robust web applications from concept to deployment.
                My goal is to create seamless digital experiences that
                contribute directly to the success of every product. Feel free
                to explore my work in the Projects section to see what I've been
                creating.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="paragraph-justify fs-5 mb-3"
              >
                Beyond established methodologies, my commitment lies in the
                relentless pursuit of knowledge and continuous skill
                enhancement. I am perpetually expanding my expertise,
                integrating the latest advancements and best practices to
                deliver cutting-edge solutions. If you have a compelling
                opportunity that aligns with my experience and passion, please
                don't hesitate to{" "}
                <a href="#contact" className="fw-bold font-color">
                  contact
                </a>{" "}
                me.
              </motion.p>
            </div>
          </Col>

          {/* Right column for "My Skills" section */}
          <Col
            lg={6}
            md={12}
            className="text-start d-flex justify-content-center justify-content-lg-end"
          >
            {/* NOVI WRAPPER DIV SA ISTIM STILOM KAO LEVA KOLONA */}
            <div className="p-4 w-100 d-flex flex-column align-items-start align-items-lg-end">
              {" "}
              <motion.h3 variants={itemVariants} className="fw-bold mb-3">
                {" "}
                My Skills
              </motion.h3>
              <motion.p
                variants={itemVariants}
                className="fs-5 mt-4 pt-1 paragraph-justify"
              >
                {" "}
                {/* text-lg-end za poravnanje desno na desktopu */}
                These are the tools and technologies I use regularly. I'm
                confident working across the full stack, and always open to
                learning more.
              </motion.p>
              {/* Renders all skills as a single, responsive block */}
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-end gap-3 pt-3">
                {" "}
                {/* justify-content-lg-end za poravnanje tagova desno */}
                {allSkills.map((skill, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="skill-tag rounded px-3 py-2"
                  >
                    {skill.label}
                  </motion.div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default About;
