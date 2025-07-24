// src/components/Contact.jsx
import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import {
  fadeIn,
  containerVariants, // Available, but not directly used here for individual elements
  itemVariants, // Used for the "Contact Me" title
  createSlideUpVariant, // Key for sequential delays
} from "./Animations";
import EmailForm from "./EmailForm"; // EmailForm component, will handle its own animations independently

function Contact() {
  // Define contact links data
  const contactLinks = [
    {
      icon: "bi-linkedin",
      label: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/dejan-vitomirov/",
    },
    {
      icon: "bi-github",
      label: "GitHub Profile",
      href: "https://github.com/Vitomirov",
    },
  ];

  // Ref to observe the entire section
  const sectionRef = useRef(null);
  // useInView to detect when the section enters the viewport
  // Animates once when 10% of the section is visible.
  // This controls the main "Contact Me" title and both columns as a whole.
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Variants for the entire Contact section, controlling its main animation
  const contactSectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1, // Staggering for direct children (h2, Row)
      },
    },
  };

  // Variants for the left column (contact links)
  const leftColumnVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        // Individual P tags will have their own variants and delays
      },
    },
  };

  // Variants for the right column (EmailForm container)
  const rightColumnVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4, // Small delay for this column to appear after the left column
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={sectionRef} // Connect ref to the main div
      variants={contactSectionVariants} // Apply main section animation
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Animate based on viewport visibility
      className="py-5 bg-light"
      id="contact"
    >
      <Container>
        {/* Main section title, animated as a child of contactSectionVariants */}
        <motion.h2
          className="text-center fw-bold mb-4"
          variants={itemVariants} // Animation for the "Contact Me" title
        >
          Contact Me
        </motion.h2>

        <Row className="align-items-stretch">
          {/* Left side column with contact links */}
          <Col md={6} className="mb-4 mb-md-0">
            <motion.div
              className="bg-white p-4 rounded shadow-sm h-100"
              variants={leftColumnVariants} // Apply animation for the entire left column
              // Initial and Animate states are controlled by the parent (ContactSectionVariants)
            >
              <motion.h4
                className="fw-bold mb-3"
                variants={createSlideUpVariant(0.1)} // "Get in Touch" title appears first (0.1s delay)
              >
                Get in Touch
              </motion.h4>

              {contactLinks.map(({ icon, label, href }, idx) => (
                <motion.p
                  key={idx}
                  className="mb-2"
                  // Links appear sequentially with increasing delay (0.2s + idx * 0.1s)
                  variants={createSlideUpVariant(0.2 + idx * 0.1)}
                >
                  <i className={`bi ${icon} text-primary me-2`}></i>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark"
                  >
                    {label}
                  </a>
                </motion.p>
              ))}
            </motion.div>
          </Col>

          {/* Right side column with the email form */}
          <Col md={6}>
            <motion.div
              className="bg-white p-4 rounded shadow-sm h-100"
              variants={rightColumnVariants} // Apply animation for the entire right column
              // Initial and Animate states are controlled by the parent (ContactSectionVariants)
            >
              {/* EmailForm component is rendered inside this animated column.
                  EmailForm will handle its own internal field animations. */}
              <EmailForm />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default Contact;
