// src/components/EmailForm.jsx
import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { motion } from "framer-motion";
import { createSlideUpVariant } from "./Animations";

function EmailForm() {
  // Form reference and state variables
  const form = useRef();
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isEmailJsLoaded, setIsEmailJsLoaded] = useState(false);

  // Function to show temporary alert messages
  const showMessage = (text, type) => {
    setMessage(text);
    setMessageType(type);
    setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, 5000);
  };

  // Function to load EmailJS script dynamically
  const loadEmailJsScript = () => {
    return new Promise((resolve, reject) => {
      if (document.getElementById("emailjs-script")) {
        resolve(); // Script already loaded
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

  // Load EmailJS script on component mount
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

  // Handle successful email submission
  const handleEmailSuccess = () => {
    showMessage("Your message has been sent successfully!", "success");
    form.current.reset();
  };

  // Handle failed email submission
  const handleEmailError = (error) => {
    console.error("EmailJS Error:", error.text);
    showMessage(
      "Failed to send your message. Please try again later.",
      "danger"
    );
  };

  // Handle form submission
  const sendEmail = (e) => {
    e.preventDefault();

    // Validate EmailJS readiness
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

    // Get EmailJS service and template IDs
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    // Check for missing configuration
    if (!serviceId || !templateId) {
      showMessage(
        "Email service configuration missing. Please check settings.",
        "danger"
      );
      return;
    }

    // Send form data
    window.emailjs
      .sendForm(serviceId, templateId, form.current)
      .then(handleEmailSuccess, handleEmailError);
  };

  // Array defining form elements for dynamic rendering and animation
  const formFields = [
    {
      type: "input",
      label: "Your Name",
      controlId: "formName",
      name: "name",
      inputType: "text",
      required: true,
    },
    {
      type: "input",
      label: "Your Email",
      controlId: "formEmail",
      name: "email",
      inputType: "email",
      required: true,
    },
    {
      type: "textarea",
      label: "Message",
      controlId: "formMessage",
      name: "message",
      rows: 4,
      required: true,
    },
    {
      type: "button",
      label: "Send",
      variant: "info",
      buttonType: "submit",
    },
  ];

  return (
    <>
      {/* Alert message display */}
      {message && (
        <Alert variant={messageType} className="mb-3">
          {message}
        </Alert>
      )}

      {/* Main form with Framer Motion properties */}
      <motion.Form
        ref={form}
        onSubmit={sendEmail}
        initial="hidden" // Form starts hidden
        animate="visible" // Animates to visible when EmailForm component mounts
      >
        {/* Render form fields and button dynamically with sequential animation */}
        {formFields.map((field, idx) => (
          <motion.div
            key={field.controlId || field.label} // Unique key for list items
            // Sequential slide-up animation with increasing delay (starts at 0.1s + 0.2s per item)
            // Adjust these values (0.1 and 0.2) to fine-tune the speed and stagger effect.
            variants={createSlideUpVariant(0.1 + idx * 0.2)}
          >
            {/* Render input field */}
            {field.type === "input" && (
              <Form.Group className="mb-3" controlId={field.controlId}>
                <Form.Label>{field.label}</Form.Label>
                <Form.Control
                  type={field.inputType}
                  name={field.name}
                  required={field.required}
                />
              </Form.Group>
            )}

            {/* Render textarea field */}
            {field.type === "textarea" && (
              <Form.Group className="mb-3" controlId={field.controlId}>
                <Form.Label>{field.label}</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={field.rows}
                  name={field.name}
                  required={field.required}
                />
              </Form.Group>
            )}

            {/* Render submit button */}
            {field.type === "button" && (
              <Button variant={field.variant} type={field.buttonType}>
                {field.label}
              </Button>
            )}
          </motion.div>
        ))}
      </motion.Form>
    </>
  );
}

export default EmailForm;
