import "./styles/styles.css";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "./components/layout/Header";
import HeroAboutLayout from "./components/layout/HeroAboutLayout";

// lazy load komponente
const WarrantyWallet = lazy(() =>
  import("./components/projects/WarrantyWallet")
);
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./components/layout/Footer"));
const BackToTopArrow = lazy(() => import("./components/common/BackToTopArrow"));

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            {/* uvek odmah vidljive */}
            <Header />
            <HeroAboutLayout />

            {/* lazy deo */}
            <Suspense fallback={<div>Loading...</div>}>
              <BackToTopArrow />
              <WarrantyWallet />
              <Contact />
              <Footer />
            </Suspense>
          </>
        }
      />
      <Route
        path="/projects/WarrantyWallet"
        element={
          <Suspense fallback={<div>Loading Project...</div>}>
            <WarrantyWallet />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
