import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
  const [expanded, setExpanded] = useState(false);

  const handleGitHubClick = () => {
    window.open("https://github.com/Vitomirov", "_blank");
    setExpanded(false);
  };
  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/dejan-vitomirov/", "_blank");
    setExpanded(false);
  };

  const navLinks = [
    { href: "#about", label: "About Me" },
    { href: "#warrantyWallet", label: "My Works" },
  ];

  return (
    <Navbar
      expanded={expanded}
      onToggle={() => setExpanded((prev) => !prev)}
      expand="lg"
      variant="white"
      className="custom-navbar py-3 px-4 border-bottom border-black shadow-lg"
    >
      <Navbar.Brand
        href="#"
        className="custom-brand text-white fs-1 ps-md-5 fw-bold"
      >
        DeVitoDev
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbar-nav" />

      <Navbar.Collapse id="navbar-nav" className="justify-content-end pe-5">
        <Nav className="text-end gap-4 fs-5 align-items-end">
          {navLinks.map(({ href, label }) => (
            <Nav.Link
              key={href}
              href={href}
              className="nav-link text-white"
              onClick={() => setExpanded(false)}
            >
              {label}
            </Nav.Link>
          ))}

          {/* GitHub i LinkedIn ikone */}
          <Nav.Link
            onClick={handleLinkedinClick}
            className="nav-link text-white d-flex align-items-center"
            style={{ cursor: "pointer" }}
          >
            <i className="bi bi-linkedin social-icon fs-3"></i>
          </Nav.Link>
          <Nav.Link
            onClick={handleGitHubClick}
            className="nav-link text-white d-flex align-items-center"
            style={{ cursor: "pointer" }}
          >
            <i className="bi bi-github social-icon fs-3"></i>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
