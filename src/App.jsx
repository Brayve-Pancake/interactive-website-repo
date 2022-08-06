import { Routes, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  return (
    <div className="App">
      <h1>App</h1>
      <Navbar isDesktop={isDesktop} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
