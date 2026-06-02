import { Link } from "react-router-dom";

function ProjectBackLink() {
  return (
    <Link
      to={{ pathname: "/", hash: "myWorks" }}
      className="project-back-link"
    >
      <i className="bi bi-arrow-left" aria-hidden="true" />
      Back to My Works
    </Link>
  );
}

export default ProjectBackLink;
