import { Container } from "react-bootstrap";
import { motion, useInView } from "framer-motion"; // Uvezi motion i useInView
import { useRef } from "react"; // Uvezi useRef

import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaLinux,
} from "react-icons/fa";
import {
  SiBootstrap,
  SiExpress,
  SiMysql,
  SiJsonwebtokens,
  SiDigitalocean,
  SiMailgun,
} from "react-icons/si";

// Uvozimo potrebne varijante iz Animations.jsx
import {
  fadeIn, // Za celu Skills sekciju
  itemVariants, // Za naslove, opise i individualne skill iteme
} from "./Animations"; // Pretpostavljamo da ti ne treba slideInFromLeft/Right ovde

const frontendSkills = [
  { icon: <FaJs size={30} />, label: "JavaScript" },
  { icon: <FaReact size={30} />, label: "React.js" },
  { icon: <FaHtml5 size={30} />, label: "HTML5" },
  { icon: <FaCss3Alt size={30} />, label: "CSS3" },
  { icon: <SiBootstrap size={30} />, label: "Bootstrap" },
];

const backendSkills = [
  { icon: <FaNodeJs size={30} />, label: "Node.js" },
  { icon: <SiExpress size={30} />, label: "Express.js" },
  { icon: <SiJsonwebtokens size={30} />, label: "JWT" },
  { icon: <SiMysql size={40} />, label: "MySQL" },
];

const devopsSkills = [
  { icon: <FaGitAlt size={30} />, label: "Git" },
  { icon: <FaDocker size={30} />, label: "Docker" },
  { icon: <SiDigitalocean size={30} />, label: "DigitalOcean" },
  { icon: <SiMailgun size={30} />, label: "Mailgun" },
  { icon: <FaLinux size={30} />, label: "Linux" },
];

const skillCategories = [
  {
    title: "Frontend",
    skills: frontendSkills,
    scrollDirection: "scroll-left",
  },
  {
    title: "Backend",
    skills: backendSkills,
    scrollDirection: "scroll-right",
  },
  {
    title: "DevOps",
    skills: devopsSkills,
    scrollDirection: "scroll-left",
  },
];

// Helper component for rendering one skill category section
// Sada je ovo motion komponenta i prati svoju vidljivost
function SkillSection({ title, skills, scrollDirection }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // Animira se jednom kada je 50% vidljivo

  // Varijanta za SkillSection kontejnere i stagger za skill-iteme
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1, // Blago kašnjenje između svakog skill itema
      },
    },
  };

  return (
    <motion.div
      ref={ref} // Poveži ref sa ovim kontejnerom
      variants={sectionVariants} // Primeni varijantu za ulazak celog odeljka
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Animiraj kada je u vidnom polju
      className="font-color"
    >
      {/* Naslov kategorije - koristi itemVariants */}
      <motion.h4 variants={itemVariants} className="fw-bold mt-5">
        {title}
      </motion.h4>
      <div className={`scrolling-row ${scrollDirection} mt-0 mb-0`}>
        <div className="scrolling-content">
          {[...skills, ...skills].map(({ icon, label }, i) => (
            // Svaki skill-item se animira sa itemVariants
            <motion.div key={i} variants={itemVariants} className="skill-item">
              {icon}
              <p>{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // Za celu Skills sekciju

  // Varijanta za celu Skills sekciju (naslov i uvodni paragraf)
  const skillsPageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2, // Za naslov i uvodni paragraf
      },
    },
  };

  return (
    <motion.div
      ref={ref} // Poveži ref sa ovim divom
      variants={skillsPageVariants} // Primeni varijantu za celu stranicu
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Animiraj kada je u vidnom polju
      id="skills"
      className="skils-section text-center vh-70"
    >
      <Container
        fluid="md"
        className="component-content text-white text-center"
      >
        {/* Naslov sekcije */}
        <motion.h2
          variants={itemVariants} // Koristi itemVariants za naslov
          className="display-sm-5 fw-bold mb-4 font-color"
        >
          Skills & Technologies
        </motion.h2>

        {/* Uvodni paragraf */}
        <motion.p
          variants={itemVariants} // Koristi itemVariants za paragraf
          className="fs-sm-5 mb-2 font-color"
        >
          These are the tools and technologies I use regularly. I'm confident
          working across the full stack, and always open to learning more.
        </motion.p>

        {/* Renderovanje kategorija veština */}
        {skillCategories.map((category, index) => (
          <SkillSection
            key={index}
            title={category.title}
            skills={category.skills}
            scrollDirection={category.scrollDirection}
          />
        ))}
      </Container>
    </motion.div>
  );
}

export default Skills;
