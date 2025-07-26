// src/components/Contact.jsx
import React, { useRef, useState, useEffect } from "react";
import {
  Container,
  Alert,
  Button,
  Form as BootstrapForm,
  // Uklonjeni su Row i Col jer ih ne koristimo za centriranje forme na ovaj način
} from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import { itemVariants, createSlideUpVariant } from "./Animations";

// Kreiramo Motion verziju Bootstrap forme
const MotionBootstrapForm = motion(BootstrapForm);

function Contact() {
  const sectionRef = useRef(null);
  const form = useRef();
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // EmailJS status i poruke
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isEmailJsLoaded, setIsEmailJsLoaded] = useState(false);

  // Funkcija za prikaz poruke
  const showMessage = (text, type) => {
    setMessage(text);
    setMessageType(type);
    setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, 5000);
  };

  // Učitavanje EmailJS skripte
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
      variant: "secondary",
      buttonType: "submit",
    },
  ];

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
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
      }}
      className="py-5 bg-light"
      id="contact"
    >
      <Container>
        <motion.h2 className="text-center fw-bold mb-4" variants={itemVariants}>
          Contact Me
        </motion.h2>

        {/* Prikaz poruke ako postoji */}
        {message && (
          <Alert variant={messageType} className="mb-4 text-center">
            {message}
          </Alert>
        )}

        {/* Forma centrirana pomoću mx-auto i ograničene širine */}
        <motion.div
          className="p-4 rounded shadow-lg mx-auto" // mx-auto za horizontalno centriranje
          style={{ maxWidth: "800px", width: "100%" }} // maxWidth za desktop, width: 100% za responsivnost
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
                    <BootstrapForm.Label>{field.label}</BootstrapForm.Label>
                    <BootstrapForm.Control
                      type={field.inputType}
                      name={field.name}
                      required={field.required}
                    />
                  </BootstrapForm.Group>
                )}

                {field.type === "textarea" && (
                  <BootstrapForm.Group
                    className="mb-3"
                    controlId={field.controlId}
                  >
                    <BootstrapForm.Label>{field.label}</BootstrapForm.Label>
                    <BootstrapForm.Control
                      as="textarea"
                      rows={field.rows}
                      name={field.name}
                      required={field.required}
                    />
                  </BootstrapForm.Group>
                )}

                {field.type === "button" && (
                  <Button
                    variant={field.variant}
                    type={field.buttonType}
                    className="col-3"
                  >
                    {field.label}
                  </Button>
                )}
              </motion.div>
            ))}
          </MotionBootstrapForm>
        </motion.div>
      </Container>
    </motion.div>
  );
}

export default Contact;
