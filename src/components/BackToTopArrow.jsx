import React, { useEffect, useState } from "react";

const BackToTopArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    // Provera da li je 'hero' sekcija vidljiva
    const heroSection = document.getElementById("hero");

    if (!heroSection) return;

    // Uzimamo visinu hero sekcije
    const heroHeight = heroSection.offsetHeight;

    // Strelica se prikazuje samo ako je skrol pozicija veća od visine hero sekcije
    if (window.pageYOffset > heroHeight - 800) {
      // Oduzeto 100 da se strelica pojavi malo ranije
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility(); // Provera pri prvom renderu
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

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
