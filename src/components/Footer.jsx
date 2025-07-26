function Footer() {
  const handleGitHubClick = () => {
    window.open("https://github.com/Vitomirov", "_target");
  };
  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/dejan-vitomirov/", "_target");
  };

  return (
    <footer className="border-top border-dark py-4">
      <div className="container-fluid">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
          <p className="mb-2 mb-md-0 fs-5 fw-bold ps-md-5">
            &copy; Designed and Developed by Dejan Vitomirov
          </p>
          <div className="me-lg-5 pe-md-5">
            <span
              onClick={handleLinkedinClick}
              style={{ cursor: "pointer", margin: "0 10px" }}
            >
              <i className="bi bi-linkedin social-icon"></i>
            </span>
            <span
              onClick={handleGitHubClick}
              style={{ cursor: "pointer", margin: "0 10px" }}
            >
              <i className="bi bi-github social-icon"></i>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
