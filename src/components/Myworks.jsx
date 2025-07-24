import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion"; // Uvezi motion i useInView
import { useRef } from "react"; // Uvezi useRef

// Uvozimo potrebne varijante iz Animations.jsx
import {
  fadeIn, // Za celu sekciju (ako želimo generalni fade-in)
  popUpAndFadeIn, // Novi efekat za projekat/dugme
  itemVariants, // Za naslov i paragraf
} from "./Animations";

function MyWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // Animira se jednom kada je 50% vidljivo

  // Varijanta za celu My Works sekciju (roditelj za h2, p i ul)
  const myWorksSectionVariants = {
    hidden: { opacity: 0, y: 20 }, // Malo se podiže i fade-in
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2, // Za postepeno pojavljivanje naslova, opisa i linka
      },
    },
  };

  return (
    <motion.div
      ref={ref} // Poveži ref sa ovim divom
      variants={myWorksSectionVariants} // Primeni varijantu za celu stranicu
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Animiraj kada je u vidnom polju
      id="myWorks"
      className="myWorks-section text-center"
    >
      {/* Main Content */}
      <Container className="component-content font-color">
        {/* Naslov sekcije */}
        <motion.h2 variants={itemVariants} className="display-5 fw-bold mb-4">
          My Works
        </motion.h2>
        {/* Opisni paragraf */}
        <motion.p variants={itemVariants} className="fs-5 mb-5">
          The one I'm most proud of — and just the start of what’s coming next.
        </motion.p>

        {/* Lista projekata (trenutno samo jedan) */}
        <motion.ul variants={itemVariants} className="list-unstyled fs-4">
          {/* Pojedinačni projekt/dugme koristi novi popUpAndFadeIn efekat */}
          <motion.li variants={popUpAndFadeIn} className="mb-3">
            <Link
              to="/projects/WarrantyWallet"
              className="myWorkButton font-color"
            >
              Warranty Wallet
            </Link>
          </motion.li>
        </motion.ul>
      </Container>
    </motion.div>
  );
}

export default MyWorks;
