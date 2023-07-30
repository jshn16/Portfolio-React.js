import React from "react";
import { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Header from "./views/components/header";
import Footer from "./views/components/footer";
//Contents
import Home from "./views/content/home";
import Projects from "./views/content/projects";
import Services from "./views/content/services";
import Contact from './views/content/contact'
import About from './views/content/about'

function App() {

  //disabled in production mode.

  useEffect(() => {
    const handleContextmenu = (event: any) => {
      event.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Routes>
          <Route path="/services" element={<Services />} />
        </Routes>

        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
