import { useState, useEffect, useRef } from "react";

export default function useHeader() {
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);

  const navLinks = [
    { hash: "about", label: "About Me" },
    { hash: "myJourney", label: "My Journey" },
    { hash: "myWorks", label: "My Works" },
  ];

  const handleGitHubClick = () => {
    window.open("https://github.com/Vitomirov", "_blank");
    setExpanded(false);
  };

  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/dejan-vitomirov/", "_blank");
    setExpanded(false);
  };

  // Zatvaranje navbar-a kada se klikne van njega
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

  const toggleExpanded = () => setExpanded((prev) => !prev);

  const handleBrandClick = () => {
    setExpanded(false);
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return {
    expanded,
    navbarRef,
    navLinks,
    handleGitHubClick,
    handleLinkedinClick,
    toggleExpanded,
    handleBrandClick,
  };
}
