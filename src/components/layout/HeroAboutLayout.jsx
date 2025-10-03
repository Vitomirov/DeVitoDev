import React, { Suspense, lazy } from "react";
import Hero from "../../sections/Hero";

// Lazy load sekcije
const About = lazy(() => import("../../sections/About"));
const MyJourney = lazy(() => import("../../sections/MyJourney"));

function HeroAboutLayout() {
  return (
    <div className="hero-about-gradient">
      <Hero />

      {/* Lazy-loaded sekcije */}
      <Suspense
        fallback={<div className="text-center py-5">Loading About...</div>}
      >
        <About />
      </Suspense>

      <Suspense
        fallback={<div className="text-center py-5">Loading My Journey...</div>}
      >
        <MyJourney />
      </Suspense>
    </div>
  );
}

export default HeroAboutLayout;
