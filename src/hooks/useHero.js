import { useRef } from "react";
import { useInView } from "framer-motion";

export default function useHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  const handleGitHubClick = () =>
    window.open("https://github.com/Vitomirov", "_blank");
  const handleLinkedinClick = () =>
    window.open("https://www.linkedin.com/in/dejan-vitomirov/", "_blank");

  return {
    ref,
    isInView,
    handleGitHubClick,
    handleLinkedinClick,
  };
}
