import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

function Contact() {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isEmailJsLoaded, setIsEmailJsLoaded] = useState(false);

  // Helper function to display messages with a timeout
  const showMessage = (text, type) => {
    setMessage(text);
    setMessageType(type);
    setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, 5000);
  };

  // Dynamically loads the EmailJS script if not already loaded
  const loadEmailJsScript = () => {
    return new Promise((resolve, reject) => {
      if (document.getElementById("emailjs-script")) {
        resolve();
        return;
      }

      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
      script.async = true;
      script.id = "emailjs-script";

      script.onload = resolve;
      script.onerror = reject;

      document.body.appendChild(script);
    });
  };

  // Load the EmailJS script on initial render
  useEffect(() => {
    loadEmailJsScript()
      .then(() => {
        setIsEmailJsLoaded(true);
        console.log("EmailJS script loaded successfully.");
      })
      .catch(() => {
        console.error("Failed to load EmailJS script.");
        showMessage(
          "Error loading email service. Please try again later.",
          "danger"
        );
      });
  }, []);

  // Handles successful email submission
  const handleEmailSuccess = (result) => {
    console.log("Email successfully sent!", result.text);
    showMessage("Your message has been sent successfully!", "success");
    form.current.reset();
  };

  // Handles error during email submission
  const handleEmailError = (error) => {
    console.error("EmailJS Error:", error.text);
    showMessage(
      "Failed to send your message. Please try again later.",
      "danger"
    );
  };

  // Called when the form is submitted
  const sendEmail = (e) => {
    e.preventDefault();

    if (!isEmailJsLoaded || !window.emailjs) {
      showMessage(
        "Email service is not ready. Please wait a moment and try again.",
        "danger"
      );
      return;
    }

    if (!form.current) {
      showMessage("Form error. Please try again.", "danger");
      return;
    }

    window.emailjs
      .sendForm(
        "service_ez767xc",
        "template_skk8o4o",
        form.current,
        "vQKEcsBiITvI1R4Jq"
      )
      .then(handleEmailSuccess, handleEmailError);
  };

  // Contact links to display (email, LinkedIn, GitHub)
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

  return (
    <div className="py-5 bg-light" id="contact">
      <Container>
        <h2 className="text-center fw-bold mb-4">Contact Me</h2>
        <Row className="align-items-stretch">
          <Col md={6} className="mb-4 mb-md-0">
            <div className="bg-white p-4 rounded shadow-sm h-100">
              <h4 className="fw-bold mb-3">Get in Touch</h4>

              {/* Render contact links */}
              {contactLinks.map(({ icon, label, href }, idx) => (
                <p key={idx} className="mb-2">
                  <i className={`bi ${icon} text-primary me-2`}></i>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark"
                  >
                    {label}
                  </a>
                </p>
              ))}
            </div>
          </Col>

          <Col md={6}>
            <div className="bg-white p-4 rounded shadow-sm h-100">
              {/* Show alert message if exists */}
              {message && (
                <Alert variant={messageType} className="mb-3">
                  {message}
                </Alert>
              )}

              {/* Contact form */}
              <Form ref={form} onSubmit={sendEmail}>
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
