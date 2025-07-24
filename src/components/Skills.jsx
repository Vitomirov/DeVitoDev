import { Container } from "react-bootstrap";
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
    skills: frontendSkills, // Corrected: removed curly braces
    scrollDirection: "scroll-left",
  },
  {
    title: "Backend",
    skills: backendSkills, // Corrected: removed typo and curly braces
    scrollDirection: "scroll-right", // Changed to 'scroll-right' as it was originally for Backend for variety
  },
  {
    title: "DevOps",
    skills: devopsSkills, // Corrected: removed curly braces
    scrollDirection: "scroll-left",
  },
];

// Helper component for rendering one skill category section
function SkillSection({ title, skills, scrollDirection }) {
  return (
    <div className="font-color">
      <h4 className="fw-bold mt-5">{title}</h4>
      <div className={`scrolling-row ${scrollDirection} mt-0 mb-0`}>
        <div className="scrolling-content">
          {[...skills, ...skills].map(({ icon, label }, i) => (
            <div key={i} className="skill-item">
              {icon}
              <p>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div id="skills" className="skils-section text-center ">
      <Container
        fluid="md"
        className="component-content text-white text-center "
      >
        <h2 className="display-sm-5 fw-bold mb-4 font-color">
          Skills & Technologies
        </h2>
        <p className="fs-sm-5 mb-2 font-color">
          These are the tools and technologies I use regularly. I'm confident
          working across the full stack, and always open to learning more.
        </p>

        {skillCategories.map((category, index) => (
          <SkillSection
            key={index}
            title={category.title}
            skills={category.skills}
            scrollDirection={category.scrollDirection}
          />
        ))}
      </Container>
    </div>
  );
}

export default Skills;
