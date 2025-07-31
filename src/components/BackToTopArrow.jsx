import React, { useEffect, useState } from "react";

const BackToTopArrow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkArrow, setIsDarkArrow] = useState(false);

  const toggleVisibilityAndColor = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    const contactSection = document.getElementById("contact");
    let shouldBeDark = false;

    const isSectionInView = (section) => {
      if (!section) return false;
      const rect = section.getBoundingClientRect();
      return (
        rect.top < window.innerHeight * 0.8 &&
        rect.bottom > window.innerHeight * 0.2
      );
    };

    if (contactSection && isSectionInView(contactSection)) {
      shouldBeDark = true;
    }

    setIsDarkArrow(shouldBeDark);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibilityAndColor);
    toggleVisibilityAndColor();
    return () => {
      window.removeEventListener("scroll", toggleVisibilityAndColor);
    };
  }, []);

  return (
    <button
      type="button"
      // PROMENA OVDE: Uklonjene d-block i d-none klase
      // Vidljivost će se sada kontrolisati isključivo preko CSS klase 'arrow-visible'
      className={`arrow ${isVisible ? "arrow-visible" : ""}`}
      onClick={scrollToTop}
    >
      <i
        className={`bi bi-arrow-up back-to-top ${
          isDarkArrow ? "arrow-dark" : "arrow-light"
        }`}
      ></i>
    </button>
  );
};

export default BackToTopArrow;
