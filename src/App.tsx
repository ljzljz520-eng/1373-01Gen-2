import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Household from "@/pages/Household";
import Property from "@/pages/Property";
import Photos from "@/pages/Photos";
import Chronicles from "@/pages/Chronicles";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/household" element={<Household />} />
            <Route path="/property" element={<Property />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/chronicles" element={<Chronicles />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
