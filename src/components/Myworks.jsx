import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import photoMirror from "../images/photoMirror.jpg";

function MyWorks() {
  return (
    <div id="myWorks" className="hero-section text-center">
      {/* Main Content */}
      <Container className="hero-content">
        <h2 className="display-5 fw-bold mb-4">My Works</h2>
        <p className="fs-5 mb-5">
          Here are some of the projects I've worked on. Click on any of them to
          learn more.
        </p>

        <ul className="list-unstyled fs-4">
          <li className="mb-3">
            <Link
              to="/projects/WarrantyWallet"
              style={{
                color: "#fff",
                textDecoration: "none",
                backgroundColor: "rgba(255,255,255,0.1)",
                padding: "1rem",
                borderRadius: "12px",
                display: "inline-block",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "rgba(255,255,255,0.2)")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "rgba(255,255,255,0.1)")
              }
            >
              Warranty Wallet
            </Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default MyWorks;
