import React from 'react';
import Navbar from "./components/navbar";
import Home from "./components/home";
import Skills from "./components/skills";
import About from "./components/about";
import Pricing from "./components/pricing";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
};

export default App;