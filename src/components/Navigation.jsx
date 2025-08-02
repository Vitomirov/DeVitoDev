import { useState, useEffect, useRef } from "react";
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
  // State to control the expanded/collapsed state of the navigation menu.
  const [expanded, setExpanded] = useState(false);
  // Ref to access the Navbar DOM element for detecting outside clicks.
  const navbarRef = useRef(null);

  // Handles the click on the GitHub icon, opens the link in a new tab, and closes the menu.
  const handleGitHubClick = () => {
    window.open("https://github.com/Vitomirov", "_blank");
    setExpanded(false);
  };

  // Handles the click on the LinkedIn icon, opens the link in a new tab, and closes the menu.
  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/dejan-vitomirov/", "_blank");
    setExpanded(false);
  };

  // Array of navigation links.
  const navLinks = [
    { href: "#about", label: "About Me" },
    { href: "#warrantyWallet", label: "My Works" },
  ];

  // Effect to add and remove a global event listener for closing the menu on outside clicks.
  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Closes the menu if it's open and the click is outside the navbar.
      if (
        expanded &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setExpanded(false);
      }
    };

    // Attaches the event listener to the document.
    document.addEventListener("mousedown", handleOutsideClick);

    // Cleanup function to remove the event listener when the component unmounts.
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [expanded]); // The effect reruns only when the 'expanded' state changes.

  return (
    <Navbar
      ref={navbarRef} // Attaches the ref to the Navbar component.
      expanded={expanded}
      onToggle={() => setExpanded((prev) => !prev)}
      expand="lg"
      variant="white"
      className="custom-navbar py-2 px-4 border-bottom border-black shadow-lg"
    >
      <Navbar.Brand
        href="#"
        onClick={() => setExpanded(false)} // Closes the menu when the brand is clicked.
        className="custom-brand text-white fs-1 ps-md-5 fw-bold"
      >
        DeVitoDev
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbar-nav" />

      {/* onClick handler on Navbar.Collapse to close the menu when clicking on the empty space. */}
      <Navbar.Collapse
        id="navbar-nav"
        className="justify-content-end pe-5"
        onClick={(event) => {
          // Checks if the click target is the collapse element itself, not a child link.
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
              onClick={() => setExpanded(false)} // Closes the menu when a nav link is clicked.
            >
              {label}
            </Nav.Link>
          ))}

          {/* Social media icons for GitHub and LinkedIn. */}
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
