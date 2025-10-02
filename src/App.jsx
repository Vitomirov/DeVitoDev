import "./styles/styles.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import WarrantyWallet from "./components/projects/WarrantyWallet";
import Contact from "./sections/Contact";
import Footer from "./components/layout/Footer";
import BackToTopArrow from "./components/common/BackToTopArrow";
import HeroAboutLayout from "./components/layout/HeroAboutLayout";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <HeroAboutLayout />
              <BackToTopArrow />
              <WarrantyWallet />
              {/* <MyWorks /> */}
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/projects/WarrantyWallet" element={<WarrantyWallet />} />
      </Routes>
    </>
  );
}

export default App;
