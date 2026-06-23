import { useRef } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  containerVariants,
  itemVariants,
} from "../components/animations/animations";
import { portfolioContent } from "../content/content";

function MyWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });
  const { myWorks } = portfolioContent;

  return (
    <motion.section
      id="myWorks"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="section-layout py-5 vh-md-100 d-flex align-items-center justify-content-center"
      aria-labelledby="myWorks-heading"
    >
      <Container className="font-color section-container">
        <motion.header variants={itemVariants} className="myWorks-header">
          <h2
            id="myWorks-heading"
            className="display-5 mb-4 fw-bold mt-3 text-start font-color"
          >
            {myWorks.title}
          </h2>
        </motion.header>

        <motion.ul
          variants={itemVariants}
          className="works-list list-unstyled mb-0"
          role="list"
        >
          {myWorks.projects.map((project, index) => (
            <motion.li
              key={project.slug}
              variants={itemVariants}
              className="works-list-item"
            >
              <Link
                to={`/projects/${project.slug}`}
                className="works-link"
                aria-label={`View ${project.title} project details`}
              >
                <span className="works-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="works-body">
                  <span className="works-name">{project.title}</span>
                  <span className="works-description paragraph-justify">
                    {project.description}
                  </span>
                </span>

                <span className="works-action" aria-hidden="true">
                  <span className="works-action-label">Explore</span>
                  <i className="bi bi-arrow-up-right works-action-icon" />
                </span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </motion.section>
  );
}

export default MyWorks;
