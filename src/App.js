import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Courses from "./components/Courses";
import Talks from "./components/Talks";
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Certifications />
        <Courses />
        <Talks />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="*" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;