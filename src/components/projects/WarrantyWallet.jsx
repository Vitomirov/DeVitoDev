import React from "react";
import { Container } from "react-bootstrap";
import photoMirror from "../../images/photoMirror.jpg";
import { useNavigate } from "react-router-dom";

function WarrantyWallet() {
  const navigate = useNavigate();

  return (
    <div
      className="py-5 text-white position-relative"
      style={{
        backgroundImage: `url(${photoMirror})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <Container>
        <h2 className="fw-bold mb-3">Warranty Wallet App</h2>
        <p>
          Full-stack web app for managing product warranties. Users can log in,
          add new warranties with images, and view/edit/delete them. Built with
          React, Node.js, MySQL, and JWT authentication.
        </p>
        <p>
          <strong>Tech stack:</strong> React, Node.js, Express, MySQL, Multer,
          JWT, Bootstrap 5.
        </p>
        <p>
          <a
            href="https://github.com/Vitomirov/warranty-wallet"
            target="_blank"
            rel="noopener noreferrer"
            className="text-info"
          >
            View on GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://devitowarranty.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-info"
          >
            Live Demo
          </a>
        </p>
      </Container>

      <a
        onClick={() => navigate(-1)}
        className="position-absolute bottom-0 end-0 mb-5 me-5 text-info"
        style={{ cursor: "pointer", textDecoration: "none" }}
      >
        Back
      </a>
    </div>
  );
}

export default WarrantyWallet;
