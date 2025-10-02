import { useState, useEffect, useRef } from "react";
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
  const [expanded, setExpanded] = useState(false);

  const navbarRef = useRef(null);

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

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        expanded &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [expanded]);
  return (
    <Navbar
      ref={navbarRef}
      expanded={expanded}
      onToggle={() => setExpanded((prev) => !prev)}
      expand="lg"
      variant="white"
      className="custom-navbar py-2 px-4 border-bottom border-black shadow-lg"
    >
      <Navbar.Brand
        href="#"
        onClick={() => setExpanded(false)}
        className="custom-brand text-white fs-1 ps-md-5 fw-bold"
      >
        DeVitoDev
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbar-nav" />

      <Navbar.Collapse
        id="navbar-nav"
        className="justify-content-end pe-5"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setExpanded(false);
          }
        }}
      >
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

          <Nav.Link
            onClick={handleLinkedinClick}
            className="nav-link text-white d-none d-lg-flex align-items-center"
            style={{ cursor: "pointer" }}
          >
            <i className="bi bi-linkedin social-icon fs-3"></i>
          </Nav.Link>

          <Nav.Link
            onClick={handleGitHubClick}
            className="nav-link text-white d-none d-lg-flex align-items-center"
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
