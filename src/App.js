import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import Tcops from "./components/Tcops";
import Contact from "./components/Contact";
import Speaker from "./components/Speaker";
import Led from "./components/Led";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Tcops" element={<Tcops/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/speaker" element={<Speaker />} />
      <Route path="/Led" element={<Led />} />
      </Routes>
        <Footer />
    </>
  
  );
}

export default App;
