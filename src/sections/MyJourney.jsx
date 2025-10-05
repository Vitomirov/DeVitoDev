import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function MyJourney() {
  return (
    <section
      id="myJourney"
      className="section-layout text-center py-5 vh-md-100 d-flex align-items-center justify-content-center"
    >
      <Container className="font-color text-gradient">
        {/* Naslov */}
        <h2 className="display-5 mb-5 fw-bold mt-3 text-start text-gradient">
          My Journey
        </h2>

        <Row className="justify-content-center align-items-start gx-5">
          {/* Leva kolona */}
          <Col lg={6} md={12} className="text-start">
            <div className="w-100 d-flex flex-column align-items-start">
              <p className="fs-5 mt-4 pt-1 paragraph-justify">
                I started coding out of curiosity, experimenting with ideas in
                the console just to see them work. But I realized I wanted more.
                I wanted to see my creations online, fully interactive,
                something tangible that people could actually use. That
                curiosity led me to dive into full-stack development, learning
                both frontend and backend to turn ideas into complete,
                real-world products.
              </p>
              <p className="fs-5 mt-4 pt-1 paragraph-justify">
                Along the way, my work in market research and mortgage loan
                processing showed me firsthand how inefficient some systems can
                be. Instead of just accepting them, I wanted to build better
                solutions. That drive is what made me fully commit to web
                development—and today, creating efficient, user-friendly
                applications is what excites me every day.
              </p>
            </div>
          </Col>

          {/* Desna kolona */}
          <Col lg={6} md={12} className="text-start">
            <div className="shadow w-100 d-flex flex-column align-items-start pt-3">
              <h3 className="fs-5 mt-2 paragraph-justify lh-lg">
                I love turning ideas into visible, usable products. Seeing a
                concept evolve from a simple thought into a fully functional
                application is what motivates me every day as a developer.
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default MyJourney;
