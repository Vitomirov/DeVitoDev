import "./styles/styles.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import Header from "./components/layout/Header";
import HeroAboutLayout from "./components/layout/HeroAboutLayout";
import ProjectPageLayout from "./components/layout/ProjectPageLayout";
import MyWorks from "./sections/MyWorks";

// lazy load komponente
const WarrantyWallet = lazy(() =>
  import("./components/projects/WarrantyWallet")
);
const ShopifyAnalyzer = lazy(() => import("./components/projects/ShopifyAnalyzer"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./components/layout/Footer"));
const BackToTopArrow = lazy(() => import("./components/common/BackToTopArrow"));

function HashScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <>
      <HashScrollHandler />
      <Routes>
      <Route
        path="/"
        element={
          <>
            {/* uvek odmah vidljive */}
            <Header />
            <main className="portfolio-gradient-flow">
              <HeroAboutLayout />

              <Suspense fallback={<div>Loading...</div>}>
                <BackToTopArrow />
                <MyWorks />
                <Contact />
                <Footer />
              </Suspense>
            </main>
          </>
        }
      />
      <Route
        path="/projects/WarrantyWallet"
        element={
          <ProjectPageLayout>
            <Suspense fallback={<div>Loading Project...</div>}>
              <WarrantyWallet />
            </Suspense>
          </ProjectPageLayout>
        }
      />
      <Route
        path="/projects/ShopifyAnalyzer"
        element={
          <ProjectPageLayout>
            <Suspense fallback={<div>Loading Project...</div>}>
              <ShopifyAnalyzer />
            </Suspense>
          </ProjectPageLayout>
        }
      />
    </Routes>
    </>
  );
}

export default App;
