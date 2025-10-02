import React, { useRef, useState, useEffect } from "react";
import {
  Container,
  Alert,
  Row,
  Col,
  Button,
  Form as BootstrapForm,
} from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import {
  itemVariants,
  createSlideUpVariant,
} from "../components/animations/Animations";

const MotionBootstrapForm = motion(BootstrapForm);

function Contact() {
  const sectionRef = useRef(null);
  const form = useRef();
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isEmailJsLoaded, setIsEmailJsLoaded] = useState(false);

  const showMessage = (text, type) => {
    setMessage(text);
    setMessageType(type);
    setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, 5000);
  };

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
      document.body.appendChild(script);
      script.onload = resolve;
      script.onerror = reject;
    });
  };

  useEffect(() => {
    loadEmailJsScript()
      .then(() => {
        setIsEmailJsLoaded(true);
        if (window.emailjs && import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
          window.emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
        }
      })
      .catch(() => {
        console.error("Failed to load EmailJS script.");
        showMessage(
          "Error loading email service. Please try again later.",
          "danger"
        );
      });
  }, []);

  const handleEmailSuccess = () => {
    showMessage("Your message has been sent successfully!", "success");
    form.current.reset();
  };

  const handleEmailError = (error) => {
    console.error("EmailJS Error:", error.text);
    showMessage(
      "Failed to send your message. Please try again later.",
      "danger"
    );
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!isEmailJsLoaded || !window.emailjs) {
      showMessage(
        "Email service is not ready. Please wait and try again.",
        "danger"
      );
      return;
    }
    if (!form.current) {
      showMessage("Form error. Please try again.", "danger");
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    if (!serviceId || !templateId) {
      showMessage("Email service configuration missing.", "danger");
      return;
    }

    window.emailjs
      .sendForm(serviceId, templateId, form.current)
      .then(handleEmailSuccess, handleEmailError);
  };

  const formFields = [
    {
      type: "input",
      placeholder: "Name",
      controlId: "formName",
      name: "name",
      inputType: "text",
      required: true,
    },
    {
      type: "input",
      placeholder: "Email",
      controlId: "formEmail",
      name: "email",
      inputType: "email",
      required: true,
    },
    {
      type: "textarea",
      placeholder: "Enter your nessage...",
      controlId: "formMessage",
      name: "message",
      rows: 4,
      required: true,
    },
    {
      type: "button",
      label: "Send Message",
      variant: "secondary",
      buttonType: "submit",
    },
  ];

  const contactSectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="py-5 contact-gradient" id="contact">
      <motion.div
        ref={sectionRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={contactSectionVariants}
      >
        <Container>
          <motion.h2
            className="text-center fw-bold mb-1 mt-5"
            variants={itemVariants}
          >
            Contact Me
          </motion.h2>

          {message && (
            <Alert variant={messageType} className="mb-4 text-center">
              {message}
            </Alert>
          )}

          <Row className="d-flex justify-content-center text-white">
            <Col md={8} lg={8}>
              <motion.div
                className="rounded mx-auto p-2 text-dark"
                variants={createSlideUpVariant(0.1)}
              >
                <MotionBootstrapForm
                  ref={form}
                  onSubmit={sendEmail}
                  initial="hidden"
                  animate="visible"
                >
                  {formFields.map((field, idx) => (
                    <motion.div
                      key={field.controlId || field.label}
                      variants={createSlideUpVariant(0.1 + idx * 0.2)}
                    >
                      {field.type === "input" && (
                        <BootstrapForm.Group
                          className="mb-3"
                          controlId={field.controlId}
                        >
                          <BootstrapForm.Control
                            className="contact-form"
                            type={field.inputType}
                            name={field.name}
                            required={field.required}
                            placeholder={field.placeholder}
                          />
                        </BootstrapForm.Group>
                      )}

                      {field.type === "textarea" && (
                        <BootstrapForm.Group
                          className="mb-3"
                          controlId={field.controlId}
                        >
                          <BootstrapForm.Control
                            className="contact-form"
                            as="textarea"
                            rows={field.rows}
                            name={field.name}
                            required={field.required}
                            placeholder={field.placeholder}
                          />
                        </BootstrapForm.Group>
                      )}

                      <div className="text-center">
                        {" "}
                        {field.type === "button" && (
                          <Button
                            variant={field.variant}
                            type={field.buttonType}
                            className="custom-button"
                          >
                            {field.label}
                          </Button>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </MotionBootstrapForm>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </div>
  );
}

export default Contact;
