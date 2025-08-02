import React from "react";
import Hero from "./Hero";
import About from "./About";

// Ova komponenta služi kao omotač za Hero i About sekcije
// Na nju se primenjuje jedinstveni gradijent
function HeroAboutSection() {
  return (
    <div className="hero-about-gradient">
      <Hero />
      <About />
    </div>
  );
}

export default HeroAboutSection;
