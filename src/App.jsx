import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  const [bannerData, setBannerData] = useState([]);

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  const apiUrl =
    "https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details";

  useEffect(() => {
    fetch(apiUrl)
      .then((result) => result.json())
      .then((data) => setBannerData(data))
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <div className="App">
      <Navbar isDesktop={isDesktop} />
      <Routes>
        <Route
          path="/"
          element={<Home images={bannerData.Details} isDesktop={isDesktop} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Home images={bannerData.Details} isDesktop={isDesktop} />
      <Footer />
    </div>
  );
}

export default App;
