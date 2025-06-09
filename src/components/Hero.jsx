import React from "react";
import { Container } from "react-bootstrap";
import photo from "../images/photo.jpg";

function Hero() {
  return (
    <div
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
      <div
        className="hero-overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 2,
        }}
      ></div>

      {/* Main content */}
      <Container
        className="hero-content text-white text-center d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "100vh", position: "relative", zIndex: 3 }}
      >
        <h1 className="display-3 fw-bold mb-3">Dejan Vitomirov</h1>
        <h2 className="h4 mb-4">Web Developer</h2>
        <p className="mt-4 fs-5">
          Building modern, responsive web applications with passion and
          precision.
        </p>
      </Container>
    </div>
  );
}

export default Hero;
