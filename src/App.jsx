// // import Packages from "./Pages/Packages";
// // import Contact from "./Pages/Contact";
// import About from "./Pages/About";
// const App = () => {
//   return (
//     <div>
//      {/* <Packages/>
//      <Contact/> */}
//      <About/>
//     </div>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from "./Pages/Navbar"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Packages from "./Pages/Packages";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import Footer from "./Pages/Footer";
function App() {
  return (
    <BrowserRouter>
    
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/package" element={<Packages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;