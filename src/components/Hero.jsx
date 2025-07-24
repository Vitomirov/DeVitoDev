import { Container } from "react-bootstrap";

function Hero() {
  return (
    <div>
      <Container
        className="component-content text-white text-center d-flex flex-column justify-content-center align-items-center"
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
