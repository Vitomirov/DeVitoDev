import "./styles/styles.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import MyWorks from "./components/Myworks";
import WarrantyWallet from "./components/projects/WarrantyWallet";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTopArrow from "./components/BackToTopArrow";
import HeroAboutSection from "./components/HeroAboutSection";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <HeroAboutSection />
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
