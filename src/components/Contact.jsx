import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
// EmailJS will be loaded via CDN, no direct import needed here

function Contact() {
  // useRef hook to get a direct reference to the form DOM element
  const form = useRef();
  // useState hooks for managing form submission messages (success/error)
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // Can be 'success' or 'danger'
  // State to track if the EmailJS library has been loaded
  const [isEmailJsLoaded, setIsEmailJsLoaded] = useState(false);

  // useEffect hook to dynamically load the EmailJS library via CDN
  // This ensures the library is available globally as 'window.emailjs'
  useEffect(() => {
    // Check if the script has already been added to the document to prevent duplicates
    if (!document.getElementById("emailjs-script")) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js";
      script.async = true; // Load the script asynchronously
      script.id = "emailjs-script"; // Assign an ID for easy checking

      // Callback for when the script successfully loads
      script.onload = () => {
        setIsEmailJsLoaded(true);
        console.log("EmailJS script loaded successfully.");
        // Optional: You can initialize EmailJS here if preferred,
        // but it's also common to pass the public key directly to sendForm.
        // window.emailjs.init("YOUR_PUBLIC_KEY");
      };
      // Callback for when the script fails to load
      script.onerror = () => {
        console.error("Failed to load EmailJS script.");
        setMessage("Error loading email service. Please try again later.");
        setMessageType("danger");
      };

      // Append the script element to the document body
      document.body.appendChild(script);
    } else {
      // If the script is already present, just update the loaded state
      setIsEmailJsLoaded(true);
    }
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  // Function to handle the form submission
  const sendEmail = (e) => {
    // Prevent the default form submission behavior (page reload)
    e.preventDefault();

    // Check if EmailJS library is loaded before attempting to send an email
    if (!isEmailJsLoaded || !window.emailjs) {
      setMessage(
        "Email service is not ready. Please wait a moment and try again."
      );
      setMessageType("danger");
      return;
    }

    // Ensure the form reference is valid
    if (!form.current) {
      setMessage("Form error. Please try again.");
      setMessageType("danger");
      return;
    }

    // Call window.emailjs.sendForm to send the email
    // It takes four arguments:
    // 1. Service ID (from your EmailJS dashboard)
    // 2. Template ID (from your EmailJS dashboard)
    // 3. Form element reference (from useRef)
    // 4. Public Key (from your EmailJS dashboard -> Account -> API Keys)
    window.emailjs
      .sendForm(
        // Access window.emailjs as it's loaded globally via CDN
        "service_ez767xc", // Replace with your EmailJS Service ID (e.g., 'service_xxxxxxxx')
        "template_skk8o4o", // Replace with your EmailJS Template ID (e.g., 'template_yyyyyyyy')
        form.current, // The form element to send
        "vQKEcsBiITvI1R4Jq" // Replace with your EmailJS Public Key (e.g., 'user_zzzzzzzzzzzzz')
      )
      .then(
        (result) => {
          // Log success and display a success message to the user
          console.log("Email successfully sent!", result.text);
          setMessage("Your message has been sent successfully!");
          setMessageType("success");
          // Optionally, reset the form after successful submission
          form.current.reset();
        },
        (error) => {
          // Log error and display an error message to the user
          console.error("EmailJS Error:", error.text);
          setMessage("Failed to send your message. Please try again later.");
          setMessageType("danger");
        }
      );

    // Clear messages after a few seconds for better user experience
    setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, 5000);
  };

  return (
    // Main container for the contact section, using Bootstrap classes for styling
    <div className="py-5 bg-light" id="contact">
      <Container>
        {/* Section title */}
        <h2 className="text-center fw-bold mb-4">Contact Me</h2>
        <Row className="align-items-stretch">
          {/* Social/contact info - Left column */}
          <Col md={6} className="mb-4 mb-md-0">
            <div className="bg-white p-4 rounded shadow-sm h-100">
              <h4 className="fw-bold mb-3">Get in Touch</h4>

              <p className="mb-2">
                {/* Email address with Bootstrap Icon */}
                <i className="bi bi-envelope-fill text-primary me-2"></i>
                <a
                  href="mailto:dejan.vitomirov@gmail.com"
                  className="text-dark"
                >
                  dejan.vitomirov@gmail.com
                </a>
              </p>

              <p className="mb-2">
                {/* LinkedIn profile link with Bootstrap Icon */}
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
                {/* GitHub profile link with Bootstrap Icon */}
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

          {/* Contact form - Right column */}
          <Col md={6}>
            <div className="bg-white p-4 rounded shadow-sm h-100">
              {/* Display messages (success/error) based on submission status */}
              {message && (
                <Alert variant={messageType} className="mb-3">
                  {message}
                </Alert>
              )}

              {/* Form for sending emails, linked to sendEmail function */}
              <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Your Name</Form.Label>
                  {/* Name attribute must match {{name}} in your EmailJS template */}
                  <Form.Control type="text" name="name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Your Email</Form.Label>
                  {/* Name attribute must match {{email}} in your EmailJS template */}
                  <Form.Control type="email" name="email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  {/* Name attribute must match {{message}} in your EmailJS template */}
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
