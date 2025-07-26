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

// Removed SkillCategorySection as it's no longer needed for separate titles.
// function SkillCategorySection({ title, skills }) { ... }

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
          <Col lg={6} md={12} className="text-start mb-5 mb-lg-0">
            {/* Subtitle for About Me section */}
            <motion.h3 variants={itemVariants} className="fw-bold mb-3">
              Get to know me!
            </motion.h3>
            {/* Paragraphs describing personal info */}
            <motion.p variants={itemVariants} className="fs-5 mb-3">
              I'm a passionate Full-Stack Web Developer, dedicated to building
              and managing robust web applications from concept to deployment.
              My goal is to create seamless digital experiences that contribute
              directly to the success of every product. Feel free to explore my
              work in the Projects section to see what I've been creating.
            </motion.p>
            <motion.p variants={itemVariants} className="fs-5 mb-3">
              Beyond coding, I believe in the power of shared knowledge and
              continuous improvement within the Dev Community. You can connect
              with me on LinkedIn to follow my journey and insights into web
              development and programming.
            </motion.p>
            <motion.p variants={itemVariants} className="fs-5">
              I am actively seeking job opportunities where I can contribute my
              skills, learn from new challenges, and grow as a developer. If you
              have a compelling opportunity that aligns with my experience and
              passion, please don't hesitate to{" "}
              <a href="#contact" className="fw-bold font-color">
                contact
              </a>{" "}
              me.
            </motion.p>
          </Col>

          {/* Right column for "My Skills" section */}
          <Col lg={6} md={12} className="text-start">
            {/* Subtitle for My Skills section */}
            <motion.h3 variants={itemVariants} className="fw-bold mb-5">
              My Skills
            </motion.h3>

            {/* Renders all skills as a single, responsive block */}
            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 pt-3">
              {allSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="skill-tag bg-secondary text-dark rounded px-3 py-2"
                >
                  {skill.label}
                </motion.div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default About;
