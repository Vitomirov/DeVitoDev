import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const SCROLL_SHOW_OFFSET = 320;

const BackToTopArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    const scrollY =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    const heroSection = document.getElementById("hero");
    const threshold = heroSection
      ? Math.max(SCROLL_SHOW_OFFSET, heroSection.offsetHeight * 0.35)
      : SCROLL_SHOW_OFFSET;

    setIsVisible(scrollY > threshold);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    window.addEventListener("resize", toggleVisibility);
    toggleVisibility();

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("resize", toggleVisibility);
    };
  }, []);

  return createPortal(
    <button
      type="button"
      className={`arrow ${isVisible ? "arrow-visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <i className="bi bi-arrow-up back-to-top arrow-light" aria-hidden="true" />
    </button>,
    document.body
  );
};

export default BackToTopArrow;
