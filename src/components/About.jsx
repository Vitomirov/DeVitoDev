import React from "react";
import { Container } from "react-bootstrap";
import photoMirror from "../images/photoMirror.jpg";

function About() {
  return (
    <div
      id="about"
      className="hero-section"
      style={{
        backgroundImage: `url(${photoMirror})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Main content */}
      <Container className="hero-content">
        <h2 className="display-5 fw-bold mb-3">About Me</h2>
        <p className="fs-5">
          I'm a self-taught full-stack developer with a passion for clean code,
          modern web technologies, and building things that work beautifully.
        </p>
        <p className="fs-5">
          I work mainly with <strong>React</strong> and <strong>Node.js</strong>
          , and I enjoy turning ideas into responsive, performant, and scalable
          web apps.
        </p>
        <p className="fs-5">
          Beyond coding, I believe in simplicity, curiosity, and the power of
          learning by doing.
        </p>
      </Container>
    </div>
  );
}

export default About;
