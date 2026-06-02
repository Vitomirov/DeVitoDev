import { Suspense, lazy, Fragment } from "react";
import Hero from "../../sections/Hero";

const About = lazy(() => import("../../sections/About"));
const MyJourney = lazy(() => import("../../sections/MyJourney"));

function HeroAboutLayout() {
  return (
    <Fragment>
      <Hero />

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
    </Fragment>
  );
}

export default HeroAboutLayout;
