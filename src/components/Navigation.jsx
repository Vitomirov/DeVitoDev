import { useState } from "react";
import { Navbar as Navbar, Nav } from "react-bootstrap";

function Navigation() {
  // State to control whether the navbar is expanded (mobile menu toggle)
  const [expanded, setExpanded] = useState(false);

  return (
    // Bootstrap Navbar with fixed positioning and transparent background
    <Navbar
      expanded={expanded}
      onToggle={() => setExpanded((prev) => !prev)}
      expand="lg"
      variant="dark"
      bg="transparent"
      className="px-4 py-3"
      style={{ position: "fixed", top: 0, width: "100%", zIndex: 1030 }}
    >
      {/* Brand/logo linking to the homepage */}
      <Navbar.Brand href="#" className="text-white fs-1">
        DeVitoDev
      </Navbar.Brand>

      {/* Hamburger toggle for collapsing navbar on smaller screens */}
      <Navbar.Toggle aria-controls="navbar-nav" />

      {/* Collapsible navigation links, aligned to the right */}
      <Navbar.Collapse id="navbar-nav" className="justify-content-end">
        <Nav className="text-end">
          {/* Navigation links to page sections that close menu on click */}
          <Nav.Link
            href="#about"
            className="text-white"
            onClick={() => setExpanded(false)}
          >
            About Me
          </Nav.Link>
          <Nav.Link
            href="#skills"
            className="text-white"
            onClick={() => setExpanded(false)}
          >
            Skills
          </Nav.Link>
          <Nav.Link
            href="#myWorks"
            className="text-white"
            onClick={() => setExpanded(false)}
          >
            My Works
          </Nav.Link>
          <Nav.Link
            href="#contact"
            className="text-white"
            onClick={() => setExpanded(false)}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
