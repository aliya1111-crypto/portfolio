import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Education from "./pages/Education.jsx";
import Skills from "./pages/Skills.jsx";
import Certificates from "./pages/Certificates.jsx";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}