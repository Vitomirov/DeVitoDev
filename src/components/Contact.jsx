import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <div className="py-5 bg-light" id="contact">
      <Container>
        <h2 className="text-center fw-bold mb-4">Contact Me</h2>
        <Row className="align-items-stretch">
          {/* Social/contact info - Left */}
          <Col md={6} className="mb-4 mb-md-0">
            <div className="bg-white p-4 rounded shadow-sm h-100">
              <h4 className="fw-bold mb-3">Get in Touch</h4>

              <p className="mb-2">
                <i className="bi bi-envelope-fill text-primary me-2"></i>
                <a
                  href="mailto:dejan.vitomirov@gmail.com"
                  className="text-dark"
                >
                  dejan.vitomirov@gmail.com
                </a>
              </p>

              <p className="mb-2">
                <i className="bi bi-linkedin text-primary me-2"></i>
                <a
                  href="https://www.linkedin.com/in/dejan-vitomirov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark"
                >
                  LinkedIn Profile
                </a>
              </p>

              <p className="mb-0">
                <i className="bi bi-github text-primary me-2"></i>
                <a
                  href="https://github.com/Vitomirov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark"
                >
                  GitHub Profile
                </a>
              </p>
            </div>
          </Col>

          {/* Contact form - Right */}
          <Col md={6}>
            <div className="bg-white p-4 rounded shadow-sm h-100">
              <Form
                action="mailto:dejan.vitomirov@gmail.com"
                method="POST"
                encType="text/plain"
              >
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" name="name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control type="email" name="email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    required
                  />
                </Form.Group>

                <Button variant="info" type="submit">
                  Send
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
