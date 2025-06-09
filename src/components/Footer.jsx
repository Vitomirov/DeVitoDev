import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white py-3 mt-auto">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center px-5">
        <div className="mb-2 mb-md-0">
          Designed & Developed by{" "}
          <strong className="text-info">Dejan Vitomirov</strong>
        </div>

        <div>
          <a
            href="https://github.com/Vitomirov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white me-3"
          >
            <i className="bi bi-github fs-5"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/dejan-vitomirov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <i className="bi bi-linkedin fs-5"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
