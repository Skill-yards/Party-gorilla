// © 2026 DJ_Gorilla
// Developed by Akash Kumar and Vijay Kumar



import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from "./Pages/Navbar"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Packages from "./Pages/Packages";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import Footer from "./Pages/Footer";
import ErrorBoundary from "./Components/ErrorBoundary";
import NotFound from "./Pages/NotFound";
function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/package" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;