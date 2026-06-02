import Header from "./Header";
import Footer from "./Footer";
import ProjectBackLink from "../projects/ProjectBackLink";

function ProjectPageLayout({ children }) {
  return (
    <div className="project-page dark-bg">
      <Header />
      <main className="project-page-main">
        <div className="project-page-content">{children}</div>
        <ProjectBackLink />
      </main>
      <Footer />
    </div>
  );
}

export default ProjectPageLayout;
