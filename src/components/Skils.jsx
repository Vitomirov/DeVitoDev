import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import photo from "../images/photo.jpg"; // ← your new background image

function Skills() {
  return (
    <div
      id="skills"
      className="hero-section"
      style={{
        backgroundImage: `url(${photo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <Container className="hero-content">
        <h2 className="display-5 fw-bold mb-4">Skills & Technologies</h2>
        <p className="fs-5 mb-5">
          These are the tools and technologies I use regularly. I'm confident
          working across the full stack, and always open to learning more.
        </p>

        <Row>
          <Col md={6} lg={3} className="mb-4">
            <h4 className="fw-bold">Frontend</h4>
            <ul className="fs-6">
              <li>React.js (Hooks, Router)</li>
              <li>HTML5, CSS3</li>
              <li>Bootstrap 5</li>
              <li>Basic SCSS</li>
            </ul>
          </Col>

          <Col md={6} lg={3} className="mb-4">
            <h4 className="fw-bold">Backend</h4>
            <ul className="fs-6">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>REST APIs</li>
              <li>JWT authentication</li>
              <li>Multer (file uploads)</li>
            </ul>
          </Col>

          <Col md={6} lg={3} className="mb-4">
            <h4 className="fw-bold">Database</h4>
            <ul className="fs-6">
              <li>MySQL</li>
              <li>Query optimization</li>
              <li>Schema design</li>
            </ul>
          </Col>

          <Col md={6} lg={3} className="mb-4">
            <h4 className="fw-bold">DevOps & Tools</h4>
            <ul className="fs-6">
              <li>Git & GitHub</li>
              <li>Docker / Docker Compose</li>
              <li>DigitalOcean VPS</li>
              <li>Adminer</li>
              <li>Mailgun</li>
              <li>Linux basics</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
