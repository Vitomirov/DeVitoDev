function Footer() {
  const handleGitHubClick = () => {
    window.open("https://github.com/Vitomirov", "_target");
  };
  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/dejan-vitomirov/", "_target");
  };

  return (
    <footer className="border-top border-dark py-4">
      <div className="container-fluid text-center">
        <p className="mb-2 mb-md-0 fs-5 fw-bold ps-md-5">
          &copy; Designed and Developed by Dejan Vitomirov
        </p>
      </div>
    </footer>
  );
}

export default Footer;
