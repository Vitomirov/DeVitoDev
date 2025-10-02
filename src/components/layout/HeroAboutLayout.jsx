import React from "react";
import Hero from "../../sections/Hero";
import About from "../../sections/About";

// Ova komponenta služi kao omotač za Hero i About sekcije
// Na nju se primenjuje jedinstveni gradijent
function HeroAboutLayout() {
  return (
    <div className="hero-about-gradient">
      <Hero />
      <About />
    </div>
  );
}

export default HeroAboutLayout;
