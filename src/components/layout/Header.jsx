import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import useHeader from "../../hooks/useHeader";

function Header() {
  const {
    expanded,
    navbarRef,
    navLinks,
    handleGitHubClick,
    handleLinkedinClick,
    toggleExpanded,
  } = useHeader();

  return (
    <Navbar
      ref={navbarRef}
      expanded={expanded}
      onToggle={toggleExpanded}
      expand="lg"
      variant="white"
      className="custom-navbar py-2 px-4 border-bottom border-black shadow-lg"
    >
      <Navbar.Brand
        href="#"
        onClick={toggleExpanded}
        className="custom-brand text-gradient fs-1 ps-md-5 fw-bold"
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
              onClick={toggleExpanded}
            >
              {label}
            </Nav.Link>
          ))}

          {/* Social ikone samo na velikim ekranima */}
          <Nav.Link
            onClick={handleLinkedinClick}
            className="nav-link text-white d-none d-lg-flex align-items-center"
            style={{ cursor: "pointer" }}
            aria-label="Open LinkedIn profile"
          >
            <i className="bi bi-linkedin social-icon fs-3"></i>
          </Nav.Link>

          <Nav.Link
            onClick={handleGitHubClick}
            className="nav-link text-white d-none d-lg-flex align-items-center"
            style={{ cursor: "pointer" }}
            aria-label="Open GitHub profile"
          >
            <i className="bi bi-github social-icon fs-3"></i>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default React.memo(Header);
