// src/components/EmailForm.jsx
import React, { useRef, useState, useEffect } from "react";
// Importujte Form kao BootstrapForm
import { Form as BootstrapForm, Button, Alert } from "react-bootstrap";
// Importujte motion
import { motion } from "framer-motion";
import { createSlideUpVariant } from "./Animations";

// Kreirajte MotionForm komponentu tako što ćete "umotati" BootstrapForm
// Ovo je ispravan način da se koristi motion sa prilagođenim komponentama
const MotionBootstrapForm = motion(BootstrapForm);

function EmailForm() {
  // Form reference and state variables for message and EmailJS loading
  const form = useRef();
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isEmailJsLoaded, setIsEmailJsLoaded] = useState(false);

  // Function to display a temporary alert message
  const showMessage = (text, type) => {
    setMessage(text);
    setMessageType(type);
    setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, 5000);
  };

  // Function to dynamically load the EmailJS script
  const loadEmailJsScript = () => {
    return new Promise((resolve, reject) => {
      if (document.getElementById("emailjs-script")) {
        resolve(); // Script already exists
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

  // Effect hook to load EmailJS script on component mount
  useEffect(() => {
    loadEmailJsScript()
      .then(() => {
        setIsEmailJsLoaded(true);
        // Initialize EmailJS with the public key from environment variables
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
  }, []); // Empty dependency array ensures it runs only once on mount

  // Callback for successful email submission
  const handleEmailSuccess = () => {
    showMessage("Your message has been sent successfully!", "success");
    form.current.reset(); // Resets form fields
  };

  // Callback for failed email submission
  const handleEmailError = (error) => {
    console.error("EmailJS Error:", error.text);
    showMessage(
      "Failed to send your message. Please try again later.",
      "danger"
    );
  };

  // Handles the form submission event
  const sendEmail = (e) => {
    e.preventDefault();

    // Check if EmailJS is loaded and initialized
    if (!isEmailJsLoaded || !window.emailjs) {
      showMessage(
        "Email service is not ready. Please wait a moment and try again.",
        "danger"
      );
      return;
    }
    // Ensure form reference is available
    if (!form.current) {
      showMessage("Form error. Please try again.", "danger");
      return;
    }

    // Retrieve service and template IDs from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    // Check for missing EmailJS configuration
    if (!serviceId || !templateId) {
      showMessage(
        "Email service configuration missing. Please check settings.",
        "danger"
      );
      return;
    }

    // Send form data using EmailJS
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
      {/* Conditional rendering for alert messages */}
      {message && (
        <Alert variant={messageType} className="mb-3">
          {message}
        </Alert>
      )}

      {/* Main form element with Framer Motion animation properties */}
      <MotionBootstrapForm
        ref={form}
        onSubmit={sendEmail}
        initial="hidden" // Form starts hidden
        animate="visible" // Triggers animation to visible state when component mounts
      >
        {/* Map through formFields array to render each input/textarea/button */}
        {formFields.map((field, idx) => (
          <motion.div
            key={field.controlId || field.label} // Unique key for list rendering
            // Sequential slide-up animation with increasing delay (0.1s + 0.2s per item)
            variants={createSlideUpVariant(0.1 + idx * 0.2)}
          >
            {/* Render input field */}
            {field.type === "input" && (
              <BootstrapForm.Group className="mb-3" controlId={field.controlId}>
                <BootstrapForm.Label>{field.label}</BootstrapForm.Label>
                <BootstrapForm.Control
                  type={field.inputType}
                  name={field.name}
                  required={field.required}
                />
              </BootstrapForm.Group>
            )}

            {/* Render textarea field */}
            {field.type === "textarea" && (
              <BootstrapForm.Group className="mb-3" controlId={field.controlId}>
                <BootstrapForm.Label>{field.label}</BootstrapForm.Label>
                <BootstrapForm.Control
                  as="textarea"
                  rows={field.rows}
                  name={field.name}
                  required={field.required}
                />
              </BootstrapForm.Group>
            )}

            {/* Render submit button */}
            {field.type === "button" && (
              <Button variant={field.variant} type={field.buttonType}>
                {field.label}
              </Button>
            )}
          </motion.div>
        ))}
      </MotionBootstrapForm>
    </>
  );
}

export default EmailForm;
