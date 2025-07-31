import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
  const [expanded, setExpanded] = useState(false);

  const navLinks = [
    { href: "#about", label: "About Me" },
    { href: "#myWorks", label: "My Works" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <Navbar
      expanded={expanded}
      onToggle={() => setExpanded((prev) => !prev)}
      expand="lg"
      variant="white"
      className="custom-navbar py-3 px-5 border-bottom border-black shadow-lg"
    >
      <Navbar.Brand
        href="#"
        className="custom-brand text-white fs-1 ps-md-5 fw-bold"
      >
        DeVitoDev
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbar-nav" />

      <Navbar.Collapse id="navbar-nav" className="justify-content-end pe-5 ">
        <Nav className="text-end gap-4 fs-5">
          {navLinks.map(({ href, label }) => (
            <Nav.Link
              key={href}
              href={href}
              className="nav-link fw-bold text-white"
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
