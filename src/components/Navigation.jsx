import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
  const [expanded, setExpanded] = useState(false);

  const navLinks = [
    { href: "#about", label: "About Me" },
    { href: "#skills", label: "Skills" },
    { href: "#myWorks", label: "My Works" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <Navbar
      expanded={expanded}
      onToggle={() => setExpanded((prev) => !prev)}
      expand="lg"
      variant="dark"
      bg="transparent"
      className="custom-navbar"
    >
      <Navbar.Brand href="#" className="custom-brand">
        DeVitoDev
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbar-nav" />

      <Navbar.Collapse id="navbar-nav" className="justify-content-end">
        <Nav className="text-end">
          {navLinks.map(({ href, label }) => (
            <Nav.Link
              key={href}
              href={href}
              className="custom-nav-link"
              onClick={() => setExpanded(false)}
            >
              {label}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
