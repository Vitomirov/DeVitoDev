import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import warrantyWalletImage from "../images/WarrantyWalletScreenshot.PNG"; // ISPRAVLJENO: Uklonjen je dodatni 'PNG' iz naziva fajla

// Uvozimo potrebne varijante iz Animations.jsx
import {
  popUpAndFadeIn, // Za projekat/karticu
  itemVariants, // Za naslov i paragraf
} from "./Animations";

function MyWorks() {
  const ref = useRef(null);
  // Animation triggers once when 50% of the component is in view
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // Varijanta za celu My Works sekciju (roditelj za h2, p i sadržaj projekata)
  const myWorksSectionVariants = {
    hidden: { opacity: 0, y: 20 }, // Starts invisible and slightly below its final position
    visible: {
      opacity: 1,
      y: 0, // Slides up to its final position
      transition: {
        duration: 0.8, // Animation duration
        ease: "easeOut", // Easing function
        staggerChildren: 0.2, // Delay between each child element's animation
      },
    },
  };

  // Array of project data. Add more objects to this array to display additional projects.
  const projects = [
    {
      id: 1, // Unique ID for React's key prop
      title: "Warranty Wallet",
      description:
        "A full-stack application for managing product warranties and receipts digitally. Built with React, Node.js, Express, and MySQL.",
      image: warrantyWalletImage, // Uses the imported local image
      link: "/projects/WarrantyWallet",
    },
  ];

  return (
    <motion.div
      ref={ref}
      variants={myWorksSectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      id="myWorks"
      className="myWorks-section py-2 dark-bg" // Adds vertical padding and aligns text to start
    >
      {/* Container for the main content, ensuring it's responsive and has padding */}
      {/* Added ps-lg-5 for indentation on large screens for the whole container content */}
      <Container className="font-color ps-lg-5 help">
        {/* Section title */}
        <motion.h2 variants={itemVariants} className="display-5 fw-bold mb-4">
          My Works
        </motion.h2>
        {/* Introductory paragraph for the section */}
        <motion.p variants={itemVariants} className="fs-5 mb-5">
          The ones I'm most proud of — and just the start of what’s coming next.
        </motion.p>

        {/* Row to contain project cards, using Bootstrap's gutter (g-4) for spacing */}
        {/* justify-content-center will center the column(s) if they don't fill the row */}
        <Row className="justify-content-start g-4 mb-5">
          {/* Maps through the 'projects' array to render each project as a Card */}
          {projects.map((project) => (
            <Col
              key={project.id}
              lg={projects.length === 1 ? 7 : 4} // Dynamically set width for single vs multiple projects
              md={6}
              sm={12}
            >
              {/* motion.div for individual card animation, h-100 ensures consistent height */}
              <motion.div variants={popUpAndFadeIn} className="h-100">
                {/* Project Card component with styling and h-100 for consistent height */}
                <Card className="project-card shadow-lg border-0 rounded-3 h-100">
                  {/* Project image */}
                  <Card.Img
                    variant="top"
                    src={project.image}
                    alt={project.title}
                    className="project-card-image"
                  />
                  {/* Card body containing title, description, and button */}
                  <Card.Body className="d-flex flex-column">
                    {/* Project title */}
                    <Card.Title className="h4 fw-bold mb-2">
                      {project.title}
                    </Card.Title>
                    {/* Project description, flex-grow-1 makes it take all available vertical space */}
                    <Card.Text className="text-muted mb-3 flex-grow-1">
                      {project.description}
                    </Card.Text>
                    {/* View Project button, using Link from react-router-dom and mt-auto to push it to the bottom */}
                    <Button
                      as={Link} // Renders the Button as a Link component
                      to={project.link}
                      variant="" // No default Bootstrap variant, relying on custom-button class
                      className="custom-button w-100 mt-auto" // w-100 makes the button full width, mt-auto pushes it to bottom
                    >
                      View Project
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Optional additional content below the project cards */}
        <motion.div variants={itemVariants} className="mt-5">
          <p className="fs-5">
            More projects are currently under development. Stay tuned for
            updates!
          </p>
          <p className="fs-5">
            In the meantime, feel free to explore my code on{" "}
            <a
              href="https://github.com/Vitomirov"
              target="_blank" // Opens link in a new tab
              rel="noopener noreferrer" // Security best practice for target="_blank"
              className="fw-bold font-color"
            >
              GitHub
            </a>
            .
          </p>
        </motion.div>
      </Container>
    </motion.div>
  );
}

export default MyWorks;
