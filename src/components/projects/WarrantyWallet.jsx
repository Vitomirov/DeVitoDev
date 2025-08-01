import { Container, Row, Col } from "react-bootstrap";
import videoWarrantyWallet from "../../DemoVideos/videoWarrantyWallet.mp4";

function WarrantyWallet() {
  return (
    // Main section container
    <div className="section-layout py-5 text-white vh-100" id="warrantyWallet">
      {/* Bootstrap Container for consistent margins */}
      <Container className="font-color help">
        {/* Section title */}
        <h1 className="display-5 fw-bold mb-5 font-color help">My Works</h1>

        {/* Row for content layout (video and text) */}
        <Row className=" gx-5">
          <h2 className="text-center fw-bold mb-5 font-color help">
            Warranty Wallet App
          </h2>
          {/* Column for the video - first (left) on desktop */}
          <Col
            md={6}
            className="mb-4 mb-md-0 d-flex justify-content-center help"
          >
            {/* Video container */}
            <div>
              {/* Video element */}
              <video
                src={videoWarrantyWallet}
                controls
                muted
                className="video-element "
                style={{ maxWidth: "700px", height: "auto" }}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </Col>

          {/* Column for the text content - second (right) on desktop */}
          <Col md={6} className="font-color paragraph-justify">
            {/* Text content container */}
            <div>
              {/* Description paragraph 1 */}
              <p className="fs-5 pt-1 paragraph-justify help">
                Warranty Wallet App is a full-stack web application designed for
                straightforward product warranty management. It helps users
                avoid lost papers and missed deadlines by providing a
                centralized, digital solution. Key functionalities include user
                authentication, adding new warranties with image uploads, and
                full CRUD (Create, Read, Update, Delete) functionality for all
                records.
              </p>
              {/* Technologies Used heading */}
              <p className="mt-4">
                <strong>Technologies Used:</strong>
              </p>
              {/* List of technologies */}
              <ul className="list-unstyled ps-3">
                <li className="mb-2">
                  <strong>• Frontend:</strong> React, Bootstrap, React Router
                  DOM, Axios
                </li>
                <li className="mb-2">
                  <strong>• Backend:</strong> Node JS, Express, MySQL, JWT
                </li>
              </ul>
              {/* Links to GitHub and Live Demo */}
              <p className="mt-4">
                <a
                  href="https://github.com/Vitomirov/warranty-wallet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white me-3"
                >
                  View on GitHub
                </a>{" "}
                |{" "}
                <a
                  href="https://devitowarranty.xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white ms-3"
                >
                  Live Demo
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WarrantyWallet;
