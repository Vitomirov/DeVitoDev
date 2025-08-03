import { useState, useEffect, useRef } from "react";
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
  // State koji kontroliše da li je meni otvoren ili zatvoren
  const [expanded, setExpanded] = useState(false);

  // Ref koji omogućava pristup DOM elementu Navbar-a radi detekcije klikova van njega
  const navbarRef = useRef(null);

  // Funkcija koja otvara GitHub profil u novom tabu i zatvara meni
  const handleGitHubClick = () => {
    window.open("https://github.com/Vitomirov", "_blank");
    setExpanded(false);
  };

  // Funkcija koja otvara LinkedIn profil u novom tabu i zatvara meni
  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/dejan-vitomirov/", "_blank");
    setExpanded(false);
  };

  // Niz navigacionih linkova koji se prikazuju u meniju
  const navLinks = [
    { href: "#about", label: "About Me" },
    { href: "#warrantyWallet", label: "My Works" },
  ];

  // Efekat koji dodaje globalni event listener za zatvaranje menija kada se klikne van Navbar-a
  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Zatvara meni ako je otvoren i kliknuto je van navbarRef elementa
      if (
        expanded &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setExpanded(false);
      }
    };

    // Dodaje event listener na dokument
    document.addEventListener("mousedown", handleOutsideClick);

    // Čisti event listener kada se komponenta unmountuje
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [expanded]); // Efekat se pokreće kada se promeni vrednost 'expanded'

  return (
    <Navbar
      ref={navbarRef} // Postavlja referencu na Navbar radi praćenja klikova van njega
      expanded={expanded}
      onToggle={() => setExpanded((prev) => !prev)}
      expand="lg"
      variant="white"
      className="custom-navbar py-2 px-4 border-bottom border-black shadow-lg"
    >
      <Navbar.Brand
        href="#"
        onClick={() => setExpanded(false)} // Zatvara meni kada se klikne na naziv brenda
        className="custom-brand text-white fs-1 ps-md-5 fw-bold"
      >
        DeVitoDev
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbar-nav" />

      {/* Collapse komponenta menija, zatvara se ako se klikne na prazno mesto unutar nje */}
      <Navbar.Collapse
        id="navbar-nav"
        className="justify-content-end pe-5"
        onClick={(event) => {
          // Proverava da li je kliknut baš collapse element, a ne neki njegov child
          if (event.target === event.currentTarget) {
            setExpanded(false);
          }
        }}
      >
        <Nav className="text-end gap-4 fs-5 align-items-end">
          {/* Mapiranje kroz navigacione linkove i renderovanje */}
          {navLinks.map(({ href, label }) => (
            <Nav.Link
              key={href}
              href={href}
              className="nav-link text-white"
              onClick={() => setExpanded(false)} // Zatvara meni kada se klikne na link
            >
              {label}
            </Nav.Link>
          ))}

          {/* Ikonica za LinkedIn, otvara profil u novom tabu */}
          <Nav.Link
            onClick={handleLinkedinClick}
            className="nav-link text-white d-flex align-items-center"
            style={{ cursor: "pointer" }}
          >
            <i className="bi bi-linkedin social-icon fs-3"></i>
          </Nav.Link>

          {/* Ikonica za GitHub, otvara profil u novom tabu */}
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
