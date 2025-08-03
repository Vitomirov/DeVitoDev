import React, { useEffect, useState } from "react";

const BackToTopArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Proverava da li treba prikazati strelicu na osnovu pozicije skrola
  const toggleVisibility = () => {
    const heroSection = document.getElementById("hero");
    if (!heroSection) return;

    const heroHeight = heroSection.offsetHeight;

    // Strelica se prikazuje kad je skrol ispod hero sekcije (sa malim pomeranjem)
    if (window.pageYOffset > heroHeight - 800) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Skroluje stranicu na vrh glatko
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Dodaje i uklanja event listener za skrol
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility(); // Provera odmah nakon rendera
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Prikazuje dugme strelice ako je isVisible true
  return (
    <button
      type="button"
      className={`arrow ${isVisible ? "arrow-visible" : ""}`}
      onClick={scrollToTop}
    >
      <i className={`bi bi-arrow-up back-to-top arrow-light`}></i>
    </button>
  );
};

export default BackToTopArrow;
