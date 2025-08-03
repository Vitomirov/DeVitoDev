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
import { itemVariants, createSlideUpVariant } from "./Animations";

const MotionBootstrapForm = motion(BootstrapForm);

function Contact() {
  // Ref za praćenje vidljivosti sekcije na ekranu radi animacije
  const sectionRef = useRef(null);
  // Ref za pristup HTML formi i manipulaciju sa njom (reset, slanje)
  const form = useRef();
  // Detekcija da li je sekcija u viewportu, animacija se pokreće samo jednom
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Stanje za prikaz poruke korisniku (uspeh, greška)
  const [message, setMessage] = useState("");
  // Tip poruke (success, danger...)
  const [messageType, setMessageType] = useState("");
  // Praćenje da li je EmailJS biblioteka učitana
  const [isEmailJsLoaded, setIsEmailJsLoaded] = useState(false);

  // Funkcija za prikaz poruke korisniku i automatsko skrivanje nakon 5 sekundi
  const showMessage = (text, type) => {
    setMessage(text);
    setMessageType(type);
    setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, 5000);
  };

  // Dinamičko učitavanje EmailJS skripte sa CDN-a, izbegava se višestruko učitavanje
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

  // Efekat koji se izvršava jednom, učitava EmailJS skriptu i inicijalizuje je sa javnim ključem iz .env
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

  // Handler za uspešno poslatu poruku: prikazuje poruku i resetuje formu
  const handleEmailSuccess = () => {
    showMessage("Your message has been sent successfully!", "success");
    form.current.reset();
  };

  // Handler za grešku pri slanju poruke: prikazuje grešku u konzoli i korisniku
  const handleEmailError = (error) => {
    console.error("EmailJS Error:", error.text);
    showMessage(
      "Failed to send your message. Please try again later.",
      "danger"
    );
  };

  // Funkcija koja se poziva pri slanju forme: proverava spremnost EmailJS servisa i šalje formu
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

  // Definicija polja forme koja će biti renderovana, olakšava održavanje i proširenje
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

  // Varijante animacije za celu sekciju kontakta
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
    // Glavni wrapper div sa gradient pozadinom i id-jem za navigaciju
    <div className="py-5 contact-gradient" id="contact">
      {/* motion.div koji obuhvata sav sadržaj i upravlja animacijom sekcije */}
      <motion.div
        ref={sectionRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={contactSectionVariants}
      >
        <Container>
          {/* Naslov sekcije Kontakt */}
          <motion.h2
            className="text-center fw-bold mb-1 mt-5"
            variants={itemVariants}
          >
            Contact Me
          </motion.h2>

          {/* Prikaz poruke uspeha ili greške ako postoji */}
          {message && (
            <Alert variant={messageType} className="mb-4 text-center">
              {message}
            </Alert>
          )}

          {/* Glavni red sa formom centriranom i belim tekstom */}
          <Row className="d-flex justify-content-center text-white">
            <Col md={8} lg={8}>
              {/* Animirani kontejner oko forme za efekat pojavljivanja */}
              <motion.div
                className="rounded mx-auto p-2 text-dark"
                variants={createSlideUpVariant(0.1)}
              >
                {/* Animirana Bootstrap forma */}
                <MotionBootstrapForm
                  ref={form}
                  onSubmit={sendEmail}
                  initial="hidden"
                  animate="visible"
                >
                  {/* Renderovanje svih polja iz formFields niza sa animacijom */}
                  {formFields.map((field, idx) => (
                    <motion.div
                      key={field.controlId || field.label}
                      variants={createSlideUpVariant(0.1 + idx * 0.2)}
                    >
                      {/* Input polja */}
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

                      {/* Textarea polje */}
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

                      {/* Dugme za slanje */}
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
