import React, { useState } from "react";
import { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import "bootstrap/dist/js/bootstrap.min.js";

import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import Header from "./views/components/header";
import Footer from "./views/components/footer";
//Contents
import Home from "./views/content/home";
import Projects from "./views/content/projects";
import Services from "./views/content/services";
import Contact from "./views/content/contact";
import About from "./views/content/about";
import PreLoader from "./views/components/preloader";

function App() {

  let [menuState, setMenuState] = useState(false)

 //Disable Right Click
  useEffect(() => {
    function handleContextMenu(event: any) {
      event.preventDefault()
    }
    document.addEventListener("contextmenu", handleContextMenu)
  }, [])




  return (
    <div className="App">
      <HashRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<PreLoader />} />
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
      </HashRouter>

      <div className="dropdown" onClick={() => { setMenuState(!menuState) }}>
        <div className="menuTrigger" >

          <a>
            <img src="https://s2.svgbox.net/materialui.svg?color=fff&ic=people_alt" alt="" />Hire Me!
          </a>
        </div>
        <div className={`menuItems ${menuState ? "activeMenu" : "inactiveMenu"}`}>
          <a href="tel:6479946544">
            <img src="https://s2.svgbox.net/materialui.svg?color=fff&ic=phone" alt="dropdown" />
          </a>
          <a href="mailto:jashannoor2001@gmail.com">
            <img src="https://s2.svgbox.net/materialui.svg?color=fff&ic=mail" alt="dropdown" />
          </a>

        </div>
      </div>
    </div>
  );
}

export default App;
