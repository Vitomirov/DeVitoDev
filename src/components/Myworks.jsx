import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyWorks() {
  return (
    <div id="myWorks" className="hero-section text-center">
      {/* Main Content */}
      <Container className="hero-content">
        <h2 className="display-5 fw-bold mb-4">My Works</h2>
        <p className="fs-5 mb-5">
          The one I'm most proud of — and just the start of what’s coming next.
        </p>

        <ul className="list-unstyled fs-4">
          <li className="mb-3">
            <Link to="/projects/WarrantyWallet" className="myWorkButton">
              Warranty Wallet
            </Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default MyWorks;
