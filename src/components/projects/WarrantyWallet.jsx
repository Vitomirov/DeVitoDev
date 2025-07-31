import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import videoWarrantyWallet from "../../DemoVideos/videoWarrantyWallet.mp4";

function WarrantyWallet() {
  const navigate = useNavigate();

  return (
    <div
      className="py-5 text-white position-relative"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <Container>
        <h2 className="fw-bold mb-3 font-color">Warranty Wallet App</h2>

        <Row className="align-items-center">
          <Col md={7} className="mb-4 mb-md-0 font-color paragraph-justify">
            <p>
              Warranty Wallet App is a full-stack web application designed for
              straightforward product warranty management. It helps users avoid
              lost papers and missed deadlines by providing a centralized,
              digital solution. Key functionalities include user authentication,
              adding new warranties with image uploads, and full CRUD (Create,
              Read, Update, Delete) functionality for all records.
            </p>
            <p>
              <strong>Technologies Used:</strong>
            </p>
            <ul className="list-unstyled ps-3">
              <li>
                <strong>• Frontend:</strong> React, Bootstrap, React Router DOM,
                Axios
              </li>
              <li>
                <strong>• Backend:</strong> Node JS, Express, MySQL, JWT
              </li>
            </ul>
            <p>
              <a
                href="https://github.com/Vitomirov/warranty-wallet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                View on GitHub
              </a>{" "}
              |{" "}
              <a
                href="https://devitowarranty.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                Live Demo
              </a>
            </p>
          </Col>

          {/* Dodajemo margin-top na COL div da spustimo video */}
        </Row>
      </Container>

      <Container className="d-flex justify-content-center justify-content-md-end mt-4 mt-md-0">
        <div className="video-demo-container">
          <video
            src={videoWarrantyWallet}
            controls
            muted
            className="w-100 rounded shadow"
            style={{
              maxWidth: "650px",
              height: "auto",
              display: "block",
            }}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </Container>

      <a
        onClick={() => navigate(-1)}
        className="position-absolute bottom-0 end-0 mb-5 me-5 text-white fs-5"
        style={{ cursor: "pointer", textDecoration: "none" }}
      >
        Back
      </a>
    </div>
  );
}

export default WarrantyWallet;
